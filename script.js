// Menu toggle acessível
function setupMenu(toggleId, navId){
const btn = document.getElementById(toggleId);
const nav = document.getElementById(navId);
if(!btn || !nav) return;
btn.addEventListener('click', ()=>{
const expanded = btn.getAttribute('aria-expanded') === 'true';
btn.setAttribute('aria-expanded', String(!expanded));
nav.style.display = expanded ? 'none' : 'block';
});
}
setupMenu('menuToggle','mainNav');
setupMenu('menuToggle2','mainNav2');
setupMenu('menuToggle3','mainNav3');


// Small enhancement: keyboard skip to content
window.addEventListener('load', ()=>{
const main = document.getElementById('main');
if(main){
const skip = document.createElement('a');
skip.href =
