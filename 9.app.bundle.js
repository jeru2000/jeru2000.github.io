(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{45:function(n,e,t){"use strict";var r=t(0),i=t.n(r),a=t(1),c=t(44),l=t.n(c);function o(){var n=function(n,e){e||(e=n.slice(0));return Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}(["\n  position: absolute;\n  width: 100%;\n  height: 25%;\n  bottom: 0;\n  left: 0;\n  z-index: 0;\n"]);return o=function(){return n},n}var u=Object(a.c)(l.a)(o());t.d(e,"a",function(){return d});var m={particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#00caf5"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#00caf5",opacity:.4,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0},d=function(){return i.a.createElement(u,{params:m})}},48:function(n,e,t){"use strict";t.d(e,"a",function(){return r});var r=function(n,e){var t=document.getElementById(n).getBoundingClientRect().top,r=window.pageYOffset,i=t-r,a=null;requestAnimationFrame(function n(t){null===a&&(a=t);var c,l,o,u=t-a,m=(c=u,l=r,o=i,(c/=e/2)<1?o/2*c*c+l:-o/2*(--c*(c-2)-1)+l);window.scrollTo(0,m),u<e&&requestAnimationFrame(n)})}},63:function(n,e,t){"use strict";t.r(e);var r=t(0),i=t.n(r),a=t(5),c=t(45),l=t(1),o=t(2),u=t(42);function m(){var n=w(["\n  color: white;\n"]);return m=function(){return n},n}function d(){var n=w(["\n  font-size: 4.7rem;\n  @media(","){\n    font-size: 1.7rem;\n  }\n"]);return d=function(){return n},n}function s(){var n=w(["\n  letter-spacing: -25px;\n  margin-right: 25px;\n  @media(","){\n    letter-spacing: -13px;\n    margin-right: 13px;\n  }\n"]);return s=function(){return n},n}function f(){var n=w(["\n  color: white;\n  font-family: ",";\n  font-size: 5.8rem;\n  margin-bottom: 1.5em;\n  line-height: 1em;\n  @media(","){\n    margin: 0;\n    font-size: 3rem;\n  }\n"]);return f=function(){return n},n}function g(){var n=w(["\n  &:first-child{\n    width: 72.5%;\n  }\n"]);return g=function(){return n},n}function p(){var n=w(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 4em;\n  align-items: center;\n  margin-top: 3em;\n  @media(","){\n    display: none;\n  }\n"]);return p=function(){return n},n}function v(){var n=w(["\n  z-index: 1000;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 4em;\n  align-items: center;\n  height: 100%;\n  @media(","){\n    grid-template-columns: 1fr;\n    & ",":first-child{\n      align-self: end;\n    }\n    & ",":last-child{\n      align-self: start;\n    }\n  }\n  @media(","){\n    grid-gap: 1em;  \n  }\n"]);return v=function(){return n},n}function b(){var n=w(["\n  background: none;\n"]);return b=function(){return n},n}function h(){var n=w(["\n  ","\n  position: relative;\n  @media(","){\n    padding: 4em 3em 0;\n    height: 100vh !important;\n  }\n"]);return h=function(){return n},n}function E(){var n=w(["\n  background: ",";\n  overflow: hidden;\n  position: relative;\n"]);return E=function(){return n},n}function w(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var y=l.c.section(E(),o.c),j=l.c.div(h(),u.a,o.i),O=l.c.div(b()),k=l.c.div(v(),o.j,O,O,o.i),z=l.c.div(p(),o.i),_=l.c.a(g()),P=l.c.h1(f(),o.e,o.i),x=l.c.span(s(),o.i),T=l.c.span(d(),o.i),C=l.c.p(m()),F=t(53),I=t(48),M=function(n){var e=n.idioma,t=Object(a.useTranslate)("heroServicesPage");return i.a.createElement(y,null,i.a.createElement(c.a,null),i.a.createElement(j,null,i.a.createElement(k,null,i.a.createElement(O,null,e?i.a.createElement(P,null,i.a.createElement(T,null,t("firstTitle"))," ",t("secondTitle")):i.a.createElement(P,null,i.a.createElement(T,null,t("firstTitle"))," ",i.a.createElement(x,null,"va"),t("secondTitle"))),i.a.createElement(O,null,i.a.createElement(C,null,t("firstDescription")),i.a.createElement(C,null,t("secondDescription")),i.a.createElement(z,null,i.a.createElement(_,{href:"#proyectos",onClick:function(){return Object(I.a)("proyectos",1e3)}},i.a.createElement(F.c,null)),i.a.createElement(_,{href:"#electronica",onClick:function(){return Object(I.a)("electronica",1e3)}},i.a.createElement(F.a,null)),i.a.createElement(_,{href:"#web",onClick:function(){return Object(I.a)("web",1e3)}},i.a.createElement(F.d,null)),i.a.createElement(_,{href:"#movil",onClick:function(){return Object(I.a)("movil",1e3)}},i.a.createElement(F.b,null)))))))};function S(){var n=H(["\n  padding-bottom: 1em;\n  position: relative;\n  @media(","){\n    font-size: .8rem;\n  }\n  &:before{\n    content: '';\n    width: 20px;\n    height: 20px;\n    background: ",";\n    left: -2em;\n    top: 0;\n    position: absolute;\n    border-radius: 50%;\n  }\n"]);return S=function(){return n},n}function A(){var n=H(["\n  list-style: none;\n  padding-left: 2em;\n"]);return A=function(){return n},n}function D(){var n=H(["\n  color: ",";\n  font-size: 2rem;\n  font-family: ",";\n  @media(","){\n    font-size: 1rem;  \n  }\n"]);return D=function(){return n},n}function q(){var n=H(["\n  width: 10%;\n  margin-right: 2em;\n  @media(","){\n    width: 10%;\n    margin-right: .5em;\n  }\n"]);return q=function(){return n},n}function B(){var n=H(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 2em;\n"]);return B=function(){return n},n}function J(){var n=H(["\n    & ","{\n      margin-left: 6em;\n      @media(","){\n        margin-left: 0 !important;\n        width: 122%;\n      }\n    }\n  "]);return J=function(){return n},n}function Y(){var n=H(["\n    background: #007993;\n    background:rgba(0,121,147,.1);\n    & ","{\n      @media(","){\n        & ",":first-child{\n          grid-row-start: 2;\n        }\n      }\n    }\n    & ","{\n      margin-left: -6em;\n      @media(","){\n        margin-left: -3em;\n        width: 122%\n      }\n    }\n  "]);return Y=function(){return n},n}function G(){var n=H(["\n  background: white;\n  ","\n  ","\n"]);return G=function(){return n},n}function K(){var n=H(["\n  background: none;\n"]);return K=function(){return n},n}function R(){var n=H(["\n  ","\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-gap: 5em;\n  @media(","){\n    grid-template-columns: 1fr;\n    height: auto;\n  }\n  @media(","){\n    padding-top: 2em;\n  }\n"]);return R=function(){return n},n}function X(){var n=H(["\n  background: none;\n"]);return X=function(){return n},n}function H(n,e){return e||(e=n.slice(0)),Object.freeze(Object.defineProperties(n,{raw:{value:Object.freeze(e)}}))}var L=l.c.div(X()),N=l.c.div(R(),u.a,o.j,o.i),Q=l.c.img(K()),U=l.c.section(G(),function(n){return!n.right&&Object(l.b)(Y(),N,o.j,L,Q,o.i)},function(n){return n.right&&Object(l.b)(J(),Q,o.i)}),V=l.c.div(B()),W=l.c.div(q(),o.i),Z=l.c.h3(D(),o.c,o.e,o.i),$=l.c.ul(A()),nn=l.c.li(S(),o.i,o.c),en=[{id:1,nombre:"KPIS"},{id:2,nombre:"PMI"},{id:3,nombre:"PMP"},{id:4,nombre:"Agile Methogoly"},{id:5,nombre:"Modelamiento y optmización de procesos"},{id:6,nombre:"Desarrollo de herramientas genrenciales"}],tn=function(n){var e=n.right,t=void 0===e||e,a=n.img,c=void 0===a?"https://jesusrojasweb.github.io/orbittas/img/servicio-proyectos.png":a,l=n.imagenServicio,o=n.nombre,u=void 0===o?"Gestión de Proyectos":o,m=n.servicios,d=void 0===m?en:m,s=n.id;return i.a.createElement(r.Fragment,null,t?i.a.createElement(function(){return i.a.createElement(U,{right:t,id:s},i.a.createElement(N,null,i.a.createElement(L,null,i.a.createElement(V,null,i.a.createElement(W,null,i.a.createElement("img",{src:c,alt:"nombre"})),i.a.createElement(Z,null,u)),i.a.createElement("div",null,i.a.createElement($,null,d.map(function(n){return i.a.createElement(nn,{key:n.id},n.nombre)})))),i.a.createElement(L,null,i.a.createElement(Q,{src:l,alt:"".concat(u," imagen")}))))},null):i.a.createElement(function(){return i.a.createElement(U,{right:t,id:s},i.a.createElement(N,null,i.a.createElement(L,null,i.a.createElement(Q,{src:l,alt:"".concat(u," imagen")})),i.a.createElement(L,null,i.a.createElement(V,null,i.a.createElement(W,null,i.a.createElement("img",{src:c,alt:"nombre"})),i.a.createElement(Z,null,u)),i.a.createElement("div",null,i.a.createElement($,null,d.map(function(n){return i.a.createElement(nn,{key:n.id},n.nombre)}))))))},null))},rn=t(54),an=t(46);function cn(){return(cn=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}var ln=function(){return Object(r.useEffect)(function(){var n=window.location.hash.split("#")[1];console.log(n),n&&Object(I.a)(n,1e3)},[!1]),i.a.createElement(r.Fragment,null,an.b.map(function(n){return i.a.createElement(tn,cn({},n,{SvgImage:rn.a}))}))};e.default=function(n){var e=n.idioma,t=n.navigate;return console.log(t),i.a.createElement(r.Fragment,null,i.a.createElement(M,{idioma:e}),i.a.createElement(ln,null))}}}]);