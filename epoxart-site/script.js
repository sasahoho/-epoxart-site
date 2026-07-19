const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
menu.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const lengthInput=document.getElementById('length');
const widthInput=document.getElementById('width');
const areaEl=document.getElementById('area');
const priceEl=document.getElementById('price');
const quoteLink=document.getElementById('quoteLink');
function updateEstimate(){const l=Math.max(0,Number(lengthInput.value)||0);const w=Math.max(0,Number(widthInput.value)||0);const area=Math.round(l*w);areaEl.textContent=`${area.toLocaleString('fr-CA')} pi²`;priceEl.textContent=`${Math.round(area*3).toLocaleString('fr-CA')} $ – ${Math.round(area*4).toLocaleString('fr-CA')} $`;quoteLink.href=`#contact`;}
[lengthInput,widthInput].forEach(el=>el.addEventListener('input',updateEstimate));updateEstimate();
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.getElementById('year').textContent=new Date().getFullYear();
