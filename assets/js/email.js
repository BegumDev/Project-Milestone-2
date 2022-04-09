function sendMail(params) {
    let parameters = {
        from_name:document.getElementById('name').value,
        from_email:document.getElementById('email').value,
        project_request:document.getElementById('message').value,
    };

    emailjs.send('gmail', 'Test email',parameters)
    .then(function(response){
        console.log('Success', response)
    }),
    function(error) {
        console.log('Error', response)
    }
}