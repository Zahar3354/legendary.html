let card_btn = document.querySelectorAll(".card_btn"); 
let cards = document.querySelectorAll(".card"); 
let card_photos =document.querySelectorAll(".card_photo"); 
let small_card =document.querySelectorAll(".small_card")
let info =document.querySelectorAll(".info_car")
let text =document.querySelectorAll(".text_nf")
let menu_btn =document.querySelectorAll(".menu_btn")
let all = document.querySelector(".all")

let Moto = document.querySelector(".Moto")


let none = document.querySelectorAll(".none")

let two_doors = document.querySelector(".two_doors")
let two_door = document.querySelectorAll(".two_door")
let four_door = document.querySelectorAll(".four_door")
let four_doors = document.querySelector(".four_doors")

let profil = document.querySelector(".profil")

let profilButton = document.querySelector(".Profil");
let registerForm = document.querySelector(".reister");

profilButton.addEventListener('click', function() {
    registerForm.style.display = 'block';
});

let closeRegisterButton = document.querySelector(".close_register");
closeRegisterButton.addEventListener('click', function() {
    registerForm.style.display = 'none';
});

let closeModalButton = document.querySelector(".close_modal");
closeModalButton.addEventListener('click', function() {
    registerForm.style.display = 'none';
});

for (let i = 0; i < card_btn.length; i++) {
    card_btn[i].addEventListener('click', function() {
        zoom_card(cards[i], i);
    });
}
two_doors.addEventListener('click', sort_two)


function sort_two(){
    for(let i =0; i<cards.length; i++){
        cards[i].style.display = 'none';
    }
    for (let i = 0; i < two_door.length; i++) {
        two_door[i].style.display = 'flex';
    }
}
four_doors.addEventListener('click', sort_four)


function sort_four(){
    for(let i =0; i<cards.length; i++){
        cards[i].style.display = 'none';
    }
    for (let i = 0; i < four_door.length; i++) {
        four_door[i].style.display = 'flex';
    }
}
all.addEventListener('click', all_cars)


function all_cars(){
    for(let i =0; i<cards.length; i++){
        cards[i].style.display = 'flex';}
    for (let i = 0; i < none.length; i++) {
        none[i].style.display = 'none';

    }
}





function zoom_card(card, i) {
    
    card.style.zIndex='1';
    card.style.width = '1000px';
    card.style.position ='absolute';
  
    card_photos[i].style.width = '50%'; 
    card_photos[i].style.height = '100%'; 
   
    small_card[i].style.position ='relative';
    small_card[i].style.width ='800px'
    small_card[i].style.height = '300px ';  
    small_card[i].style.left='-25px';
    small_card[i].style.display ='flex';
    small_card[i].style.marginBottom ='5px';
    small_card[i].style.margin ='5px';
    small_card[i].style.flexDirection  ='row';
    card.style.display ='flex';

    text[i].style.width = '50%'; 
    text[i].style.display = 'flex';
    text[i].style.flexDirection = 'column';
    text[i].style.justifyContent = 'center';
    text[i].style.padding = '20px';
   
    info[i].style.display ='block'
  info[i].style.width ='500px'

        card.style.justifyContent  ='center';
    let close_card = card.querySelector(".close_card"); 
    close_card.style.display = 'flex'; 


}

function closecard(event) {
    let card = event.target.closest('.card');
    let close_card = card.querySelector(".close_card");
    let small_card = card.querySelector(".small_card");
    let info = card.querySelector(".info_car");
    let textContainer = card.querySelector(".text_nf");
    let cardPhoto = card.querySelector(".card_photo");

    close_card.style.display = 'none';


    card.style.width = '280px';
    card.style.position = 'relative';
    card.style.zIndex = '0';
    card.style.display = 'flex';
    card.style.flexDirection = 'column';
    card.style.justifyContent = 'center';

    small_card.style.flexDirection = 'column';
    small_card.style.margin = '';
    small_card.style.width = '';
    small_card.style.height = '';
    small_card.style.position = '';
    small_card.style.display = '';

  
    textContainer.style.width = '';
    textContainer.style.display = '';
    textContainer.style.flexDirection = '';
    textContainer.style.justifyContent = '';
    textContainer.style.padding = '';

  
    cardPhoto.style.width = '';
    cardPhoto.style.height = '';

  
    info.style.display = 'none';
}

let close_buttons = document.querySelectorAll(".close_card");
for (let i = 0; i< close_buttons.length; i++) {
    close_buttons[i].addEventListener('click', closecard); 
}
