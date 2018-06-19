
Feature('Udemy');

/*
    model: arama yapilacak olan vasitanin modeli...
    count: arama yapilan modele ait beklenen ilan sayisi...
*/
let items = new DataTable(['model','count']);
items.add(['Yamaha MT07', '54']);
items.add(['Yamaha MT09', '29']);
items.add(['Yamaha MT25', '96']);

Data(items).Scenario('test3', async(I, current) => {
    I.amOnPage('https://www.sahibinden.com');
    //I.clearCookie();
    //I.refreshPage();
    //Detayli Arama alanina data set ediliyor...
    I.fillField('#searchText', current.model);
    //Arama baslatiliyor...
    I.click('#searchSuggestionForm > button');
    //I.pressKey('Enter');
    //Sayfanin geldigine dair logo visibility bekleniyor...
    I.waitForVisible('//*[@id="wideContainer"]/div/div[2]/ul/li[1]/a');
    //Sayfanin geldigine dair text visibility bekleniyor...
    I.click('//*[contains(text(),"Motosiklet")]');
    //Sonuclar arasindan Motosiklet secimi yapiliyor..
    I.waitForText('Arama Kelimesi');

    //modele ait arama sonucunun adedi ekrandan aliniyor...
    var actualCount = await I.grabTextFrom('//*[@id="searchResultsSearchForm"]/div/div[3]/div[1]/div[1]/div[1]/div[1]/span');
    //Alinan degerin consolda görülmesi islemleri...
    console.log(`Arama Sonucu : ${actualCount} adet ${current.model} vasıta bulunmustur.`);
    I.say(`Arama Sonucu : ${actualCount} adet ${current.model} vasıta bulunmustur.`);

    //expected vs actual...
    let assert = require('assert');
    assert.equal(actualCount, current.count);
    //I.wait(1);
    //I.amOnPage('https://www.sahibinden.com');
    //I.clearCookie();
});
