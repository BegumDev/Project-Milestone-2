// function sendMail(params) {
//     let parameters = {
//         from_name:document.getElementById('name').value,
//         from_email:document.getElementById('email').value,
//         project_request:document.getElementById('message').value,
//     };

//     emailjs.send('gmail', 'Test email',parameters)
//     .then(function(response){
//         console.log('Success', response);
//     }),
//     function(error) {
//         console.log('Error', response);
//     }
//     return false;
// }

function sendMail(contactForm) {
    emailjs.send('gmail', 'Test email', {
        'from_name':contactForm.name.value,
        'from_email':contactForm.emailaddress.value,
        'project_request':contactForm.message.value,
    })
    .then(
        function(response) {
            console.log('Success', response);
        },
        function (error){
            console.log('Failed', error);
        }
    );
    return false;
}