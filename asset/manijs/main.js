var slider= document.querySelector('.slider img');
setInterval(function(){
    slider.src="./asset/img/ny.jpg";
    slider.src="./asset/img/chicago.img"
},3000)
var bookTicket=document.querySelector('.book-ticket');

function buyTicket(){
bookTicket.classList.toggle('turn-on-off')
}