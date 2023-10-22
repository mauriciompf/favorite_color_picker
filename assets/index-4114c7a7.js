(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function c(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=c(t);fetch(t.href,n)}})();const u=Array.from(document.querySelectorAll(".item")).map(o=>o.context);function m(o){u.push(o)}function i(o,e){const c=document.createElement(o);if(e)for(const r in e)e.hasOwnProperty(r)&&c.setAttribute(r,e[r]);return c}const l=[];async function p(o){try{document.body.style.backgroundColor=o,await navigator.clipboard.writeText(o);const e=l[l.length-1];if(o!==e&&(l.push(o),!document.querySelector(".float-message"))){const r=i("p",{class:"float-message"});r.textContent="Color copied to clipboard.",document.querySelector("main").appendChild(r),setTimeout(()=>{r.remove()},1250)}}catch(e){console.error(`Failed to copy: ${e}`)}}const y=document.querySelector(".favorite-colors"),g=document.querySelector(".favorite-colors__list");function C(){const o=window.getComputedStyle(document.body).getPropertyValue("background-color");if(!u.includes(o)){const e=i("li",{class:"favorite-colors__list-item",title:"Copy color"}),c=i("div",{class:"favorite-colors__list-item-color"});e.textContent=o,c.style.backgroundColor=o,e.appendChild(c),g.appendChild(e),e.addEventListener("click",()=>{p(o)}),m(o),y.classList.add("active")}}function a(){const{floor:o,random:e}=Math,c=Array(3).fill(null).map(()=>o(e()*255)),r=(e()*1).toFixed(2),t=[];for(let s=0;s<3;s++)t.push(c[s]);return t.join(", "),`rgba(${t}, ${r})`}function f(){return document.body.style.backgroundColor=a(),a()}const d=[];function b(){return d.push(window.getComputedStyle(document.body).getPropertyValue("background-color")),console.log(d),f()}const v=document.querySelector(".current-bg__rgba");function h(){v.textContent=window.getComputedStyle(document.body).getPropertyValue("background-color")}const w=document.querySelector(".btn-wrapper__save-btn"),L=document.querySelector(".btn-wrapper__next-btn");window.addEventListener("DOMContentLoaded",f);window.addEventListener("DOMContentLoaded",h);w.addEventListener("click",C);L.addEventListener("click",b);