
(()=>{'use strict';
const image=document.querySelector('#hero-image'),prev=document.querySelector('#hero-prev'),next=document.querySelector('#hero-next');if(!image)return;
const slides=[
 {image:'assets/img/hero-bridal-fashion.webp',title:'<em>Timeless Elegance</em><span>&amp; Modern Style</span>',desc:'Exquisite Jewellery · Designer Fashion · Curated Collections',cta:'Explore Collections',href:'collections.html'},
 {image:'assets/img/hero-bridal-soft.webp',title:'<em>Heritage Beauty</em><span>&amp; Royal Moments</span>',desc:'Artisan Jewellery · Bridal Treasures · Gold Collections',cta:'Explore Jewellery',href:'jewellery.html'},
 {image:'assets/img/hero-bridal-fashion.webp',title:'<em>Fashion Stories</em><span>Made to Remember</span>',desc:'Elegant Sarees · Designer Lehengas · Signature Style',cta:'Discover Fashion',href:'fashion.html'}
];let active=0, timer=null;const title=document.querySelector('#hero-title'),desc=document.querySelector('#hero-desc'),cta=document.querySelector('#hero-cta');
function render(i){active=(i+slides.length)%slides.length;let s=slides[active];image.style.opacity='.55';title.style.opacity='.3';setTimeout(()=>{image.style.backgroundImage=`url('${s.image}')`;image.style.opacity='1';title.innerHTML=s.title;title.style.opacity='1';desc.textContent=s.desc;cta.innerHTML=s.cta+' <span>→</span>';cta.href=s.href;document.querySelectorAll('[data-hero-slide]').forEach((x,k)=>{x.classList.toggle('active',k===active)})},170)}
function restart(){clearInterval(timer);timer=setInterval(()=>render(active+1),7400)}
prev?.addEventListener('click',()=>{render(active-1);restart()});next?.addEventListener('click',()=>{render(active+1);restart()});document.querySelectorAll('[data-hero-slide]').forEach(b=>b.addEventListener('click',()=>{render(Number(b.dataset.heroSlide));restart()}));restart();
const photos=document.querySelectorAll('.ref-cat-photo img,.ref-feature-card img');if(!matchMedia('(prefers-reduced-motion: reduce)').matches){photos.forEach(x=>x.setAttribute('decoding','async'))}
})();
