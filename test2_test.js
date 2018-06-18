
Feature('Udemy');

Scenario('test2', async (I) => {
    I.amOnPage('https://www.sahibinden.com');
 
    /*
      Test2 yapilmasi istenen detayli arama islemleri...
    */

    //Detayli Arama link gorunurlugu kontrolu...
    I.click('#searchSuggestionForm a');
    // Wait gerekli degil deneme amacli...
    I.wait(1);
    //Kategori secimi...
    I.click('//*[text()="Vasıta"]');
    //Kategori secimi...
    I.click('//*[text()="Motosiklet"]');
    //Kategori secimi...
    I.wait(1);
    I.dragAndDrop('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[2]/div[2]/div', '//*[text()="Vitrin"]');
    I.click('//*[text()="Yamaha"]');
    I.wait(1);
    //Kategori secimi...
    I.dragAndDrop('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[2]/div[2]/div', '//*[text()="Xgjao"]');
    I.wait(1);
    I.click('//*[text()="MT-07 ABS"]');

    //Yil secimi...
    I.fillField('Min Yıl', '1998');
    I.fillField('Max Yıl', '1999');
    I.wait(1);

    //Renk secimi...
    I.scrollTo('//*[text()="Motor Gücü"]');
    I.wait(1);
    I.click('//*[text()="Renk"]/following::div/div');
    I.wait(1);
    I.click('//*[@id="a1331_option_3"]/following::label');
    I.wait(1);

    //Guvenlik secimi...
    I.scrollPageToBottom();
    I.click('//*[@id="a106200"]//following::label');
    
    //Arama Baslat...
    I.click('Arama Yap');

    //Sonuc kontrolü...
    var aramaSonucu = await I.grabTextFrom('//*[@id="saveSearchResult"]');
    //Alinan degerin consolda görülmesi islemleri...
    console.log(`Arama Sonucu : ${aramaSonucu}`);
    I.say(`Arama Sonucu : ${aramaSonucu}`);

    let assert = require('assert');
    assert.equal(aramaSonucu, 'Arama filtrelerinize uygun ilan bulunamadı.');
});
