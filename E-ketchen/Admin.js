function Loglclick(){
    var username = document.getElementById("name").value;
    var password = document.getElementById("psw").value;
    if (username == "abdullah" && password == "123"){
        localStorage.setItem("UserName","abdullah");
      localStorage.setItem("Password","123");  
    alert ("Login successfully");
        document.location.href ="admin/additem.html";
     return false;
      }else{
        alert ("something wrong!");
      }
}

    function Changepass(){
        var pw=localStorage.getItem("Password");
        if(document.getElementById("curr-psw").value==pw){
            localStorage.setItem("UserName","abdullah");        
            localStorage.setItem("Password",document.getElementById("new-psw").value);    
            alert("change the password Successfully ");
            document.location.href="ChangePassword.html";
        }
        else
        alert("wrong !");
        }
   

      //Item
   var rIndex,
   table = document.getElementById("Item");
  
  function check(){
    var isEmpty=false,
    name = document.getElementById("name").value,
   price = document.getElementById("price").value,
   available = document.getElementById("available").value;
   if(name===""){
     alert("Name Cannot be empty!");
     isEmpty=true;
   }else if(price===""){
     alert("Price Cannot be empty!");
     isEmpty=true;
   }else if(available===""){
     alert("Availability Cannot be empty!");
     isEmpty=true;
   }
   return isEmpty;

  }
  function Addclick(){
    if(!check()){
  var newRow = table.insertRow(table.length),
   cell1=newRow.insertCell(0),
   cell2=newRow.insertCell(1),
   cell3=newRow.insertCell(2),
   name = document.getElementById("name").value,
   price = document.getElementById("price").value,
   available = document.getElementById("available").value;
    cell1.innerHTML =name;
    cell2.innerHTML=price;
    cell3.innerHTML=available;
      SelectRow();
      name = document.getElementById("name").value="";
      price = document.getElementById("price").value="";
      available = document.getElementById("available").value="";
  }
}
  function Delclick(){
    table.deleteRow(rIndex);
      name = document.getElementById("name").value="";
      price = document.getElementById("price").value="";
      available = document.getElementById("available").value="";
  
  }
  function SelectRow(){
   
    for (var i = 1; i < table.rows.length; i++) {
      table.rows[i].onclick=function(){
        rIndex = this.rowIndex;
        document.getElementById("name").value = this.cells[0].innerHTML;
        document.getElementById("price").value = this.cells[1].innerHTML;
        document.getElementById("available").value = this.cells[2].innerHTML;
      };
      
    }
  }
  SelectRow();
  function Ediclick(){
    if(!check()){
      var  name = document.getElementById("name").value,
           price = document.getElementById("price").value,
           available = document.getElementById("available").value;

      table.rows[rIndex].cells[0].innerHTML = name;
      table.rows[rIndex].cells[1].innerHTML = price;
      table.rows[rIndex].cells[2].innerHTML = available;
  }
}