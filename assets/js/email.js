const formClear = document.querySelector('.form')

let submitMsg = document.querySelector('.contact-msg')

function submitResponse() {
    let submitMsg = document.querySelector('.contact-msg');
    submitMsg.innerHTML = `Thank you for submitting an email, we will be in touch with you shortly.`
}

function sendMail(contactForm) {
    emailjs.send('gmail', 'Test email', {
        'from_name':contactForm.name.value,
        'from_email':contactForm.emailaddress.value,
        'project_request':contactForm.message.value,
    })
    .then(
        function(response) {
            console.log('Success', response);
            formClear.reset()
            submitResponse();
        },
        function (error){
            // error message display error response error msg
        }
    );
    return false;
}
