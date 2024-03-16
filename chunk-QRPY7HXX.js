import{a as V,b as Q,c as $,d as v,e as Y,f as J,g as K,h as W,i as X}from"./chunk-NAJPCXWK.js";import{a as Z}from"./chunk-G3IOSYGF.js";import{D as U,E as g,F as j,G,h as B,j as q,z as h}from"./chunk-6E36625H.js";import{d as N}from"./chunk-UHOOP2A4.js";import{$ as w,Ab as D,Bb as L,Cb as O,Eb as H,Ib as F,K as T,La as c,Ta as E,Ya as m,da as k,ea as A,eb as x,hb as d,ib as M,lb as _,nb as P,ob as I,pb as z,qb as l,rb as p,s as C,sb as f,ub as R,va as s,vb as S,wb as b}from"./chunk-OIXQGHLZ.js";function ee(r,a){if(r&1&&f(0,"docs-viewer",7),r&2){let o=b(2);d("docContent",o.membersInnerHtml())}}function re(r,a){if(r&1&&f(0,"docs-viewer",8),r&2){let o=b().$implicit;d("docContent",o.content)("hasToc",!0)}}function te(r,a){if(r&1&&(l(0,"mat-tab",5)(1,"div",6),x(2,ee,1,1,"docs-viewer",7)(3,re,1,2),p()()),r&2){let o=a.$implicit;d("label",o.title),c(2),_(2,o.title==="API"?2:3)}}function ne(r,a){if(r&1){let o=R();l(0,"docs-viewer",9),S("contentLoaded",function(){k(o);let e=b();return A(e.membersCardsLoaded())}),p()}if(r&2){let o=b();M("margin-top",o.membersMarginTopInPx(),"px"),d("docContent",o.tabs()[o.selectedTabIndex()].content)}}var Ce=(()=>{let a=class a{constructor(){this.activatedRoute=s(B),this.destroyRef=s(E),this.document=s(N),this.router=s(q),this.scrollHandler=s(X),this.ApiItemType=Z,this.canDisplayCards=m(!1),this.tabs=m([]),this.headerInnerHtml=m(void 0),this.membersInnerHtml=m(void 0),this.membersMarginTopInPx=this.scrollHandler.membersMarginTopInPx,this.selectedTabIndex=m(0)}ngOnInit(){this.setPageContent()}ngAfterViewInit(){this.setActiveTab(),this.listenToTabChange()}membersCardsLoaded(){this.scrollHandler.setupListeners(W)}setPageContent(){this.activatedRoute.data.pipe(C(t=>t.docContent),h(this.destroyRef)).subscribe(t=>{this.setContentForPageSections(t),this.setActiveTab()})}listenToTabChange(){this.matTabGroup.selectedIndexChange.pipe(h(this.destroyRef)).subscribe(t=>{this.router.navigate([],{relativeTo:this.activatedRoute,queryParams:{tab:this.tabs()[t].url},queryParamsHandling:"merge"})})}setContentForPageSections(t){let e=this.document.createElement("div");e.innerHTML=t?.contents;let n=e.querySelector(V);n&&this.headerInnerHtml.set(n.innerHTML);let i=e.querySelector(Q);i&&this.membersInnerHtml.set(i.innerHTML);let u=Array.from(e.querySelectorAll(`[${v}]`));this.tabs.set(u.map(y=>({url:y.getAttribute(Y),title:y.getAttribute(v),content:y.innerHTML}))),e.remove()}setActiveTab(){this.activatedRoute.queryParamMap.pipe(T(),h(this.destroyRef)).subscribe(t=>{let e=t.get(K),n=this.tabs().findIndex(u=>u.url===e);this.selectedTabIndex.set(n<0?0:n),this.scrollHandler.updateMembersMarginTop($);let i=this.tabs()[this.selectedTabIndex()]?.title===J||this.tabs()[this.selectedTabIndex()]?.title==="CLI";this.canDisplayCards.set(i)})}};a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=w({type:a,selectors:[["bz-api-details"]],viewQuery:function(e,n){if(e&1&&D(g,7),e&2){let i;L(i=O())&&(n.matTabGroup=i.first)}},standalone:!0,features:[F],decls:8,vars:3,consts:[[1,"bz-header-and-tabs","docs-scroll-track-transparent"],[1,"docs-reference-header",3,"docContent"],["animationDuration","0ms","mat-stretch-tabs","false",1,"docs-reference-tabs",3,"selectedIndex"],["class","docs-reference-members-container",3,"docContent","marginTop"],["id","jump-msg",1,"cdk-visually-hidden"],[3,"label"],[1,"bz-reference-tab-body"],[3,"docContent"],[3,"docContent","hasToc"],[1,"docs-reference-members-container",3,"docContent","contentLoaded"]],template:function(e,n){e&1&&(l(0,"div",0),f(1,"docs-viewer",1),l(2,"mat-tab-group",2),I(3,te,4,2,"mat-tab",5,P),p()(),x(5,ne,1,3,"docs-viewer",3),l(6,"div",4),H(7,"Jump to details"),p()),e&2&&(c(),d("docContent",n.headerInnerHtml()),c(),d("selectedIndex",n.selectedTabIndex()),c(),z(n.tabs()),c(2),_(5,n.canDisplayCards()&&n.membersMarginTopInPx()>0?5:-1))},dependencies:[G,j,U,g],styles:['[_nghost-%COMP%]{display:flex;gap:1rem;width:100%;box-sizing:border-box}@media (max-width: 1200px){[_nghost-%COMP%]{flex-direction:column}}[_nghost-%COMP%]   h1[_ngcontent-%COMP%]{font-size:1.5rem}[_nghost-%COMP%]   h2[_ngcontent-%COMP%]{font-size:1.25rem}[_nghost-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1rem}[_nghost-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.95rem}[_nghost-%COMP%]   h5[_ngcontent-%COMP%]{font-size:.875rem}[_nghost-%COMP%]   h6[_ngcontent-%COMP%]{font-size:.6rem}  .bz-header-and-tabs{padding:var(--layout-padding) 0 1rem var(--layout-padding);box-sizing:border-box}@media (min-width: 1200px){  .bz-header-and-tabs:has(.docs-reference-api-tab),   .bz-header-and-tabs.bz-cli-content{position:sticky;top:0;padding-inline-end:1rem;max-height:100vh;height:max-content;overflow-y:scroll;width:50%}  .bz-header-and-tabs:has(.docs-reference-api-tab){width:60%}  .bz-header-and-tabs:not(:has(.docs-reference-api-tab)){width:100%;max-width:var(--page-width)}}@media (max-width: 1200px){  .bz-header-and-tabs{padding:var(--layout-padding);width:100%}}  .bz-header-and-tabs::-webkit-scrollbar-thumb{background-color:var(--septenary-contrast);border-radius:10px;transition:background-color .3s ease}  .docs-code pre{margin-block:0;padding-block:1rem}  .docs-reference-header>p{color:var(--secondary-contrast);margin-block-start:0;margin-block-end:1.5rem}  .docs-reference-header .docs-code{margin-block-end:1.5rem}  .bz-reference-tab-body{margin-block-start:1.5rem}  .bz-reference-tab-body docs-viewer>div :first-child{margin-top:0}  .docs-reference-api-tab{display:flex;gap:1.81rem;align-items:flex-start;margin-bottom:1px}@media (max-width: 1200px){  .docs-reference-api-tab{flex-direction:column}}  .docs-reference-api-tab>.docs-code{box-sizing:border-box;width:100%;max-height:93vh;overflow:hidden;padding:0}@media (max-width: 1200px){  .docs-reference-api-tab>.docs-code{width:100%;position:static}}  .docs-reference-api-tab>.docs-code button{transition:background-color .3s ease}  .docs-reference-api-tab>.docs-code button.hljs-ln-line{font-weight:400;text-align:left;padding-block:.25rem}  .docs-reference-api-tab>.docs-code button.hljs-ln-line-highlighted{background-color:var(--senary-contrast)}  .docs-reference-api-tab>.docs-code button:hover{background-color:var(--septenary-contrast)}  .docs-reference-api-tab>.docs-code button:focus{background-color:var(--senary-contrast)}  .docs-reference-api-tab>.docs-code button[docs-copy-source-code]{display:none}  .docs-reference-api-tab code{margin-block:0}  .docs-reference-api-tab pre{white-space:pre;overflow-x:auto;margin:0}  .bz-reference-tab{min-width:50ch;margin-block-start:2.5rem}@media (min-width: 1200px){  .docs-reference-members-container{background-color:red;color:green;display:flex;flex-direction:column;position:fixed;right:16px;top:0;height:fit-content;width:14rem;padding-inline:1rem;max-height:100vh;overflow-y:scroll}}  .docs-reference-members{display:flex;flex-direction:column;gap:20px}@media (max-width: 1200px){  .docs-reference-members{width:100%}}  .docs-reference-title{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding-block-end:0;gap:.5rem}  .docs-reference-title>div{margin-block:.67em;display:flex;flex-wrap:wrap;align-items:center;gap:.5rem}  .docs-reference-title>div h1{margin-block:0}  .docs-reference-title a{fill:var(--quinary-contrast);transition:fill .3s ease}  .docs-reference-title a:hover{fill:var(--primary-contrast)}  .bz-reference-labels{display:flex;gap:.5rem}  .docs-reference-category{color:var(--gray-400);font-size:.875rem;font-weight:500;line-height:1.4rem;letter-spacing:-.00875rem}  .docs-reference-member-card{border:1px solid var(--senary-contrast);border-radius:.25rem;position:relative;transition:border .3s ease}  .docs-reference-member-card:before{content:"";inset:-1px;position:absolute;background:transparent;border-radius:.35rem;z-index:0}  .docs-reference-member-card:focus{box-shadow:10px 4px 40px #00000003}  .docs-reference-member-card:focus:before{background:var(--red-to-pink-to-purple-horizontal-gradient)}  .docs-reference-member-card:has(.docs-reference-card-body) header{border-radius:.25rem .25rem 0 0;border-bottom:1px solid var(--senary-contrast)}  .docs-reference-member-card header{display:flex;flex-direction:column;padding:.7rem 1rem;border-radius:.25rem;background-color:var(--octonary-contrast);position:relative;z-index:10;transition:background-color .3s ease,border .3s ease}  .docs-reference-member-card header .docs-reference-header{display:flex;align-items:center;justify-content:space-between;gap:.5rem;flex-wrap:wrap}  .docs-reference-member-card header .docs-reference-header div{display:flex;align-items:center;gap:1rem}  .docs-reference-member-card header h3{display:inline-block;font-family:var(--code-font);font-size:1.25rem;letter-spacing:-.025rem;margin:0}  .docs-reference-member-card header code,   .docs-reference-member-card header span{font-size:.875rem}  .docs-reference-member-card>p{padding-inline:1.25rem;margin-block-end:0}  .docs-reference-card-body{padding:.25rem 1.25rem;background:var(--septenary-contrast);transition:background-color .3s ease;color:var(--quaternary-contrast);border-radius:0 0 .25rem .25rem;position:relative;z-index:10}  .docs-reference-card-body hr{margin-block:2rem}  .docs-reference-card-body .docs-code{margin-block-end:1rem}  .docs-reference-card-item:has(~.docs-reference-card-item){border:1px solid var(--senary-contrast);margin-block:1rem;border-radius:.25rem;padding-inline:1rem}  .docs-reference-card-item:last-child:not(:first-of-type){border:1px solid var(--senary-contrast);margin-block:1rem;border-radius:.25rem;padding-inline:1rem}  .docs-reference-card-item span{display:inline-block;font-size:.875rem}  .docs-reference-card-item code{font-size:.875rem}  .docs-function-definition:has(*){border-block-end:1px solid var(--senary-contrast)}  .docs-param-group{margin-block-start:1rem}  .docs-param-group:not(:has(~.docs-param-group)){margin-block:1rem}  .docs-return-type{padding-block:1rem}  .docs-return-type:not(.docs-function-definition+.docs-return-type){border-block-start:1px solid var(--senary-contrast)}  .docs-param-keyword{color:var(--primary-contrast);font-family:var(--code-font);margin-inline-end:.5rem}  .bz-param-name{color:var(--vivid-pink);font-family:var(--code-font);margin-inline-end:.25rem}  .bz-param-name:after{content:":"}  .docs-deprecated{color:var(--page-background);background-color:var(--quaternary-contrast);width:max-content;border-radius:.25rem;padding:.1rem .25rem;margin-block-start:1rem}  .docs-reference-header~.docs-deprecated{margin-block-start:.5rem}  .docs-parameter-description p:first-child{margin-block-start:0}[_nghost-%COMP%]   .docs-viewer.docs-animate-content[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_fade-in .5s}@keyframes _ngcontent-%COMP%_fade-in{0%{opacity:0}to{opacity:1}}'],changeDetection:0});let r=a;return r})();export{Ce as default};
