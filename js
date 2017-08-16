//listen for form submit
document.getElementById('saleForm').addEventListener('submit', saveSale);
function saveSale(a){
//get form values
	var firstName = document.getElementById('firstName').value;
	var lastName = document.getElementById('lastName').value;
	var address = document.getElementById('address').value;
	var city = document.getElementById('city').value;
	var state = document.getElementById('state').value;
	var postalCode = document.getElementById('postalCode').value;
    var page = {
		name: firstName.concat(' ', lastName),
		address: address.concat(' ', city, ' ', state, ' ', postalCode)
	    }
/*
local storage
    localStorage.setItem('test', 'Hey you!');
	console.Log(localStorage.getItem('test'));
	localStorage.removeItem('test');
	console.Log(localStorage.getItem('test'));
*/
//test if page is null
    if(localStorage.getItem('pages') === null){
	//init array
		var pages = [];
	//add to array
		pages.push(page);
	//set to localStorage
	    localStorage.setItem('pages', JSON.stringify(pages));
	}
	else {
    //get pages from localStorage
		var pages = JSON.parse(localStorage.getItem('pages'));
	//add page to array
	    pages.push(page);
	//re-set to localStorage
	    localStorage.setItem('pages', JSON.stringify(pages));    
	}
//prevent form from submitting
	a.preventDefault();
}

/*BLOCK 1
//GET INPUT
var firstName = document.forms["sPage"]["firstName"];
var firstName = document.forms["sPage"]["lastName"];
//GET ERROR
var fname_error = document.getElementById("fname_error");
var lname_error = document.getElementById("lname_error");
//SET LISTENER
firstName.addEventListener("blur", fnameVerify, true);
lastName.addEventListener("blur", lnameVerify, true);
//VAL FUNC
function Validate(){

	if (firstName.value == ""){
		firstName.style.border = "1px solid red";
		fname_error.textContent = "First name is required";
		firstName.focus();
		return false
	}
	if (lastName.value == ""){
		lastName.style.border = "1px solid red";
		lname_error.textContent = "Last name is required";
		lastName.focus();
		return false
	}
}
//EVENT HANDLER
function fnameVerify(){
	if (firstName.value !=""){
		firstName.style.border = "1px solid red";
		fname_error.innerHTML = "";
		return true;
	}
}
function lnameVerify(){
	if (lastName.value !=""){
		lastName.style.border = "1px solid red";
		lname_error.innerHTML = "";
		return true;
	}
}
*/
