let cofre1Completado = false;
let cofre3Completado = false;
$('.no').on("click", function(){ 
  $('#f1').hide();
  $('#f2').css('display','flex');  
});

$('.weno').on("click", function(){ 
  $('#f2').hide();
  $('#f1').css('display','flex');  
});

$('.si').on("click", function(){ 
  $('#f1').hide();
  $('#f3').css('display','flex');  
});

$('.dale').on("click", function(){ 
  $('#f3').hide();
  $('#f4').css('display','flex');  
});

$('.rega').on("click", function(){ 
  $('#f4').hide();
  $('#f5').css('display','flex');  
});

$('.ojo').on("click", function(){ 
  $('#f5').hide();
  $('#f6').css('display','flex');  
});

$('.afi').on("click", function(){ 
  $('#f6').hide();
  $('#f7').css('display','flex');
  $('#f8').css('display','flex');  
});

$('.salu').on("click", function(){ 
  $('#f8').hide();
  $('#f9').css('display','flex');  
});

$('.copy').on("click", function(){ 
  $('#f9').hide();
  $('#f10').css('display','flex');
  $('#f11').css('display','flex');
});


// Cofre 1
$('.ca1').on("click", function(){

    $('#f12').css('display','flex');
    $('#f14').show();

});

// volver desde la carta
$('.carta').on("click", function(){ 
  $('#f12').hide();
  cofre1Completado = true;
});


// Cofre 3 (anillos)
$('.ca3').on("click", function(){

    if(!cofre1Completado){
        alert("Primero abre el cofre de la izquierda.");
        return;
    }

    $('#f15').show();
    $('#f16').css('display','flex');

});

$('.anillo').on("click", function(){ 
  $('#f16').hide();
  $('#f17').css('display','flex');
});

$('.marry').on("click", function(){ 
  $('#f15').hide();
  $('#f17').hide();

  cofre3Completado = true;
});


// Cofre 2
$('.ca2').on("click", function(){

    if(!cofre3Completado){
        alert("Recuerda dejar el cofre del medio para el final.");
        return;
    }

    $('#f18').show();
    $('#f19').css('display','flex');

});
$('.meme').on("click", function(){ 
  $('#f19').hide();
  $('#f20').css('display','flex');
});

$('.meme2').on("click", function(){ 
  $('#f20').hide();
  $('#f21').css('display','flex');
});

$('.yes').on("click", function(){ 
  $('#f21').hide();
  $('#f22').css('display','flex');
});

// Botón para ir al cofre extra
$('.extra').on("click", function(){

    $('#f22').css('display','none');

    $('#f23').css('display','block');

    $('#f24').css('display','flex');

});

$('.finalextra').on("click", function(){

    $('#f24').css('display','none');

    $('#f25').css('display','flex');

});

const musica = document.getElementById("musica");

$(document).one("click", function () {
    musica.play().catch(err => console.log(err));
});