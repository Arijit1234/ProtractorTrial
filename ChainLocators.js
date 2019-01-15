// repeater(only for angular apps), chain locators and css for identical tags

describe('Chain Locators', function(){
	var obj = require("C:\\Users/arijit.chowdhury/eclipse-workspace/ProtractorTutorial/jsobjectdemo.js");
//	
//	 beforeEach(function(){
//		
//	 });
//    
	 afterEach(function(){
		 console.log("Test is completed");
	 });
	 
	function Add(a,b){
		
	
				obj.a.sendKeys(a);
		        obj.secondinput.sendKeys(b);
		        obj.gobutton.click();
		
		}
	
	it('Open Angular JS Website',function(){
	
		 browser.get("http://juliemr.github.io/protractor-demo/"); 
        console.log("browser loading passed");
        browser.sleep(5000).then(function(){
	        Add(2,3);
	        Add(3,3);

        })
    
      //  element.all(by.repeater("result in memory")).each(function(item)
          obj.result.each(function(item)
        {
        	 //  item.obj.result2.getText().then(function(text)
        	  item.element(by.css("td:nth-child(3)")).getText().then(function(text)
        	    		{
        	    			console.log(text);
        	    		})
            }) 
//        
	}) 
       
		
})
	
