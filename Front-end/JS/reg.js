document.getElementById("form").addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("hai");
    
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const address = document.getElementById("address").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value; 



   console.log(name,dob,gender, address, email, phone);
   fetch("http://localhost:3000/submit",{
    method:"POST",
    headers:{"Content-Type": "text/json"},
    body: JSON.stringify({name,dob,gender,address,email,phone})
    
   })

})