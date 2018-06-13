Feature('Udemy');

Scenario('test1', async (I) => {
  I.amOnPage('https://www.sahibinden.com');
 
  /*
    Test1 1. asamada yapilmasi istenen gorunurluk islemleri...
  */
  //logo gorunurlugu kontrolu...
  I.seeElement('/html/body/div[3]/div/p/a');
  //Arama alani gorunurlugu kontrolu...
  I.seeElement('#searchText');
  //Giris Yap link gorunurlugu kontrolu...
  I.seeElement('/html/body/div[3]/div/ul/li[1]/a');
  //Uye Ol link gorunurlugu kontrolu...
  I.seeElement('/html/body/div[3]/div/ul/li[2]/a');
  //Ucretsiz Ilan Ver buton gorunurlugu kontrolu...
  I.seeElement('#post-new-classified');
  // Wait gerekli degil deneme amacli...
  I.wait(1);
  //Detayli Arama link gorunurlugu kontrolu...
  I.seeElement('#searchSuggestionForm a');
  //Ucretsiz Ilan Ver buton gorunurlugu kontrolu...
  I.seeElement('//*[@id="container"]/div[3]/div/div[2]/div[3]/h3');

  /*
    Test1 2. asamada yapilmasi istenen gorunurluk ve 56 resimli
    ilan varliginin kontrol islemleri...
  */

  //vitrin degiskeni tanimlaniyor ve verilen locatordan text degeri alinarak bu degiskene set ediliyor...
  var vitrin = await I.grabTextFrom('//*[@id="container"]/div[3]/div/div[2]/div[3]/h3');
  //Alinan degerin consolda görülmesi islemleri...
  console.log(`Anasayfa Vitrini olarak deger : ${vitrin}`);
  I.say(`Anasayfa Vitrini olarak deger : ${vitrin}`);

  //links degiskeni tanimlaniyor ve verilen locatordan kac adet bulundugu bu degiskene set ediliyor...
  var links = await I.grabNumberOfVisibleElements('//*[@id="container"]/div[3]/div/div[2]/div[3]/ul/li');
  // Wait gerekli degil deneme amacli...
  I.wait(2);
  //Alinan degerin consolda görülmesi islemleri...
  console.log(`Anasayfa Vitrini altindaki resimli ilan sayisi : ${links}`);
  I.say(`Anasayfa Vitrini altindaki resimli ilan sayisi : ${links}`);
  
  /*
    Test1 3. asamada yapilmasi istenen
    gorunurluk kontrol islemleri...
  */

  //Otomobil linkinin gorunurlugu kontrolu...
  I.seeElement('//*[@id="container"]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/ul/li[1]/a');
  var text = await I.grabTextFrom('//*[@id="container"]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/ul/li[1]/a');
  console.log(`Alınan ilk deger : ${text}`);
  I.say(`Alınan ilk deger : ${text}`);

  //Arazi, SUV & Pick-up linkinin gorunurlugu kontrolu...
  I.seeElement('//*[@id="container"]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/ul/li[2]/a');
  var text = await I.grabTextFrom('//*[@id="container"]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/ul/li[2]/a');
  console.log(`Alınan ikinci deger : ${text}`);
  I.say(`Alınan ikinci deger : ${text}`);

  //Motosiklet linkinin gorunurlugu kontrolu...
  I.seeElement('//*[@id="container"]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/ul/li[3]/a');
  var text = await I.grabTextFrom('//*[@id="container"]/div[3]/div/aside/div[1]/nav/ul[3]/li[2]/ul/li[3]/a');
  console.log(`Alınan ucuncu deger : ${text}`);
  I.say(`Alınan ucuncu deger : ${text}`);
});