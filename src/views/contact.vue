<template lang="pug">
section.section--contact#contact
  svg.cloud__wrapper#clouds(xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 100 100" preserveAspectRatio="none")
    path(d="M-5 100 Q 0 20 5 100 Z M0 100 Q 5 0 10 100 M5 100 Q 10 30 15 100 M10 100 Q 15 10 20 100 M15 100 Q 20 30 25 100 M20 100 Q 25 -10 30 100 M25 100 Q 30 10 35 100 M30 100 Q 35 30 40 100 M35 100 Q 40 10 45 100 M40 100 Q 45 50 50 100 M45 100 Q 50 20 55 100 M50 100 Q 55 40 60 100 M55 100 Q 60 60 65 100 M60 100 Q 65 50 70 100 M65 100 Q 70 20 75 100 M70 100 Q 75 45 80 100 M75 100 Q 80 30 85 100 M80 100 Q 85 20 90 100 M85 100 Q 90 50 95 100 M90 100 Q 95 25 100 100 M95 100 Q 100 15 105 100 Z")
  .section--wrapper.contact-wrapper
    .contact-info__wrapper
      h1.contact-info__title CONTACT ME
        .contact-info__name Helene ANDRE, front-end developer
        .contact-info__icons-wrapper
          a(href="tel:0484084650")
            i.icon.icon-phone.contact-info__icon
          a(href="mailto:helene.andre.06@gmail.com" target="_top")
            i.icon.icon-email.contact-info__icon
          a(href="https://github.com/helene-andre" target="_blank")
            i.icon.icon-github.contact-info__icon
          a(href="https://codepen.io/helene-andre/" target="_blank")
            i.icon.icon-codepen.contact-info__icon
          a(href="https://www.linkedin.com/in/helene-andre/" target="_blank")
            i.icon.icon-linkedin.contact-info__icon
    form#form.contact-form(action="https://formspree.io/helene.andre.06@gmail.com" @submit="checkForm" method="post")
      .contact-form__field-wrapper
        input#name.contact-form__field(v-model="name" v-on:keyup="validateField()" type="text" name="name" placeholder="Name" autocomplete="off")
        .invalid-field-message This field is required
      .contact-form__field-wrapper
        input#email.contact-form__field(v-model="email" v-on:keyup="validateField()" type="email" name="email" placeholder="Email" autocomplete="off")
        .invalid-field-message This field is required
        .invalid-email-message Must be a valid email
      .contact-form__field-wrapper
        input#subject.contact-form__field(v-model="subject" v-on:keyup="validateField()" type="text" name="subject" placeholder="Subject" autocomplete="off")
        .invalid-field-message This field is required
      .contact-form__field-wrapper
        textarea#message.contact-form__field(v-model="message" v-on:keyup="validateField()" name="message" placeholder="Message" rows="6" cols="80")
        .invalid-field-message This field is required

      .contact-form__send-wrapper
        input#send-button(type="submit" value="Send")
</template>

<script>
export default {
  data: () => ({
    errors: [],
    name: null,
    email: null,
    subject: null,
    message: null
  }),
  methods:{
    checkForm: function (e) {
      if (this.name && this.email && this.subject && this.message) {
        return true;
      }

      this.errors = [];

      if (!this.name) {
        document.getElementById('name').parentElement.classList.add('invalid-field')
      }
      if (!this.email) {
        document.getElementById('email').parentElement.classList.add('invalid-field')
      }
      if (!this.subject) {
        document.getElementById('subject').parentElement.classList.add('invalid-field')
      }
      if (!this.message) {
        document.getElementById('message').parentElement.classList.add('invalid-field')
      }
      e.preventDefault();
    },
    validateField: function (e) {
      let field = document.getElementById(event.target.id)
      let fieldWrapper = field.parentElement
      let fieldValue = field.value.trim()

      if (!fieldValue) {
        fieldWrapper.classList.add('invalid-field')
        fieldWrapper.classList.remove('correct-field')
        fieldWrapper.classList.remove('invalid-email')
        return false 
      }

      // If field is email field.
      else if (field.id === 'email' && !/^.+@.+\.[a-zA-Z]{2,}$/.test(fieldValue)) {
        fieldWrapper.classList.remove('invalid-field')
        fieldWrapper.classList.add('invalid-email')
        return false 
      }
      
      else {
        fieldWrapper.classList.remove('invalid-field')
        fieldWrapper.classList.remove('invalid-email')
        fieldWrapper.classList.add('correct-field')
        return true 
      }
    }

  }
}
</script>

<style lang="scss">
/**================ div separation hobbies /.section--contact ===================**/
.container .cloud__wrapper {
  display: block;
}

.cloud__wrapper {
  min-width: 1200px;
  max-height: 150px;
  left: 0%;
}

#clouds {
  position: absolute;
  bottom: 100%;
}

#clouds path {
  fill: #fff;
  stroke: #fff;
}
/**==============================================================================**/

/**=========================== section--contact =================================**/
input[type=submit] {
  border-radius: 0px; 
  -webkit-border-radius:0px;
  appearance: none;
  -webkit-appearance: none;
}

/* Contact section wrapper. */
.section--contact {
  padding-top: 3em; 
  height: 70vh; 
}

/* Contact sub-section wrapper. */
.contact-wrapper {
  background-color: #fff;
  height: auto;
  display: flex; 
  justify-content: center;
}

.contact-info__wrapper {
  height: 34em;
  width: 24em;
}

.contact-info__title {
  position: relative;
  color: #4dd0e1;
  letter-spacing: 2px;
  top: 0%;
  margin-bottom: 30px;
  text-align: left;
}

.contact-info__name {
	font-family: 'Roboto', arial;
	color: #4dd0e1;
  letter-spacing: 1px;
  margin-bottom: 45px;
  font-size: 14px;
}

.contact-info__icons-wrapper {
  font-size: 36px;
  height: 38px;
  color: #4dd0e1;
  display: flex;
  flex-wrap: wrap; 
  justify-content: left;
  letter-spacing: 17px;
}

.contact-info__icon {
  transition: 0.3s;
  cursor: pointer; 
}

.contact-info__icon:hover {
	color: #757575;
}

.contact-form__wrapper {
  height: 34em;
  width: 24em;  
}

.contact-form__field-wrapper, .contact-form__send-wrapper {
  width: 24em;
  margin-bottom: 11%;
  position: relative;
}

textarea {
  resize: none;
}

input {
	color: #190e0b;
}

.contact-form__field {
  width: 94%;
  background-color: #f5f5f5;
  outline: none;
  border: none;
  border-bottom: 2px solid transparent;
  transition: 0.3s ease-in-out;
  font-family: 'Roboto', arial;
  font-size: 14px;
  padding: 10px;
}

.contact-form__field:focus {
  border-color: #4dd0e1;
}

.send-button-wrapper {
  position: absolute;
  top: 0%; 
}

#send-button {
  width: 4em;
  font-size: 14px;
  font-family: 'Roboto', arial;
  color: #4dd0e1;
  border: 1px solid #4dd0e1;
  padding: 3px 7px;
  outline: none;
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
  right: 0%;
  transition: 0.3s ease-in-out;
}

#send-button:hover {
  cursor: pointer;
  opacity: 1;
  color: #757575;
  border-color: #757575;
} 
/**=====================================================================**/
/**=========================  error messages ===========================**/
.invalid-field-message, .invalid-email-message { 
  font-style: italic;
  font-size: 12px; 
  padding-top: 2px; 
  color: #e53935; 
  position: absolute;
  top: 100%;
  margin-top: 3px;
  opacity: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
}

.invalid-field .invalid-field-message,
.invalid-email .invalid-email-message {
  opacity: 1; 
  z-index: 1;
}

.invalid-field input, 
.invalid-email input, 
.invalid-field textarea,
.invalid-field input:focus, 
.invalid-email input:focus, 
.invalid-field textarea:focus,
.contact__failed-message, 
.icon-blocked:hover {
  border-color: #e53935;
}

.correct-field input, 
.correct-field textarea,
.correct-field input:focus, 
.correct-field textarea:focus, 
.contact__success-message,
.icon-validated:hover {
  border-color: #81c784;
}

.contact__success-message, 
.contact__failed-message {
  height: 9em;
  width: 100%;
  font-size: 20px;
  background-color: rgba(255,255,255, 0.8);
  text-align: center;
  padding-top: 150px;
  padding-bottom: 100px;
  position: absolute;
  opacity: 0;
  z-index: -1;
  transition: 0.3s ease-in-out;
}

.icon-blocked,
.icon-validated {
  font-size: 75px;
}

.icon-validated,
.contact__success-message div {
  color: #81c784;
}

.icon-blocked,
.contact__failed-message div {
  color: #e53935;
}
/**=====================================================================**/

/**================  animation validation / error message ==============**/
.show {
  opacity: 1; 
  z-index: 5;
}
/**=====================================================================**/
</style>
