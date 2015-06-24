$(document).ready(function() {

	var $ppc = $('.progress-pie-chart'),

    percent = parseInt($ppc.data('percent')),

    deg = 360*percent/100;

  	if (percent > 50) {
    	$ppc.addClass('gt-50');
  	}

  	$('.ppc-progress-fill').css('transform','rotate('+ deg +'deg)');

  	// validacao do formulario
	var btn_enviar = $("#btn_enviar");
	btn_enviar.attr('disabled', 'disabled');

	$('.form input, .form textarea').keyup(function(){

		if($('#nome').val() != "" && $("#email").val() != "" && $('#mensagem').val() != "") {
			btn_enviar.removeAttr('disabled');
			btn_enviar.css("cursor", "pointer");
		}
		else {
			btn_enviar.attr('disabled', 'disabled');
			btn_enviar.css("cursor", "not-allowed");
		}

	});

	//Envio de e-mail
	$('.form').submit(function(e){
        e.preventDefault();
        $('.resposta-form').html('<div class="alert" role="alert"><i class="fa fa-spinner fa-spin"></i> Enviando...</div>'); ///
        $.ajax({
          url: 'validaForm.php',
          type: 'POST',
          data: $('.form').serialize(),
          success: function(data){
            $('.resultado').html(data);
            $('#enviar').val("Enviar");/////
            $('#nome').val('');
            $('#email').val('');
            $('#mensagem').val('');
            $('.resposta-form').html('<div class="alert" role="alert"><i class="fa fa-spinner fa-spin"></i> Sucesso...</div>');
          }
          
        });
        return false;
      });



  //Menu
  var largura = $(window).width(); // largura do viewport
  var altura  = $(window).height();
  var larHeight = altura - 100;
  var heightLargura = larHeight /2;


  $('.video').css('height',heightLargura);


  var altura  = $(window).height(); // altura do viewport 
  //$('.menu').before("<span class='nav-toggle'>Menu <i class='fa fa-bars'></i></span>");
  //$('.nav-toggle').hide();
  $('.nav-toggle').on('click', function() {
    $('.menu').slideToggle(350);
    $('.menu').css('display', 'block');
  });
  
   //$('.nav-toggle').on('click', function() {
    
   //$('.menu').slideToggle(350);
  //});

  //if (largura < 768){
    //$('.nav-toggle').show();
    //$('.menu').hide();
  //}
  
  /*$(window).resize(function(){
      var w = $(window).width(); // largura do viewport
      if (w < 768) {
        $('.nav-toggle').show();
        $('.menu').hide();
      } else {
        $('.nav-toggle').hide();
        $('.menu').show();
      }
    });*/

});