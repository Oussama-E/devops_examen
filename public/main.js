(()=>{var e={897:(e,t)=>{t.isEmpty=e=>!e||0===e.length}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}(()=>{try{const{isEmpty:r}=n(897),{isValide:a}=n(897),o=document.getElementById("gamerTagInput"),d=document.getElementById("gamerTagCheckButton"),g=document.getElementById("gamerTagFeedback");var e,t;o.addEventListener("change",(t=>{e=t.target.value})),d.addEventListener("click",(()=>1==(t=r(e))?"Gamer tag cannot be empty":(t=a(e))?"Gamer tag is valid":void(g.textContent=t)))}catch(e){console.error(JSON.stringify(e))}})()})();