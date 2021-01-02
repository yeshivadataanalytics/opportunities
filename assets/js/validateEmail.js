function validateForm()
{
    var validation = true;
   if(!validateEmail(document.contactform.semail.value))
   {
     alert( "invalide sender email!" );
     $("#semail").css("border-color", "red");
     validation=false;
   }
   if(!validateEmail(document.contactform.remail.value))
   {
     alert( "invalide recipient email" );
     $("#remail").css("border-color", "red");
     validation=false;
   }
   return validation;
}
function validateEmail(email) { 
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
}