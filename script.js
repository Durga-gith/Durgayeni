const progress=document.querySelector('.progress');
const onScroll=()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(h>0?(scrollY/h)*100:0)+'%';};
addEventListener('scroll',onScroll,{passive:true}); onScroll();

document.getElementById('year').textContent=new Date().getFullYear();

const reveal=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');reveal.unobserve(e.target);}});
},{threshold:.08});
document.querySelectorAll('.section,.featured-card,.project-card,.timeline-item,.stack-block,.about-grid,.metric').forEach(el=>{
  el.classList.add('reveal'); reveal.observe(el);
});

const sections=[...document.querySelectorAll('main section[id]')];
const links=[...document.querySelectorAll('.nav nav a')];
const navObserver=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));
    }
  });
},{rootMargin:'-35% 0px -55% 0px',threshold:0});
sections.forEach(s=>navObserver.observe(s));
