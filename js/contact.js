function textInput(){
   let input = document.querySelector('input');
   let textInvalid = document.querySelector('.text-invalid')

   textInvalid.classList.remove('hidden')
   input.classList.remove('invalid');
}

function emailInput(){
   let inputEmail = document.querySelector('.input-email')
   let emailtext = document.querySelector(".email")

   emailtext.classList.remove('hidden')
   inputEmail.classList.remove('invalid');
}

function phoneInput(){
   let inputPhone = document.querySelector('.input-phone')
   let phonetext = document.querySelector(".phone")

   phonetext.classList.remove('hidden')
   inputPhone.classList.remove('invalid');
}
function subjectInput(){
   let inputSubject = document.querySelector('.input-subject')
   let subjecttext = document.querySelector(".subject")

   subjecttext.classList.remove('hidden')
   inputSubject.classList.remove('invalid');
}
function messageInput(){
   let inputMessage = document.querySelector('.input-message')
   let messagetext = document.querySelector(".message")

   messagetext.classList.remove('hidden')
   inputMessage.classList.remove('invalid');
}

function submitData(){
   
   let names = document.getElementById("name").value
   let email = document.getElementById("email").value
   let phone = document.getElementById("phone").value
   let subject = document.getElementById("subject").value
   let message = document.getElementById("message").value


   let nametext = document.querySelector(".name")
   let emailtext = document.querySelector(".email")
   let phonetext = document.querySelector(".phone")
   let subjecttext = document.querySelector(".subject")
   let messagetext = document.querySelector(".message")


   let inputName = document.querySelector('.input-name')
   let inputEmail = document.querySelector('.input-email')
   let inputPhone = document.querySelector('.input-phone')
   let inputSubject = document.querySelector('.input-subject')
   let inputMessage = document.querySelector('.input-message')

   if (names == ''){
      nametext.classList.add('hidden')
      inputName.classList.add('invalid')
      return
   }
   else if (email == ''){
      emailtext.classList.add('hidden')
      inputEmail.classList.add('invalid')
      return

   }
   else if (phone == ''){
      phonetext.classList.add('hidden')
      inputPhone.classList.add('invalid');
      return

   }
   else if (subject == ''){
      subjecttext.classList.add('hidden')
      inputSubject.classList.add('invalid');
      return

   }
   else if (message == ''){
      messagetext.classList.add('hidden')
      inputMessage.classList.add('invalid');
      return
   } 

   let emailReciver = "rianllauo@gmail.com"

   let link = document.createElement('a')
   link.href = `mailto: ${emailReciver}?subject=${subject}&body=Hallo nama saya ${names}, ${message}, silahkan kontak saya di nomer ${phone}`
   link.click()
   

   let student = {
      names,
      email,
      phone,
      subject,
      message 
   }

   console.log(student)
}





