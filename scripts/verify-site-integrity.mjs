import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=(file)=>fs.readFileSync(path.join(root,file),'utf8');
const assert=(condition,message)=>{if(!condition)throw new Error(message);};

const index=read('index.html');
const guide=read('guide.html');
const loader=read('scripts/site-pdf-refresh.js');
const detail=read('scripts/site-trim-option-detail-20260903.js');
const core=read('scripts/site-pdf-refresh-core.js');
const versionGuard=read('scripts/site-version-guard.js');
const release=JSON.parse(read('site-version.json')).version;

assert(release==='20260903-mobile-1',`사이트 release 값 오류: ${release}`);
assert(versionGuard.includes("fetch('/site-version.json?ts='"),'모바일 최신 버전 확인 요청 누락');
assert(versionGuard.includes("window.addEventListener('pageshow'"),'모바일 bfcache 복귀 확인 누락');
assert(versionGuard.includes("document.addEventListener('visibilitychange'"),'모바일 탭 복귀 확인 누락');

let redirectedTo=null;
const guardContext={
  URL,
  window:{
    location:{href:'https://wng777-cmd.github.io/?sitev=old#tools',replace(value){redirectedTo=value;}},
    addEventListener(){}
  },
  document:{
    hidden:false,
    querySelector(){return {content:'old'};},
    addEventListener(){}
  },
  fetch(){return Promise.resolve({ok:true,json(){return Promise.resolve({version:release});}});}
};
vm.createContext(guardContext);
vm.runInContext(versionGuard,guardContext,{filename:'site-version-guard.js'});
await new Promise((resolve)=>setImmediate(resolve));
assert(redirectedTo&&redirectedTo.includes(`sitev=${release}`)&&redirectedTo.endsWith('#tools'),'모바일 최신 버전 이동 동작 오류');

for(const [name,html] of [['index.html',index],['guide.html',guide]]){
  assert(html.includes(`<meta content="${release}" name="site-release"/>`),`${name}: site release 불일치`);
  assert(html.includes('scripts/site-version-guard.js?v=20260903mobile1'),`${name}: 모바일 버전 확인 스크립트 누락`);
  assert(html.indexOf('site-version-guard.js')<html.indexOf('site-pdf-refresh.js'),`${name}: 모바일 버전 확인 스크립트 로드 순서 오류`);
  assert(html.includes('scripts/site-pdf-refresh.js?v=20260903guard1'),`${name}: 최신 loader cache key 누락`);
  assert(html.includes('tel:01026503211'),`${name}: 전화 상담 링크 누락`);
  assert(html.includes('qr.kakao.com/talk/2LfLSm9DLJcfVv19vfXeS5R1AHQ-'),`${name}: 카카오톡 링크 누락`);
  for(const key of ['XC40','XC60','XC90','EX30','EX30CC','EX90','ES90','S90','V60CC']){
    assert(html.includes(`openModel('${key}')`),`${name}: ${key} 트림 버튼 누락`);
  }
}

const detailLoad="scripts/site-trim-option-detail-20260903.js?v=20260903guard1";
assert(loader.includes(detailLoad),'loader: 상세 옵션 스크립트 또는 cache key 누락');
assert(loader.indexOf(detailLoad)>loader.indexOf('site-source-copy-cleanup-20260826.js'),'loader: 상세 옵션 렌더러가 마지막 데이터 패치보다 먼저 로드됨');
assert(detail.includes('@media(max-width:700px)'),'상세 옵션 UI: 모바일 규칙 누락');
assert(detail.includes("data-trim-option-detail','20260903-2'"),'상세 옵션 UI: 배포 버전 표식 누락');

const prefix=core.slice(0,core.indexOf('function moneyMinMax'));
const captures=[];
const attributes={};
const context={
  console,
  window:null,
  openM(...args){captures.push(args);},
  document:{
    getElementById(){return null;},
    createElement(){return {id:'',textContent:''};},
    head:{appendChild(){}},
    documentElement:{setAttribute(key,value){attributes[key]=value;}},
    querySelectorAll(){return [];}
  }
};
context.window=context;
vm.createContext(context);
vm.runInContext(prefix,context,{filename:'site-pdf-refresh-core.js'});
vm.runInContext(detail,context,{filename:'site-trim-option-detail-20260903.js'});

const modelKeys=vm.runInContext('Object.keys(models)',context);
assert(modelKeys.length===9,`모델 수 오류: ${modelKeys.length}/9`);
let trimCount=0;
for(const key of modelKeys){
  const trims=vm.runInContext(`models[${JSON.stringify(key)}].trims`,context);
  const html=context.cardHTML(vm.runInContext(`models[${JSON.stringify(key)}]`,context),key);
  const cards=html.split('</article>').filter((part)=>part.includes('trim-option-card'));
  assert(cards.length===trims.length,`${key}: 상세 카드 수 ${cards.length}/${trims.length}`);
  cards.forEach((card,index)=>{
    assert(card.includes('휠'),`${key} ${trims[index][0]}: 휠 정보 누락`);
    assert(card.includes('trim-difference-head'),`${key} ${trims[index][0]}: 상세 비교 제목 누락`);
  });
  trimCount+=trims.length;
  context.openModel(key);
}
assert(trimCount===30,`트림 수 오류: ${trimCount}/30`);
assert(attributes['data-trim-option-detail']==='20260903-2','상세 옵션 설치 표식 오류');

const customerOutput=captures.map((args)=>args.join('\n')).join('\n');
for(const phrase of ['편의사양 강화','주요 편의사양 동일','ULTRA 구성','PLUS 구성','Volvo The ONE','.pdf','Full Ver','Option List']){
  assert(!customerOutput.includes(phrase),`고객 화면 금지 문구 노출: ${phrase}`);
}
for(const exact of ['18인치 5-스포크 실버 에어로 휠 · 225/55R18','19인치 5-스포크 에어로 휠 · 245/45R19']){
  assert(customerOutput.includes(exact),`EX30 휠 정보 누락: ${exact}`);
}

console.log(`ㅁㅇ 무결성 검사 통과: ${modelKeys.length}개 모델 · ${trimCount}개 트림 · PC/모바일 · 상담 링크 · 상세 옵션/휠`);
