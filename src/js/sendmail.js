const sendMail = function(form, phpPath) {
    var form_data = $(form).serialize();
    console.log(form_data);
        $.ajax({
        type: "POST", 
        url: phpPath,
        data: form_data,
            success: function() {
                   alert("Ваше сообщение отпрвлено!");
            }
        });
        console.log($.ajax());
};
export {sendMail};