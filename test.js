var webdriverio = require('webdriverio');
var options = { desiredCapabilities: { browserName: 'chrome' } };
var client = webdriverio.remote(options);
client
    .init()
    .url('https://internet.frontier.com/')
    //.setValue('#search_form_input_homepage', 'WebdriverIO')
    //.click('#menu-item-5108') // click on All Plans
	
	.setValue('#street', '1554 bellridge rd')
	.setValue('#city', 'rock hill')
		
	//Function to get states value.
	.then('should demonstrate the selectByIndex command', function () {
    var selectBox = document.getElementById('state');
    console.log(selectBox.getValue()); // returns "someValue0"
    
	selectBox.selectByIndex(4);
    console.log(selectBox.getValue()); // returns "someValue4"

})
	//End
	
	.setValue('#zip', '29732')
	
	.then('is phone number format correctly?', function () {
	var regex = /^\d-\d{3}-\d{3}-\d{4}$/;
	var phoneNum = document.getAttribute('=1-877-558-8066', 'href');
	console.log(regex.test(phoneNum));
	
	})
	
	
	.waitForVisible('img').then(function(visible){
		console.log("are images visible? " + visible); // should return true
	})

	
	.end();