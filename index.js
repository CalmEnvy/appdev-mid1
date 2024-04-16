// alert("Hello");

// 1st step - Movement animation to happen

// Instead of using document.querySelector, I use the $ sign in jquery para mapaiksi ang code
const card = $('.card');
const container = $('.container');

// 5th step - all items
// const photo = document.querySelector('.photo img');
// const title = document.querySelector('.title');
// const social = document.querySelector('.social');
// const info = document.querySelector('.info h4');
// const profile = document.querySelector('.profile');


// 2nd step - Moving animation event

// same here instead of using addEventlistener I used "on"

container.on('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20; //rotating the element into x axis
    let yAxis = (window.innerWidth / 2 - e.pageY) / 20; //rotating the element into y axis
    card.css('transform', `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`);
});

// 4th step - Adding animation in
container.mouseenter(function(e) {
    card.css('transform', 'none');

    // Popout animation for all items (consider using a class for reusability)

    // using the $ sign of jquery you dont need to call the classes you want to animate or change 
    // you can call them directly using the $ sign without declaring  variables first
    // so i didn't use the 5th step

    $('.photo img').css('transform', 'translateZ(50px)');
    $('.title').css('transform', 'translateZ(50px)');
    $('.social').css('transform', 'translateZ(50px)');
    $('.info h4').css('transform', 'translateZ(50px)');
    $('.profile').css('transform', 'translateZ(50px)');
  });

// 3rd step - Removing animation in

// i just replaced the "addEventListener" into "on" using jquery

container.on('mouseleave', e => {
    card.css('transform', "all 0.5s ease");
    card.css('transform', `rotateY(0deg) rotateX(0deg)`);
});
