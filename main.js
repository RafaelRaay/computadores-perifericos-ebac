$(document).ready(function(){

    $('#telefone').mask('(00) 00000-0000', {
        placeholder: '(XX) XXXXX-XXXX'
    })

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            produto: {
                required: false
            }
        },
        submitHandler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            var camposIncorretos = validador.numberOfInvalids();
            if (camposIncorretos) {
                alert(`Existem ${camposIncorretos} campos incorretos!`)
            }
        }
    })       

    $('.tab-content button, .pc button').click(function(){
        const destino = $('#contato');
        const nomeProduto = $(this).parent().find('h3, h5').text();

        $('#produto').val(nomeProduto);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 100)
    })
})