Feature('Forms');

Scenario('test something', (I) => {
  I.amOnPage('/');
  I.fillField('#searchText', 'hello@world.com');
  //I.fillField('Password', '123456');
  I.checkOption('Active');
  I.checkOption('Male');  
  I.click('Create User');
  I.see('User is valid');
  I.dontSeeInCurrentUrl('/documentation');  
});