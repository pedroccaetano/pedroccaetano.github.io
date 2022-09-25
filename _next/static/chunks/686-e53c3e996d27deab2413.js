(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[686],{73955:function(e,r,n){"use strict";n.d(r,{x:function(){return v}});var t=n(90227),a=n(90063),l=n(29676),i=n(73808),o=n(84461),s=n(67294);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function c(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var d=(0,t.m$)("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),p=(0,a.G)(((e,r)=>{var n,t,{placement:a="left"}=e,i=c(e,["placement"]),o=(0,l.yK)().field,p={["left"===a?"insetStart":"insetEnd"]:"0",width:null!=(n=null==o?void 0:o.height)?n:null==o?void 0:o.h,height:null!=(t=null==o?void 0:o.height)?t:null==o?void 0:o.h,fontSize:null==o?void 0:o.fontSize};return s.createElement(d,u({ref:r,__css:p},i))}));p.id="InputElement",i.Ts&&(p.displayName="InputElement");var f=(0,a.G)(((e,r)=>{var{className:n}=e,t=c(e,["className"]),a=(0,o.cx)("chakra-input__left-element",n);return s.createElement(p,u({ref:r,placement:"left",className:a},t))}));f.id="InputLeftElement",i.Ts&&(f.displayName="InputLeftElement");var v=(0,a.G)(((e,r)=>{var{className:n}=e,t=c(e,["className"]),a=(0,o.cx)("chakra-input__right-element",n);return s.createElement(p,u({ref:r,placement:"right",className:a},t))}));v.id="InputRightElement",i.Ts&&(v.displayName="InputRightElement")},28488:function(e,r,n){"use strict";n.d(r,{B:function(){return f}});var t=n(90063),a=n(2326),l=n(55284),i=n(90227),o=n(29676),s=n(84461),u=n(73808),c=n(24255),d=n(67294);function p(){return(p=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var f=(0,t.G)(((e,r)=>{var n=(0,a.j)("Input",e),t=(0,l.Lr)(e),{children:u,className:f}=t,v=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(t,["children","className"]),m=(0,s.cx)("chakra-input__group",f),h={},g=(0,c.W)(u),y=n.field;g.forEach((e=>{if(n){var r,t;if(y&&"InputLeftElement"===e.type.id)h.paddingStart=null!=(r=y.height)?r:y.h;if(y&&"InputRightElement"===e.type.id)h.paddingEnd=null!=(t=y.height)?t:y.h;"InputRightAddon"===e.type.id&&(h.borderEndRadius=0),"InputLeftAddon"===e.type.id&&(h.borderStartRadius=0)}}));var b=g.map((r=>{var n,t,a={size:(null==(n=r.props)?void 0:n.size)||e.size,variant:(null==(t=r.props)?void 0:t.variant)||e.variant};return"Input"!==r.type.id?d.cloneElement(r,a):d.cloneElement(r,Object.assign(a,h,r.props))}));return d.createElement(i.m$.div,p({className:m,ref:r,__css:{width:"100%",display:"flex",position:"relative"}},v),d.createElement(o.Fo,{value:n},b))}));u.Ts&&(f.displayName="InputGroup")},917:function(e,r,n){"use strict";n.d(r,{I:function(){return x}});var t=n(84461),a=n(80658),l=n(94577),i=n(67294);var o=n(90063),s=n(2326),u=n(55284),c=n(29676),d=n(90227),p=n(73808),f=n(28500),v=n(72947);function m(){return(m=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function h(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}var[g,y]=(0,f.k)({strict:!1,name:"FormControlContext"});function b(e){var{id:r,isRequired:n,isInvalid:o,isDisabled:s,isReadOnly:u}=e,c=h(e,["id","isRequired","isInvalid","isDisabled","isReadOnly"]),d=(0,l.M)(),p=r||"field-"+d,f=p+"-label",g=p+"-feedback",y=p+"-helptext",[b,O]=i.useState(!1),[E,k]=i.useState(!1),[I,w]=function(e){void 0===e&&(e=!1);var[r,n]=(0,i.useState)(e);return[r,{on:(0,i.useCallback)((()=>{n(!0)}),[]),off:(0,i.useCallback)((()=>{n(!1)}),[]),toggle:(0,i.useCallback)((()=>{n((e=>!e))}),[])}]}(),P=i.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:y},e,{ref:(0,v.l)(r,(e=>{e&&k(!0)}))})}),[y]),x=i.useCallback((function(e,r){var n,a;return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,"data-focus":(0,t.PB)(I),"data-disabled":(0,t.PB)(s),"data-invalid":(0,t.PB)(o),"data-readonly":(0,t.PB)(u),id:null!=(n=e.id)?n:f,htmlFor:null!=(a=e.htmlFor)?a:p})}),[p,s,I,o,u,f]),T=i.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({id:g},e,{ref:(0,v.l)(r,(e=>{e&&O(!0)})),"aria-live":"polite"})}),[g]),C=i.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,c,{ref:r,role:"group"})}),[c]),R=i.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),m({},e,{ref:r,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]),N=i.useCallback((()=>{(0,a.A4)(w.on)}),[w]);return{isRequired:!!n,isInvalid:!!o,isReadOnly:!!u,isDisabled:!!s,isFocused:!!I,onFocus:N,onBlur:w.off,hasFeedbackText:b,setHasFeedbackText:O,hasHelpText:E,setHasHelpText:k,id:p,labelId:f,feedbackId:g,helpTextId:y,htmlProps:c,getHelpTextProps:P,getErrorMessageProps:T,getRootProps:C,getLabelProps:x,getRequiredIndicatorProps:R}}var O=(0,o.G)(((e,r)=>{var n=(0,s.j)("Form",e),a=b((0,u.Lr)(e)),{getRootProps:l}=a,o=h(a,["getRootProps","htmlProps"]),p=(0,t.cx)("chakra-form-control",e.className),f=i.useMemo((()=>o),[o]);return i.createElement(g,{value:f},i.createElement(c.Fo,{value:n},i.createElement(d.m$.div,m({},l({},r),{className:p,__css:{width:"100%",position:"relative"}}))))}));p.Ts&&(O.displayName="FormControl");var E=(0,o.G)(((e,r)=>{var n=y(),a=(0,c.yK)(),l=(0,t.cx)("chakra-form__helper-text",e.className);return i.createElement(d.m$.div,m({},null==n?void 0:n.getHelpTextProps(e,r),{__css:a.helperText,className:l}))}));function k(){return(k=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function I(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}function w(e){var r=function(e){var r,n,t,l=y(),{id:i,disabled:o,readOnly:s,required:u,isRequired:c,isInvalid:d,isReadOnly:p,isDisabled:f,onFocus:v,onBlur:m}=e,h=I(e,["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"]),g=[];null!=l&&l.hasFeedbackText&&null!=l&&l.isInvalid&&g.push(l.feedbackId);null!=l&&l.hasHelpText&&g.push(l.helpTextId);return k({},h,{"aria-describedby":g.join(" ")||void 0,id:null!=i?i:null==l?void 0:l.id,isDisabled:null!=(r=null!=o?o:f)?r:null==l?void 0:l.isDisabled,isReadOnly:null!=(n=null!=s?s:p)?n:null==l?void 0:l.isReadOnly,isRequired:null!=(t=null!=u?u:c)?t:null==l?void 0:l.isRequired,isInvalid:null!=d?d:null==l?void 0:l.isInvalid,onFocus:(0,a.v0)(null==l?void 0:l.onFocus,v),onBlur:(0,a.v0)(null==l?void 0:l.onBlur,m)})}(e),{isDisabled:n,isInvalid:l,isReadOnly:i,isRequired:o}=r;return k({},I(r,["isDisabled","isInvalid","isReadOnly","isRequired"]),{disabled:n,readOnly:i,required:o,"aria-invalid":(0,t.Qm)(l),"aria-required":(0,t.Qm)(o),"aria-readonly":(0,t.Qm)(i)})}function P(){return(P=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}p.Ts&&(E.displayName="FormHelperText");var x=(0,o.G)(((e,r)=>{var n=(0,s.j)("Input",e),a=w((0,u.Lr)(e)),l=(0,t.cx)("chakra-input",e.className);return i.createElement(d.m$.input,P({},a,{__css:n.field,ref:r,className:l}))}));p.Ts&&(x.displayName="Input"),x.id="Input"},336:function(e,r,n){"use strict";n.d(r,{X:function(){return d}});var t=n(90063),a=n(2326),l=n(55284),i=n(90227),o=n(84461),s=n(73808),u=n(67294);function c(){return(c=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var d=(0,t.G)(((e,r)=>{var n=(0,a.m)("Heading",e),t=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}((0,l.Lr)(e),["className"]);return u.createElement(i.m$.h2,c({ref:r,className:(0,o.cx)("chakra-heading",e.className)},t,{__css:n}))}));s.Ts&&(d.displayName="Heading")},85672:function(e,r,n){"use strict";n.d(r,{h:function(){return y}});var t=n(67294);function a(){var e,r,n=t.useRef(!1),[a,l]=t.useState(0);return e=()=>{n.current=!0},void 0===r&&(r=[]),t.useEffect((()=>()=>e()),r),t.useCallback((()=>{n.current||l(a+1)}),[a])}var l=n(68327),i=n(84461),o=n(73808),s=n(28500),u=n(73935),c=n(34288);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var[p,f]=(0,s.k)({strict:!1,name:"PortalContext"}),v="chakra-portal",m=e=>t.createElement("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0}},e.children),h=e=>{var{appendToParentPortal:r,children:n}=e,i=t.useRef(null),o=t.useRef(null),s=a(),d=f(),h=(0,c.L)();(0,l.G)((()=>{if(i.current){var e=i.current.ownerDocument,n=r&&null!=d?d:e.body;if(n){o.current=e.createElement("div"),o.current.className=v,n.appendChild(o.current),s();var t=o.current;return()=>{n.contains(t)&&n.removeChild(t)}}}}),[]);var g=null!=h&&h.zIndex?t.createElement(m,{zIndex:null==h?void 0:h.zIndex},n):n;return o.current?(0,u.createPortal)(t.createElement(p,{value:o.current},g),o.current):t.createElement("span",{ref:i})},g=e=>{var{children:r,containerRef:n,appendToParentPortal:o}=e,s=n.current,c=null!=s?s:i.jU?document.body:void 0,d=t.useMemo((()=>{var e=null==s?void 0:s.ownerDocument.createElement("div");return e&&(e.className=v),e}),[s]),f=a();return(0,l.G)((()=>{f()}),[]),(0,l.G)((()=>{if(d&&c)return c.appendChild(d),()=>{c.removeChild(d)}}),[d,c]),c&&d?(0,u.createPortal)(t.createElement(p,{value:o?d:null},r),d):null};function y(e){var{containerRef:r}=e,n=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["containerRef"]);return r?t.createElement(g,d({containerRef:r},n)):t.createElement(h,n)}y.defaultProps={appendToParentPortal:!0},y.className=v,y.selector=".chakra-portal",o.Ts&&(y.displayName="Portal")},35528:function(e,r,n){"use strict";n.d(r,{Vp:function(){return p}});var t=n(70058),a=n(90063),l=n(2326),i=n(55284),o=n(29676),s=n(90227),u=n(73808),c=n(67294);function d(){return(d=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var p=(0,a.G)(((e,r)=>{var n=(0,l.j)("Tag",e),t=(0,i.Lr)(e),a=d({display:"inline-flex",verticalAlign:"top",alignItems:"center",maxWidth:"100%"},n.container);return c.createElement(o.Fo,{value:n},c.createElement(s.m$.span,d({ref:r},t,{__css:a})))}));u.Ts&&(p.displayName="Tag");var f=(0,a.G)(((e,r)=>{var n=(0,o.yK)();return c.createElement(s.m$.span,d({ref:r,isTruncated:!0},e,{__css:n.label}))}));u.Ts&&(f.displayName="TagLabel");var v=(0,a.G)(((e,r)=>c.createElement(t.J,d({ref:r,verticalAlign:"top",marginEnd:"0.5rem"},e))));u.Ts&&(v.displayName="TagLeftIcon");var m=(0,a.G)(((e,r)=>c.createElement(t.J,d({ref:r,verticalAlign:"top",marginStart:"0.5rem"},e))));u.Ts&&(m.displayName="TagRightIcon");var h=e=>c.createElement(t.J,d({verticalAlign:"inherit",viewBox:"0 0 512 512"},e),c.createElement("path",{fill:"currentColor",d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}));u.Ts&&(h.displayName="TagCloseIcon");u.Ts},96699:function(e,r,n){"use strict";n.d(r,{u:function(){return C}});var t=n(23459),a=n(85672),l=n(90227),i=n(90063),o=n(2326),s=n(55284),u=n(29676),c=n(4651),d=n(73808),p=n(65415),f=n(9250),v=n(53869),m=n(67294),h={exit:{scale:.85,opacity:0,transition:{opacity:{duration:.15,easings:"easeInOut"},scale:{duration:.2,easings:"easeInOut"}}},enter:{scale:1,opacity:1,transition:{opacity:{easings:"easeOut",duration:.2},scale:{duration:.2,ease:[.175,.885,.4,1.1]}}}},g=n(74860),y=n(94577),b=n(34941),O=n(8931),E=n(80658),k=n(21076),I=n(72947);function w(){return(w=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}function P(e){void 0===e&&(e={});var{openDelay:r=0,closeDelay:n=0,closeOnClick:a=!0,closeOnMouseDown:l,onOpen:i,onClose:o,placement:s,id:u,isOpen:c,defaultIsOpen:d,arrowSize:p=10,arrowShadowColor:f,arrowPadding:v,modifiers:h,isDisabled:P,gutter:x,offset:T}=e,C=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["openDelay","closeDelay","closeOnClick","closeOnMouseDown","onOpen","onClose","placement","id","isOpen","defaultIsOpen","arrowSize","arrowShadowColor","arrowPadding","modifiers","isDisabled","gutter","offset"]),{isOpen:R,onOpen:N,onClose:_}=(0,g.q)({isOpen:c,defaultIsOpen:d,onOpen:i,onClose:o}),{referenceRef:j,getPopperProps:D,getArrowInnerProps:L,getArrowProps:M}=(0,O.D)({enabled:R,placement:s,arrowPadding:v,modifiers:h,gutter:x,offset:T}),F=(0,y.M)(u,"tooltip"),q=m.useRef(null),z=m.useRef(),S=m.useRef(),G=m.useCallback((()=>{P||(z.current=window.setTimeout(N,r))}),[P,N,r]),A=m.useCallback((()=>{z.current&&clearTimeout(z.current),S.current=window.setTimeout(_,n)}),[n,_]),B=m.useCallback((()=>{a&&A()}),[a,A]),H=m.useCallback((()=>{l&&A()}),[l,A]);(0,b.O)("keydown",(e=>{R&&"Escape"===e.key&&A()})),m.useEffect((()=>()=>{clearTimeout(z.current),clearTimeout(S.current)}),[]),(0,b.O)("mouseleave",A,q.current);var $=m.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),w({},e,{ref:(0,I.l)(q,r,j),onMouseEnter:(0,E.v0)(e.onMouseEnter,G),onClick:(0,E.v0)(e.onClick,B),onMouseDown:(0,E.v0)(e.onMouseDown,H),onFocus:(0,E.v0)(e.onFocus,G),onBlur:(0,E.v0)(e.onBlur,A),"aria-describedby":R?F:void 0})}),[G,A,H,R,F,B,j]),K=m.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),D(w({},e,{style:w({},e.style,{[t.Dq.arrowSize.var]:p?(0,k.px)(p):void 0,[t.Dq.arrowShadowColor.var]:f})}),r)}),[D,p,f]),U=m.useCallback((function(e,r){return void 0===e&&(e={}),void 0===r&&(r=null),w({ref:r},C,e,{id:F,role:"tooltip",style:w({},e.style,{position:"relative",transformOrigin:t.Dq.transformOrigin.varRef})})}),[C,F]);return{isOpen:R,show:G,hide:A,getTriggerProps:$,getTooltipProps:U,getTooltipPositionerProps:K,getArrowProps:M,getArrowInnerProps:L}}function x(){return(x=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e}).apply(this,arguments)}var T=(0,l.m$)(f.E.div),C=(0,i.G)(((e,r)=>{var n=(0,o.m)("Tooltip",e),i=(0,s.Lr)(e),f=(0,u.Fg)(),{children:g,label:y,shouldWrapChildren:b,"aria-label":O,hasArrow:E,bg:k,portalProps:I}=i,w=function(e,r){if(null==e)return{};var n,t,a={},l=Object.keys(e);for(t=0;t<l.length;t++)n=l[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(i,["children","label","shouldWrapChildren","aria-label","hasArrow","bg","portalProps"]);k&&(n.bg=k,n[t.Dq.arrowBg.var]=(0,c.K1)(f,"colors",k));var C,R=P(w);if((0,d.HD)(g)||b)C=m.createElement(l.m$.span,x({tabIndex:0},R.getTriggerProps()),g);else{var N=m.Children.only(g);C=m.cloneElement(N,R.getTriggerProps(N.props,N.ref))}var _=!!O,j=R.getTooltipProps({},r),D=_?(0,c.CE)(j,["role","id"]):j,L=(0,c.ei)(j,["role","id"]);return y?m.createElement(m.Fragment,null,C,m.createElement(v.M,null,R.isOpen&&m.createElement(a.h,I,m.createElement(l.m$.div,x({},R.getTooltipPositionerProps(),{__css:{zIndex:n.zIndex,pointerEvents:"none"}}),m.createElement(T,x({variants:h},D,{initial:"exit",animate:"enter",exit:"exit",__css:n}),y,_&&m.createElement(p.TX,L,O),E&&m.createElement(l.m$.div,{"data-popper-arrow":!0,className:"chakra-tooltip__arrow-wrapper"},m.createElement(l.m$.div,{"data-popper-arrow-inner":!0,className:"chakra-tooltip__arrow",__css:{bg:n.bg}}))))))):m.createElement(m.Fragment,null,g)}));d.Ts&&(C.displayName="Tooltip")},92167:function(e,r,n){"use strict";var t=n(53848),a=n(69448);r.default=void 0;var l=a(n(67294)),i=n(29414),o=n(34651),s=n(7426),u={};function c(e,r,n,t){if(e&&(0,i.isLocalURL)(r)){e.prefetch(r,n,t).catch((function(e){0}));var a=t&&"undefined"!==typeof t.locale?t.locale:e&&e.locale;u[r+"%"+n+(a?"%"+a:"")]=!0}}var d=function(e){var r,n=!1!==e.prefetch,a=(0,o.useRouter)(),d=l.default.useMemo((function(){var r=(0,i.resolveHref)(a,e.href,!0),n=t(r,2),l=n[0],o=n[1];return{href:l,as:e.as?(0,i.resolveHref)(a,e.as):o||l}}),[a,e.href,e.as]),p=d.href,f=d.as,v=e.children,m=e.replace,h=e.shallow,g=e.scroll,y=e.locale;"string"===typeof v&&(v=l.default.createElement("a",null,v));var b=(r=l.Children.only(v))&&"object"===typeof r&&r.ref,O=(0,s.useIntersection)({rootMargin:"200px"}),E=t(O,2),k=E[0],I=E[1],w=l.default.useCallback((function(e){k(e),b&&("function"===typeof b?b(e):"object"===typeof b&&(b.current=e))}),[b,k]);(0,l.useEffect)((function(){var e=I&&n&&(0,i.isLocalURL)(p),r="undefined"!==typeof y?y:a&&a.locale,t=u[p+"%"+f+(r?"%"+r:"")];e&&!t&&c(a,p,f,{locale:r})}),[f,p,I,y,n,a]);var P={ref:w,onClick:function(e){r.props&&"function"===typeof r.props.onClick&&r.props.onClick(e),e.defaultPrevented||function(e,r,n,t,a,l,o,s){("A"!==e.currentTarget.nodeName||!function(e){var r=e.currentTarget.target;return r&&"_self"!==r||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==o&&t.indexOf("#")>=0&&(o=!1),r[a?"replace":"push"](n,t,{shallow:l,locale:s,scroll:o}))}(e,a,p,f,m,h,g,y)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(r.props&&"function"===typeof r.props.onMouseEnter&&r.props.onMouseEnter(e),c(a,p,f,{priority:!0}))}};if(e.passHref||"a"===r.type&&!("href"in r.props)){var x="undefined"!==typeof y?y:a&&a.locale,T=a&&a.isLocaleDomain&&(0,i.getDomainLocale)(f,x,a&&a.locales,a&&a.domainLocales);P.href=T||(0,i.addBasePath)((0,i.addLocale)(f,x,a&&a.defaultLocale))}return l.default.cloneElement(r,P)};r.default=d},7426:function(e,r,n){"use strict";var t=n(53848);r.__esModule=!0,r.useIntersection=function(e){var r=e.rootMargin,n=e.disabled||!i,s=(0,a.useRef)(),u=(0,a.useState)(!1),c=t(u,2),d=c[0],p=c[1],f=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||d||e&&e.tagName&&(s.current=function(e,r,n){var t=function(e){var r=e.rootMargin||"",n=o.get(r);if(n)return n;var t=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var r=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;r&&n&&r(n)}))}),e);return o.set(r,n={id:r,observer:a,elements:t}),n}(n),a=t.id,l=t.observer,i=t.elements;return i.set(e,r),l.observe(e),function(){i.delete(e),l.unobserve(e),0===i.size&&(l.disconnect(),o.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:r}))}),[n,r,d]);return(0,a.useEffect)((function(){if(!i&&!d){var e=(0,l.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,l.cancelIdleCallback)(e)}}}),[d]),[f,d]};var a=n(67294),l=n(73447),i="undefined"!==typeof IntersectionObserver;var o=new Map},35063:function(e,r,n){e.exports=n(92167)}}]);