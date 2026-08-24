/* Sticky bar. IntersectionObserver, not scroll maths: shown once the hero has left,
   hidden again while #book or the footer is on screen. */
(function(){
  var bar=document.getElementById('stickyBar');
  if(!bar||!('IntersectionObserver' in window)) return;
  var heroGone=false, blocked=0;
  new IntersectionObserver(function(e){ heroGone=!e[0].isIntersecting; sync(); },{rootMargin:'0px'})
    .observe(document.getElementById('hero'));
  var block=new IntersectionObserver(function(entries){
    entries.forEach(function(en){ en.target.dataset.on = en.isIntersecting?'1':''; });
    blocked=document.querySelectorAll('[data-on="1"]').length; sync();
  });
  [document.getElementById('book'), document.querySelector('.foot')].forEach(function(el){ if(el) block.observe(el); });
  function sync(){
    var show=heroGone && blocked===0;
    bar.classList.toggle('show',show);
    bar.setAttribute('aria-hidden', show?'false':'true');
  }
  sync();
})();
