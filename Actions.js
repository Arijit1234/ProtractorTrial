// repeater(only for angular apps), chain locators and css for identical tags

describe('Chain Locators', function(){
	
	
	it('Open Angular JS Website',function(){
	
        browser.get('http://posse.com/');
        element(by.model("userInputQuery")).sendKeys("river");
        // select from auto suggestion
        browser.actions().mouseMove(element(by.model("locationQuery")).sendKeys("London")).perform();
        browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
        browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
        	browser.sleep(5000);
        });
        
        // window handles new window tab
        browser.getAllWindowHandles().then(function(handles){
        	browser.switchTo().window(handles[1]);
        })
        
	}) 
       
		
})
	


