import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-BbbuE1sJ.js";const a=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]");n.disabled=!0;const h=document.querySelectorAll("[data-days]"),f=document.querySelectorAll("[data-hours]"),y=document.querySelectorAll("[data-minutes]"),S=document.querySelectorAll("[data-seconds]");let r;const b={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<new Date?(m.error({message:"Please choose a date in the future"}),n.disabled=!0):(r=t,n.disabled=!1),console.log(r)}};l(a,b);n.addEventListener("click",()=>{n.disabled=!0,a.disabled=!0;const e=setInterval(()=>{const t=r-new Date,o=p(t);h[0].textContent=s(o.days),f[0].textContent=s(o.hours),y[0].textContent=s(o.minutes),S[0].textContent=s(o.seconds),t<=1e3&&(clearInterval(e),a.disabled=!1)},1e3)});function p(e){const d=Math.floor(e/864e5),c=Math.floor(e%864e5/36e5),u=Math.floor(e%864e5%36e5/6e4),i=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:c,minutes:u,seconds:i}}function s(e){return String(e).padStart(2,"0")}
//# sourceMappingURL=1-timer.js.map
