var shiftWindow = function() { scrollBy(0, -70) };
if (location.hash) shiftWindow();
window.addEventListener("hashchange", shiftWindow);

(function () {
    (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
        (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
                             m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
                            })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-77255637-1', 'auto');
    ga('send', 'pageview');
})()

// doing the image carousel stuff
var facts = document.querySelectorAll('#facts div')
var factBtns = {
    next: document.querySelector('#facts .next'),
    prev: document.querySelector('#facts .prev')
}

var current = 0;
var init = function () {
    show()
    var timer = setInterval(next, 4000)
}

var show = function () {
    for (var i = 0; i < facts.length; i++) {
        facts[i].classList.add('invisible')
    }
    facts[current].classList.remove('invisible')
}

var next = function () {
    console.log('next')
    current = (current + 1) % facts.length
    show()
}

var prev = function () {
    console.log('prev')
    current = (current - 1) % facts.length
    show()
}



factBtns.prev.onclick = prev
factBtns.next.onclick = next

init()
