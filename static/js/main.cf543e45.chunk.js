(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},40:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(4),r=n.n(o),i=(n(15),n(9)),s=n(3),u=n(7),l=(n(16),n(17),n(1));var j=function(e){var t=e.onSubmit,n=Object(c.useState)(""),a=Object(s.a)(n,2),o=a[0],r=a[1];return Object(l.jsx)("header",{className:"Searchbar",children:Object(l.jsxs)("form",{className:"SearchForm",onSubmit:function(e){if(e.preventDefault(),""===o.trim())return u.b.warn("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0439 \u0437\u0430\u043f\u0440\u043e\u0441");t(o),r("")},children:[Object(l.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(l.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(l.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,name:"searchQuery",onChange:function(e){r(e.currentTarget.value.toLowerCase())}})]})})},m=function(e){var t=e.src,n=e.imageForModal,c=e.tags;return Object(l.jsx)("li",{className:"ImageGalleryItem",children:Object(l.jsx)("img",{src:t,alt:c,"data-img":n,className:"ImageGalleryItem-image"})})},b=function(e){var t=e.gallery,n=e.onImageClick;return Object(l.jsx)("ul",{className:"ImageGallery",onClick:n,children:t.map((function(e){var t=e.id,n=e.webformatURL,c=e.largeImageURL,a=e.tags;return Object(l.jsx)(m,{src:n,imageForModal:c,tags:a},t)}))})},d=function(e){var t=e.text,n=e.onClick;return Object(l.jsx)("button",{className:"Button",type:"button",onClick:n,children:t})},h=n(10),g=n.n(h);n(39);var f={fetchImages:function(e,t){return fetch("".concat("https://pixabay.com/api/?image_type=photo&orientation=horizontal","&q=").concat(e,"&page=").concat(t,"&per_page=12&key=").concat("21946293-ddb661a7c3de00e68a212d36c")).then((function(e){return e.ok?e.json():Promise.reject(new Error("No response from server"))}))}},O=document.querySelector("#modal-root");function p(e){var t=e.imageForModal,n=e.tags,a=e.onClose;Object(c.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&a()};return Object(o.createPortal)(Object(l.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&a()},children:Object(l.jsx)("div",{className:"Modal",children:Object(l.jsx)("img",{src:t,alt:n})})}),O)}var v="idle",x="pending",S="resolved",w="rejected";var y=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(c.useState)(1),r=Object(s.a)(o,2),m=r[0],h=r[1],O=Object(c.useState)([]),y=Object(s.a)(O,2),F=y[0],C=y[1],k=Object(c.useState)(v),N=Object(s.a)(k,2),I=N[0],E=N[1],L=Object(c.useState)(!1),M=Object(s.a)(L,2),T=M[0],B=M[1],G=Object(c.useState)(""),P=Object(s.a)(G,2),D=P[0],q=P[1];Object(c.useEffect)((function(){if(n){E(x),f.fetchImages(n,m).then((function(e){C((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))}))})).catch((function(e){E(w)})).finally((function(){E(S),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))}}),[n,m]);var J=function(){B(!T)};return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{onSubmit:function(e){a(e),h(1),C([])},value:n}),I===x&&Object(l.jsx)(g.a,{type:"ThreeDots",color:"#00BFFF",height:200,width:200,timeout:3e3}),I===w&&Object(l.jsx)("h1",{children:"Something went wrong"}),I===S&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{gallery:F,onImageClick:function(e){"IMG"===e.target.nodeName&&(q(e.target.dataset.img),J())}}),Object(l.jsx)(d,{onClick:function(){h((function(e){return e+1}))},text:"Load more"})]}),T&&Object(l.jsx)(p,{onClose:J,imageForModal:D}),Object(l.jsx)(u.a,{position:"top-center",autoClose:3e3})]})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,41)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),a(e),o(e),r(e)}))};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(y,{})}),document.getElementById("root")),F()}},[[40,1,2]]]);
//# sourceMappingURL=main.cf543e45.chunk.js.map