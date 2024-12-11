async function regemployee() {
    const res=await fetch("http://localhost:3000/getemployee")
    if(res.status==200){
        const employee=await res.json();
        console.log(employee);
        let str1=""
        employee.forEach((employee,index)=>{
            str1+=`
                    <div class="card">
          <div class="photodiv">
            <div class="photo">
              <img
                src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"alt="person"/>
            </div>
          </div>
          <div class="detailsdiv">
            <div class="name-div">
              <h3>${employee.name}</h3>
            </div>
            <div class="det-divs">
              <h4 class="det-names">Date-of-Birth</h4>
              <h4 class="det-val">: ${employee.dob}</h4>
            </div>
            <div class="det-divs">
              <h4 class="det-names">Gender</h4>
              <h4 class="det-val">: ${employee.gender}</h4>
            </div>
            <div class="det-divs">
              <h4 class="det-names">Address</h4>
              <h4 class="det-val">: ${employee.address}</h4>
            </div>
            <div class="det-divs">
              <h4 class="det-names">E-mail</h4>
              <h4 class="det-val">: ${employee.email}</h4>
            </div>

            <div class="det-divs">
              <h4 class="det-names">Phone</h4>
              <h4 class="det-val">: ${employee.phone}</h4>
            </div>
            <div class="button-div">
              <a href="./Pages/edit.html"><button class="editbutton">edit</button></a>
              <button class="deletebutton">delete</button>
            </div>
          </div>
        </div>
               
            `
        });
        document.getElementById("contentdiv").innerHTML=str1
        
    }
}
regemployee();
