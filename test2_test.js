
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
    //Kategori secimi birinci asama...
    I.click('//*[text()="Vasıta"]');
    //Kategori secimi ikinci asama...
    I.click('//*[text()="Motosiklet"]');
    //Kategori secimi ucuncu asama...
    I.wait(1);
    I.dragAndDrop('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[2]/div[2]/div', '//*[text()="Vitrin"]');
    I.click('//*[text()="Yamaha"]');
    I.wait(1);
    
    //Kategori secimi dorduncu asama...
    //Bir loop icerisinde MT-07 ABS visible olana dek PageDown yapma islemi olarak düzeltilecek...
    I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[1]');
    I.wait(1);
    I.pressKey('PageDown')
    I.wait(1);
    I.pressKey('PageDown')
    I.wait(1);
    I.pressKey('PageDown')
    I.wait(1);
    I.pressKey('PageDown')
    I.wait(1);
    I.pressKey('PageDown')
    I.wait(1);
    I.pressKey('PageDown')
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
    I.wait(1);

    //Arama Baslat...
    I.click('Arama Yap');
    I.wait(1);
    
    //Sonuc kontrolü...
    var aramaSonucu = await I.grabTextFrom('//*[@id="saveSearchResult"]');
    //Alinan degerin consolda görülmesi islemleri...
    console.log(`Arama Sonucu : ${aramaSonucu}`);
    I.say(`Arama Sonucu : ${aramaSonucu}`);

    //expected vs actual...
    let assert = require('assert');
    assert.equal(aramaSonucu, 'Arama filtrelerinize uygun ilan bulunamadı.');
});
