//comment
var photoname = "";

var strglobal = "";
  var str = "";
  var idvar = "";
  var $idvar = "";
  var idJs = "";
var $idJs = "";
var idPhp = "";
var $idPhp = "";
  var photoid = "";
  var response = ""
  var correctIncorrect = "";
  var photoname = "";
  var searchNameFoundYesNo="";
var myObj = JSON.parse(localStorage["myObj"]);
var myObjUsers = JSON.parse(localStorage["myObjUsers"]);
var usernamecheckokyesno = "";

function checkusername(){
	searchName = document.getElementById("searchName").value
searchName = searchName.toUpperCase();
for (i in myObjUsers) {
id=myObjUsers[i].id;
    username=myObjUsers[i].username;
	username = username.toUpperCase();

	if (username==searchName){
		usernamecheckokyesno = "yes";
		return;
	}
	}
usernamecheckokyesno = "no";
}


function checkpassword(){
}


function mySearch() {
	searchNameFoundYesNo="No";
	checkusername();
	
if (usernamecheckokyesno=="no"){
alert(searchName + " is not a valid User Name");
return;
}

 
var x = document.getElementById("myTable").rows.length;
var i=x
while (i > 1) {
 document.getElementById("myTable").deleteRow(1);
  i=i-1;
}

searchName = document.getElementById("searchName").value
searchName = searchName.toUpperCase();
  
for (i in myObj) {
id=myObj[i].id;

    date=myObj[i].date;
 
  name = myObj[i].name;
  name = name.toUpperCase();

  amountloan=myObj[i].amountloan;
 
 amountpaid=myObj[i].amountpaid;
 
adjustments=myObj[i].adjustments;
 
 balance=myObj[i].balance;
 
 comments=myObj[i].comments;
  
 if (name.includes(searchName)==true){
searchNameFoundYesNo="Yes";
  createTable();
  document.getElementById("myTable").style.visibility = "visible";
   }
   }
  
  
  if (searchNameFoundYesNo=="No"){
alert("No match was found for your search " + searchName);	 
return;
 }

// var x = document.getElementById("myTable").rows.length;
}



 
 function createTable(){
  var x = document.createElement("TBODY");
      var y = document.createElement("TR");
   var z1 = document.createElement("TD");
 var z2 = document.createElement("TD");
  var z3 = document.createElement("TD");
   var z4 = document.createElement("TD");
    var z5 = document.createElement("TD");
	 var z6 = document.createElement("TD");
	// var z7 = document.createElement("TD");
	 var z8 = document.createElement("TD");
  z1.innerHTML = (id);
 z2.innerHTML = (date);
 z3.innerHTML = (name);
 z4.innerHTML = (amountloan);
 z5.innerHTML = (amountpaid);
 z6.innerHTML = (adjustments);
// z7.innerHTML = (balance);
 z8.innerHTML = (comments);
 
  y.appendChild(z1);
    y.appendChild(z2);
	y.appendChild(z3);
	y.appendChild(z4);
	y.appendChild(z5);
	y.appendChild(z6);
	//y.appendChild(z7);
	y.appendChild(z8);
  x.appendChild(y);
  document.getElementById("myTable").appendChild(x);
}
 
  


	