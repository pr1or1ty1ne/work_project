//listen for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
function saveBookmark(a){
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
/*local storage
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
