import{a as Q,b as $,c as ee,d as te,e as oe}from"./chunk-CEPHNX66.js";import{i as J}from"./chunk-NAJPCXWK.js";import{A as Y,B as G,S as m,T as K,b as A,c as T,d as R,e as I,f as z,g as D,i as F,j as V,l as H,m as k,n as W,o as L,r as j,s as U,t as B,v as X,w as Z,x as q}from"./chunk-6E36625H.js";import{d as p}from"./chunk-UHOOP2A4.js";import{$ as g,Ib as x,La as v,Na as C,Pa as b,Ra as P,Ua as E,V as h,Va as O,Vb as N,eb as M,ka as u,lb as w,qb as S,ra as f,rb as _,sb as d,va as s,xa as y}from"./chunk-OIXQGHLZ.js";var ie=[{path:"",children:[{path:"",loadComponent:()=>import("./chunk-P3WPALIW.js"),data:{label:"Home"}},{path:m.POST,loadComponent:()=>import("./chunk-NKEQPNMY.js")},{path:m.CHEATSHEET,redirectTo:K.CHEATSHEET},...Y]},{path:"**",loadComponent:()=>import("./chunk-7QJNJEUB.js"),resolve:{docContent:U("error")}}];var pe="@",me=(()=>{let e=class e{constructor(o,i,r,a,l){this.doc=o,this.delegate=i,this.zone=r,this.animationType=a,this.moduleImpl=l,this._rendererFactoryPromise=null,this.scheduler=s(b,{optional:!0})}ngOnDestroy(){this._engine?.flush()}loadImpl(){return(this.moduleImpl??import("./chunk-ZWCSXAXX.js")).catch(i=>{throw new h(5300,!1)}).then(({\u0275createEngine:i,\u0275AnimationRendererFactory:r})=>{this._engine=i(this.animationType,this.doc,this.scheduler);let a=new r(this.delegate,this._engine,this.zone);return this.delegate=a,a})}createRenderer(o,i){let r=this.delegate.createRenderer(o,i);if(r.\u0275type===0)return r;typeof r.throwOnSyntheticProps=="boolean"&&(r.throwOnSyntheticProps=!1);let a=new c(r);return i?.data?.animation&&!this._rendererFactoryPromise&&(this._rendererFactoryPromise=this.loadImpl()),this._rendererFactoryPromise?.then(l=>{let le=l.createRenderer(o,i);a.use(le)}).catch(l=>{a.use(r)}),a}begin(){this.delegate.begin?.()}end(){this.delegate.end?.()}whenRenderingDone(){return this.delegate.whenRenderingDone?.()??Promise.resolve()}};e.\u0275fac=function(i){C()},e.\u0275prov=u({token:e,factory:e.\u0275fac});let n=e;return n})(),c=class{constructor(e){this.delegate=e,this.replay=[],this.\u0275type=1}use(e){if(this.delegate=e,this.replay!==null){for(let t of this.replay)t(e);this.replay=null}}get data(){return this.delegate.data}destroy(){this.replay=null,this.delegate.destroy()}createElement(e,t){return this.delegate.createElement(e,t)}createComment(e){return this.delegate.createComment(e)}createText(e){return this.delegate.createText(e)}get destroyNode(){return this.delegate.destroyNode}appendChild(e,t){this.delegate.appendChild(e,t)}insertBefore(e,t,o,i){this.delegate.insertBefore(e,t,o,i)}removeChild(e,t,o){this.delegate.removeChild(e,t,o)}selectRootElement(e,t){return this.delegate.selectRootElement(e,t)}parentNode(e){return this.delegate.parentNode(e)}nextSibling(e){return this.delegate.nextSibling(e)}setAttribute(e,t,o,i){this.delegate.setAttribute(e,t,o,i)}removeAttribute(e,t,o){this.delegate.removeAttribute(e,t,o)}addClass(e,t){this.delegate.addClass(e,t)}removeClass(e,t){this.delegate.removeClass(e,t)}setStyle(e,t,o,i){this.delegate.setStyle(e,t,o,i)}removeStyle(e,t,o){this.delegate.removeStyle(e,t,o)}setProperty(e,t,o){this.shouldReplay(t)&&this.replay.push(i=>i.setProperty(e,t,o)),this.delegate.setProperty(e,t,o)}setValue(e,t){this.delegate.setValue(e,t)}listen(e,t,o){return this.shouldReplay(t)&&this.replay.push(i=>i.listen(e,t,o)),this.delegate.listen(e,t,o)}shouldReplay(e){return this.replay!==null&&e.startsWith(pe)}};function ne(n="animations"){return E("NgAsyncAnimations"),y([{provide:P,useFactory:(e,t,o)=>new me(e,t,o,n),deps:[p,R,O]},{provide:f,useValue:n==="noop"?"NoopAnimations":"BrowserAnimations"}])}var re={};var ae={providers:[H(ie,W(),k({anchorScrolling:"enabled",scrollPositionRestoration:"enabled"}),L({onViewTransitionCreated:({transition:n,to:e})=>{let t=s(V),o=D(e,[]);t.isActive(o,{paths:"exact",matrixParams:"exact",fragment:"ignored",queryParams:"ignored"})&&n.skipTransition()}})),z(),ne(),A(T()),{provide:X,useValue:re},{provide:j,useClass:$},{provide:B,useClass:Q},{provide:Z,useFactory:n=>q(n),deps:[p]},N({eventCoalescing:!0}),J]};function ce(n,e){n&1&&d(0,"bz-secondary-navigation")}var se=(()=>{let e=class e{constructor(){this.navigationState=s(G),this.displaySecondaryNav=this.navigationState.displaySecondaryNav,this.isMobileNavigationOpened=this.navigationState.isMobileNavVisible}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=g({type:e,selectors:[["bz-root"]],standalone:!0,features:[x],decls:5,vars:1,consts:[[1,"bz-nav"],[1,"bz-app-main-content"],["bz-footer",""]],template:function(i,r){i&1&&(d(0,"div",0),M(1,ce,1,0,"bz-secondary-navigation"),S(2,"div",1),d(3,"router-outlet")(4,"footer",2),_()),i&2&&(v(),w(1,r.displaySecondaryNav()?1:-1))},dependencies:[F,te,ee,oe],styles:['[_nghost-%COMP%]{max-width:2560px;margin-inline:auto;display:flex;flex-direction:row;align-items:flex-start;min-height:100vh}@media (max-width: 900px){[_nghost-%COMP%]{flex-direction:column}}[_nghost-%COMP%]:has(.bz-nav-secondary--open)   .bz-app-main-content[_ngcontent-%COMP%]:after, [_nghost-%COMP%]:has(.bz-nav-primary--open)   .bz-app-main-content[_ngcontent-%COMP%]:after{visibility:visible;opacity:1}[_nghost-%COMP%]:has(.bz-home)   .bz-nav[_ngcontent-%COMP%]{width:0;height:0}@media (min-width: 900px){[_nghost-%COMP%]:has(.bz-home)   footer[_ngcontent-%COMP%]{margin-left:var(--primary-nav-width)}}.bz-app-main-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;min-height:100vh;width:100%}.bz-app-main-content[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:after{content:"";position:fixed;top:0;left:0;width:100vw;height:100vh;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px);background-color:color-mix(in srgb,var(--gray-1000) 5%,transparent);z-index:50;visibility:hidden;opacity:0;transition:opacity .3s ease}@media (min-width: 700px) and (max-width: 900px){.bz-app-main-content[_ngcontent-%COMP%]{width:100%}}footer[_ngcontent-%COMP%]{margin-top:auto}']});let n=e;return n})();I(se,ae).catch(n=>console.error(n));
