# nodetrial

Testler çalıştırılmadan önce:

1- Selenium server hazırlığı:
    npm install -g selenium-standalone
    selenium-standalone install
    selenium-standalone start
komutlari ile yapilir. Ilk iki satir ilk kurulumda gereklidir. ancak test calistirilmadan once son satir mutlaka çalistirilmalidir.
Testlerin veya sutin başına batch file yapılarak otomatikleştirilebilir.

* testlerin grup/suit halinde kosulmasi : codeceptjs run --grep @suit-one --steps
* basic olarak testlerin belirtilen tarayicida kosulması : codeceptjs run-multiple basic
* basic kosullarda belirli suit icerisindeki testlerin kosumu : codeceptjs run-multiple basic --grep @suit-one
* basic setinin ff ve chrome paralel kosumu : codeceptjs run-multiple parallel basic