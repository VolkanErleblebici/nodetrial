Feature('Forms');

Scenario('test something', (I,homePage) => {
  //I.amOnPage('/');
  homePage.writeSmt();
 // I.fillField('Email', 'hello@world.com');
  //I.fillField('Password', '123456');
 // I.checkOption('Active');
 // I.checkOption('Male');  
 // I.click('Create User');
 // I.see('User is valid');
  //I.dontSeeInCurrentUrl('/documentation'); 
  ı.see('FINISH'); 
});