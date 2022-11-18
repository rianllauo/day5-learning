let tanggal = new Date()
console.log(tanggal.getDate())
console.log(tanggal.getMonth())
console.log(tanggal.getFullYear())
console.log(tanggal.getHours())
console.log(tanggal.getMinutes())

let data = []

function addData(event){
   event.preventDefault()

   let title = document.getElementById("input-title").value
   let content = document.getElementById("input-content").value
   let image = document.getElementById("input-image").files

   let gambar = URL.createObjectURL(image[0])
   // console.log("gambar", image[0])
   console.log("gambar path", gambar)

   let blog = {
      title,
      content,
      gambar,
      postAt : new Date(),
      author : "Rian Ganteng"
   }

   data.push(blog)
   console.log(data)

   renderBlog()
   // console.log(blog)
}

function renderBlog(){
   document.getElementById("contents").innerHTML = ''

   for(let index = 0; index < data.length; index++ ){
      document.getElementById("contents").innerHTML += `
      <div>
         <h1>${data[index].title}</h1>
         <p>${konversiWaktu(data[index].postAt)}<p/>
         <p>${data[index].content}</p>
         <img src="${data[index].gambar}" alt="" width="80px">
         <p><p/>
      </div>`
   }
}  

function konversiWaktu(time){
   let monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Des"]

   return `${time.getDate()} ${monthName[time.getMonth()]} ${time.getFullYear()}`
}




