


 let map, infoWindow;

let ravintolat = [
    {
        nimi: "Burger King",
        kuvaus: "Vuonna 1954 perustettu BURGER KING® on maailman toiseksi suurin hampurilaisravintolaketju. Ketjuun kuuluu yli 16 000 ravintolaa noin 100 maassa eri puolilla maailmaa. Suurin osa (n. 97 %) BURGER KING® -ravintoloista on itsenäisesti franchise-sopimuksilla toimivien yrittäjien pyörittämiä ravintoloita, joista monet ovat vuosikymmeniä toimineita perheyrityksiä. \n" +
            "\n" +
            "BURGER KING®-ravintoloissa käy maailmanlaajuisesti jopa yli 11 miljoona asiakasta päivässä. He tulevat, koska ravintolamme ovat tunnettuja siitä, että ne tarjoavat korkealaatuista, maukasta ja edullista ruokaa. BURGER KING®on alkuperäinen HOME OF THE WHOPPER®, jonka ensiluokkaiset raaka-aineet, itse kehittämämme reseptit, liekillä grillatut hampurilaiset ja perheystävällinen ruokailuympäristö ovat olleet tunnusmerkkimme jo yli 50 menestyksekästä vuotta.",
        osoite: "",
        kuva : 'https://images.deliveryhero.io/image/fd-po/LH/s4wr-hero.jpg?width=1600&height=400&quality=45'

    },
    {
        nimi: "Mc Donald's",
        kuvaus:"Tällä hetkellä asiakkaita palvelee 69 McDonald’s -perheravintolaa Helsingistä Rovaniemelle. McDonald’s-ravintolat toimivat pääasiassa paikallisin yrittäjävoimin ja ovat monella alueella tärkeä työllistäjä. Työskentely Mäkkärissä tarjoaa monelle hyvän ponnahduslaudan työelämään.",
        osoite: "",
        kuva: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaZ14nzGV33AJvLu8cTeFsbiyXNfl5fhCEbyaqjRE5tJ3NcAvoEV9AIqW0hw5e5z93lNw&usqp=CAU"

    },
    {
        nimi: "Pizza Hut",
        kuvaus:"Pizza Hut on maailman suurin ja mukavin pizzatalo. Pizza Hutin ja Pan Pizzan tarina alkoi Wichitassa, Yhdysvalloissa vuonna 1958, kun veljekset Frank ja Dan Carney päättivät yhdistää amerikkalaisen piiraan ja italialaisen pizzan. Veljesten äiti lainasi 600 dollaria aiemmin baarina toimineen kiinteistön muuttamiseksi ravintolaksi.\n" +
            "\n" +
            "Ravintolan nimi syntyi puolivahingossa. Siihen piti saada ehdottomasti sana “pizza”. Koska ravintolan rakennus muistutti mökkiä ja sen hetkisessä nimikyltissä oli tilaa vain kahdeksalle kirjaimelle, syntyi “Pizza Hut”. Amerikkalaiset rakastuivat Pizza Hutiin heti. Kymmenessä vuodessa ravintoloita oli jo 300, ja vuonna 1970 ketju laajeni kansainvälisille markkinoille. Nykyään Pizza Hut on maailman suurin pizzatalo.   \n" +
            "Pizza Hut -brändin maailmanlaajuiset oikeudet omistaa maailman suurin ravintola-alan yritys Yum! Brands, Inc., jolla on yli 40 000 ravintolaa maailmanlaajuisesti.",
        osoite: "",
        kuva: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Pizza_Hut_1967-1999_logo.svg/800px-Pizza_Hut_1967-1999_logo.svg.png"

    },
    {
        nimi: "Via tribunali",
        kuvaus:"Myös tänä vuonna 50 Parasta Ravintolaa -lista on ihan oikeutetusti täynnä fine dining-ravintoloita, mutta mutta… Sieltä löytyy tasan yksi pizzeria, ja se olemme me! Itseasiassa koko listalla ei ole koskaan ollut pizzeriaa ennen meitä, joten sijoittuminen ”viiden ruokalajin menujen” joukkoon on todella kova suoritus.\n" +
            "\n" +
            "Kiitos siitä kuuluu asiakkaillemme. Voi kuulostaa kliseeltä, mutta näin se on. Kun tulet syömään, niin tiedämme, että odotat paljon enemmän kuin tavallista pizzaa. Moni tulee syömään kaverin suositusten ansiosta, koska Tribunalista saa kuulemma Suomen parasta pizzaa. Tuollaiset asiat motivoivat meitä aivan valtavasti tekemään jokaisesta pizzasta niin hyvän kuin vain pystymme.\n" +
            "\n" +
            "Viimeistään nyt autenttinen napolilainen pizza on lähtemätön osa suomalaista ravintolakulttuuria. Ja ihan oikeutetusti! Iso kiitos makuaistillesi.",
        osoite: "",
        kuva: "https://viatribunali.fi/wp-content/uploads/2018/10/imageedit_1_8210170015.png"

    },
    {
        nimi: "Plein",
        kuvaus:"Plein on lämminhenkinen kortteliravintola Puu-Vallilan reunalla. Alkuviinipainotteinen viinilista on napakan kattava ja ruoalle hyvin sopiva. Tiivis ja monipuolinen sesonginmukainen menu suosii luomua ja elää lähes viikoittain.\n" +
            "\n" +
            "Olet tervetullut lasilliselle tai nauttimaan vaikka koko ruokalistan kerralla.",
        osoite: "Suvannontie 18, Helsinki",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/1000-1567528816294.jpeg&dpr=1&q=90&auto=format&w=398&h=398"

    },
    {
        nimi: "Bistro O mat",
        kuvaus:"tarjoaa huolellisesti valmistettua, nykyaikaista ruokaa pohjoismaisen ja ranskalaisen keittiön perinteisiä valmistustapoja kunnioittaen. Tarjolle valitaan sesongin mukaan kauden parhaita tuotteita, mieluiten luomutuotteita ja  kotimaisten lähituottajien puhtaita raaka-aineita.\n" +
            "\n" +
            "Ravintolan viinilista painottuu eurooppalaisiin viineihin, mukana on niin kestävää kehitystä kuin luomuviinejäkin ja ateriakokonaisuuksiin valituissa viinipaketeissa on aina mukana jokin viinikellarin harvinaisuuksista. \n" +
            "\n" +
            "Bistro O matin lounaalle valmistetaan suosittuja, perinteisiä kotiruokia nykyaikaisella ja raikkaalla tavalla toteutettuna. Suositulle sunnuntaibrunssille katetaan runsaan monipuolinen alku- ja jälkiruokapöytä ja brunssin pääruoka tarjoillaan pöytiin.",
        osoite: "Asemankulma 2, Kirkkonummi",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/369-1518009576444.jpeg?dpr=1&q=90&auto=format&h=655"

    },
    {
        nimi: "Bona Fide",
        kuvaus:"Matalan kynnyksen bistro sijaitsee perinteisessä kruununhakalaisessa ravintolatilassa. Talon kekseliäs ruokalista on kuluttajaystävällisesti hinnoiteltu. Tervetuloa!\n" +
            "\n" +
            "Ovet aukeavat yleisölle keskiviikkona 18.8.!",
        osoite: "Vironkatu 8, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/1204/images/tableonline-1204-bona-fide-2M17b203ac2ab.jpg?dpr=1&q=90&auto=format&w=655&h=655"

    },
    {
        nimi: "Metsäravintola Nielu",
        kuvaus:"Nielu palaa aikaisintaan vuonna 2023.\n" +
            "\n" +
            "Nielun perustajajäsen, Valtteri Sinkkonen, keskittyy Hotelli Helkan tiloihin maaliskuussa avautuneeseen Omadi Omakase ravintolaan. Pöytävarauksia Omadiin voit tehdä TableOnlinesta. Paina Nielun profiilissa 'Varaa pöytä' niin pääset Omadin profiiliin.",
        osoite: "Nuuksiontie 71, Espoo",
        kuva: "https://tox.imgix.net/restaurant/963/images/tableonline-963-nielu-pop-up-illalliset-LY1799b00a274.jpeg?dpr=1&q=90&auto=format&w=655&h=655"

    },
    {
        nimi: "Omadi Omakase",
        kuvaus:"Omadi on omakase ravintola Helsingin ydinkeskustassa, jossa tarjoillaan yksi pitkä menu, johon kuuluu perinteiseen omakase-tyyliin raakaa kalaa, käsintehdyt sushit ja artesaani sake-paritukset. Omadi tuo leikkisästi yhteen japanilaisen ja pohjoismaalaisen ruokakulttuurin kunnioittamalla japanilaisia valmistustapoja ja raaka-aineita.\n" +
            "\n" +
            "Intiimiin illallisiin mahtuu vain 8 kerrallaan ja annokset valmistetaan ja tarjoillaan edessäsi. Omadista voi löytää Suomen yhden kattavimmista sake-valikoimista. Saken lisäksi lasiin kaadetaan mielenkiintoisia juomasekoituksia, pientuottaja viiniä ja samppanjaa.\n" +
            "\n" +
            "Ravintola on auki keskiviikosta lauantaihin kolmella noin. 2h kattauksella: 16.30, 18.30 ja 20.30.",
        osoite: "Pohjoinen Rautatiekatu 23, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/1275/images/tableonline-1275-omadi-omakase-6W1806b2ccddf.jpg?dpr=1&q=90&auto=format&w=655&h=655"

    },
    {
        nimi: "Pikku Hukka",
        kuvaus:"Pikku Hukka on tunnelmallinen korttelibistro Vanhassa Herttoniemessä. Ravintolan ruokafilosofiassa hyvä ruoka ja hyvä arki kulkevat käsi kädessä. Pikku Hukassa halutaan luoda asiakkaiden päivään mutkattomia, mukavia kohtaamisia maistuvan ruoan ja juoman merkeissä.\n" +
            "\n" +
            "Olitpa sitten ehta hertsikalainen tai kaukaisempi vieras, tässä ravintolassa nautit lounaasta, kiireettömistä iltapäivistä ja vietät mukavaa iltaa perheen tai ystävien kesken.\n" +
            "\n" +
            "Ravintolan bistrolista palvelee keskiviikosta perjantaihin heti lounasajan jälkeen ja lauantaisin koko päivän. Lounasta ravintolassa tarjoillaan keskiviikosta perjantaihin kello 11-15.",
        osoite: "Kettutie 3, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/1126/images/tableonline-1126-pikku-hukka-DO17665c639c6.jpg?dpr=1&q=90&auto=format&w=655&h=655"

    },
    {
        nimi: "Natura Restaurant",
        kuvaus:"Naturassa ruoka valmistetaan korkeatasoisista raaka-aineista asiakkaan läheisyydessä avokeittiössä. Valittavissa on kolme menukokonaisuutta ja annoksia voi tilata myös yksittäin päivittäin vaihtuvalta ruokalistalta. Keittiön kulmakiviä ovat selkeät ja puhtaat maut, joita luodaan modernilla otteella käyttäen tekniikoita puuhiiligrillauksesta, matalalämpökypsennykseen.\n" +
            "\n" +
            "Lihat hankitaan ainoastaan tiloilta, jotka Naturassa tunnetaan henkilökohtaisesti. Käytetyt kalat ovat kestävän kehityksen mukaisia lajeja.\n" +
            "\n" +
            "Suuren panoksen ruokaan antavat lukuisat sienten, marjojen ja villiyrttien kerääjät, kalastajat ja pientuottajat, joista osa toimittaa raaka-aineitaan ainoastaan Naturaan. Suomalaisten tuottajien lisäksi ravintola käyttää muutamia tarkoin valittuja ulkomaisia toimittajia.\n" +
            "\n" +
            "Naturan viinilista pohjautuu ruoan tavoin puhtaisiin ja raikkaisiin makuihin, pientuottajiin sekä hyvään hinta-laatu suhteeseen.\n" +
            "\n" +
            "Iso Roobertinkatu 11:ssa sijaitseva intiimi Natura on auki keskiviikosta sunnuntaihin kello 17.00 alkaen.",
        osoite: "Iso Roobertinkatu 11, Helsinki",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/606-1457813573925.png?dpr=1&q=90&auto=format&w=765&h=765"

    },
    {
        nimi: "Aito",
        kuvaus:"Ravintola Aito tarjoaa vierailleen puhtaista ja tuoreista raaka-aineista valmistettua konstailematonta ja rehtiä ruokaa sekä sydämellistä ja ystävällistä palvelua, unohtamatta rentoa ja välitöntä tunnelmaa.\n" +
            "\n" +
            "Jo yli kymmenen vuoden ajan ravintoloitsijat Tuomas Serkamo ja Kimmo Ylisuvanto ovat tarjonneet vierailleen makuelämyksiä skandinaaviseen tyyliin puhtaista kotimaisista raaka-aineista. Tieto raaka-aineiden alkuperästä on ravintoloitsijoille sydämen asia.\n" +
            "\n" +
            "Tiuhaan vaihtuvalla menulla korostuvat sesongin parhaat maut ja raaka-aineet. Tarjolla on niin kotimaisia kaloja kuin riistaakin sekä taidolla toteutettuja liha- ja kasvisannoksia. Ravintola Aito taitaa myös kasvisruoan salat, ja tilauksesta menut toteutetaan ilolla myös kasvis- ja vegaaniversioina.\n" +
            "\n" +
            "Liitutaulumme annoksia voit tilata aina myös erikseen ja kaikille annoksille sekä menuille on tarjolla myös omat viinisuositukset.\n" +
            "\n" +
            "Viinilistalla pääpaino on perinteisissä vanhan maailman viineissä. Valikoimasta löytyy myös mielenkiintoisia pientuottajien viinejä vähemmän tunnetuilta viinintuotantoalueilta. Viinivalikoimassa arvostetaan luomua, biodynaamisuutta sekä hiilijalanjäljen huomioon ottamista.\n" +
            "\n" +
            "Sesongin mukaan elävän viinilistan viineistä tarjoillaan lähes kaikkia myös laseittain.",
        osoite: "Museokatu 29, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/418/images/tableonline-418-aito-2A17753b09179.jpg?dpr=1&q=90&auto=format&w=838&h=838"

    },
    {
        nimi: "Skörd",
        kuvaus:"Helsinkiläisen Ravintola Skördin keittiössä keittäjämme Anton, Jon ja Emma loihtii herkullisia makuelämyksiä mahdollisimman läheltä tulevista sesongin raaka-aineista, itse kerätyistä villiyrteistä ja marjoista sekä riistasta, kalasta ja luomukaritsasta. Kaikki ravintolan raaka-aineet ja juomat tulevat rakkaasta kotimaastamme Suomesta. Salin puolella vieraita viihdyttävät Janne ja Outi. He tarjoilevat ruokien kanssa yhteensopivia laadukkaita kotimaisia marjaviinejä, oluita, siidereitä ja itse tehtyjä marjaliköörejä sekä loihtivat cocktaileja sesongin raaka-aineista.\n" +
            "\n" +
            "HUOM. Käytämme ainoastaan prosessoimattomia lähi- ja villiraaka-aineita, joten emme valitettavasti pysty tarjoamaan kaikkia annoksia maidottomina tai vegaanisina.\n" +
            "\n" +
            "Tervetuloa Fredalle pitämään hauskaa herkullisen ruoan ja juoman merkeissä!",
        osoite: "Fredrikinkatu 37, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/1001/images/tableonline-1001-skord-LA1761a9b334a.jpg?dpr=1&q=90&auto=format&w=655&h=655"

    },
    {
        nimi: "Toca",
        kuvaus:"Tocassa on tarjolla vaihtuva 4 ruokalajin menu, joka koostuu italialaisista mauista yhdistettyinä suomalaisiin raaka-aineisiin. Edulliset viini-, olut- ja baaripaketit takaavat nautinnon niin bisnestapaamisiin kuin kaveriporukan illanviettoonkin.\n" +
            "\n" +
            "Tunnelma ravintolassa on iloinen ja huoleton ja henkilökunnan ammattitaito näkyy kaikessa tekemisessä.",
        osoite: "Unioninkatu 18, Helsinki",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/449-1517235098516.jpeg?dpr=1&q=90&auto=format&w=746&h=746"

    },
    {
        nimi: "SPIS",
        kuvaus:"Tunnelmallinen ravintola Spis palvelee Helsingin keskustassa Kasarminkadulla. Spisin keittiössä syntyy suomalaisen keittiön herkkuja pohjoismaisella twistillä. Annoksissa tutut raaka-aineet tuodaan esiin yllättävin tavoin.",
        osoite: "Kasarmikatu 26, Helsinki",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/351.jpg?dpr=1&q=90&auto=format&w=655&h=655"

    },{
        nimi: "Sake Bar & Izakaya",
        kuvaus:"Izakaya on yksi tavanomaisimmista ravintolamuodoista Japanissa.\n" +
            "\n" +
            "Se on paikka johon ihmiset tulevat istumaan iltaa juomien parissa, ja rentoutumaan vaikka kolleegojen tai kavereiden kanssa. Vaikka juomat ovat pääroolissa, izakayassa on tapana myös napostella niiden kylkeen toimivia ruokia, joita löytyy reilu valikoima, ja joita jaetaan seurueen kesken.\n" +
            "\n" +
            "Ravintolassa on vain 12 paikkaa varattavissa ruokailijoille. Baaritiskille pääsee siis juomaan ja napostelemaan myös ilman varausta!\n" +
            "\n" +
            "Sake Bar & Izakaya on hyvin pieni baari, ja tunnelma on toisinaan tiivis ja äänekäs. Ravintolassa keskitytään pääsääntöisesti alkoholijuomien tarjoiluun ja ikäraja on K18.",
        osoite: "Vironkatu 11, Helsink",
        kuva: "https://tox.imgix.net/restaurant/1345/images/tableonline-1345-sakebar-and-izakaya-AC18366f396cf.png?dpr=1&q=90&auto=format&h=655"

    },{
        nimi: "Pretty Boy Wingery Kamppi",
        kuvaus:"Helsingin parhaaksi kanaravintolaksi äänestetyssä Pretty Boyssa nautitaan kokonaisvaltaisista elämyksistä; laadukkaasta ruoasta, leppoisasta meiningistä sekä ammattitaitoisen henkilökunnan sydämellisestä palvelusta.\n" +
            "\n" +
            "Pretty Boy Wingery haluaa tehdä kanasta premiumia – ja onnistuu siinä mainiosti!\n" +
            "\n" +
            "ERINOMAISTA JA LAADUKASTA, MUTTA HELPOSTI SYÖTÄVÄÄ RUOKAA\n" +
            "Kaiken keskiössä on itse tekeminen; Pretty Boy Wingeryssä panostetaan hitaaseen esivalmisteluun ja tasokkaaseen kypsennykseen. Uniikkia makua annoksiin tuovat ravintolan omat kastikkeet ja marinadit.\n" +
            "\n" +
            "Kokeneiden ravintola-alan tekijöiden ja vaikuttajien Pretty Boy Wingery ei ole pelkkä siipiravintola, vaan saatavilla on mielenkiintoinen valikoima kotimaisesta kanasta käsintehtyjä annoksia, joiden makumaailmat vaihtelevat aina Japanista Peruun. Menusta voit löytää siipien ja luuttomien boneless-siipen lisäksi gyroksia, burgereita, lihattomia NoChicken-annoksia unohtamatta!\n" +
            "\n" +
            "Annosten kylkeen on tarjolla laaja valikoima erilaisia juomia limonadeista oluisiin ja viineistä cocktaileihin.",
        osoite: "Malminrinne 2-4, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/1335/images/tableonline-1335-pretty-boy-wingery-kamppi-9B18313816ee3.jpg?dpr=1&q=90&auto=format&h=655"

    },{
        nimi: "Fusion Restaurant & Bar",
        kuvaus:"Fusionin huikea 60 ruokalajin maistelumenu on kokemus, jota ei kannata jättää väliin. Suupalan kokoisia maisteluannoksia voi vapaasti valita listalta itselleen sopivan määrän. Tarjolla on esimerkiksi kevyesti savustettua villisorsaa, turskan poskia tai ostereita nahm jim -kastikkeessa. Lihaherkkuja voi maistella myös kiertävästä tarjoilukärrystä, josta päivän liha veistetään lautaselle pöydän ääressä.\n" +
            "\n" +
            "Laadukas ja monipuolinen à la carte -lista jatkaa makujen ilotulitusta. Tarjolla on muun muassa hirviwallenbergia, karitsan karetta ja tryffelipastaa.\n" +
            "\n" +
            "Keväästä syksyyn ravintolan erikoisuuksiin kuuluu myös terassilla sijaitseva grilli. Laavakiveltä tarjoillut herkulliset pihvit saavat kypsyä vielä pöytiin tarjoiltaessa, ja asiakas voi itse päättää lihan kypsyysasteen.\n" +
            "\n" +
            "Keittiöpäällikkö Jesper Malinin varmalla otteella luotsaama keittiö panostaa erityisesti vastuullisuuteen. Fusionilaisille on tärkeää välttää ruokahävikkiä, ja tarjolla olevat ainekset hyödynnetään mahdollisimman tehokkaasti.\n" +
            "\n" +
            "Tunnelmallinen Fusion on saanut inspiraationsa muinaisesta Babylonista, vehreästä kaiken keskuksesta. Helsingin sydämessä sijaitsevaan ravintolaan onkin helppo tulla ja viihtyisät tilat sopivat loistavasti myös erilaisiin yritystilaisuuksiin. Yli 200-paikkainen tasokas ravintola tarjoaa tilat isollekin ryhmälle. Myös ravintolan 28 henkilön VIP-tila soveltuu esimerkiksi kokouksiin tai henkilöstön virkistyspäiviin.\n" +
            "\n" +
            "Fusionin löydät Kampin keskuksen 1. kerroksesta 5.10.2022 alkaen. Ravintola toimii ilman pöytävarauksia Kampin kauppakeskuksen Kampituspäivien ajan (5-9.10.2022), jonka jälkeiselle ajalle voi tehdä pöytävarauksia normaalisti. Tervetuloa!",
        osoite: "Urho Kekkosen katu 1, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/1339/images/tableonline-1339-fusion-restaurant-and-bar-LG1833d317528.png?dpr=1&q=90&auto=format&w=655&h=655"

    },{
        nimi: "Deliroom Ukkohauki",
        kuvaus:"Tervetuloa legendaariseen Ukkohaukeen. Palvelemme Kauppakeskus Niityssä, Niittykummun metroaseman sisäpihalla.\n" +
            "Lähes 20 vuotta palvellut Ukkohauki tunnetaan hyvästä ruuasta ja ystävällisestä palvelusta. Rennon tyylikkäät ja kodikkaat ravintolatilat kutsuvat viihtymään matkan varrella tai pidempään. Kauniit ravintolatilamme palvelevat myös yksityistilaisuuksissa.\n" +
            "\n" +
            "Uusien aukioloaikojen myötä ravintola palvelee entistä paremmin ja monipuolisemmin aamusta iltaan. Perinteinen, suosittu lounasbuffet klo 10.30-15 on katettu arkisin, rento à la carte on tarjolla tiistaista lauantaihin klo 15 jälkeen. Sunnuntaina katamme brunssin klo 11.30 ja klo 14.00. Myymme lounasta-, ala carte annoksia ja brunssikassia mukaan !",
        osoite: "Kauppakeskus Niitty, Merituulentie 36, Espoo",
        kuva: "https://tox.imgix.net/restaurant/708/images/tableonline-708-deliroom-ukkohauki-N817ce040edc9.jpg?dpr=1&q=90&auto=format&h=655"

    },{
        nimi: "Ravintola Paulette",
        kuvaus:"Ranskalaisuuttaan sykkivä Paulette on tunnelmallinen kortteliravintola, jossa ruoka ja viini ovat intohimo.\n" +
            "Pauletten ruoka perustuu pitkälti ranskalaiseen keittiöön, mutta myös nykypäivään ja Pohjolan makuihin nojautuvia raaka-aineita voi löytää lautaselta. Paulettessa pidetään yksinkertaisista ja selkeistä mauista, jotka tuovat hyvin esille juuri sesongissa olevan raaka-aineen tunnuspiirteet.\n" +
            "\n" +
            "Makukokemusta voi rikastuttaa vielä nauttien annokset hyvien viinien kera, jotka ravintola on harkitusti valinnut kohtaamaan sesongin annokset. Ruokalista vaihtuu sesonkien mukaan unohtamatta klassikkoannoksia, jotka pysyvät vaikka sesongit vaihtuvat.",
        osoite: "Kapteeninkatu 24, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/1344/images/tableonline-1344-ravintola-paulette-KR18382f6eee6.jpg?dpr=1&q=90&auto=format&w=655&h=655"

    },{
        nimi: "The Bull & The Firm",
        kuvaus:"The Bull & The Firm on rento illanviettopaikka Kurvin sydämessä.\n" +
            "The Bull & The Firm on baari josta saa kaikkea: rakkaudella valmistettua ruokaa ja cocktaileja sekä huolella valittuja viinejä.",
        osoite: "Kulmavuorenkatu 2, Helsinki",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/911-1548419344747.jpeg?dpr=1&q=90&auto=format&h=655"

    },{
        nimi: "Wellamo",
        kuvaus:"Uudistunut Ravintola Wellamo Katajanokalla on nyt uusissa käsissä!\n" +
            "Ikoninen klassikkoravintola Wellamo vaihtoi omistajaa syksyllä 2021 ja ravintola halutaan nostaa uuteen loistoon uusien omistajien voimin.\n" +
            "\n" +
            "Wellamossa keskitytään suuriin makuihin, herkullisiin viineihin ja cocktaileihin sekä kodikkaan rentoon tunnelmaan.\n" +
            "\n" +
            "Ravintolassa on tarjolla 4 ruokalajin menu sekä listalta valittavia annoksia, joten syömään voi tulla pitkän kaavan mukaan tai pistäytyä nauttimaan rennosti. Keittiö tuo pöytään unohtumattomia makuja kauden sesonkeja kunnioittaen.\n" +
            "\n" +
            "Lämpimästi tervetuloa uudistettuun Wellamoon!",
        osoite: "Laivastokatu 18, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/1216/images/tableonline-1216-wellamo-MI18002f736eb.jpg?dpr=1&q=90&auto=format&w=844&h=844"

    },{
        nimi: "Restoran Härg",
        kuvaus:"Härg-ravintolan tavoitteena on tarjota asiakkailleen parasta mahdollista lihaa, joka valmistetaan matalissa lämpötiloissa ja yhdistetään tuoreisiin salaatteihin, vastapuristettuihin mehuihin ja smoothieihin.\n" +
            "\n" +
            "Härgissä ruokaa valmistetaan oikealla tulella ja osa ruoista valmistetaan jopa kuumien hiilten sisällä. Viinit ja muut juomat on myös valittu huolella, kuten myös kaikki ravintolassa käytettävät tuoretuotteet, joita on valittu ympäri maailman.\n" +
            "\n" +
            "Mahtava ruoka, musiikki ja erilainen sisustus luovat yhdessä elämyksen kaikille aisteille.",
        osoite: "Maakri 21, Tallinn",
        kuva: "https://tox.imgix.net/restaurant/857/images/tableonline-857-restoran-harg-ND180dcf62dc8.jpg?dpr=1&q=90&auto=format&w=726&h=726"

    },{
        nimi: "Samrat",
        kuvaus:"Ravintola Samrat tarjoaa intialaisen keittiön herkkuja Eteläesplandilla.\n" +
            "Samratin valikoimiin kuuluu monipuolisesti herkkuja eri puolilta Intiaa ja suosittuja klassikoita, kuten erilaisia tandooriruokia. Samratin autenttisesta laadusta kertoo se, että ravintola on myös Suomessa asuvien laatutietoisten intialaisten suosiossa.\n" +
            "\n" +
            "Tyylikkäät kokopuiset kalusteet, intialaiset koristeet ja klassinen intialainen musiikki luovat hienot puitteet ruokailulle. Kesäaikaan Samratissa on myös terassi auki, missä voi nauttia vaikkapa lasillisen intialaista olutta. Samrat toimittaa ruokaa myös yksityistilaisuuksiin (vähintään 25 henkilöä).",
        osoite: "Eteläesplanadi 22 c, Helsinki",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/42.jpg?dpr=1&q=90&auto=format&h=655"

    },{
        nimi: "Karljohan",
        kuvaus:"Karljohan valmistaa klassikoita ja perinneruokia suurella sydämellä.\n" +
            "Talon vorschmack, ylikypsähäränrinta, kateenkorva ja muut sisäelinruoat ovat löytäneet yli 30 vuodessa monta uskollista ystävää. Päivittäin vaihtuvalta 10–12 ruokalajin lounaslistalta saattaa löytyä vaikkapa tirripaistia eli savolaista läskisoosia, vanhanajan tillilihaa tai lammaskaalia. Tarjolla on aina myös päivän kalaa, lihaa ja sisäelimiä. Lounaan iloinen hälinä taipuu kodikkaaseen kiireettömyyteen, kun ravintola avaa viideltä ovensa illallisvieraille. Hyvän ruoan ystävä arvostaa Karljohanin huolella valmistettuja klassikkoruokia ja kauden erikoisuuksia, mutkatonta palvelua sekä intiimiä tunnelmaa.\n" +
            "\n" +
            "Lounas ma-pe 11-15. Karljohan ei ota lounasvarauksia.",
        osoite: "Yrjönkatu 21, Helsinki",
        kuva: "https://tox.imgix.net/restaurant/480/images/tableonline-480-karljohan-E81801447dcf9.JPG?dpr=1&q=90&auto=format&h=655"

    },{
        nimi: "Caverna",
        kuvaus:"Luola, ruoka ja ihminen ovat aina kuuluneet yhteen. Caverna toi luolan Helsingin keskustaan ja teki siitä viihtyisän.\n" +
            "\n" +
            "Tunnelmallisen luolaravintolan valtti on monipuolinen valikoima ruokia eri puolilta maailmaa. Kansainvälisen menun erikoisuuksina ovat japanilainen Teppanyaki sekä brasilialaiset Churrasco-lihavartaat.\n" +
            "\n" +
            "",
        osoite: "Yliopistonkatu 5, Helsinki",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/625-1560941725686.jpeg?dpr=1&q=90&auto=format&w=655&h=655"

    },{
        nimi: "Pontus",
        kuvaus:"Ravintola Pontus on Antto Melasniemen, Antti Eerikäisen ja Heikki Purhosen (Ateljé Finne, Putte’s Bar & Pizza, Jackie) korttelibistro ja viinibaari Ullanlinnassa.\n" +
            "Pontus tarjoaa antipastoja, salaatteja, kalaa, lihaa, pizzaa sekä pehmisjäätelöä kotitekoisin lisukkein.",
        osoite: "Kapteeninkatu 26, Helsinki",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/677-1517303440487.jpeg?dpr=1&q=90&auto=format&w=655&h=655"

    },{
        nimi: "W30",
        kuvaus:"Tervetuloa nauttimaan pitkä illallinen tai muutama cocktail kauniiseen Wuorion talon miljööseen.\n" +
            "W30 on makumatka ranskalais-skandinaaviseen keittiöön. Ravintolan menut rakennetaan kauden tuoreista raaka-aineista ja ruoan valmistuksessa käytetään erilaisia tekniikoita kulinaarisen kokemuksen maksimoimiseksi.\n" +
            "\n" +
            "Ravintoloitsijana toimii Kristian Vuojärvi ja keittiössä kauhan varteen tarttuu Simo Pietarinen. Molemmat ovat tuttuja mm. Suomen kokkimaajoukkueesta.",
        osoite: "Unioninkatu 30, Helsinki\n",
        kuva: "https://tox.imgix.net/restaurant/1084/images/tableonline-1084-w30-2X170a4f88225.png?dpr=1&q=90&auto=format&h=655"

    },{
        nimi: "Merimakasiini",
        kuvaus:"Vuodesta 1986 toiminut legendaarinen Ravintola Merimakasiini Hietalahden rannassa meren äärellä on meren ystävien suosikkiravintola.\n" +
            "Meren herkut maistuvat ja merielämä näkyy ja tuntuu, kun astut sisään tunnelmalliseen Merimakasiiniin. Tuoreista sesongin raaka-aineista valmistetut herkulliset kala- ja äyriäisruoat ovat keskiössä ruokalistalla, mistä löytyy klassikkojen kuten lohikeiton ja bouillabaissen lisäksi mahtavia kauden makuja. Äyriäisherkkuja maistellessa aika kuluu kuin laineilla. Merimakasiinin annoksissa korostuvat tuoreus, laatu ja puhtaus. Ystävällinen ja ammattitaitoinen henkilökunta pitää erinomaista huolta vieraista. Parempaa paikkaa meren herkkujen ja merellisen elämän kokemiseen ei Helsingistä löydy.",
        osoite: "Hietalahdenranta 14, Helsinki",
        kuva: "https://images.weserv.nl/?url=https://tableonline.static.cm/restaurant/837-1529428354714.jpeg?dpr=1&q=90&auto=format&h=655"

    },
    {
        nimi: "Nabi korean BBQ",
        kuvaus:"The best Korean BBQ & experience authentic Korean culture!",
        osoite: "Eerikinkatu 14",
        kuva: "https://static.wixstatic.com/media/9f01c6_c3601a73b69a42ce9ec3667156925550~mv2.jpg/v1/fill/w_1681,h_1118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/2022-05-15-204550%20A7C_edited.jpg"

    },
    {
        nimi: "Kampai3",
        kuvaus:"Fresh ingredients and simply delicious cuisine. Japanese food",
        osoite: "Kolmas linja 18",
        kuva: "https://956ba5913f.clvaw-cdnwnd.com/f6ac604342bd39091d5dffbbee62b617/200000002-b9194ba136/IMG_0108-9.JPG?ph=956ba5913f"

    },

];


divElem = document.getElementById("ravintolat");

for (let i = 0; i < 20; i++) {
    let htmlKoodi = `
               <div>
                     <article> 
                            <header> ${ravintolat[i].nimi} </header> 
                        
                            <figure class="fullwrap">
                                <img id="foodpics" src = "${ravintolat[i].kuva}" alt = "${ravintolat[i].nimi}">
                                <figcaption class="fullcap"> ${ravintolat[i].kuvaus} </figcaption> 
                             </figure>
                            <p> ${ravintolat[i].osoite} </p>
                            <p> 
                                <a></a>
                            </p>
                     </article>
                  </div>   
              
              
              
              `;
    divElem.innerHTML += htmlKoodi;
}





 const hakuElem = document.getElementById("haku");
 hakuElem.addEventListener("keyup", (e) =>{
    const searchString = e.target.value.toLowerCase();
    const filteredCharacters = ravintolat.filter((character) => {
        return (
            character.nimi.toLowerCase().includes(searchString)

        );
    });
    displayCharacters(filteredCharacters);
 });

 const displayCharacters = (characters) => {
     const htmlString = characters
         .map((character) => {
             return `
           <div>
                     <article> 
                            <header> ${character.nimi} </header> 
                        
                            <figure class="fullwrap">
                                <img id="foodpics" src = "${character.kuva}" alt = "${character.nimi}">
                                <figcaption class="fullcap"> ${character.kuvaus} </figcaption> 
                             </figure>
                            <p> ${character.osoite} </p>
                            <p> 
                                <a></a>
                            </p>
                     </article>
                  </div>   
        `;
         })
         .join('');
     divElem.innerHTML = htmlString;
 };














