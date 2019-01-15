// repeater(only for angular apps), chain locators and css for identical tags

describe('Chain Locators', function(){
	function Calc(a,b,c){
		element(by.model("first")).sendKeys(a);
        element(by.model("second")).sendKeys(b);
       
        
        element.all(by.tagName("option")).each(function(item)
                {
                	    item.getAttribute("value").then(function(value){
                	    	console.log(value);
                	    	if(value ==c ){
                	    		
                	    		item.click();
                	    		element(by.id("gobutton")).click();
                	    	}
                	    })
                 }) 
        
	}
	
	it('Open Angular JS Website',function(){
	
        browser.get('http://juliemr.github.io/protractor-demo/');
        Calc(5,5,"MULTIPLICATION");
        Calc(5,5,"ADDITION");
        Calc(5,5,"DIVISION");
        Calc(5,5,"SUBTRACTION");
        
        
       
    
        
        
	}) 
       
		
})
	
