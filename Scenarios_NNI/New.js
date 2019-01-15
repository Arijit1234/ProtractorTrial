// repeater(only for angular apps), chain locators and css for identical tags

describe('Sales Force', function(){
	var obj = require("C:\\Users\\arijit.chowdhury\\eclipse-workspace\\ProtractorTutorial\\SF_Elements.js");
//	
//	 beforeEach(function(){
//		
//	 });
//    
	 afterEach(function(){
		 console.log("Test is completed");
	 });
	 
	
	
	it('Sales Force Test',function(){
	   
		browser.get(obj.URL_SF_UAT);



		 browser.sleep(0).then(function(){
        obj.username.sendKeys("arijit.chowdhury@vocus.com.au.uat");
        obj.password.sendKeys("Harekrishna1");
        obj.loginButton.click();
	     
         })
    
      
	}) 
       
		
})
	
