# blackjack
javascript ile blackjack oyunu

                                                    *** GENEL BİLGİLER ***

    Amaç

    Her turda
    Oyun türüne bağlı olarak toplam 21’i geçmeden kasadan daha fazla toplam elde etmek ve ortaya konan bahsi almak. 
    Bazı türlerinde 21 geçilse dahi kazanma şansı vardır.

    Kurallar

    Kartlarda bütün renklerin değeri aynıdır. Puanlamada ele alınan tek detay kartların sayı değerleridir.

    Kartların Dağıtılması

    Her oyuncu kartlar dağıtılmadan önce minimum ve maksimum bahis arasında bir parayı ortaya bahis olarak koyarlar.
    Dağıtan oyuncu; desteyi karıştırdıktan sonra, herhangi bir oyuncu desteyi keser.
    Dağıtan oyuncu; solundaki oyuncudan başlayarak diğer oyunculara saat yönünde 1er 1er yüzleri açık, kendisine yüzü kapalı olarak dağıtır.
    Sonra diğer oyunculara ve kendisine yüzleri açık olarak 1er tane daha kart dağıtır.

    Oyuna Başlama
    Herkese 2 tane kart dağıtılır

    Oynama
    Oyuncular:

    Sırası gelen oyuncu elindeki kartlar toplamının 21 veya 21’e en yakın oluncaya kadar aşağıdaki seçeneklerden birini yapabilir:
    kart isteyebilir
    kart almaz diyebilir

    *** BU OYUNDA ŞİMDİLİK SADECE KART İSTEME VE KART ALMAMA OLACAK. ALTTAKİ SEÇENEKLER DAHA SONRA EKLENECEK. ***

    bölme yapabilir
    çifte katlayabilir
    sigorta yapabilir
    
    Dağıtıcı:

    Yanmayan ve oyunda kalan tüm oyuncuların ardından, kendi kapalı kartını açar:
    Elindeki kartların sayı toplamı 16 ve daha az ise 16’yı geçinceye kadar mecburen kart çekmeye devam eder.
    Elindeki kartların sayı toplamı 17 ve üstünde ise artık kart çekmez.
    Elindeki kartların sayı toplamı 21'i geçerse oyunda kalan oyunculara bahis miktarı kadar ödeme yapılır.

    Puanlama
    Her tur sonunda oyuncuların ellerindeki toplam sayılarla kasanın elindeki toplam sayı karşılaştırılarak hangi oyuncunun ne kadar kazandığı veya kaybettiği bulunur.

    21’i geçip yanan veya kasadan daha düşük toplama sahip oyuncular, ortaya koydukları bahisleri kaybetmiş olurlar.
    21’i geçmeyen oyuncular, aşağıdaki durumlar için aşağıdaki tablodaki oran kadar ortaya koydukları bahis miktarını geri alırlar:

     _________________________________
    | Durum                    | Oran |
    |__________________________|______|
    | Eliniz kasa ile aynı ise | 1    | (sadece ortaya koyduğu bahis kalır, bir şey kazanmaz veya kaybetmez)
    | Eliniz kasadan büyükse   | 1:1  |
    | Kasa 21'i geçtiyse       | 1:1  |
    | Eşit para                | 1:1  |
    | Elinizde Blackjack varsa | 3:2  |
    | Sigortayı kazandıysanız  | 2:1  |
    |__________________________|______|

    Kaynak: Vikipedia


                                                  *** SÖZDE KOD ***
    
    oyuncu, oyuna başlar

    kartların dağıtılır.

    kartların dağıtımı şu şekildedir:
    
        kasa ilk kartını açık, ikinci kartını kapalı şekilde kendine alır.

        oyunculara ikisi de açık olacak şekilde iki tane kart dağıtılır.
    
    daha sonra oyuncular bet yapar veya eli pas geçerek o elde oynamaz.

    daha sonra kasa, oyunculara sırasıyla kart dağıtır. oyuncu ister kart alır, ister kart almadan elindeki iki kartla devam eder.
    
    kart dağıtımlarından sonra, kasa elindeki kapalı olan kartı açarak oyunun sonucunu belirler.

                                                    oyunun ilk versiyonunda kart görselleri olmayacak. sadece yazılarla hangi kartlar olduğu belli olacak.

    eğer oyuncu 21 yaparsa ve kasa 21 den farklı bir şey açarsa oyuncu yaptığı betin 3 katını (?) kazanır.

    eğer oyuncu ve kasa 21 yaparsa berabere olur ve bet parasını geri alır.

    eğer oyuncu 21 den büyük açarsa oyunu direkt kaybeder.

    eğer oyuncu ve kasa 21 den büyük açarsa bet parası geri verilir (?)

    eğer oyuncu kasadan küçük el açarsa oyunu kaybeder.

