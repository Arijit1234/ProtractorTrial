function SF_Elements()
{
	this.URL_SF_UAT = "https://vocus--uat.cs116.my.salesforce.com/home/home.jsp?sdtd=1";
	
//	login
	this.passwordData = "Harekrishna1";
	this.username = element(by.id("username"));
	this.password = element(by.id("password"));
	this.loginButton=element(by.id("Login"));
	
	
	this.Opportunities = element(by.css("#Opportunity_Tab > a"));
    this.New = element(by.name("new"));
    

	


this.getModel=function()
 {
	 console.log("this is SF test function. Write your codes here");
 };

};


module.exports=new SF_Elements();