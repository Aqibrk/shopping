function sendemail()
{
    var pramas = {
        full_name : document.getElementById("fullname").value,
        email_id : document.getElementById("email-id").value,
        message : document.getElementById("message").value      
    }
    emailjs.send("service_7bkxuoi", "template_u2rlsh7",pramas).then(function(res){
        alert("susec!" + res.status);
    })
}