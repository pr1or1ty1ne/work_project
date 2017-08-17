/*
//listen for form submit
document.getElementById('saleForm').addEventListener('submit', saveSale);
function saveSale(a){
//get form values
	var fName = document.getElementById('fName').value;
	var lName = document.getElementById('lName').value;
	var address = document.getElementById('address').value;
	var city = document.getElementById('city').value;
	var state = document.getElementById('state').value;
	var postalCode = document.getElementById('postalCode').value;
    var fLayout = {
		name: fName.concat(' ', lName),
		address: address.concat(' ', city, ' ', state, ' ', postalCode)
	    }

local storage
    localStorage.setItem('test', 'Hey you!');
	console.Log(localStorage.getItem('test'));
	localStorage.removeItem('test');
	console.Log(localStorage.getItem('test'));

//test if page is null
    if(localStorage.getItem('pages') === null){
	//init array
		var pages = [];
	//add to array
		pages.push(fLayout);
	//set to localStorage
	    localStorage.setItem('pages', JSON.stringify(pages));
	}
	else {
    //get pages from localStorage
		var pages = JSON.parse(localStorage.getItem('pages'));
	//add page to array
	    pages.push(fLayout);
	//re-set to localStorage
	    localStorage.setItem('pages', JSON.stringify(pages));    
	}
//prevent form from submitting
	a.preventDefault();
}
*/
//GET INPUT
var fName = document.forms["sPage"]["fName"];
var lName = document.forms["sPage"]["lName"];
var address = document.forms["sPage"]["address"];
var city = document.forms["sPage"]["city"];
var pcode = document.forms["sPage"]["pcode"];
//GET ERROR
var fName_error = document.getElementById("fName_error");
var lName_error = document.getElementById("lName_error");
var address_error = document.getElementById("address_error");
var city_error = document.getElementById("city_error");
var pcode_error = document.getElementById("pcode_error");
//SET LISTENER
fName.addEventListener("blur", fNameVerify, true);
lName.addEventListener("blur", lNameVerify, true);
address.addEventListener("blur", addressVerify, true);
city.addEventListener("blur", cityVerify, true);
pcode.addEventListener("blur", pcodeVerify, true);
//VAL FUNC
function Validate(){

	if (fName.value == ""){
		fName.style.border = "1px solid red";
		fName_error.textContent = "First name is required";
		fName.focus();
		return false;
	}
	if (lName.value == ""){
		lName.style.border = "1px solid red";
		lName_error.textContent = "Last name is required";
		lName.focus();
		return false;
	}
	if (address.value == ""){
		address.style.border = "1px solid red";
		address_error.textContent = "Address is required";
		address.focus();
		return false;
	}
                if (city.value == ""){
		city.style.border = "1px solid red";
		city_error.textContent = "City is required";
		city.focus();
		return false;
	}
                if (pcode.value == ""){
		pcode.style.border = "1px solid red";
		pcode_error.textContent = "Postal Code is required";
		pcode.focus();
		return false;
	}
}
//EVENT HANDLER
function fNameVerify(){
	if (fName.value !=""){
		fName.style.border = "1px solid red";
		fName_error.innerHTML = "";
		return true;
	}
}
function lNameVerify(){
	if (lName.value !=""){
		lName.style.border = "1px solid red";
		lName_error.innerHTML = "";
		return true;
	}
}
function addressVerify(){
	if (address.value !=""){
		address.style.border = "1px solid red";
		address_error.innerHTML = "";
		return true;
	}
}
function cityVerify(){
	if (city.value !=""){
		city.style.border = "1px solid red";
		city_error.innerHTML = "";
		return true;
	}
}
function pcodeVerify(){
	if (pcode.value !=""){
		pcode.style.border = "1px solid red";
		pcode_error.innerHTML = "";
		return true;
	}
}

//TOTAL DIFF APPROACH
//GOES IN <body>
//<p>Enter a number and click OK:</p>
//
//<input id="id1" type="number" min="100" max="300" required>
//<button onclick="myFunction()">OK</button>
//
//<p>If the number is less than 100 or greater than 300, an error message will be displayed.</p>
//
//<p id="demo"></p>
//JS BELOW
//function myFunction() {
//    var inpObj = document.getElementById("id1);
//        if (inpObj.checkValidity() == false) {
//            document.getElementById("demo").innerHTML = inpObj.validationMessage;
//        }
//        else {
//            document.getElementById("demo").innerHTML = "Input OK";
//        } 
//
