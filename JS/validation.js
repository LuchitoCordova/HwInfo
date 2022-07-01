$(function(){
    $("#form-validado").validate({
        rules: {
        Usuario: {
            required: true,
            
        }
    },
    messages: {
        Usuario: {
            required: 'Ingresa algo po' ,
            email: 'Ingresa Usuario'
        }
    }
});

});