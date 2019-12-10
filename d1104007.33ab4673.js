(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{248:function(e,t,a){"use strict";a.r(t);a(25),a(18),a(19),a(319),a(320),a(339);var n=a(0),r=a.n(n),l=a(290),o=a(341),i="undefined"!=typeof window?window.URLSearchParams:a(342).URLSearchParams;t.default=function(e){var t=new i(e.location.search),a="./"+t.get("code")+".js";if(!o.keys().includes(a))return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container container--fluid padding-horiz--xl",style:{marginTop:"8px"}},t.get("code")?"We could not find an explanation page for the error code "+t.get("code"):"No code query param specified. Could not show error page."));var n=o("./"+t.get("code")+".js").default;return r.a.createElement(l.a,null,r.a.createElement("div",{className:"container container--fluid padding-horiz--xl margin-top--xl",style:{marginBottom:"6.8rem"}},r.a.createElement(n,{errorCodeArgs:t.getAll("arg")})))}},291:function(e,t,a){"use strict";var n=a(1),r=a(0),l=a.n(r),o=a(287),i=a.n(o),c=a(289),s=a(286),m=a(288);t.a=function(){var e=Object(s.a)().siteConfig,t=void 0===e?{}:e,a=t.themeConfig,o=(void 0===a?{}:a).footer;if(!o)return null;var u=o.copyright,d=o.links,f=void 0===d?[]:d,p=o.logo;return l.a.createElement("footer",{className:i()("footer",{"footer--dark":"dark"===o.style})},l.a.createElement("div",{className:"container"},f&&f.length>0&&l.a.createElement("div",{className:"row footer__links"},f.map((function(e,a){return l.a.createElement("div",{key:a,className:"col footer__col"},null!=e.title?l.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?l.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,o,i){return l.a.createElement(r.Fragment,{key:o},l.a.createElement("li",{key:e.href||e.to,className:"footer__item"},e.label&&l.a.createElement(c.a,Object(n.a)({className:"footer__link-item"},e,e.href?{target:"_blank",rel:"noopener noreferrer",href:e.href}:{to:Object(m.a)(e.to)}),e.label),e.html&&l.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),i.length-1===o&&2===a&&l.a.createElement(l.a.Fragment,null,l.a.createElement("li",{key:"gh-star",className:"footer__item footer__item--gh"},l.a.createElement("iframe",{title:"github",src:"https://ghbtns.com/github-btn.html?user="+t.organizationName+"&repo="+t.projectName+"&type=star&count=true&size=small"})),l.a.createElement("li",{key:"license",className:"footer__item"},l.a.createElement("a",{href:Object(m.a)("img/icons/148705-essential-collection/license/license.html")},"License for icons"))))}))):null)}))),(p||u)&&l.a.createElement("div",{className:"text--center"},p&&p.src&&l.a.createElement("a",{className:"footer__logo margin-bottom--sm",href:"https://www.canopytax.com/",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{alt:p.alt,src:Object(m.a)(p.src)})),u)))}},341:function(e,t,a){var n={"./1.js":388};function r(e){var t=l(e);return a(t)}function l(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=l,e.exports=r,r.id=341},388:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n);a(71);function l(e){var t=e.children.split("\n").map((function(e){return e.trim()})).filter((function(e){return e.length>0})).join("\n");return r.a.createElement("pre",null,t)}function o(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"#1: singleSpa.start() was not called"),r.a.createElement("p",null,r.a.createElement("a",{href:"/docs/api#start"},"singleSpa.start()")," has not been called, 5000ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted."),r.a.createElement("h2",null,"To fix:"),r.a.createElement("div",null,r.a.createElement(l,null,"\n            // Insert this into your single-spa root config\n            singleSpa.start();\n          ")),r.a.createElement("h2",null,"Explanation:"),r.a.createElement("p",null,"The single-spa start() API exists to give you fine-grained control over performance. In the majority of use cases, you should call singleSpa.start() immediately after ",r.a.createElement("a",{href:"http://localhost:3000/docs/api#registerapplication"},"registering your applications"),". It was designed for situations where you want to start downloading a single-spa application's code while you're waiting for initial user data or context. To do that, call registerApplication() immediately but delay calling start until the data is loaded."))}a.d(t,"default",(function(){return o}))}}]);