var m=Object.defineProperty;var f=(a,t,n)=>t in a?m(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n;var r=(a,t,n)=>f(a,typeof t!="symbol"?t+"":t,n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();class g{constructor(){r(this,"canvas");r(this,"ctx");r(this,"points",[]);r(this,"lines",[]);r(this,"angle",0);r(this,"isAnimating",!0);r(this,"animationFrame",null);r(this,"animate",()=>{if(!this.isAnimating)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.angle+=.01+(Math.random()-.5)*.002;const t=250+Math.sin(this.angle)*10;this.ctx.strokeStyle=`hsla(${t}, 82%, 66%, 0.6)`,this.ctx.lineWidth=2.5,this.ctx.shadowColor="rgba(255, 255, 255, 0.8)",this.ctx.shadowBlur=15+Math.sin(this.angle*2)*2;const n=this.points.map(i=>{const e=this.rotatePoint(i);return this.project(e)});this.lines.forEach(i=>{const e=n[i.start],s=n[i.end];this.ctx.beginPath(),this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(s.x,s.y),this.ctx.stroke()}),this.animationFrame=requestAnimationFrame(this.animate)});this.canvas=document.createElement("canvas"),this.canvas.className="vector-bg",this.ctx=this.canvas.getContext("2d"),this.init(),this.animate()}init(){this.points=[{x:-200,y:-200,z:-200},{x:200,y:-200,z:-200},{x:200,y:200,z:-200},{x:-200,y:200,z:-200},{x:-200,y:-200,z:200},{x:200,y:-200,z:200},{x:200,y:200,z:200},{x:-200,y:200,z:200}],this.lines=[{start:0,end:1},{start:1,end:2},{start:2,end:3},{start:3,end:0},{start:4,end:5},{start:5,end:6},{start:6,end:7},{start:7,end:4},{start:0,end:4},{start:1,end:5},{start:2,end:6},{start:3,end:7}],window.addEventListener("resize",()=>this.resize()),this.resize()}resize(){this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight}rotatePoint(t){const n=Math.cos(this.angle),i=Math.sin(this.angle),e=Math.cos(this.angle*.5),s=Math.sin(this.angle*.5),o=t.x*n-t.z*i,c=t.x*i+t.z*n,p=t.y*e-c*s,u=t.y*s+c*e;return{x:o,y:p,z:u}}project(t){const n=1e3/(1e3+t.z);return{x:t.x*n+this.canvas.width/2,y:t.y*n+this.canvas.height/2}}toggleAnimation(t){this.isAnimating=t!==void 0?t:!this.isAnimating,this.isAnimating?this.animate():this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null)}getCanvas(){return this.canvas}}const l=()=>new g;function h(){const a=document.querySelector("#app");if(!a)throw new Error("App element not found");a.innerHTML=`
  <header class="header">
    <nav>
      <a href="#links" class="nav-link">Neither</a>
      <a href="#links" class="nav-link">Do</a>
      <a href="#links" class="nav-link">These</a>
      <a href="#links" class="nav-link">Links</a>
    </nav>
  </header>
  <main>
    <section id="home" class="hero">
      <h1>Murf</h1>
      <p class="title">Full Stack Developer</p>
      <p class="title" style="font-size: 1.2rem; position: relative; top: -20px;">Audio Engineer</p>
      <p class="title" style="font-size: 1.2rem; position: relative; top: -40px;">Test Equals</p>
      <p class="subtitle" style="width: 70%; position: relative; top: -40px;">Doing all sorts of audio, AI, and other kinds of experimental crap :P</p>
      <div class="cta-buttons" style="position: relative; top: -40px;">
        <a href="#links" class="button primary">These Buttons</a>
        <a href="#links" class="button secondary">Don't Do Shit Yet</a>
      </div>
    </section>
  </main>
  `;const t=l();a.prepend(t.getCanvas()),document.querySelectorAll('a[href="#links"]').forEach(i=>{i.addEventListener("click",e=>{e.preventDefault(),a.innerHTML="",d()})});const n=document.querySelector("h1");if(n){let i=250,e=1;const s=()=>{i+=.2*e,i>=260&&(e=-1),i<=240&&(e=1),n.style.color=`hsla(${i}, 82%, 66%, 1)`,requestAnimationFrame(s)};s()}}function d(){const a=document.querySelector("#app");if(!a)throw new Error("App element not found");a.innerHTML=`
    <header class="header">
      <nav>
        <a href="#" class="nav-link" id="back-button">Back</a>
      </nav>
    </header>
    <main>
      <section id="links" class="hero">
        <h1>Murf</h1>
        <p class="title">Shitty projects <br/>I promise I have cool shit coming soonish</p>
        <div class="links-container">
          <a href="https://TheGods.fm" class="link-card" target="_blank" rel="noopener">
            <span class="link-icon">🐙</span>
            <span class="link-text">TheGods.fm</span>
          </a>
          <a href="https://Murfs.law" class="link-card" target="_blank" rel="noopener">
            <span class="link-icon">🐦</span>
            <span class="link-text">Trees Note Taking App Practice Thing</span>
          </a>
          <a href="https://askuber.xyz" class="link-card" target="_blank" rel="noopener">
            <span class="link-icon">💼</span>
            <span class="link-text">Search engine just to make fun of my friend</span>
          </a>
          <a href="https://notebookv1.murf.is" class="link-card" target="_blank" rel="noopener">
            <span class="link-icon">🎨</span>
            <span class="link-text">A song writing app in progress (maybe 5% done)</span>
          </a>
          <a href="https://raj.testequals.app" class="link-card">
            <span class="link-icon">📧</span>
            <span class="link-text">Rajesh the indian guy AI trapped in closet</span>
          </a>
        </div>
        
      </section>
    </main>
  `;const t=l();a.prepend(t.getCanvas());const n=document.getElementById("back-button");n&&n.addEventListener("click",e=>{e.preventDefault(),a.innerHTML="",h()});const i=document.querySelector("h1");if(i){let e=250,s=1;const o=()=>{e+=.2*s,e>=260&&(s=-1),e<=240&&(s=1),i.style.color=`hsla(${e}, 82%, 66%, 1)`,requestAnimationFrame(o)};o()}}d();const v=document.querySelector("#app");if(!v)throw new Error("App element not found");h();
