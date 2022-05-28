/*icon humberger*/
/*var humburger = document.getElementById('icon_humburger');
var liste = document.getElementById('liste');
if(humburger){
    humburger.addEventListener('click', () =>{
        liste.classList.add('active');
    });
}*/
var mainimg = document.getElementById('MainImg');
var small_img = document.getElementsByClassName('small-img');
    for(let i=0 ;i<small_img.length;i++ ){
        small_img[i].addEventListener('click',function(){
        mainimg.src =  small_img[i].src
        
})
}
