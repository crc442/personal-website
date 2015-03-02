var i_am = function() {
  var el = document.querySelector('#i-am');
  if (!el) return;
  var initialText = el.textContent;
  var pause = 800
  var opts = {
    speed: 40,
    loop: false,
    postfix: ''
  };
 
  var typist = malarkey(el, opts)
 
  typist
    .pause(2400).delete(initialText.length-2)
    .type('hero').pause(pause).delete(4)
    .type('nerd').pause(pause).delete(6)
    .type('sexy').pause(pause).delete(4)
    .type('nodejs').pause(pause).delete(6)
    .type('a pokemon master').pause(pause).delete(16)
    .type('javascript').pause(pause).delete(10)
    .type('a geek').pause(pause).delete(4)
    .type('Web Developer').pause(pause).delete(14)
    .type('n amateur Drummer').pause(pause).delete(18)
    .type('that guy').pause(pause).delete(8)
    .type('Chirag.').pause(1200)
    .call(function() {
      $(el).addClass("disabled")
    });
 
}