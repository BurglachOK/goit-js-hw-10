import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                     */import{f as m,i as h}from"./assets/vendor-77e16229.js";function f(t){const a=Math.floor(t/864e5),d=Math.floor(t%864e5/36e5),e=Math.floor(t%864e5%36e5/6e4),l=Math.floor(t%864e5%36e5%6e4/1e3);return{days:a,hours:d,minutes:e,seconds:l}}const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){const o=t[0];o<=new Date?(h.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0):(s=o,n.disabled=!1)}},r=document.querySelector("#datetime-picker"),n=document.querySelector("[data-start]");n.disabled=!0;let s;m(r,y);r.addEventListener("input",t=>{s=t.target.value});n.addEventListener("click",()=>{const t=document.querySelector("[data-days]"),o=document.querySelector("[data-hours]"),c=document.querySelector("[data-minutes]"),u=document.querySelector("[data-seconds]");n.disabled=!0,r.disabled=!0,setTimeout(()=>{clearInterval(i),r.disabled=!1},s-Date.now());const i=setInterval(()=>{const a=Date.now(),d=s-a,e=f(d);t.textContent=e.days.toString().padStart(2,"0"),o.textContent=e.hours.toString().padStart(2,"0"),c.textContent=e.minutes.toString().padStart(2,"0"),u.textContent=e.seconds.toString().padStart(2,"0")},1e3)});
//# sourceMappingURL=commonHelpers.js.map
