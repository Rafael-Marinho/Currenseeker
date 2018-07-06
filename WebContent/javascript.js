var corDaLinha = "#000000"
var linhaAtual = ""

// Uso de objetos JSON;
var tabelaDeMoedas = [{
    "simbolo": "AED",
    "nome": "Dirham dos Emirados Árabes Unidos",
    "pais": "Emirados Árabes Unidos",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "AFN",
    "nome": "Afegani afegão",
    "pais": "Afeganistão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ALL",
    "nome": "Lek albanês",
    "pais": "Albânia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "AMD",
    "nome": "Dram armênio",
    "pais": "Armênia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ANG",
    "nome": "Florim holandês",
    "pais": "Holanda",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "AOA",
    "nome": "Kwanza angolano",
    "pais": "Angola",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ARS",
    "nome": "Peso argentino",
    "pais": "Argentina",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "AUD",
    "nome": "Dólar australiano",
    "pais": "Austrália",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "AWG",
    "nome": "Florin arubano",
    "pais": "Aruba",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "AZN",
    "nome": "Mahat azerbaijane",
    "pais": "Azerbaijão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BAM",
    "nome": "Marco da Bósnia e Herzegovina",
    "pais": "Bósnia e Herzegovina",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BBD",
    "nome": "Dólar barbadiano",
    "pais": "Barbados",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BDT",
    "nome": "Taka bengalês",
    "pais": "Bengala",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BGN",
    "nome": "Lev búlgaro",
    "pais": "Bulgária",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BHD",
    "nome": "Dinar baremita",
    "pais": "Barém",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BIF",
    "nome": "Franco burundês",
    "pais": "Burundi",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BMD",
    "nome": "Dólar bermudense",
    "pais": "Bermudas",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BND",
    "nome": "Dólar bruneano",
    "pais": "Brunei",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BOB",
    "nome": "Peso boliviano",
    "pais": "Bolívia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BRL",
    "nome": "Real brasileiro",
    "pais": "Brasil",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BSD",
    "nome": "Dólar bahamense",
    "pais": "Bahamas",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BTC",
    "nome": "Bitcoin",
    "pais": "Bitcoin",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BTN",
    "nome": "Ngultrum butanês",
    "pais": "Butão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BWP",
    "nome": "Pula botswano",
    "pais": "Botswana",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BYN",
    "nome": "Rublo bielorrusso",
    "pais": "Bielorrússia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "BZD",
    "nome": "Dólar belizenho",
    "pais": "Belize",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CAD",
    "nome": "Dólar canadense",
    "pais": "Canadá",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CDF",
    "nome": "Franco congolês",
    "pais": "Congo",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CHF",
    "nome": "Franco suíço",
    "pais": "Suíça",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CLF",
    "nome": "Unidade de Fomento do Chile",
    "pais": "Chile",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CLP",
    "nome": "Peso chileno",
    "pais": "Chile",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CNH",
    "nome": "Yuan Reinminbi de Hong Kong",
    "pais": "Hong Kong",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CNY",
    "nome": "Yuan Reinminbi chinês",
    "pais": "China",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "COP",
    "nome": "Peso colombiano",
    "pais": "Colombia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CRC",
    "nome": "Colón da Costa Rica",
    "pais": "Costa Rica",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CUC",
    "nome": "Peso conversível cubano",
    "pais": "Cuba",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CUP",
    "nome": "Peso cubano",
    "pais": "Cuba",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CVE",
    "nome": "Escudo do Cabo Verde",
    "pais": "Cabo Verde",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "CZK",
    "nome": "Coroa da República Tcheca",
    "pais": "República Tcheca",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "DJF",
    "nome": "Franco djiboutiano",
    "pais": "Djibouti",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "DKK",
    "nome": "Coroa dinamarquesa",
    "pais": "Dinamarca",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "DOP",
    "nome": "Peso dominicano",
    "pais": "República Dominicana",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "DZD",
    "nome": "Dinar argelino",
    "pais": "Argélia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "EGP",
    "nome": "Libra egípcia",
    "pais": "Egito",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ERN",
    "nome": "Nafka da Eritreia",
    "pais": "Eritreia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ETB",
    "nome": "Birr etíope",
    "pais": "Etiópia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "EUR",
    "nome": "Euro",
    "pais": "Europa",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "FJD",
    "nome": "Dólar de Fiji",
    "pais": "Fiji",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "FKP",
    "nome": "Libra das Malvinas",
    "pais": "Malvinas",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "GBP",
    "nome": "Libra Esterlina",
    "pais": "Reino Unido",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "GEL",
    "nome": "Lari da Geórgia",
    "pais": "Geórgia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "GGP",
    "nome": "Libra de Guernsey",
    "pais": "Guernsey",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "GHS",
    "nome": "Cedi de Gana",
    "pais": "Gana",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "GIP",
    "nome": "Libra do Gibraltar",
    "pais": "Gibraltar",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "GMD",
    "nome": "Dalasi da Gâmbia",
    "pais": "Gâmbia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "GNF",
    "nome": "Franco guianense",
    "pais": "Guiana Francesa",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "GTQ",
    "nome": "Quetzal da Guatemala",
    "pais": "Guatemala",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "GYD",
    "nome": "Dólar guianesne",
    "pais": "Guiana",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "HKD",
    "nome": "Dólar de Hong Kong",
    "pais": "Hong Kong",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "HNL",
    "nome": "Lempira de Honduras",
    "pais": "Honduras",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "HRK",
    "nome": "Coroa da Croácia",
    "pais": "Croácia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "HTG",
    "nome": "Gourde de Haiti",
    "pais": "Haiti",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "HUF",
    "nome": "Florim húngaro",
    "pais": "Hungria",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "IDR",
    "nome": "Rúpia indonésia",
    "pais": "Indonésia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ILS",
    "nome": "Novo shekel israelense",
    "pais": "Israel",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "IMP",
    "nome": "Libra da Ilha de Man",
    "pais": "Ilha de Man",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "INR",
    "nome": "Rúpia indiana",
    "pais": "Índia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "IQD",
    "nome": "Dinar iraquiano",
    "pais": "Iraque",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "IRR",
    "nome": "Rial iraniano",
    "pais": "Irã",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ISK",
    "nome": "Coroa da Islândia",
    "pais": "Islândia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "JEP",
    "nome": "Libra de Jersey",
    "pais": "Jersey",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "JMD",
    "nome": "Dólar jamaicano",
    "pais": "Jamaica",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "JOD",
    "nome": "Dinar Jordaniano",
    "pais": "Jordânia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "JPY",
    "nome": "Iene japonês",
    "pais": "Japão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "KES",
    "nome": "Xelim queniano",
    "pais": "Quênia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "KGS",
    "nome": "Som quirguiz",
    "pais": "Quirguistão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "KHR",
    "nome": "Riel cambojano",
    "pais": "Camboja",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "KMF",
    "nome": "Franco comorense",
    "pais": "Camarões",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "KPW",
    "nome": "Won norte-coreano",
    "pais": "Coréia do Norte",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "KRW",
    "nome": "Won sul-coreano",
    "pais": "Coréia do Sul",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "KWD",
    "nome": "Dinar kwaitiano",
    "pais": "Kuwait",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "KYD",
    "nome": "Dólar das Caymans",
    "pais": "Ilhas Cayman",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "KZT",
    "nome": "Tenge do Cazaquistão",
    "pais": "Cazaquistão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "LAK",
    "nome": "Quipe do Laos",
    "pais": "Laos",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "LBP",
    "nome": "Libra libanesa",
    "pais": "Líbano",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "LKR",
    "nome": "Rúpia do Sri Lanka",
    "pais": "Sri Lanka",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "LRD",
    "nome": "Dólar liberiano",
    "pais": "Libéria",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "LSL",
    "nome": "Loti de Lesoto",
    "pais": "Lesoto",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "LYD",
    "nome": "Dinar da Líbia",
    "pais": "Líbia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MAD",
    "nome": "Dirham marroquino",
    "pais": "Marrocos",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MDL",
    "nome": "Leu moldávio",
    "pais": "Moldávia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MGA",
    "nome": "Ariary de Madagascar",
    "pais": "Madagascar",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MKD",
    "nome": "Dinar macedônio",
    "pais": "Macedônia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MMK",
    "nome": "Quiat do Myanmar",
    "pais": "Myanmar",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MNT",
    "nome": "Tugrik da Mongólia",
    "pais": "Mongólia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MOP",
    "nome": "Pataca de Macau",
    "pais": "Macau",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MRO",
    "nome": "Ougukya da Mauritânia",
    "pais": "Mauritânia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MRU",
    "nome": "Rúpia da Mauritânia",
    "pais": "Mauritânia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MUR",
    "nome": "Rúpia da Maurícia",
    "pais": "Maurícia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MVR",
    "nome": "Rúpia maldívia",
    "pais": "Maldivas",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MWK",
    "nome": "Kwacha malawiana",
    "pais": "Malawi",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MXN",
    "nome": "Peso mexicano",
    "pais": "Mexico",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MYR",
    "nome": "Ringgit da Malásia",
    "pais": "Malásia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "MZN",
    "nome": "Nova metical do Moçambique",
    "pais": "Moçambique",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "NAD",
    "nome": "Dólar namibiano",
    "pais": "Namíbia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "NGN",
    "nome": "Naira nigeriana",
    "pais": "Nigéria",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "NIO",
    "nome": "Córdoba da Nicarágua",
    "pais": "Nicarágua",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "NOK",
    "nome": "Coroa da Noruega",
    "pais": "Noruega",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "NPR",
    "nome": "Rúpia nepalesa",
    "pais": "Nepal",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "NZD",
    "nome": "Dólar neozelandês",
    "pais": "Nova Zelândia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "OMR",
    "nome": "Rial do Omã",
    "pais": "Omã",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "PAB",
    "nome": "Balboa panamaense",
    "pais": "Panamá",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "PEN",
    "nome": "Novo sol peruano",
    "pais": "Peru",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "PGK",
    "nome": "Kina da Papua-Nova Guiné",
    "pais": "Papua-Nova Guiné",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "PHP",
    "nome": "Peso filipino",
    "pais": "Filipinas",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "PKR",
    "nome": "Rúpia paquistanesa",
    "pais": "Paquistão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "PLN",
    "nome": "Zloty polonês",
    "pais": "Polônia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "PYG",
    "nome": "Guarani paraguaio",
    "pais": "Paraguai",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "QAR",
    "nome": "Rial do Qatar",
    "pais": "Qatar",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "RON",
    "nome": "Leu romeno",
    "pais": "Romênia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "RSD",
    "nome": "Dinar sérvio",
    "pais": "Sérvia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "RUB",
    "nome": "Rublo russo",
    "pais": "Rússia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "RWF",
    "nome": "Franco ruandês",
    "pais": "Ruanda",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SAR",
    "nome": "Rial da Arábia Saudita",
    "pais": "Arábia Saudita",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SBD",
    "nome": "Dólar das Ilhas Salomão",
    "pais": "Ilhas Salomão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SCR",
    "nome": "Rúpia de Seychelles",
    "pais": "Seychelles",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SDG",
    "nome": "Dinar sudanês",
    "pais": "Sudão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SEK",
    "nome": "Coroa da Suécia",
    "pais": "Suécia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SGD",
    "nome": "Dólar de Singapura",
    "pais": "Singapura",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SHP",
    "nome": "Libra de Santa Helena",
    "pais": "Santa Helena",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SLL",
    "nome": "Leone de Serra Leoa",
    "pais": "Serra Leoa",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SOS",
    "nome": "Xelim somaliano",
    "pais": "Somália",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SRD",
    "nome": "Dólar do Suriname",
    "pais": "Suriname",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SSP",
    "nome": "Libra sul-sudanesa",
    "pais": "Sudão do Sul",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "STD",
    "nome": "Dobra de São Tomé",
    "pais": "São Tomé e Principe",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "STN",
    "nome": "Nova Dobra de São Tomé",
    "pais": "São Tomé e Principe",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SVC",
    "nome": "Cólon de El Salvador",
    "pais": "El Salvador",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SYP",
    "nome": "Libra síria",
    "pais": "Síria",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "SZL",
    "nome": "Lilangeni eSwatini",
    "pais": "Reino de eSwatini",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "THB",
    "nome": "Baht tailandês",
    "pais": "Tailândia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "TJS",
    "nome": "Somoni do Tadjiquistão",
    "pais": "Tadjiquistão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "TMT",
    "nome": "Manat novo do Turcomenistão",
    "pais": "Turcomenistão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "TND",
    "nome": "Dinar tunez",
    "pais": "Tunísia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "TOP",
    "nome": "Pa'anga de Tonga",
    "pais": "Tonga",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "TRY",
    "nome": "Lira turca",
    "pais": "Turquia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "TTD",
    "nome": "Dólar de Trinidad e Tobago",
    "pais": "Trinidad e Tobago",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "TWD",
    "nome": "Dólar de Taiwan",
    "pais": "Taiwan",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "TZS",
    "nome": "Chelin da Tanzânia",
    "pais": "Tanzânia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "UAH",
    "nome": "Hryvnia ucraniana",
    "pais": "Ucrânia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "UGX",
    "nome": "Xelim de Uganda",
    "pais": "Uganda",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "USD",
    "nome": "Dólar estadunidense",
    "pais": "Estados Unidos da América",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "UYU",
    "nome": "Peso uruguaio",
    "pais": "Uruguai",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "UZS",
    "nome": "Som uzbeque",
    "pais": "Uzbequistão",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "VEF",
    "nome": "Bolívar venezuelano",
    "pais": "Venezuela",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "VND",
    "nome": "Dong vietname",
    "pais": "Vietnã",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "VUV",
    "nome": "Vatu vanuatu",
    "pais": "Vanuatu",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "WST",
    "nome": "Tala de Samoa",
    "pais": "Samoa",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "XAF",
    "nome": "Franco CFA (BEAC)",
    "pais": "África Ocidental",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "XAG",
    "nome": "Onça da prata",
    "pais": "Prata",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "XAU",
    "nome": "Onça do ouro",
    "pais": "Ouro",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "XCD",
    "nome": "Dólar do Caribe Oriental",
    "pais": "Caribe Oriental",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "XDR",
    "nome": "Direitos de saques especiais do FMI",
    "pais": "Fundo Monetário Internacional",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "XOF",
    "nome": "Franco CFA (BCEAO)",
    "pais": "África Ocidental",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "XPD",
    "nome": "Onça do paládio",
    "pais": "Paládio",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "XPF",
    "nome": "Franco da Polinésia Francesa",
    "pais": "Polinésia Francesa",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "XPT",
    "nome": "Onça da platina",
    "pais": "Platina",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "YER",
    "nome": "Rial iemenita",
    "pais": "Iemen",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ZAR",
    "nome": "Rand sul-africano",
    "pais": "África do Sul",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ZMW",
    "nome": "Kwacha zambiano",
    "pais": "Zamíbia",
    "inicial": "-.----",
    "convertido": "-.----"
  },
  {
    "simbolo": "ZWL",
    "nome": "Dólar do Zimbabuê",
    "pais": "Zimbabuê",
    "inicial": "-.----",
    "convertido": "-.----"
  },
];

// Uso do método jQuery;
// Uso de Closures.
function evidenciar(moeda) {
  var moeda = moeda.toLowerCase();
  if (document.getElementById(moeda).style.backgroundColor != "rgb(0, 255, 255)") {
    // if (document.getElementById(linhaAtual).style.backgroundColor == "rgb(0, 255, 255)") {
    //   $("#" + linhaAtual).css("background-color", corDaLinha);
    //   $("#" + linhaAtual).css("color", "#00FF00");
    // }
    corDaLinha = $("#" + moeda).css("background-color");
    $("#" + moeda).css("background-color", "#00FFFF");
    $("#" + moeda).css("color", "#000000");

    $("#" + linhaAtual).css("background-color", corDaLinha);
    $("#" + linhaAtual).css("color", "#00FF00");

    linhaAtual = moeda;
  } else if (document.getElementById(moeda).style.backgroundColor == "rgb(0, 255, 255)") {
    $("#" + moeda).css("background-color", corDaLinha);
    $("#" + moeda).css("color", "#00FF00");
  }
}

function converter(moeda) {
  null;
}

// Criação dinâmica no DOM;
// Validação de dados no front-end;
// (Mais) uso do método jQuery;
// (Mais) uso de objetos JSON.
$(document).ready(function() {
  var html = '<table class="tabela table-striped">';
  var linha = 0;
  var classe = "impar";

  html += '<tr style=color:#FFFF00>';
  html += "<th>SÍMBOLO</th>";
  html += "<th>NOME DA MOEDA</th>";
  html += "<th>PAÍS DE CIRCULAÇÃO</th>";
  html += "<th>VALOR INICIAL</th>";
  html += "<th>VALOR CONVERTIDO</th>";
  html += '</tr>';

  $.each(tabelaDeMoedas, function(index, value) {
    if (classe == "impar") {
      classe = "par";
    } else {
      classe = "impar";
    }
    linha += 1;
    html += '<tr class=' + classe + " id=" + value.simbolo.toLowerCase() + ">";
    $.each(value, function(index2, value2) {
      html += '<td>' + value2 + '</td>';
    });
    html += '<tr>';
  });
  html += '</table>';
  $('#tabela').append(html);
});

// DOM Handlers e DOM EventListener;
document.getElementById("SUKA BLYAT").addEventListener("click", easterEgg());
function easterEgg() {
  $("#SUKA BLYAT").append('<embed src="Easteregg.mp3" autostart=false loop=false>');
  alert("JavaScript > Java.")
}
