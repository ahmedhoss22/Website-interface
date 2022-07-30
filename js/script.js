let stars=document.getElementById('stars')
let moon=document.getElementById('moon')
let welcome=document.getElementById('welcome')
let mountains3=document.getElementById('mountains3')
let mountains4=document.getElementById('mountains4')
let river=document.getElementById('river')
let boat=document.getElementById('boat')
let main=document.querySelector('.main')


window.onscroll=()=>{
    let value= scrollY;
    stars.style.left= value+'px';
    moon.style.top= value*4 +'px';
     mountains3.style.top= value*2 +'px';
     mountains4.style.top= value*1.5 +'px';
     river.style.top= value +'px';
     boat.style.top= value +'px';
     boat.style.left= value*3 +'px';
     welcome.style.fontSize= value +'px';
    if(scrollY>=80){
        welcome.style.fontSize= 70+'px';
        welcome.style.position= "fixed";
    }
    if(scrollY>=436.79998779296875){
        welcome.style.display= "none";
    }else{
        welcome.style.display= "block";
    }
    if(scrollY>=83.19999694824219){
        main.style.background='linear-gradient(#376281,#10001f)'
    }else{
        main.style.background='linear-gradient(#200016,#10001f)'
    }

}


if(screenY>=1900){
    document.body.style.height='1900px'
    document.body.style.overflow='hidden'

}
