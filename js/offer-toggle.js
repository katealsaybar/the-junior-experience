/* The chip bar folds. "Pick your services" is the toggle: closed it is one slim
   line, open it is the full grid. A phone starts closed so the sticky bar does not
   eat the screen; a desktop starts open, the way Emma asked for the chips to sit
   all shown. Picking a chip on a phone folds the bar again on its own. */
(function(){
  var nav = document.querySelector('.offer-nav');
  var btn = document.querySelector('.offer-nav__toggle');
  if(!nav || !btn) return;
  var mq = window.matchMedia('(min-width: 768px)');
  function set(open){
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  set(mq.matches);
  btn.addEventListener('click', function(){
    set(!nav.classList.contains('open'));
  });
  nav.querySelectorAll('.ochip').forEach(function(chip){
    chip.addEventListener('click', function(){
      if(!mq.matches) set(false);
    });
  });
})();
