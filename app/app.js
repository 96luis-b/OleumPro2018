

(function(){
    emailjs.init("user_EGyMLxA34s0YlrWliR7p6");
 })();


 var myform = $("form#send_mail");
 myform.submit(function(event){
     event.preventDefault();
 
     var params = myform.serializeArray().reduce(function(obj, item) {
      obj[item.name] = item.value;
      return obj;
   }, {});
 
   // Change to your service ID, or keep using the default service
   var service_id = "send_email";
 
   var template_id = "send_email";
   myform.find("button").text("SENDING...");
   let data = {
             message: message.value,
             subject: 'prueba',
             from_name: name.value,
             from_email:email.value
         };
         console.log(data)
         console.log(params);

   emailjs.send(service_id, template_id, data)
       .then(function(){ 
        alert("Sent!");
        myform.find("button").text("SEND");
      }, function(err) {
        alert("Send email failed!\r\n Response:\n " + JSON.stringify(err));
        myform.find("button").text("SEND");
     });
 
   return false;
 });



function downloadCatalog(){
  console.log("descargando catalogo");
    window.location.href = "doc/planilla (1).pdf"
}

downloadButton .onclick = downloadCatalog;