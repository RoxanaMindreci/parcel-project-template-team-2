var e,t=0,n=document.querySelectorAll(".reviews"),r=document.querySelectorAll(".swiper-bullets");function i(){var r=window.innerWidth;e=r>=1158?3:r>=768&&r<1158?2:1;for(var i=0;i<n.length;i++)n[i].style.display=i<t||i>=t+e?"none":"flex"}function d(e){t=e,i();for(var n=0;n<r.length;n++)n===e?r[n].classList.add("active"):r[n].classList.remove("active")}i(),window.addEventListener("resize",(function(){i()}));for(var l=0;l<r.length;l++)r[l].addEventListener("click",(function(){d(Array.from(r).indexOf(this))}));var c,o=0,a=document.querySelectorAll(".card-products li"),s=document.querySelectorAll(".swiper-bullets-products");function u(){var e=window.innerWidth;c=e>=1158?4:e>=768&&e<1158?3:1;for(var t=0;t<a.length;t++)a[t].style.display=t<o||t>=o+c?"none":"flex"}function m(e){o=e,u();for(var t=0;t<s.length;t++)t===e?s[t].classList.add("active"):s[t].classList.remove("active")}u(),window.addEventListener("resize",(function(){u()}));for(l=0;l<s.length;l++)s[l].addEventListener("click",(function(){m(Array.from(s).indexOf(this))}));var v=0,y=document.querySelectorAll(".weight-container"),f=document.querySelectorAll(".swiper-bullets-buy");function b(){if(window.innerWidth<768)for(var e=0;e<y.length;e++)e===v?(y[e].style.display="flex",f[e].classList.add("active")):(y[e].style.display="none",f[e].classList.remove("active"));else for(e=0;e<y.length;e++)y[e].style.display="flex",f[e].classList.add("active")}for(l=0;l<f.length;l++)f[l].addEventListener("click",(function(){var e=Array.from(f).indexOf(this);v=e,b()}));window.addEventListener("resize",(function(){b()})),(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),n=document.querySelector(".js-close-menu"),r=()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")};t.addEventListener("click",r),n.addEventListener("click",r),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}))})(),document.querySelectorAll('a[href^="#"]').forEach((e=>{e.addEventListener("click",(function(e){e.preventDefault(),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})}))})),(()=>{const e=document.querySelector("[data-modal-open-reviews]"),t=document.querySelector("[data-modal-close-reviews]"),n=document.querySelector("[data-modal-reviews]"),r=document.querySelector("[data-modal-open-subscribe]"),i=document.querySelector("[data-modal-close-subscribe]"),d=document.querySelector("[data-modal-subscribe]"),l=document.querySelector("[data-modal-open-buy]"),c=document.querySelector("[data-modal-close-buy]"),o=document.querySelector("[data-modal-buy]");e.addEventListener("click",u.bind(null,n)),t.addEventListener("click",u.bind(null,n)),r.addEventListener("click",u.bind(null,d)),i.addEventListener("click",u.bind(null,d)),l.addEventListener("click",u.bind(null,o)),c.addEventListener("click",u.bind(null,o));const a=document.querySelector("[data-modal-open-buy-main]"),s=document.querySelector("[data-modal-close-buy-main]");document.querySelector("[data-modal-buy-main]");function u(e){e.classList.toggle("is-hidden")}a.addEventListener("click",u.bind(null,o)),s.addEventListener("click",u.bind(null,o))})();
//# sourceMappingURL=index.74c7d075.js.map
