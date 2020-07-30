const form = document.querySelector('.my-form');

form.addEventListener('submit', e => {
    e.preventDefault();
   if (form.name.value === "") {
      alert('Name is required!');
      form.name.focus();
      return false;
   }
   if (form.email.value === "") {
      alert('Email is required!');
      form.email.focus();
      return false;
   }
   if (form.message.value == "") {
      alert('Message is required!');
      form.message.focus();
      return false;
   }else{
      console.log(
         `<p>Your name : ${form.name.value}</p>
          <p>Your email : ${form.email.value}</p>
          <p>Your Message : ${form.message.value}</p>`
      );
      form.reset();
      return true;
   }
});