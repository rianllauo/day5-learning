function submitData(){
   // console.log('hellow world')
   let name = document.getElementById("name").value
   let email = document.getElementById("email").value
   let phone = document.getElementById("phone").value
   let subject = document.getElementById("subject").value
   let message = document.getElementById("message").value
   console.log(name, email,phone,subject,message);

   if (name == ''){
      return 
   }else if (email == ''){
      return 
   }else if (phone == ''){
      return 
   }else if (subject == ''){
      return 
   }else if (message == ''){
      return 
   }

   let emailReciver = "rianllauo@gmail.com"

   let link = document.createElement('a')
   link.href = `mailto: ${emailReciver}?subject=${subject}&body=Hallo nama saya ${name}, ${message}, silahkan kontak saya di nomer ${phone}`
   link.click()

   let student = {
      name,
      email,
      phone,
      subject,
      message 
   }

   console.log(student)
}