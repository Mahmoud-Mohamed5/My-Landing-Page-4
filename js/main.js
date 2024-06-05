
let box = document.querySelector('nav .logo')
box.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY

    let boxWidth = box.clientWidth
    let boxHeight = box.clientHeight

    let moveX = (x - boxWidth/2)
    let moveY = (y - boxHeight/2)

    box.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
})
box.addEventListener('mouseout', (e) => {
    box.style.transform = ``;
})


let box2 = document.querySelector('.landing__page .card__parent .info h4')
box2.addEventListener('mousemove', (e2) => {
    let x = e2.offsetX
    let y = e2.offsetY

    let box2Width = box2.clientWidth
    let box2Height = box2.clientHeight

    let moveX = (x - box2Width/2)
    let moveY = (y - box2Height/2)

    box2.style.transform = `translateX(${moveX}px) translateY(${moveY}px)`;
})
box2.addEventListener('mouseout', (e2) => {
    box2.style.transform = ``;
})


$('document').ready(function(){
    $('.rotate').click(function(){
        let x = $('.rotate').attr('id')
        if (x == 'full') {
            $('nav').attr('id', 'mini')
            $('.rotate').attr('id', "mini")
        } else {
            $('nav').attr('id', 'full')
            $('.rotate').attr('id', "full")
        }
    })
    $('.toggel').click(function(){
        let x = $('.toggel').attr('id');
        if (x === 'close') {
            $('.toggel').attr('id', 'open');
            $('nav ul').show(500, function() {
                $('nav ul li').slideDown(200)
            })
            $('nav ul').removeClass('hide')
        }
        else {
            $('.toggel').attr('id', 'close');
            $('nav ul').hide(500, function() {
                $('nav ul li').slideUp(200)
            })
        }
    })
    $('nav ul li').click(function(){
        let x = $('.toggel').attr('id');
        $('nav ul').toggleClass('hide')
        $('.toggel').attr('id', 'close');
    })
})

VanillaTilt.init(document.querySelector(".img__parent"), {
    max: 35,
    speed: 400,
});
