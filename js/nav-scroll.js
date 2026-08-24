/* Nav shadow on scroll. */
(function(){
  var nav=document.querySelector('.trs-nav');
  if(!nav) return;
  var os=function(){ nav.classList.toggle('scrolled', window.scrollY>14); };
  window.addEventListener('scroll',os,{passive:true}); os();
})();
