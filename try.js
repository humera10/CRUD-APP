"use strict"; // koi varible undefined h usko error show krega;
let selectedtr = null;   // global variable for using selectedtr

//let td = document.querySelector(".edt")
let form = document.querySelector("form"); //target form tag
let crudTable= document.querySelector("#crudTable");
 //let td = document.querySelector(".edt")
form.addEventListener("submit",(event)=>{ 
    let date=event.target.date.value;
    let name=event.target.name.value;
    let empid=event.target.id.value;
    let dept=event.target.department.value;
    let password=event.target.password.value;
    
     let attendance=event.target.attendance.value;
    

    

    if(!date || !name || !empid  || !dept  || !password || !attendance ){ // alert msg if all are blank
        alert('Please fill the details');
        return;

    }
 
    
    if(selectedtr== null) {
        
        insertData();
        //details.innerHTML="data Inserted!";
    }
    else{
        update();
        
        //details.innerHTML="data Updated!";
    }
  
    
    let data=JSON.parse(localStorage.getItem("userDetails")) ?? []; // null handle operator

    //alert(JSON.stringify(data))

    

    data.push({                               // userDetails is key value 
        date,
        name,
        empid,
        dept,
        password,
        attendance
    })

    

    //alert(JSON.stringify(data))
    localStorage.setItem("userDetails",JSON.stringify(data))
    
    
   // form.value ="";
    
    insertData();
   
    



    event.target.reset();
   //update();
       

    
    

    //let td = document.querySelector(".edt")
    //event.target.reset(); // event m jo bhi target liya h uski value ko reset kr dega ye
    //onEdit(td);
    //event.target.onDelete(); // ques
   //onDelete();
//    insertData();

   
     // ye table m insert kr k browser m show krega direct
    ////console.log(data)

    ////console.log(data)



    ////console.log(name,date,empid,dept);
    ////console.log(event);

    
    event.preventDefault();

      // jo bhi event aye usse cancel krdo
    //alert("hello")

});


// 


//insertData();

// use addEventListener to form submit, through event shows what type of data/form/detailsinputwe      have use 

let insertData=() =>{
    let data=JSON.parse(localStorage.getItem("userDetails")) ?? []; // yhn multiple data h jo hmne user se liya h usko ye show kra dega console m
     
    let finalData='';
    data.forEach((element, i)=>{
        ////console.log(element)
        finalData+=`<table><tr>
        <td>${element.date}</td>   
        <td>${element.name}</td>
        <td>${element.empid}</td>
        <td>${element.dept}</td>
        <td>${element.password}</td>
        <td>${element.attendance}</td>
        <td><button id ="edt" onclick = 'onEdit(this)'>Edit</button>
        <button onclick = 'onDelete(${i})'>Delete</button></td>
        </tr></table>`; // use template literals "${}" in back tilts ``

// with the help of foreach method we concate the data in finaldata

       // tableBox.innerHTMLfinalData;
    //    crudTable.innerHTML=finalData;



        //document.getElementById("crudTable").innerHTML += tbl;
    
    });

   

    crudTable.innerHTML=finalData;

    
    // //console.log(data)
    // //return false;

    ////console.log(finalData)

}



//reset form

// function resetForm() {
//     document.getElementById("date").value = "";
//     document.getElementById("name").value = "";
//     document.getElementById("empid").value = "";
//     document.getElementById("dept").value = "";
//     document.getElementById("password").value = "";
//     // document.querySelector('input[name="Attendance"]:checked').value = "";
//     document.getElementById("attendance").value = "";
// }




// edit

 function onEdit(td){ //td is parameter

     

    let data=JSON.parse(localStorage.getItem("userDetails")) ?? [];

    
    
    
    selectedtr = td.parentElement.parentElement;  // row ko target krne k liye parameter pass kiya h td
    let newData=data.filter(item=>item.empid!==selectedtr.cells[2].innerHTML);
   // console.log({newData});

   localStorage.setItem("userDetails",JSON.stringify(newData));
     
     document.getElementById("date").value = selectedtr.cells[0].innerHTML; // td find krne k liye cells ka use kiya h
     document.getElementById("name").value = selectedtr.cells[1].innerHTML;
     document.getElementById("empid").value = selectedtr.cells[2].innerHTML;
     document.getElementById("dept").value = selectedtr.cells[3].innerHTML;
     document.getElementById("password").value = selectedtr.cells[4].innerHTML;
     //document.querySelector("#attendance").value = selectedtr.cells[5].innerHTML;
     document.querySelector('input[name="attendance"]:checked').value = selectedtr.cells[5].innerHTML;
     
    //document.getElementById("attendance").value = selectedtr.cells[5].innerHTML;
     
   
}




//Update

 function update(){
    
    selectedtr.cells[0].innerHTML = document.getElementById("date").value;
    selectedtr.cells[1].innerHTML = document.getElementById("name").value;
    selectedtr.cells[2].innerHTML = document.getElementById("empid").value;
    selectedtr.cells[3].innerHTML = document.getElementById("dept").value;
    selectedtr.cells[4].innerHTML = document.getElementById("password").value;
    //selectedtr.cells[5].innerHTML = document.querySelector("#attendance").value;
    selectedtr.cells[5].innerHTML = document.querySelector('input[name="attendance"]:checked').value;
    
   // selectedtr.cells[5].innerHTML = document.getElementById("attendance").value;
   //selectedtr = null;

   
}




// delete

let onDelete=(index)=>{

    
     let data=JSON.parse(localStorage.getItem("userDetails")) ?? [];
    let newData = data.splice(index, 1);
    //let newData = data;
    localStorage.setItem("userDetails",JSON.stringify(data))
    insertData();
    }

insertData(); 














