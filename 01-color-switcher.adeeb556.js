const t=document.querySelector("button[data-start]");console.log(t);const e=document.querySelector("button[data-stop]");console.log(e),t.addEventListener("click",(function(n){n.preventDefault(),t.disabled=!0,e.disabled=!1,o=setInterval((()=>{const t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;document.body.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(function(n){n.preventDefault(),clearInterval(o),t.disabled=!1,e.disabled=!0}));let o=null;
//# sourceMappingURL=01-color-switcher.adeeb556.js.map
