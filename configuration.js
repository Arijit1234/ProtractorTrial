var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['Scenarios_NNI//New.js'],

  // onprepare is similar to Before Test .. but it applies to all the test suites gobally
	onPrepare : function(){
		browser.waitForAngularEnabled(false);
		browser.driver.manage().window().maximize();  
		
		jasmine.getEnv().addReporter(
		        new Jasmine2HtmlReporter({
		          savePath: 'target/screenshots'
		        })
		      );
       
    }, 
    
    suites: {
    	Smoke: ['New.js'],
        Regression: ['New.js']
    },
    
    jasmintNodeOpts:{
    	showColorows: true
    }

};