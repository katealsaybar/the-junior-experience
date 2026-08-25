/* Nav shadow on scroll, plus the sticky offer nav's numbers.
   --nav-h and --sticky-h are measured here rather than hard-coded, because the
   offer nav wraps to two rows of chips on a phone and the anchor offsets have to
   clear whatever it actually renders at. .stuck adds the drop shadow only while
   the bar is docked under the brand nav. */
(function(){
  var nav=document.querySelector('.trs-nav');
  if(!nav) return;
  var bar=document.querySelector('.offer-nav');
  var root=document.documentElement;
  var measure=function(){
    var nh=nav.offsetHeight;
    root.style.setProperty('--nav-h',nh+'px');
    if(bar) root.style.setProperty('--sticky-h',(nh+bar.offsetHeight+16)+'px');
  };
  var os=function(){
    nav.classList.toggle('scrolled', window.scrollY>14);
    if(bar) bar.classList.toggle('stuck',
      window.scrollY>0 && bar.getBoundingClientRect().top<=nav.offsetHeight+1);
  };
  window.addEventListener('scroll',os,{passive:true});
  window.addEventListener('resize',measure,{passive:true});
  window.addEventListener('load',measure);
  /* The chip rows reflow when the webfont swaps in, so measure again after it. */
  if(document.fonts&&document.fonts.ready) document.fonts.ready.then(measure);
  measure(); os();
})();
