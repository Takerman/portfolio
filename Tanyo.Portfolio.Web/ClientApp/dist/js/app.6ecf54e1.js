(function(t){function a(a){for(var e,r,o=a[0],l=a[1],c=a[2],u=0,d=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&d.push(i[r][0]),i[r]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);v&&v(a);while(d.length)d.shift()();return n.push.apply(n,c||[]),s()}function s(){for(var t,a=0;a<n.length;a++){for(var s=n[a],e=!0,r=1;r<s.length;r++){var l=s[r];0!==i[l]&&(e=!1)}e&&(n.splice(a--,1),t=o(o.s=s[0]))}return t}var e={},i={app:0},n=[];function r(t){return o.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e5e97":"ab59516e","chunk-34f9740e":"2a31ecf9","chunk-34fb4948":"713e49d4","chunk-34fd6564":"14490858","chunk-34fd7124":"c6b5f934","chunk-3527c388":"f87b5f6b"}[t]+".js"}function o(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.e=function(t){var a=[],s=i[t];if(0!==s)if(s)a.push(s[2]);else{var e=new Promise((function(a,e){s=i[t]=[a,e]}));a.push(s[2]=e);var n,l=document.createElement("script");l.charset="utf-8",l.timeout=120,o.nc&&l.setAttribute("nonce",o.nc),l.src=r(t);var c=new Error;n=function(a){l.onerror=l.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var e=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;c.message="Loading chunk "+t+" failed.\n("+e+": "+n+")",c.name="ChunkLoadError",c.type=e,c.request=n,s[1](c)}i[t]=void 0}};var u=setTimeout((function(){n({type:"timeout",target:l})}),12e4);l.onerror=l.onload=n,document.head.appendChild(l)}return Promise.all(a)},o.m=t,o.c=e,o.d=function(t,a,s){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)o.d(s,e,function(a){return t[a]}.bind(null,e));return s},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/",o.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var v=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"3d68":function(t,a,s){"use strict";var e=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"blog-area section-gap"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"main_title"},[s("p",{staticClass:"top_text"},[t._v("My blog "),s("span")]),s("h2",[t._v(" Latest Stories From "),s("br"),t._v(" My blog ")])])])]),s("div",{staticClass:"row"})])])}],n={name:"Blog",created:function(){this.loadBlogposts()},data:function(){return{blogposts:[]}},props:{},methods:{loadBlogposts:function(){}}},r=n,o=s("2877"),l=Object(o["a"])(r,e,i,!1,null,"051013ea",null);a["a"]=l.exports},"56d7":function(t,a,s){"use strict";s.r(a);s("cadf"),s("551c"),s("f751"),s("097d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",[s("app-header"),s("router-view"),s("app-footer")],1)},n=[],r=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"footer_area"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"footer_top flex-column"},[s("div",{staticClass:"footer_logo"},[s("div",{staticClass:"d-lg-block d-none"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light justify-content-center"},[s("div",{staticClass:"collapse navbar-collapse offset"},[s("ul",{staticClass:"nav navbar-nav menu_nav mx-auto"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:"/"}},[t._v("HOME")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:"/cv"}},[t._v("CV")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:"/pricing"}},[t._v("PRICING")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:"/portfolio"}},[t._v("PORTFOLIO")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:"/blog"}},[t._v("BLOG")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link text-white",attrs:{to:"/contacts"}},[t._v("CONTACTS")])],1)])])])])]),t._m(0)])])]),t._m(1)])])},o=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"footer_social mt-lg-0 mt-4"},[s("a",{attrs:{href:"https://www.facebook.com/dev.tanyoivanov",target:"_blank"}},[s("i",{staticClass:"fab fa-facebook-f"})]),s("a",{attrs:{href:"https://www.linkedin.com/in/tanyo-ivanov/",target:"_blank"}},[s("i",{staticClass:"fab fa-linkedin"})]),s("a",{attrs:{href:"https://twitter.com/TanyoIvanov",target:"_blank"}},[s("i",{staticClass:"fab fa-twitter"})]),s("a",{attrs:{href:"https://www.youtube.com/channel/UCPTCSnkn2CtiVFc-EGdJycg",target:"_blank"}},[s("i",{staticClass:"fab fa-youtube"})]),s("a",{attrs:{href:"skype:live:contact_44094?chat",target:"_blank"}},[s("i",{staticClass:"fab fa-skype"})]),s("a",{attrs:{href:"https://www.github.com/takerman",target:"_blank"}},[s("i",{staticClass:"fab fa-github"})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"row footer_bottom justify-content-center"},[s("p",{staticClass:"col-lg-8 col-sm-12 footer-text"},[t._v(" Copyright © "),t._v("2021 All rights reserved by "),s("a",{attrs:{href:"https://takerman.net",target:"_blank"}},[t._v("Takerman")]),t._v(" 2021 ")])])}],l={name:"AppFooter",created:function(){},data:function(){return{}},props:{},methods:{}},c=l,u=s("2877"),v=Object(u["a"])(c,r,o,!1,null,"6caa5564",null),d=v.exports,p=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"header_area"},[s("div",{staticClass:"main_menu"},[s("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[s("div",{staticClass:"container"},[t._m(0),t._m(1),s("div",{staticClass:"collapse navbar-collapse offset",attrs:{id:"navbarSupportedContent"}},[s("ul",{staticClass:"nav navbar-nav menu_nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("HOME")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/cv"}},[t._v("CV")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/pricing"}},[t._v("PRICING")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/portfolio"}},[t._v("PORTFOLIO")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/blog"}},[t._v("BLOG")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/contacts"}},[t._v("CONTACTS")])],1)])])])])])])},m=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"navbar-brand logo_h",attrs:{href:"/"}},[s("img",{staticClass:"header-image",attrs:{src:"/img/profile/logo.png",alt:""}})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"icon-bar"}),s("span",{staticClass:"icon-bar"}),s("span",{staticClass:"icon-bar"})])}],f={name:"AppHeader",created:function(){},data:function(){},props:{},methods:{}},g=f,h=Object(u["a"])(g,p,m,!1,null,"3154fb66",null),C=h.exports,b={data:function(){return{}},components:{AppFooter:d,AppHeader:C},created:function(){}},_=b,w=Object(u["a"])(_,i,n,!1,null,null,null),k=w.exports,y=s("8c4f"),x=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("main",[s("section",{staticClass:"home_banner_area",staticStyle:{background:"url(/img/profile/home-banner.png) no-repeat top center"}},[s("div",{staticClass:"banner_inner"},[t._m(0),s("progress-bar")],1)]),s("stats"),s("about"),s("services"),s("testimonials"),s("trustpilot"),s("blog")],1)},O=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center justify-content-between"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"banner_content"},[s("h3",[t._v("HEY-THERE !")]),s("h1",{staticClass:"text-uppercase"},[t._v("I'M TANYO IVANOV")]),s("h5",{staticClass:"text-uppercase"},[t._v("Software Developer")]),s("div",{staticClass:"social_icons my-5"},[s("a",{attrs:{href:"https://linkedin.com/in/tanyo-ivanov/",target:"_blank",title:"LinkedIn"}},[s("i",{staticClass:"ti-linkedin"})]),s("a",{attrs:{href:"https://github.com/takerman",target:"_blank",title:"GitHub"}},[s("i",{staticClass:"ti-github"})]),s("a",{attrs:{href:"https://www.youtube.com/channel/UCPTCSnkn2CtiVFc-EGdJycg",target:"_blank",title:"YouTube"}},[s("i",{staticClass:"ti-youtube"})]),s("a",{staticClass:"text-sm-left",attrs:{href:"https://meetings.hubspot.com/contact683",target:"_blank",title:"Schedule a meeting"}},[s("i",{staticClass:"ti-calendar"}),t._v(" schedule")]),s("div",{staticClass:"fb-like",attrs:{"data-href":"https://tanyoivanov.net","data-show-faces":"true","data-layout":"button_count","data-action":"like","data-size":"small","data-share":"true"}})]),s("div",{staticClass:"button-box col-lg-12"},[s("a",{staticClass:"primary_btn",attrs:{role:"button",href:"/files/Tanyo_Ivanov_CV.pdf",target:"_blank"}},[s("span",[t._v("CV")])]),s("a",{staticClass:"primary_btn",attrs:{role:"button",href:"/files/Brochure.pdf",target:"_blank"}},[s("span",[t._v("BROCHURE")])])])])]),s("div",{staticClass:"col-lg-4"},[s("div",{staticClass:"home_right_img"},[s("img",{staticClass:"img-fluid",attrs:{src:"/img/banner/home-right.png",alt:""}})])])])])}],S=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"about_area",staticStyle:{"margin-top":"80px"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-start align-items-center"},[s("div",{staticClass:"col-lg-5"},[s("div",{staticClass:"about_img"},[s("img",{attrs:{src:"/img/profile/about-us.png",alt:""}})])]),s("div",{staticClass:"offset-lg-1 col-lg-5"},[s("div",{staticClass:"main_title text-left row"},[s("p",{staticClass:"top_text"},[t._v("About me "),s("span")]),s("h2",[t._v(" Software Developer ")]),s("p",[t._v(" Software developer with long years of experience in various technologies, projects, environments and companies. A person who don't stop until delivery. A person who invests from himself in his work. Able to learn new technologies in short period of time when needed. ")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("img",{staticStyle:{"margin-left":"auto","margin-right":"auto",display:"block"},attrs:{src:"/img/specs/chart.png",alt:"Technologies chart"}})])])])])}],j={name:"About",created:function(){},data:function(){return{}},props:{},methods:{}},T=j,$=Object(u["a"])(T,S,E,!1,null,"6eaa22a5",null),I=$.exports,P=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},A=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"services_area"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"main_title"},[s("p",{staticClass:"top_text"},[t._v("Services"),s("span")]),s("h2",[t._v(" What can I do for You ")])])])]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 col-md-6 mb-4 mb-lg-0"},[s("div",{staticClass:"service_item"},[s("img",{attrs:{src:"/img/services/s1.png",alt:""}}),s("h4",[t._v("Software Development")]),s("p",[t._v(" Web, Desktop and Mobile Development. Software architecture, optimisation, automated testing, components development, bugfixing, servers management and much more... ")])])]),s("div",{staticClass:"col-lg-4 col-md-6 mb-4 mb-lg-0"},[s("div",{staticClass:"service_item"},[s("img",{attrs:{src:"/img/services/s2.png",alt:""}}),s("h4",[t._v("People mentoring")]),s("p",[t._v(" Teaching of new staff, preparation of learning materials and documentation. Tasks and tickets management, low-level project management and much more... ")])])]),s("div",{staticClass:"col-lg-4 col-md-6 mb-4 mb-lg-0"},[s("div",{staticClass:"service_item"},[s("img",{attrs:{src:"/img/services/s3.png",alt:""}}),s("h4",[t._v("CMS deployment")]),s("p",[t._v(" Deployment, configuration and development of components for CMS systems. Preparation for production ussage, users management, testing, security and much more... ")])])])])])])}],M={name:"Services",created:function(){},data:function(){return{}},props:{},methods:{}},B=M,H=Object(u["a"])(B,P,A,!1,null,"3c33e388",null),R=H.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"testimonial_area",staticStyle:{"padding-bottom":"240px !important"}},[s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-12"},[s("div",{staticClass:"main_title"},[s("p",{staticClass:"top_text"},[t._v("My testimonials "),s("span")]),s("h2",[t._v(" Honourable Clients Says "),s("br"),t._v(" About Me ")])])])]),s("div",{staticClass:"owl-carousel owl-theme testimonial-slider"},[s("div",{staticClass:"testimonial-item"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"testi-img mb-4 mb-lg-0"},[s("img",{attrs:{src:"/img/testimonials/anders.jpg",alt:""}})])]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"testi-right"},[s("h4",[t._v("Anders Person")]),s("p",[s("small",[t._v("CEO, Comstream")])]),s("p",[t._v(" In our opinion, Tanyo conducted his tasks in an excellent way. He was appreciated by his colleagues and showed a great attitude towards work. I would recommend Tanyo for a similar position based on his professional and personal skills. "),s("a",{attrs:{href:"/files/recomendations/AndersPersson.pdf",target:"_blank"}},[s("strong",[t._v("Recomendation")])])]),s("ul",{staticClass:"star_rating mt-3"},[s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",{staticClass:"disable"},[s("span",[s("i",{staticClass:"fas fa-star"})])])])])])])]),s("div",{staticClass:"testimonial-item"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"testi-img mb-4 mb-lg-0"},[s("img",{attrs:{src:"/img/testimonials/ivo.jpg",alt:""}})])]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"testi-right"},[s("h4",[t._v("Ivaylo Ivanov")]),s("p",[s("small",[t._v("CTO, BGO Software")])]),s("p",[t._v(" Tanyo was with us for long time and contributed to an important project in our company. He gave some creative ideas and stayed in touch after leaving the company. "),s("a",{attrs:{href:"/files/recomendations/IvayloIvanov.pdf",target:"_blank"}},[s("strong",[t._v("Recomendation")])])]),s("ul",{staticClass:"star_rating mt-4"},[s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])])])])])])]),s("div",{staticClass:"testimonial-item"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"testi-img mb-4 mb-lg-0"},[s("img",{attrs:{src:"/img/testimonials/ivan.jpg",alt:""}})])]),s("div",{staticClass:"col-lg-6"},[s("div",{staticClass:"testi-right"},[s("h4",[t._v("Ivan Lekushev")]),s("p",[s("small",[t._v("CEO, BGO Software")])]),s("p",[t._v(" Tanyo would be a good part in every team as he was an important part of our. I would definately recommend Tanyo to his next employers. "),s("a",{attrs:{href:"/files/recomendations/IvanLekushev.pdf",target:"_blank"}},[s("strong",[t._v("Recomendation")])])]),s("ul",{staticClass:"star_rating mt-3"},[s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])]),s("li",[s("span",[s("i",{staticClass:"fas fa-star"})])])])])])])])])])])}],F={name:"Testimonials",created:function(){},data:function(){return{}},props:{},methods:{}},G=F,D=Object(u["a"])(G,L,N,!1,null,"3c822e27",null),V=D.exports,J=s("3d68"),U=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},Y=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("section",{staticClass:"statistics_area"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row justify-content-lg-start justify-content-center"},[s("div",{staticClass:"col-lg-2 col-md-3"},[s("div",{staticClass:"statistics_item"},[s("h3",[s("span",{staticClass:"counter"},[t._v("6")]),t._v("+")]),s("p",[t._v("Happy Customer")])])]),s("div",{staticClass:"col-lg-2 col-md-3"},[s("div",{staticClass:"statistics_item"},[s("h3",[s("span",{staticClass:"counter"},[t._v("100")]),t._v("+")]),s("p",[t._v("Ticket Solved")])])]),s("div",{staticClass:"col-lg-2 col-md-3"},[s("div",{staticClass:"statistics_item"},[s("h3",[s("span",{staticClass:"counter"},[t._v("9")]),t._v("/10")]),s("p",[t._v("Average Rating")])])])])])])}],W=(s("c5f6"),{name:"Stats",created:function(){},data:function(){return{happyCustomers:Number,solvedTickets:Number,averageRatting:Number}},props:{},methods:{}}),q=W,z=Object(u["a"])(q,U,Y,!1,null,"074922c0",null),K=z.exports,Q=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-center justify-content-between"},[s("div",{staticClass:"col-lg-6",staticStyle:{top:"-40px","font-weight":"bold"}},[s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-success",staticStyle:{width:"80%"}},[t._v("Front-End 8/10")])]),s("br"),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-success",staticStyle:{width:"90%"}},[t._v("Back-End 9/10")])]),s("br"),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-success",staticStyle:{width:"70%"}},[t._v("Databases 7/10")])]),s("br"),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-success",staticStyle:{width:"80%"}},[t._v("Web 8/10")])]),s("br"),s("div",{staticClass:"progress"},[s("div",{staticClass:"progress-bar bg-success",staticStyle:{width:"70%"}},[t._v("Desktop 7/10")])])])])])}],Z={name:"ProgressBar",created:function(){},data:function(){return{bars:[]}},props:{},methods:{}},tt=Z,at=Object(u["a"])(tt,Q,X,!1,null,"26823737",null),st=at.exports,et=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"trustpilot-widget",attrs:{"data-locale":"en-US","data-template-id":"5419b6a8b0d04a076446a9ad","data-businessunit-id":"5e5ad03c09f40400014b10e9","data-style-height":"24px","data-style-width":"100%","data-theme":"light"}},[s("a",{attrs:{href:"https://www.trustpilot.com/review/tivanov.takerman.net",target:"_blank",rel:"noopener"}},[t._v("Trustpilot")])])}],nt={name:"Trustpilot",created:function(){},data:function(){return{}},props:{},methods:{}},rt=nt,ot=Object(u["a"])(rt,et,it,!1,null,"e331e2ae",null),lt=ot.exports,ct={name:"home",components:{About:I,Services:R,Blog:J["a"],Testimonials:V,Stats:K,ProgressBar:st,Trustpilot:lt},data:function(){return{}},created:function(){},watch:{},methods:{}},ut=ct,vt=Object(u["a"])(ut,x,O,!1,null,"5ef09e37",null),dt=vt.exports;e["a"].use(y["a"]);var pt=new y["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:dt},{path:"/home",name:"home",component:dt},{path:"/blog",name:"blog",component:function(){return s.e("chunk-34f9740e").then(s.bind(null,"fd3f"))}},{path:"/cv",name:"cv",component:function(){return s.e("chunk-3527c388").then(s.bind(null,"3f23"))}},{path:"/portfolio",name:"portfolio",component:function(){return s.e("chunk-34fd6564").then(s.bind(null,"c9e5"))}},{path:"/pricing",name:"pricing",component:function(){return s.e("chunk-34fb4948").then(s.bind(null,"dbc9"))}},{path:"/contacts",name:"contacts",component:function(){return s.e("chunk-34fd7124").then(s.bind(null,"c93c"))}},{path:"*",name:"NotFound",component:function(){return s.e("chunk-2d0e5e97").then(s.bind(null,"9703"))}}]});new e["a"]({router:pt,render:function(t){return t(k)}}).$mount("#app")}});
//# sourceMappingURL=app.6ecf54e1.js.map