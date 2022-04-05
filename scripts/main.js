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
        .type('a pokemon master').pause().delete(16)
        .type('Web Developer').pause().delete(14)
        .type('n amateur drummer').pause().delete(18)
        .type('a Software Engineer').pause().delete(19)
        .type('that guy').pause().delete(8)
        .type('Chirag.').pause().type(' And I love building things with code.').pause(1200)
        .call(function() {
            el.className += "disabled"
        });

    // var heads = ["👋", "🍉", "🐝", "💥", "⚓"];
    // document.querySelector('.js-head').innerHTML = heads[Math.floor(Math.random() * heads.length)];

})();
