const form = document.querySelector('.login-form');
const onFormSubmit = event => {
    event.preventDefault();
    // console.log(event);
    const userEmail = event.currentTarget.elements.email
    console.log('userEmail:', userEmail.value);
     const userPass = event.currentTarget.elements.password
    console.log('userPass:', userPass.value);
   
    if (userEmail.value === '' || userPass.value === '') {
        alert('All form fields must be filled in');
        return;
    } else {
        console.log({ email: userEmail.value.trim(), password: userPass.value.trim() });
    }
event.currentTarget.reset();
  }


form.addEventListener('submit', onFormSubmit);
