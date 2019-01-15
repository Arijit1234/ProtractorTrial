describe('Protractor baby steps', function(){
	
	it('Test Case 1',function(){
		browser.get('https://angularjs.org');
        browser.get('https://www.protractortest.org/#/').then(function(){
        console.log("I am the after promise step to execute");
        });
     
       
		
	})
	
	

})