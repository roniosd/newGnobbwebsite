(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const r=document.getElementById("menuicon"),c=document.getElementById("navBar");r.addEventListener("click",()=>{r.classList.toggle("ri-menu-5-line"),r.classList.toggle("ri-close-line"),c.classList.toggle("top-28"),r.classList.contains("ri-close-line")?document.getElementById("herosection").style.marginTop="500px":document.getElementById("herosection").style.marginTop="0px"});new Swiper(".swiper",{speed:400,spaceBetween:30,autoplay:{delay:3e3,disableOnInteraction:!1},pagination:{el:".swiper-pagination",clickable:!0},grabCursor:!0});