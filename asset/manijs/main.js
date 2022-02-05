var slider= document.querySelector('.slider img');

var bookTicket=document.querySelector('.book-ticket');

function buyTicket(){
bookTicket.classList.toggle('turn-on-off')
}
const silder=[

    {
     src:'./asset/img/chicago.jpg',
     heading:'Chicago',
     subHeading:'We had the best time playing at Venice Beach!',
    },
    {
     src:"./asset/img/la.jpg",
     heading: 'Los Angeles',
     subHeading:'The atmosphere in New York is lorem ipsum.',

    },
    {
        src:'./asset/img/ny.jpg',
        heading:'New York',
        subHeading:'We had the best time playing at Venice Beach!'
    }
]
var sliderEle= document.querySelector('.slider');
const app= {
    currentIndex:0,
    getSlider:function(){
    
        
        return `<img src=${silder[this.currentIndex].src} alt="">
        <div class="text-describe">
            <h2 class="heading">${silder[this.currentIndex].heading}</h2>
            <p class="sub-heading">${silder[this.currentIndex].subHeading}</p>
        </div>`

    },
    handleSlider:function(){

       setInterval(function(){
           app.currentIndex++;
           if(app.currentIndex>2){
               app.currentIndex=0;
           }
           var htmls= app.getSlider();
           sliderEle.innerHTML=htmls;
           


       },2000)

    }


}
app.handleSlider();


