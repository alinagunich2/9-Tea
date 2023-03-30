
new WOW({
  animateClass: 'animate__animated'
}).init();



$('.single-item').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 1900,
});
$( "#accordion" ).accordion({
  heightStyle: "content"
})

let input = $('input')

let form = $('form')

input.eq(5).keyup(function () { 
  this.value = this.value.replace(/[^0-9]/g,'');
 });



form.submit(function(e){
  e.preventDefault()
  e.stopPropagation()
for(let i = 1; i<input.length; i++){
if(input.eq(i).val().length<1){
    alert('Заполните '+ input.eq(i).prev().text())
    return
  }
}
if(input.eq(5).val().length !== 6){
  alert('Индекс должен содержать 6 цифр')
}else{
  
  $( ".order-closes" ).animate({
    opacity: 0.25,
    width: "hide",
   
  }, 1000, function() {
    $('.order-open').fadeIn(1000);
  })
  
}

})

$('.product-img').magnificPopup({
  type:'image',
});