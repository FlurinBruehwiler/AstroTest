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
      description: desc,
      url: "Emmentaler",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 1,
      sound: "1_EMMENTALER.mp3"
    },
    {
      title: "Gruyère",
      description: desc,
      url: "Gruyere",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 2,
      sound: "2_GRUYERE.mp3"
    },
    {
      title: "Appenzeller",
      description: desc,
      url: "Appenzeller",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 3,
      sound: "3_APPENZELLER.mp3"
    },
    {
      title: "Tilsiter",
      description: desc,
      url: "Tilsiter",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 4,
      sound: "4_TILSITER.mp3"
    },
    {
      title: "Scharfi Maxxx",
      description: desc,
      url: "Scharfi_Maxxx",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 5,
      sound: "5_SCHARFI_MAXXX.mp3" 
    },
    {
      title: "Sbrinz",
      description: desc,
      url: "Sbrinz",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 6,
      sound: "6_SBRINZ.mp3"
    },
    {
      title: "Tete de moine",
      description: desc,
      url: "Tete_de_moine",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 7,
      sound: "7_TETE_DE_MOINE.mp3"
    },
    {
      title: "Raclette",
      description: desc,
      url: "Raclette",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 8,
      sound: "8_RACLETTE.mp3"
    },
    {
      title: "Fondue Käse",
      description: desc,
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
      description: desc,
      url: "Vacherin_mont_dor",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 11,
      sound: "11_VACHERIN_MONT_DOR.mp3"
    },
    {
      title: "Swizzrocker",
      description: desc,
      url: "Swizzrocker",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 12,
      sound: "12_SWIZZROCKER.mp3"
    },
    {
      title: "Berner Hobelkäse",
      description: desc,
      url: "Berner_Hobelkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 13,
      sound: "13_BERNER_HOBELKASE.mp3"
    },
    {
      title: "Tessiner Alpkäse",
      description: desc,
      url: "Tessiner_Alpkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 14,
      sound: "14_TESSINER_ALPKASE.mp3"
    },
    {
      title: "Tomme Vaudiose",
      description: desc,
      url: "Tomme_Vaudiose",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 15,
      sound: "15_TOMME_VAUDIOSE.mp3"
    },
    {
      title: "Füürtüfel",
      description: desc,
      url: "Füürtüfel",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 16,
      sound: "16_FUURTUFEL.mp3"
    },
    {
      title: "Luzerner Rahmkäse",
      description: desc,
      url: "Luzerner_Rahmkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 17,
      sound: "17_LUZERNER_RAHMKASE.mp3"
    },
    {
      title: "Würziger Bruno",
      description: desc,
      url: "Würziger_Bruno",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 18,
      sound: "18_WURZIGER_BRUNO.mp3"
    },
    {
      title: "Aletsch Carnotzet",
      description: desc,
      url: "Aletsch_Carnotzet",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 19,
      sound: "19_ALETSCH_CARNOTZET.mp3"
    },
  ];
  
  export {cheeses};
  export type {Cheese}