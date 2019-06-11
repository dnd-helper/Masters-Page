// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// dungeon/name_set.js
//
var name_set = {
    Draconic: ["Abdi", "Abiditaan", "Abiesuuh", "Ammiditana", "Ammisaduka", "Amurru", "Apilsin", "Arammadara", "Arsaces", "Asmadu", "Balshazzar", "Berossus", "Bhhazuum", "Burnaburiash", "Daad", "Ditanu", "Gezer", "Heana", "Ibni", "Ilima", "Iptiyamuta", "Kadashman", "Kheba", "Maam", "Milkilu", "Nabonidus", "Nabunaid", "Nabupolassar", "Namhuu", "Namzuu", "Nebuchadnezzer", "Ninus", "Ninyas", "Obares", "Saamsuiluna", "Sheshbazzar", "Sinmubaliit", "Sumalika", "Sumula", "Suni", "Tattenai", "Tuubtiyamuta", "Yaamkuuzzuhalamma", "Zabium",
        "Zuummabu", "Abiesha", "Ammisaduga", "Anunnaki", "Atraharsis", "Baal", "Bel", "Belshimmanni", "Bilit", "Dagon", "Damuzi", "Enki", "Enlil", "Enmerkar", "Gilgamesh", "Gudea", "Hammurabi", "Kur", "Marduk", "Milit", "Nergal", "Ninazu", "Ningirsu", "Sabium", "Samsuditana", "Samugan", "Sangusu", "Shullat", "Sin", "Sumuabum", "Sumulael", "Utu"
    ],
    Fiendish: ["Abaddon", "Abalam", "Abraxas", "Abyzou", "Adramelech", "Aeshma", "Agares", "Ahriman", "Akvan", "Alloces", "Amon", "Anamalech", "Andhaka", "Anzu", "Armaros", "Asakku", "Astaroth", "Bael", "Balberith",
        "Baphomet", "Barbatos", "Behemoth", "Beleth", "Belphegor", "Charun", "Chemosh", "Culsu", "Dagon", "Drekavac", "Eblis", "Eligos", "Euryale", "Focalor", "Forneus", "Gaderel", "Gaki", "Gamigin", "Glasya", "Gomory", "Gusoyn", "Halphas", "Haures", "Iblis", "Kali", "Kasadya", "Kimaris", "Lamashtu", "Lechies", "Leraie", "Lilith", "Malaphar", "Malphas", "Malthus", "Mammon", "Mara", "Marbas", "Maricha", "Mastema", "Melchiresa", "Mephistopheles", "Merihem", "Moloch", "Naberus", "Naphula", "Ninurta", "Oriax", "Orobos", "Pazuzu", "Phenex", "Pruslas", "Rakshasa",
        "Raum", "Rumyal", "Saleos", "Samael", "Semyaz", "Shedim", "Sthenno", "Surgat", "Ukobach", "Valac", "Vapula", "Vassago", "Vepar", "Vephar", "Xaphan", "Yeterel", "Zagan", "Zepar"
    ],
    Gothic: ["Ablabius", "Achila", "Agila", "Agiwulf", "Agriwulf", "Aidoingus", "Aithanarid", "Alaric", "Alatheus", "Alaviv", "Alica", "Aligern", "Alla", "Amal", "Amalaric", "Ammius", "Anagastes", "Andagis", "Anianus", "Ansila", "Ansis", "Aoric", "Apahida", "Ardabur", "Ardaric", "Argaith", "Ariaric", "Arimir", "Arius", "Arnegliscus", "Arvandus", "Asbad", "Aspar", "Ataulf", "Ataulph",
        "Athalaric", "Athanagild", "Athanaric", "Atharid", "Athaulf", "Babai", "Badua", "Baduila", "Baza", "Berig", "Berimud", "Berimund", "Bessa", "Bessas", "Bessi", "Beuca", "Beucad", "Bigelis", "Bilimer", "Borani", "Braga", "Brandila", "Candac", "Cannabas", "Cannabaudes", "Cethegus", "Chindasuinth", "Cniva", "Cnivida", "Colias", "Crocus", "Cunigast", "Cunimund", "Cyrila", "Dubius", "Duda", "Ebermud", "Eberwolf", "Ebrimud", "Edica", "Eraric", "Eriulf", "Ermanaric", "Ermelandus", "Ervig", "Euric", "Eutharic", "Farnobius", "Fastida", "Feletheus", "Feva",
        "Filimer", "Flaccitheus", "Fravitta", "Fredegar", "Fretela", "Frideric", "Fridigern", "Frigeridus", "Frithila", "Fritigern", "Gadaric", "Gainas", "Gaiseric", "Galindo", "Galindus", "Gaut", "Gauterit", "Geberic", "Gelimer", "Gento", "Gerung", "Gesalec", "Gesimund", "Getica", "Goar", "Goddas", "Godegisel", "Godigisclus", "Goiaricus", "Gouththas", "Gundehar", "Gundiok", "Gundobad", "Gunteric", "Gunthigis", "Gutthikas", "Hadubrand", "Heldebald", "Heldefredus", "Heribrand", "Hermangild", "Hermenigild", "Herminafrid", "Hernegliscus", "Hildebad",
        "Hildebrand", "Hilderic", "Hilderith", "Himnerith", "Hisarna", "Hulmul", "Huml", "Huneric", "Hunigild", "Hunimund", "Hunulf", "Hunumund", "Ibba", "Ildebad", "Inna", "Irnfried", "Jordanes", "Lagariman", "Lampridius", "Leovigild", "Leuvibild", "Livila", "Marcomir", "Modaharius", "Modares", "Munderic", "Mundo", "Namatius", "Naulabates", "Nidada", "Niketas", "Odoin", "Odotheus", "Odovacar", "Ostrogotha", "Osuin", "Ovida", "Patza", "Radagaisus", "Rausimod", "Recared", "Reccared", "Recceswinth", "Rechiar", "Rechimund", "Recitach", "Rekitach", "Remismund",
        "Respa", "Retemeris", "Rhima", "Ricimer", "Rictiovarus", "Rikiar", "Roderic", "Rodolf", "Roduulf", "Rudesind", "Saba", "Sadagares", "Safrax", "Salla", "Sangiban", "Sansalas", "Saphrax", "Sarus", "Segeric", "Selenas", "Shapur", "Sidimund", "Sigeric", "Sigesar", "Sigibald", "Sigismund", "Sigisvult", "Sindila", "Sisbert", "Sisebut", "Sisenand", "Soas", "Suatrius", "Sueridus", "Sunericus", "Sunnia", "Tanais", "Tanca", "Teias", "Teja", "Tharuaro", "Thela", "Theodahad", "Theodehad", "Theodemer", "Theoderic", "Theoderid", "Theodoric", "Theodulf", "Theudegisel",
        "Theudegisklos", "Theudis", "Thidrek", "Thiudimir", "Thorismud", "Thorismund", "Thrasamund", "Thrasaric", "Thraustila", "Totila", "Tribigild", "Tufa", "Tuluin", "Ulfilas", "Unigild", "Unila", "Unimund", "Uraias", "Valamer", "Valamir", "Valaravans", "Valia", "Vandalarius", "Vandil", "Veduco", "Vetericus", "Vetranio", "Videric", "Vidigoia", "Vidimir", "Viliaris", "Vinitharius", "Visimar", "Vithimiris", "Vithmiris", "Vitigis", "Vittamar", "Vultuulf", "Wala", "Walahmar", "Wallia", "Wamba", "Wella", "Winguric", "Witige", "Wittigis", "Wittiza"
    ]
};
