interface Cheese{
    title: string,
    description: string,
    url: string,
    image: string,
    id: number
  }
  
  const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In suscipit fermentum leo, vitae varius neque vehicula id. Quisque dictum tristique purus. Suspendisse malesuada purus risus, ut sagittis neque venenatis tempor. In placerat ac dolor nec lacinia. Vivamus tempus quam libero, eu efficitur leo convallis a."

  const cheeses : Cheese[] = [
    {
      title: "Emmentaler",
      description: desc,
      url: "Emmentaler",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 1
    },
    {
      title: "Gruyère",
      description: desc,
      url: "Gruyere",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 2
    },
    {
      title: "Appenzeller",
      description: desc,
      url: "Appenzeller",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 3
    },
    {
      title: "Tilsiter",
      description: desc,
      url: "Tilsiter",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 4
    },
    {
      title: "Scharfi Maxxx",
      description: desc,
      url: "Scharfi_Maxxx",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 5
    },
    {
      title: "Sbrinz",
      description: desc,
      url: "Sbrinz",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 6
    },
    {
      title: "Tete de moine",
      description: desc,
      url: "Tete_de_moine",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 7
    },
    {
      title: "Raclette",
      description: desc,
      url: "Raclette",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 8
    },
    {
      title: "Fondue Käse",
      description: desc,
      url: "Fondue_Käse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 9
    },
    {
      title: "Bündner Bergkäse",
      description: desc,
      url: "Bündner_Bergkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 10
    },
    {
      title: "Vacherin mont dor",
      description: desc,
      url: "Vacherin_mont_dor",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 11
    },
    {
      title: "Swizzrocker",
      description: desc,
      url: "Swizzrocker",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 12
    },
    {
      title: "Berner Hobelkäse",
      description: desc,
      url: "Berner_Hobelkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 13
    },
    {
      title: "Tessiner Alpkäse",
      description: desc,
      url: "Tessiner_Alpkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 14
    },
    {
      title: "Tomme Vaudiose",
      description: desc,
      url: "Tomme_Vaudiose",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 15
    },
    {
      title: "Füürtüfel",
      description: desc,
      url: "Füürtüfel",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 16
    },
    {
      title: "Luzerner Rahmkäse",
      description: desc,
      url: "Luzerner_Rahmkäse",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 17
    },
    {
      title: "Würziger Bruno",
      description: desc,
      url: "Würziger_Bruno",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 18
    },
    {
      title: "Aletsch Carnotzet",
      description: desc,
      url: "Aletsch_Carnotzet",
      image: "https://www.schweizerkaese.ch/fileadmin/_processed_/e/6/csm_APP_Composing_Food_MwKwEwEdelwRaessw_April_2019_d_cmyk_korrigiert_4c8b4bbdeb.jpg",
      id: 19
    },
  ];
  
  export {cheeses};
  export type {Cheese}