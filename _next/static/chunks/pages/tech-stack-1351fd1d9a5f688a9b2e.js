(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[566],{6277:function(e,n,r){"use strict";r.d(n,{Z:function(){return d}});var t=r(26265),i=r(85893),o=r(38347),s=r(48017),c=function(e){return(0,i.jsxs)(s.xu,{as:"span",display:"inline-block",position:"relative",children:[e.children,(0,i.jsx)(s.xu,{as:"span",display:"block",position:"absolute",bg:"gray.200",w:"100%",h:e.h||"1px",bottom:-2})]})};function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var d=function(e){var n=e.children,r=e.underlineColor,t=e.emoji,a=(0,o.Z)(e,["children","underlineColor","emoji"]);return(0,i.jsxs)(s.xu,l(l({as:"h1",mt:10,mb:6,fontSize:"3xl",lineHeight:"shorter",fontWeight:"bold"},a),{},{textAlign:"left",children:[(0,i.jsx)(c,{color:r,children:n}),t?" "+t:""]}))}},29848:function(e,n,r){"use strict";var t=r(85893),i=r(9008),o=function(e){var n=e.title,r=e.keywords,o=e.description,s=e.image;return n=n.includes("Ahmad")?n:n.concat(" | Pedro Caetano"),(0,t.jsxs)(i.default,{children:[(0,t.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,t.jsx)("meta",{charSet:"utf-8"}),(0,t.jsx)("meta",{name:"keywords",content:r}),(0,t.jsx)("meta",{name:"description",content:o}),(0,t.jsx)("meta",{property:"og:title",content:n}),(0,t.jsx)("meta",{property:"og:image",content:s||"/logo512.png"}),(0,t.jsx)("title",{children:n})]})};o.defaultProps={title:"Pedro Caetano - Full Stack Developer",keywords:"web development, programming, web design",description:"Software Engineer. Lover of web and opensource."},n.Z=o},1388:function(e,n,r){"use strict";var t=r(85893),i=r(67294),o=r(84731),s=r(29848),c={hidden:{opacity:0,x:-200,y:0},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:0,y:-100}};n.Z=function(e){var n=e.children,r=e.title,a=e.description,l=e.keywords,d=e.image;return(0,t.jsxs)(i.Fragment,{children:[(0,t.jsx)(s.Z,{title:r,description:a,keywords:l,image:d}),(0,t.jsx)(o.E.main,{initial:"hidden",animate:"enter",exit:"exit",variants:c,transition:{type:"linear"},children:n})]})}},69176:function(e,n,r){"use strict";r.d(n,{Z:function(){return g}});var t=r(26265),i=r(85893),o=r(38347),s=(r(67294),r(38448)),c=r(48017);function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}var l=function(e){return(0,i.jsx)(c.xu,function(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}({textAlign:"center",fontSize:"xl",w:["90%","85%","80%"],maxW:800,mx:"auto"},e))};function d(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function u(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?d(Object(r),!0).forEach((function(n){(0,t.Z)(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}var g=function(e){var n=e.full,r=e.children,t=(0,o.Z)(e,["full","children"]);return(0,i.jsx)(s.M,u(u({as:"section"},t),{},{w:"100%",children:n?r:(0,i.jsx)(l,{children:r})}))}},19206:function(e,n,r){"use strict";r.d(n,{nC:function(){return a},wc:function(){return l},f6:function(){return d},eF:function(){return u},xp:function(){return g}});var t=r(85893),i=r(90454),o=r(60029),s={initial:{opacity:0,translateY:-20},enter:{transition:{staggerChildren:.15,delayChildren:.4}},exit:{transition:{staggerChildren:.05,staggerDirection:-1}}},c={initial:{opacity:0,translateY:-20},enter:{y:0,opacity:1,transition:{y:{stiffness:1e3,velocity:-100}}},exit:{y:50,opacity:0,transition:{y:{stiffness:1e3}}}},a={hidden:{opacity:1,scale:0},visible:{opacity:1,scale:1,transition:{delayChildren:.3,staggerChildren:.2}}},l={hidden:{y:20,opacity:0},visible:{y:0,opacity:1}},d=function(e){var n=e.children;return(0,t.jsx)(i.R,{in:!0,children:n})},u=function(e){var n=e.children;return(0,t.jsx)(o.uH,{animate:{opacity:1,translateY:0},variants:s,children:n})},g=function(e){var n=e.children;return(0,t.jsx)(o.uH,{variants:c,children:n})}},27112:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return S},default:function(){return _}});var t=r(85893),i=r(67294),o=r(40980),s=r(86034),c=r(64115),a=r(88084),l=r(70058),d=r(43663),u=r(69176),g=r(8193),p=r(47516),h=r(2585),x=r(49444),f=r(48017),j=r(15618),y=r(40123),m=r(73695),b=r(60029),v=r(19206),O=r(35063),w=r(58239),C=function(e){var n=e.name,r=e.image,i=e.link,a=e.description,l=(0,w.o3)(),d=(0,m.usePalette)(r),u=d.data,g=d.loading;return(0,t.jsx)(b.uH,{variants:v.wc,children:(0,t.jsx)(b.uH,{whileHover:{y:-5},children:(0,t.jsx)(O.default,{href:i,passHref:!0,children:(0,t.jsx)(x.r,{isExternal:!0,children:(0,t.jsxs)(s.Ug,{p:4,bg:(0,o.useColorModeValue)("white","gray.800"),rounded:"xl",borderWidth:"1px",borderColor:(0,o.useColorModeValue)("gray.100","gray.700"),w:"100%",textAlign:"left",align:"start",spacing:4,_hover:{shadow:"md"},children:[(0,t.jsxs)(f.xu,{rounded:"lg",p:2,position:"relative",overflow:"hidden",lineHeight:0,boxShadow:"inset 0 0 1px 1px rgba(0, 0, 0, 0.015)",children:[(0,t.jsx)(f.xu,{bg:u.lightVibrant,position:"absolute",top:0,bottom:0,left:0,right:0,opacity:.25}),g?(0,t.jsx)(j.Od,{height:26,width:26,rounded:"md"}):(0,t.jsx)(y.E,{src:r,height:26,width:26,layout:"fixed",rounded:"md"})]}),(0,t.jsx)(s.gC,{align:"start",justify:"flex-start",spacing:1,maxW:"lg",h:"100%",children:(0,t.jsxs)(s.gC,{spacing:0,align:"start",flexGrow:1,children:[(0,t.jsx)(c.x,{fontWeight:"bold",fontSize:"md",noOfLines:2,color:l,children:n}),(0,t.jsx)(c.x,{fontSize:"sm",color:(0,o.useColorModeValue)("gray.500","gray.200"),children:a})]})})]})})})})})},k=r(6277),P=r(1388),S=!0,_=function(e){var n=e.skills,r=(0,i.useState)([]),x=r[0],f=r[1];i.useEffect((function(){f(n)}),[]);var j=function(e){e.length?f(n.filter((function(n){return n.type===e}))):f(n)};return(0,t.jsx)(P.Z,{title:"Skills",keywords:"rails, ruby, react, javascript, typescript",children:(0,t.jsx)(v.f6,{children:(0,t.jsxs)(s.gC,{spacing:8,children:[(0,t.jsx)(u.Z,{children:(0,t.jsxs)(s.gC,{children:[(0,t.jsx)(k.Z,{mt:0,mb:1,children:"Tech Stack"}),(0,t.jsx)(c.x,{fontSize:"xl",color:(0,o.useColorModeValue)("gray.500","gray.200"),maxW:"lg",textAlign:"center",children:"A list of my favorite tools and technologies that I use on a regular basis."})]})}),(0,t.jsx)(u.Z,{children:(0,t.jsxs)(a.mQ,{variant:"soft-rounded",colorScheme:"blue",align:"center",w:"100%",children:[(0,t.jsxs)(a.td,{display:"flex",flexWrap:"wrap",children:[(0,t.jsx)(a.OK,{bg:(0,o.useColorModeValue)("gray.100","gray.800"),color:(0,o.useColorModeValue)("gray.600","gray.500"),_selected:{color:"green.800",bg:"green.100"},mr:2,mt:2,onClick:function(){return j("")},children:(0,t.jsxs)(s.Ug,{spacing:1,children:[(0,t.jsx)(l.J,{as:g.QJi}),(0,t.jsx)(c.x,{children:"All"})]})}),(0,t.jsx)(a.OK,{bg:(0,o.useColorModeValue)("gray.100","gray.800"),color:(0,o.useColorModeValue)("gray.500","gray.500"),_selected:{color:(0,o.useColorModeValue)("gray.100","gray.800"),bg:(0,o.useColorModeValue)("gray.900","gray.100")},mr:2,mt:2,onClick:function(){return j("development")},children:(0,t.jsxs)(s.Ug,{spacing:1,children:[(0,t.jsx)(l.J,{as:p.lpX}),(0,t.jsx)(c.x,{children:"Web Development"})]})}),(0,t.jsx)(a.OK,{bg:(0,o.useColorModeValue)("gray.100","gray.800"),color:(0,o.useColorModeValue)("gray.600","gray.500"),_selected:{color:"green.800",bg:"green.100"},mr:2,mt:2,onClick:function(){return j("design")},children:(0,t.jsxs)(s.Ug,{spacing:1,children:[(0,t.jsx)(l.J,{as:h.vc2}),(0,t.jsx)(c.x,{children:"Web Design"})]})}),(0,t.jsx)(a.OK,{bg:(0,o.useColorModeValue)("gray.100","gray.800"),color:(0,o.useColorModeValue)("gray.600","gray.500"),_selected:{color:"red.800",bg:"red.100"},mr:2,mt:2,onClick:function(){return j("devops")},children:(0,t.jsxs)(s.Ug,{spacing:1,children:[(0,t.jsx)(l.J,{as:g.qer}),(0,t.jsx)(c.x,{children:"Devops"})]})})]}),(0,t.jsxs)(a.nP,{minHeight:"45vh",children:[(0,t.jsx)(a.x4,{px:0,children:(0,t.jsx)(b.uH,{variants:v.nC,initial:"hidden",animate:"visible",children:(0,t.jsx)(d.M,{columns:[1,1,2],spacing:4,mt:8,children:x.map((function(e,n){return(0,t.jsx)(C,{name:e.name,description:e.description,image:e.image,link:e.link},n)}))})})}),(0,t.jsx)(a.x4,{px:0,children:(0,t.jsx)(b.uH,{variants:v.nC,initial:"hidden",animate:"visible",children:(0,t.jsx)(d.M,{columns:[1,2],spacing:4,mt:8,children:x.map((function(e,n){return(0,t.jsx)(C,{name:e.name,description:e.description,image:e.image,link:e.link},n)}))})})}),(0,t.jsx)(a.x4,{px:0,children:(0,t.jsx)(b.uH,{variants:v.nC,initial:"hidden",animate:"visible",children:(0,t.jsx)(d.M,{columns:[1,2],spacing:4,mt:8,children:x.map((function(e,n){return(0,t.jsx)(C,{name:e.name,description:e.description,image:e.image,link:e.link},n)}))})})}),(0,t.jsx)(a.x4,{px:0,children:(0,t.jsx)(b.uH,{variants:v.nC,initial:"hidden",animate:"visible",children:(0,t.jsx)(d.M,{columns:[1,2],spacing:4,mt:8,children:x.map((function(e,n){return(0,t.jsx)(C,{name:e.name,description:e.description,image:e.image,link:e.link},n)}))})})})]})]})})]})})})}},99460:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tech-stack",function(){return r(27112)}])}},function(e){e.O(0,[874,517,220,774,888,179],(function(){return n=99460,e(e.s=n);var n}));var n=e.O();_N_E=n}]);