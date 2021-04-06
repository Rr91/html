$(document).on("blur", "input[name='customer[e-mail-klienta]']", function(e){
    $(this).closest("div").find('em').remove();
    if(!/^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i.test($(this).val())){
        $(this).closest("form").find("input[type='submit']").attr("disabled", "disabled");
        $(this).css("borderColor", "red");
        $(this).after('<em class="errormsg">Неверный email</em>');
    }
    else{
        $(this).closest("form").find("input[type='submit']").removeAttr("disabled");
        $(this).css("borderColor", "inherit");
    }
});
$(document).on("input", "input[name='customer[e-mail-klienta]']", function(e){
    $(this).closest("form").find("input[type='submit']").removeAttr("disabled");
});