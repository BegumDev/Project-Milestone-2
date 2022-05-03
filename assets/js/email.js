const formClear = document.querySelector('.form')

let submitMsg = document.querySelector('.contact-msg')
let errorMsg = document.querySelector('.error-msg')

function submitResponse() {
    let submitMsg = document.querySelector('.contact-msg');
    submitMsg.innerHTML = `Thank you for submitting an email, we will be in touch with you shortly.`
}

function errorResponse() {
    let errorMsg = document.querySelector('.error-msg');
    errorMsg.innerHTML = "Sorry that didn't quite work. Please try again";
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
            errorResponse();
        }
    );
    return false;
}
