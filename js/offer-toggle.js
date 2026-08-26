/* The chip bar folds. "Pick your services" is the toggle: closed it is one slim
   line, open it is the full grid. It starts closed everywhere — Kate, 26 Aug —
   and folds itself away again after a chip is picked. */
(function(){
  var nav = document.querySelector('.offer-nav');
  var btn = document.querySelector('.offer-nav__toggle');
  if(!nav || !btn) return;
  function set(open){
    nav.classList.toggle('open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  set(false);
  btn.addEventListener('click', function(){
    set(!nav.classList.contains('open'));
  });
  nav.querySelectorAll('.ochip').forEach(function(chip){
    chip.addEventListener('click', function(){
      set(false);
    });
  });
})();
