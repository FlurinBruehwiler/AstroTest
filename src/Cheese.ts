interface Cheese{
    title: string,
    description: string,
    url: string,
    image: string,
    id: number,
    sound: string
  }
  
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit fermentum leo, vitae varius neque vehicula id. Quisque dictum tristique purus. Suspendisse malesuada purus risus, ut sagittis neque venenatis tempor. In placerat ac dolor nec lacinia. Vivamus tempus quam libero, eu efficitur leo convallis a."

  const cheeses : Cheese[] = [
    {
      title: "Emmentaler",
      description: "Emmentaler mit seiner ebenmässigen Rinde, seinem elfenbeinfarbenen Käseteig, der kirschgrossen Lochung und dem unvergleichlich nussig-mildem Aroma ist ein Stück Schweizer Natur und Kultur. Käseliebhaber schätzen diesen Rohmilchkäse als Delikatesse auf jeder Käseplatte sowie als Bereicherung zum Frühstück und als Abrundung zum Nachtisch. Er bildet aber auch eine geschmackvolle Grundlage für die warme Küche.",
      url: "Emmentaler",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 1,
      sound: "1_EMMENTALER.mp3"
    },
    {
      title: "Gruyère",
      description: "Seinen feinen, typischen Geschmack verdankt Le Gruyère AOP Classic der erstklassigen Rohmilch aus der Region. Die Kühe ernähren sich im Sommer von Weidegras und werden im Winter mit Heu gefüttert. Wesentlich ist aber auch das Können der Käser und Affineure.  ",
      url: "Gruyere",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 2,
      sound: "2_GRUYERE.mp3"
    },
    {
      title: "Appenzeller",
      description: "Der ursprüngliche Appenzeller® mit markantem Geschmack: Die Sennen aus dem Appenzellerland haben aus der Not schon immer eine Tugend gemacht: Vor Urzeiten erfanden sie den Appenzeller® ¼-fett Räss-Käse, indem sie aus dem wertvollen Rahm nährreiche Butter machten. Mit der teilentrahmten Rohmilch stellten sie in der Folge ¼-fett Räss-Käse her, der die Sennen während der Alpsaison ernährte. Dieser ausgeprägt herbe Ur-Appenzeller® verleiht jeder Fonduemischung und jeder Portion Älpler-Makkaroni das gewisse Etwas.  ",
      url: "Appenzeller",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 3,
      sound: "3_APPENZELLER.mp3"
    },
    {
      title: "Tilsiter",
      description: "Dieser ausgewählte Tilsiter ist ein wahrer Genusskäse für den echten Käseliebhaber. Durch seine längere Reifezeit im Käsekeller entwickelt sich sein ausgeprägter Charakter, dieser besticht durch seine rezente kräftige Note und für einen Tilsiter typischen zartschmelzenden Teig der auf der Zunge vergeht. Der Tilsiter Extra mit der schwarzen Etikette steht für die dritte und oberste Reifestufe vom traditionellen Rohmilchtilsiter. Auch dieser Tilsiter wird wie unsere anderen Käsesorten mit viel Liebe und Leidenschaft, nach altem traditionellem Rezept in ausgewählten Käsereien in der Ostschweiz hergestellt. Die optimale Reifezeit beträgt bis zu 6 Monate oder mehr. Entscheidend ist das Genussprofil, denn dieser Käse ist klar positioniert als Genusskäse für den echten Käseliebhaber, zum Abschluss eines feinen Essens, gerne auch mit einem Glas Wein.",
      url: "Tilsiter",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 4,
      sound: "4_TILSITER.mp3"
    },
    {
      title: "Scharfi Maxxx",
      description: "«Der scharfe Maxx» ist ein echter Charakterkäse. Er ist frech. Er ist vorlaut. Er ist charmant. Und er hat diese besondere Würze, die ihn von anderen Käsesorten hervorhebt. Hergestellt wird er mit frischer Rohmilch aus der Bodensee-Region. Er wird besonders sorgsam verarbeitet und gepflegt. Fünf Monate lang bleibt er im Reifungskeller der Käserei Studer und entwickelt seinen einzigartigen Geschmack. Dann ist er bereit für den grossen Auftritt! «Der scharfe Maxx» ist der hochwertige Kult-Käse, der Tradition mit Innovation verbindet – und jeden Moment zum Genusserlebnis macht.",
      url: "Scharfi_Maxxx",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 5,
      sound: "5_SCHARFI_MAXXX.mp3" 
    },
    {
      title: "Sbrinz",
      description: "Der älteste Hartkäse der Schweiz wird seit 500 Jahren in den Zentralschweizer Kantonen hergestellt. Bereits um 1530 exportierten Händler die goldgelben, festen Sbrinz-Laibe mit Mauleseln von Brienz aus via Meiringen, Grimsel- und Griespass nach Italien, um dafür Salz und Wein zu erhalten. Kein Wunder, gelangte der Ruhm des Sbrinz weit über die Landesgrenzen, schätzen doch Käseliebhaber aus aller Welt den besonders würzigen Geschmack und seine unverwechselbar bröckelnde Textur. Sbrinz AOP wird aus purer Rohmilch hergestellt und enthält 45 % Fettanteil in der Trockenmasse. Nach einem ausgiebigem Salzbad wird er in einen Schwitzkeller gebracht, wo er bei 18 Grad während einiger Tage viel Fett und Wasser verliert. Im Reifekeller werden die Laibe anschliessend vertikal gelagert, so dass viel frische Luft an die Rinde gelangt. Hier werden sie regelmäßig mit viel Sorgfalt trockengerieben. Die mindestens 18-monatige Reifezeit machen den Sbrinz AOP so herrlich mürbe und dabei außerordentlich leicht verdaulich. ",
      url: "Sbrinz",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 6,
      sound: "6_SBRINZ.mp3"
    },
    {
      title: "Tete de moine",
      description: "Der Ägeritaler mild ist aus silofreier Bergmilch von Unterägeri. Natur und Landwirtschaft bilden den Grundstein für dieses hochwertige Produkt. 10 km vom internationalen Wirtschaftsmetropole Zug wird im Ägerital ein natürlicher Lebensraum gepflegt. Die natürlichen Gräser der Bergzone des Ägeritals prägen diesen Käse mit seinem einzigartigen milden Geschmack.",
      url: "Tete_de_moine",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 7,
      sound: "7_TETE_DE_MOINE.mp3"
    },
    {
      title: "Raclette",
      description: "Für das würzigste Raclette der Schweiz: Ein herzhaftes Raclette lebt vom Charakter und der Schmelzfähigkeit des Käses. Der Appenzeller® für Raclette mit seiner cremigen Konsistenz und seinem würzigen Geschmack verleiht diesem Schweizer Traditionsgericht seine typische Note. Das macht ihn zu einer willkommenen Bereicherung für jede Raclette-Käseplatte. Unser Geheimtipp: Für besten Geschmack den Käse nicht zu stark erhitzen.  ",
      url: "Raclette",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 8,
      sound: "8_RACLETTE.mp3"
    },
    {
      title: "Fondue Käse",
      description: "Für das Fondue mit der Extra-Würze: Das Appenzeller® Fondue ist der unverzichtbare Höhepunkt bei einem gemütlichen Abend unter Freunden oder mit der Familie. Hergestellt aus bestem Appenzeller® Käse ist das fixfertige Appenzeller® Fondue eine besonders würzige Delikatesse. Dank seines unverwechselbar würzigen Geschmacks unterscheidet es sich markant von herkömmlichen Fondues.  ",
      url: "Fondue_Käse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 9,
      sound: "9_FONDUE_KASE.mp3"
    },
    {
      title: "Bündner Bergkäse",
      description: desc,
      url: "Bündner_Bergkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 10,
      sound: "10_BUNDNER_BERGKASE.mp3"
    },
    {
      title: "Vacherin mont dor",
      description: "Der „Bündner echter Bergkäse Mild“ wird auf 1100 m ü. M. in Disentis aus bester Bündner Bergmilch, traditionell hergestellt. Die Milch stammt von unseren Bergbauern aus der oberen Surselva. Das steile und bergige Gelände, lässt nur eine extensive und naturnahe Landwirtschaft zu. Die kräftigen Wiesen der Surselva verleihen dem „Bündner echter Bergkäse Mild“ seinen erfrischend würzigen Geschmack.",
      url: "Vacherin_mont_dor",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 11,
      sound: "11_VACHERIN_MONT_DOR.mp3"
    },
    {
      title: "Swizzrocker",
      description: "SWIZZROCKER®. Aus bester Schweizer Rohmilch von den erfahrenen Käsern der Ostschweiz nach alter handwerklicher Tradition hergestellt. Premium-Qualität ohne Kompromisse. Mit Sorgfalt und Leidenschaft gemacht. Für Kenner, die reif für ein besonderes Genuss-Erlebnis sind. ",
      url: "Swizzrocker",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 12,
      sound: "12_SWIZZROCKER.mp3"
    },
    {
      title: "Berner Hobelkäse",
      description: "Dem Alpkäse aus dem Berner Oberland wird im Alter von 5 bis 7 Monaten die Schmiere abgewaschen. Anschliessend reift er in einem Gaden (Lagerraum) bei einer Temperatur von ca. 12 Grad Celsius und einer relativen Luftfeuchtigkeit von 70 bis 75% weiter zum Berner Hobelkäse AOP. Sein einzigartiges Aroma bildet sich von den saftigen Alpweiden, der traditionellen Verarbeitungsweise und der speziellen Lagerung. ",
      url: "Berner_Hobelkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 13,
      sound: "13_BERNER_HOBELKASE.mp3"
    },
    {
      title: "Tessiner Alpkäse",
      description: "Seine Besonderheit ist auf die spezifischen Eigenschaften der Alpweidenflora und auf die Herstellungsmethode zurückzuführen. Auf den tessiner Alpen die sich auf einer Höhe zwischen 1500 und 2400 m.ü.m befinden wachsen sehr viele schmackhafte und artenreiche Gräser. Auf einer Alpweide kann man bis zu 250 verschiedene Pflanzensorten vorfinden während auf einer Talweide höchstens deren 20. Und genau diese Artenvielfalt, welche von Alp zu Alp ändern kann, gibt dem Käse seine aussergewöhnlichen, einzigartigen und einmaligen geschmacklichen Noten und Düfte. ",
      url: "Tessiner_Alpkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 14,
      sound: "14_TESSINER_ALPKASE.mp3"
    },
    {
      title: "Tomme Vaudiose",
      description: "Die Tomme Vaudoise ist eine Weichkäsespezialität aus dem Waadtland und aus der Region Genf. Käsekenner schätzen den runden, milden Geschmack des jungen Käses oder den ausgeprägten, rustikalen Geschmack der gereiften Tomme. Sie hat eine sehr zarte Rinde mit einem Weissschimmel- oder Rotschimmelmantel und eine cremige Konsistenz. Die Tomme Vaudoise ist eine Bereicherung für jede Käseplatte und eignet sich auch als Dessert oder komplette Mahlzeit, zum Beispiel mit Gemüse oder Salat. Die Tomme Vaudoise ist auch mit Kümmel-Aroma erhältlich.",
      url: "Tomme_Vaudiose",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 15,
      sound: "15_TOMME_VAUDIOSE.mp3"
    },
    {
      title: "Füürtüfel",
      description: "Der \"Füürtüfel\" ist eine spannende Kombination aus zartschmelzendem Käse und der feurigen Schärfe der Chilischoten. Die perfekte Abstimmung von Chili, Pfeffer und der Reifezeit des Käses macht ihn einzigartig. Er ist eine optische und geschmackliche Abwechslung in der Käselandschaft. Mit seinem hervorragenden und scharfen Aroma ist der \"Füürtüfel\" ein echtes Erlebnis für jedermann und -frau. Ein Gewürzkäse der Extraklasse!",
      url: "Füürtüfel",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 16,
      sound: "16_FUURTUFEL.mp3"
    },
    {
      title: "Luzerner Rahmkäse",
      description: "Der zart cremige LUZERNER Rahmkäse Bio verführt alle, die es gern unendlich mild mögen. Der beliebte Halbhartkäse wird aus bester pasteurisierter Milch und feinstem Rahm aus der Region Luzern biologisch hergestellt.",
      url: "Luzerner_Rahmkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 17,
      sound: "17_LUZERNER_RAHMKASE.mp3"
    },
    {
      title: "Würziger Bruno",
      description: "würziger Bruno ist kräftig,würzig im Geschmack 12 Mt gereift bei 90 %Luftfeuchtigkeit eignet sich sehr gut zum Möckeln oder als Reibkäse",
      url: "Würziger_Bruno",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 18,
      sound: "18_WURZIGER_BRUNO.mp3"
    },
    {
      title: "Aletsch Carnotzet",
      description: "Schweizer Hartkäse, vollfett, hergestellt im Wallis aus thermisierter Bergmilch. Reifezeit 6 - 8 Monate davon 4 Monat im Felsenkeller. Reifung Höhlengereift im Felsenkeller. Die zehn Wochen alten Laibe werden zur Reifung in einen Felsenkeller, dh. in die alte Militärfestung von Naters gebracht. Dort entwickeln sie in 4 bis 5 Monaten ihr bekömmliches Aroma. Reif ab 6 Monaten. Aroma & Philosophie Feuchtes Klima und mineralisierte Luft machen ihn zu einer Delikatesse – als exklusive Beilage auf Ofenkartoffeln mit Trüffeln (kurz grilliert), als würziger Snack oder als nobler Partner eines edlen Weines, mit welchem er – das macht sein erdiges Aroma ohne Schärfe – um länger anhaltenden Abgang wetteifert. Der Aletsch Carnotzet braucht Zeit, viel Zeit. Mit seinem eigen-charmanten Aroma ist er der geselligste Käse der Walker-Aletsch-Kollektion. Käse aufbewahren Im Kühlschrank in Folie eingelegt mindestens zwei Wochen haltbar. «Chambriert» geniessen, d.h. eine halbe Stunde vor dem Gebrauch bei Raumtemperatur stehen lassen. VIP mit Gardemuseum Der Felsenkeller zählt zu den VIP – den Very Important Places im Oberwallis. Neben dem Käselager im Fels befindet sich das Museum der Schweizergarde. 500 Jahre Fundus aus dem Vatikan zeigt, was die Garde leistet, weshalb sie noch Bestand hat und wie man Gardist wird. Der Hauch von Welt bekommt dem Aletsch Carnotzet gut.",
      url: "Aletsch_Carnotzet",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 19,
      sound: "19_ALETSCH_CARNOTZET.mp3"
    },
  ];
  
  export {cheeses};
  export type {Cheese}