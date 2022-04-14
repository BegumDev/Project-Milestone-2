const nameField = document.querySelector('.name')
const emailField = document.querySelector('.email')
const messageField = document.querySelector('#message')

function sendMail(contactForm) {
    emailjs.send('gmail', 'Test email', {
        'from_name':contactForm.name.value,
        'from_email':contactForm.emailaddress.value,
        'project_request':contactForm.message.value,
    })
    .then(
        function(response) {
            console.log('Success', response);
            nameField.value = "";
            emailField.value = "";
            messageField.value = "";
            alert('Thanks, we will be in touch shortly.');
        },
        function (error){
            console.log('Failed', error);
        }
    );
    return false;
}
