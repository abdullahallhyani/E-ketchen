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
   

      //Item product_id product Discription contme price
   var rIndex,
   table = document.getElementById("Item");
  
  function check(){
    var isEmpty=false,
        product_id = document.getElementById("product_id").value,
        product = document.getElementById("product").value,
        Discription = document.getElementById("Discription").value,
        contme = document.getElementById("contme").value,
        price = document.getElementById("price").value;
      if (product_id === "") {
          alert("product_id Cannot be empty!");
          isEmpty = true;
      } else if (product === "") {
          alert("product Cannot be empty!");
          isEmpty = true;
      } else if (Discription === "") {
          alert("Discription Cannot be empty!");
          isEmpty = true;
      } else if (contme === "") {
          alert("contme Cannot be empty!");
          isEmpty = true;
      } else if (price === "") {
          alert("price Cannot be empty!");
          isEmpty = true;
      }
   return isEmpty;

  }
  function Addclick(){
    if(!check()){
  var newRow = table.insertRow(table.length),
      cell1=newRow.insertCell(0),
      cell2=newRow.insertCell(1),
      cell3 = newRow.insertCell(2),
      cell4 = newRow.insertCell(3),
      cell5 = newRow.insertCell(4),//product_id product Discription contme price
      product_id = document.getElementById("product_id").value,
      product = document.getElementById("product").value,
      Discription = document.getElementById("Discription").value,
      contme = document.getElementById("contme").value,
      price = document.getElementById("price").value;
        cell1.innerHTML = product_id;
        cell2.innerHTML = product;
        cell3.innerHTML = Discription;
        cell4.innerHTML = contme;
        cell5.innerHTML = price;

      SelectRow();
        product_id = document.getElementById("product_id").value = "";
        product = document.getElementById("product").value = "";
        Discription = document.getElementById("Discription").value = "";
        contme = document.getElementById("contme").value = "";
        price = document.getElementById("price").value = "";
  }
}
  function Delclick(){
    table.deleteRow(rIndex);
      product_id = document.getElementById("product_id").value = "";
      product = document.getElementById("product").value = "";
      Discription = document.getElementById("Discription").value = "";
      contme = document.getElementById("contme").value = "";
      price = document.getElementById("price").value = "";
  
  }
  function SelectRow(){
   
    for (var i = 1; i < table.rows.length; i++) {
      table.rows[i].onclick=function(){
        rIndex = this.rowIndex;
          document.getElementById("product_id").value = this.cells[0].innerHTML;
          document.getElementById("product").value = this.cells[1].innerHTML;
          document.getElementById("Discription").value = this.cells[2].innerHTML;
          document.getElementById("contme").value = this.cells[3].innerHTML;
          document.getElementById("price").value = this.cells[4].innerHTML;
      };
      
    }
  }
  SelectRow();
  function Ediclick(){
    if(!check()){
        var product_id = document.getElementById("product_id").value,
            product = document.getElementById("product").value,
            Discription = document.getElementById("Discription").value,
            contme = document.getElementById("contme").value,
            price = document.getElementById("price").value;

        table.rows[rIndex].cells[0].innerHTML = product_id;
        table.rows[rIndex].cells[1].innerHTML = product;
        table.rows[rIndex].cells[2].innerHTML = Discription;
        table.rows[rIndex].cells[2].innerHTML = contme;
        table.rows[rIndex].cells[2].innerHTML = price;
  }
}