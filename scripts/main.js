(function() {
    'use strict';
    var el = document.querySelector('#i-am');
    if (!el) return;
    var initialText = el.textContent;
    var opts = {
        speed: 40,
        loop: false,
        pauseDelay: 900,
        postfix: ''
    };

    var typist = malarkey(el, opts)

    typist
        .pause(2400).delete(initialText.length)
        .type('a nerd').pause().delete(6)
        .type('sexy').pause().delete(4)
        .type('nodejs').pause().delete(6)
        .type('a pokemon master').pause().delete(16)
        .type('javascript').pause().delete(10)
        .type('the karate kid').pause().delete(14)
        .type('a geek').pause().delete(4)
        .type('hacker').pause().delete(8)
        .type('Web Developer').pause().delete(14)
        .type('n amateur drummer').pause().delete(18)
        .type('a Software Engineer').pause().delete(19)
        .type('that guy').pause().delete(8)
        .type('Chirag.').pause(1200)
        .call(function() {
            el.className += "disabled"
        });

})();