
// Version 1 Data Set


var advBooks = new Array(0,0,0,0,0,0,0,0,0,0,0);

//  1 Additional Books Used 
//  2 Monster Manual II 
//  3 Monster Manual III 
//  4 Monster Manual IV 
//  5 Fiend Folio 
//  6 Expanded Psionics Handbook 
//  7 Complete Psionic 
//  8 Fiendish Codex I: Hordes of the Abyss 
//  9 Libris Mortis 
// 10 Lords of Madness 




// Version
// Level
// Percent
// Amount 1d3x100
// Coin Type cp,sp,gp,pp

var Table305CoinsFiltered = new Array(0);

var Table305Coins = new Array(
0,0,0,"0","0",
1,1,14,"0","1",
1,1,15,"1;6;1000","cp",
1,1,23,"1;8;100","sp",
1,1,43,"2;8;10","gp",
1,1,5,"1;4;10","pp",
1,2,13,"0","2",
1,2,10,"1;10;1000","cp",
1,2,20,"2;10;100","sp",
1,2,52,"4;10;10","gp",
1,2,5,"2;8;10","pp",
1,3,11,"0","3",
1,3,10,"2;10;1000","cp",
1,3,20,"4;8;100","sp",
1,3,54,"1;4;100","gp",
1,3,5,"1;10;10","pp",
1,4,11,"0","4",
1,4,10,"3;10;1000","cp",
1,4,20,"4;12;1000","sp",
1,4,54,"1;6;100","gp",
1,4,5,"1;8;10","pp",
1,5,10,"0","5",
1,5,9,"1;4;10000","cp",
1,5,19,"1;6;1000","sp",
1,5,57,"1;8;100","gp",
1,5,5,"1;10;10","pp",
1,6,10,"0","6",
1,6,8,"1;6;10000","cp",
1,6,19,"1;8;1000","sp",
1,6,58,"1;10;100","gp",
1,6,5,"1;12;10","pp",
1,7,11,"0","7",
1,7,7,"1;10;10000","cp",
1,7,17,"1;12;1000","sp",
1,7,58,"2;6;100","gp",
1,7,7,"3;4;10","pp",
1,8,10,"0","8",
1,8,5,"1;12;10000","cp",
1,8,14,"2;6;1000","sp",
1,8,58,"2;8;100","gp",
1,8,13,"3;6;10","pp",
1,9,10,"0","9",
1,9,5,"2;6;10000","cp",
1,9,14,"2;8;1000","sp",
1,9,56,"5;4;100","gp",
1,9,15,"2;12;10","pp",
1,10,10,"0","10",
1,10,14,"2;10;1000","sp",
1,10,55,"6;4;100","gp",
1,10,21,"5;6;10","pp",
1,11,8,"0","11",
1,11,6,"3;10;1000","sp",
1,11,61,"4;8;100","gp",
1,11,25,"4;10;10","pp",
1,12,8,"0","12",
1,12,6,"3;12;1000","sp",
1,12,61,"1;4;1000","gp",
1,12,25,"1;4;100","pp",
1,13,8,"0","13",
1,13,67,"1;4;1000","gp",
1,13,25,"1;10;100","pp",
1,14,8,"0","14",
1,14,67,"1;6;1000","gp",
1,14,25,"1;12;100","pp",
1,15,3,"0","15",
1,15,71,"1;8;1000","gp",
1,15,26,"3;4;100","pp",
1,16,3,"0","16",
1,16,71,"1;12;1000","gp",
1,16,26,"3;4;100","pp",
1,17,3,"0","17",
1,17,65,"3;4;1000","gp",
1,17,32,"2;10;100","pp",
1,18,2,"0","18",
1,18,63,"3;6;1000","gp",
1,18,35,"5;4;100","pp",
1,19,2,"0","19",
1,19,63,"3;8;1000","gp",
1,19,35,"3;10;100","pp",
1,20,2,"0","20",
1,20,63,"4;8;1000","gp",
1,20,35,"4;10;100","pp"
);




// Version
// Level
// Percent
// Amount 
// Type g=gems a=art object

var Table305GoodsFiltered = new Array(0);

var Table305Goods = new Array(
0,0,0,"0","",
1,1,90,"0","",
1,1,5,"1;1;0","g",
1,1,5,"1;1;0","a",
1,2,81,"0","",
1,2,14,"1;3;0","g",
1,2,5,"1;3;0","a",
1,3,77,"0","",
1,3,18,"1;3;0","g",
1,3,5,"1;3;0","a",
1,4,70,"0","",
1,4,25,"1;4;0","g",
1,4,5,"1;3;0","a",
1,5,60,"0","",
1,5,35,"1;4;0","g",
1,5,5,"1;4;0","a",
1,6,56,"0","",
1,6,36,"1;4;0","g",
1,6,8,"1;4;0","a",
1,7,48,"0","",
1,7,40,"1;4;0","g",
1,7,12,"1;4;0","a",
1,8,45,"0","",
1,8,40,"1;6;0","g",
1,8,15,"1;4;0","a",
1,9,40,"0","",
1,9,40,"1;8;0","g",
1,9,20,"1;4;0","a",
1,10,35,"0","",
1,10,44,"1;8;0","g",
1,10,21,"1;6;0","a",
1,11,24,"0","",
1,11,50,"1;10;0","g",
1,11,26,"1;6;0","a",
1,12,17,"0","",
1,12,53,"1;10;0","g",
1,12,30,"1;8;0","a",
1,13,11,"0","",
1,13,55,"1;12;0","g",
1,13,34,"1;10;0","a",
1,14,11,"0","",
1,14,55,"2;8;0","g",
1,14,34,"2;6;0","a",
1,15,9,"0","",
1,15,56,"2;10;0","g",
1,15,35,"2;8;0","a",
1,16,7,"0","",
1,16,57,"4;6;0","g",
1,16,36,"2;10;0","a",
1,17,4,"0","",
1,17,59,"4;8;0","g",
1,17,37,"3;8;0","a",
1,18,4,"0","",
1,18,50,"3;12;0","g",
1,18,46,"3;10;0","a",
1,19,3,"0","",
1,19,47,"6;6;0","g",
1,19,50,"6;6;0","a",
1,20,2,"0","",
1,20,36,"4;10;0","g",
1,20,62,"7;6;0","a"
);




// Version
// Level
// Percent
// Amount  
// Type

var Table305ItemsFiltered = new Array(0);

var Table305Items = new Array(
0,0,0,"0","",
1,1,71,"0","",
1,1,24,"1;1;0","mundane",
1,1,5,"1;1;0","minor",
1,2,49,"0","",
1,2,36,"1;1;0","mundane",
1,2,15,"1;1;0","minor",
1,3,49,"0","",
1,3,30,"1;3;0","mundane",
1,3,21,"1;1;0","minor",
1,4,42,"0","",
1,4,20,"1;4;0","mundane",
1,4,38,"1;1;0","minor",
1,5,57,"0","",
1,5,10,"1;4;0","mundane",
1,5,33,"1;3;0","minor",
1,6,54,"0","",
1,6,4,"1;4;0","mundane",
1,6,41,"1;3;0","minor",
1,6,1,"1;1;0","medium",
1,7,51,"0","",
1,7,46,"1;3;0","minor",
1,7,3,"1;1;0","medium",
1,8,48,"0","",
1,8,48,"1;4;0","minor",
1,8,4,"1;1;0","medium",
1,9,43,"0","",
1,9,48,"1;4;0","minor",
1,9,9,"1;1;0","medium",
1,10,40,"0","",
1,10,48,"1;4;0","minor",
1,10,11,"1;1;0","medium",
1,10,1,"1;1;0","major",
1,11,31,"0","",
1,11,53,"1;4;0","minor",
1,11,14,"1;1;0","medium",
1,11,2,"1;1;0","major",
1,12,27,"0","",
1,12,55,"1;6;0","minor",
1,12,15,"1;1;0","medium",
1,12,3,"1;1;0","major",
1,13,19,"0","",
1,13,54,"1;6;0","minor",
1,13,22,"1;1;0","medium",
1,13,5,"1;1;0","major",
1,14,19,"0","",
1,14,39,"1;6;0","minor",
1,14,35,"1;1;0","medium",
1,14,7,"1;1;0","major",
1,15,11,"0","",
1,15,35,"1;10;0","minor",
1,15,44,"1;1;0","medium",
1,15,10,"1;1;0","major",
1,16,40,"0","",
1,16,6,"1;10;0","minor",
1,16,44,"1;3;0","medium",
1,16,10,"1;1;0","major",
1,17,33,"0","",
1,17,50,"1;3;0","medium",
1,17,17,"1;1;0","major",
1,18,24,"0","",
1,18,56,"1;4;0","medium",
1,18,20,"1;1;0","major",
1,19,4,"0","",
1,19,66,"1;4;0","medium",
1,19,30,"1;1;0","major",
1,20,25,"0","",
1,20,40,"1;4;0","medium",
1,20,35,"1;3;0","major"
);







// Version
// Percent
// Value  
// Average  
// Gem

var Table306GemsFiltered = new Array(0);

var Table306Gems = new Array(
0,0,"0",0,"",
1,25,"4;4;1",10,";Banded Agate;Eye Agate;Moss Agate;Azurite;Blue Quartz;Hematite;Lapis Lazuli;Malachite;Obsidian;Rhodochrosite;Tiger Eye Turquoise;Freshwater Pearl",
1,25,"2;4;10",50,";Bloodstone;Carnelian;Chalcedony;Chrysoprase;Citrine;Iolite Jasper;Moonstone;Onyx;Peridot;Rock Crystal (clear quartz);Sard;Sardonyx;Rose Quartz;Smoky Quartz;Orstar Rose Quartz;Zircon",
1,20,"4;4;10",100,";Amber;Amethyst;Chrysoberyl;Coral;Red Garnet;Brown-Green Garnet;Jade;Jet;White Pearl;Golden Pearl;Pink Pearl;Silver Pearl;Red Spinel;Red-Brown Spinel;Deep Green Spinel;Tourmaline",
1,20,"2;4;100",500,";Alexandrite;Aquamarine;Violet Garnet;Black Pearl;Deep Blue Spinel;Golden Yellow Topaz",
1,9,"4;4;100",1000,";Emerald;White Opal;Black Opal;Fire Opal;Blue Sapphire;Fiery Yellow Corundum;Rich Purple Corundum;Blue Star Sapphire;Black Star Sapphire;Star Ruby",
1,1,"2;4;1000",5000,";Clearest Bright Green Emerald;Blue-White Diamond;Canary Diamond;Pink Diamond;Brown Diamond;Blue Diamond;Jacinth"
);





// Version
// Percent
// Value  
// Average  
// Art Objects

var Table307ArtFiltered = new Array(0);

var Table307Art = new Array(
0,0,"0",0,"",
1,10,"1;1;10",5,";Silver ewer;Carved bone statuette;Ivory statuette;Finely wrought small gold bracelet;A carved wooden bowl of wax fruit;A small painted stone dog statuette;A portrait of a local ruler carved and painted on wooden wall plaque",
1,15,"2;4;10",55,";Silver signet ring depicting a kraken;A gold-tipped griffon-feather quill;A gold plated silver corkscrew with a wooden handle;A leather coin purse with the personal sigil of a unknown mage stitched on its surface in silver thread;A finely wrought pewter chalice set with amethyst ;Single real leaf dipped in gold on a silver chain;A simple heart shaped silver locket holds the miniature portrait of a woman;A silver cloak clasp with a round blue garnet placed at its center. There is an inscription on its back.;A pair of boots made from behir leather and lined with silk inside. The sole is removable and holds a love letter, written by an unknown adventurer.;A 5 foot diameter bronze gong with its edge plated in silver;A silver brooch enameled with a design of 3 blue lightning bolts;A flower made of colored crystal;A heavy stone hammer with a rare sunwood handle and its grip wrapped with remoharz leather;A ine multicolored coral bead torque;An ancient urn, almost completely intact;A fine silk cape with silver threads;A finely carved set of bone bracelets done in filigree to resemble lace, set with small turquoise and fastened with silver wire;A finely carved jet mourning brooch, pendant or bracelet, set in silver, made to hold a lock of hair;A single small opal on black velvet choker",
1,15,"3;6;10",105,";Cloth of gold vestments;Black velvet mask with numerous citrines;Silver chalice with lapis lazuli gems;A bread pan made from a strange light colored wood. Bread allowed to rise in the pan has a distinct and pleasant fragance that persists for several days;A soap dish made of soapstone. A name is scratched on its lip;A detailed silver mask of a smiling raskasha.;A darkwood hatstand shaped like a tree;A satchel made from shocker lizard hide;A flawless amber sphere containing a bronze-colored praying mantis.;A single fingerless glove made of a smooth fine leather and inlaid with a sun design made of heavy gold threads;A silver teapot with a fluted handle;A pair of ivory chopsticks, capped with silver on both ends;A golden bowl with the name of a local ruler engraved at its bottom;A silver dagger with a bloodstone at the end of the hilt",
1,15,"1;6;100",350,";Large well-done wool tapestry;Brass mug with jade inlays;A crystal decanter, cut to scatter light into a rainbow of colors;A soft wool rug with silk accents and intricate floral designs;A silver ring with uniquely-shaped emerald;A bracelet in the form of a golden centipede;An ivory carving of a swooping eagle, with sapphire eyes;A small but incredibly detailed carving of a sea turtle in gold",
1,10,"1;10;100",550,";Silver comb with moonstones;Silver-plated steel longsword with jet jewel in hilt;A red silk corset with adamantine brocade;A 12-inch onyx and fire opal statue of a Nightmare;A bucket made of fine autumn oak wood. Platinum bands encircle the top and bottom of the bucket;A gold hilted sword with a large amethyst at its quillons and its pommel;A wall tapestry depicting a historical battle;A gold tiara with some small gems",
1,10,"2;6;100",700,";Carved harp of exotic wood with ivory inlay and zircon gems;Solid gold idol (10 lb.);A green jade disk elaborately carved with dragons and tigers circling the edges and a rising phoenix of white jade in the center;A Crystal dish etched with Elven script;Star sapphire carved into a fake eye",
1,10,"3;6;100",1050,";Gold dragon comb with red garnet eye;Gold and topaz bottle stopper cork;Ceremonial electrum dagger with a star ruby in the pommel;A large tapestry depicting the family tree of a royal family, done with gold threads for each line and name;A detailed silver statue of a woman holding aloft a tiny platinum urn with both of her hands;A faceted crystal basket;A 4 foot long silver scabbard, inlaid with white jade unicorns and green jade leaves. The tapered end of the scabbard is plated with a protective mithral cap",
1,10,"4;6;100",1400,";Eyepatch with mock eye of sapphire and moonstone;Fire opal pendant on a fine gold chain;Old masterpiece painting",
1,5,"5;6;100",1750,";Embroidered silk and velvet mantle with numerous moonstones;Sapphire pendant on gold chain",
1,5,"1;4;1000",2500,";Embroidered and bejeweled glove;Jeweled anklet;Gold music box;A golden bullseye lantern shaped to look like a cobra. The jaws of the cobra control the lantern's point of illumination.",
1,5,"1;6;1000",3500,";Golden circlet with four aquamarines;A string of small pink pearls (necklace);Silver gauntlets with ruby and sapphire inlays;A blooming rose made from ruby petals with a jade stem. Each petal can be removed seperately;A porcelain vase with scenes of a historic battle inlaid around it in solid gold;A silver chalice studded with sapphires",
1,4,"2;4;1000",5000,";Jeweled gold crown;Jeweled electrum ring;A golden statue of the Tarrasque with a ruby carapace;A foot high carving of a rearing horse in reddish brown jade;A life sized carving of a strawberry, made of ruby, with emerald leaves",
1,1,"2;6;1000",7000,";Gold and ruby ring;Gold cup set with emeralds;A solid faceted chalice carved from a single piece of amethyst with jade trimmings at its base ;A circlet crown carved from a single piece of topaz. Amber orbs top the spires of the crown"
);

// var Table307Art = new Array(
// 0,0,"0",0,"",
// 1,10,"1;1;10",5,";Silver ewer;Carved bone statuette;Ivory statuette;Finely wrought small gold bracelet",
// 1,15,"3;6;10",105,";Cloth of gold vestments;Black velvet mask with numerous citrines;Silver chalice with lapis lazuli gems",
// 1,15,"1;6;100",350,";Large well-done wool tapestry;Brass mug with jade inlays",
// 1,10,"1;10;100",550,";Silver comb with moonstones;Silver-plated steel longsword with jet jewel in hilt",
// 1,10,"2;6;100",700,";Carved harp of exotic wood with ivory inlay and zircon gems;Solid gold idol (10 lb.)",
// 1,10,"3;6;100",1050,";Gold dragon comb with red garnet eye;Gold and topaz bottle stopper cork;Ceremonial electrum dagger with a star ruby in the pommel",
// 1,10,"4;6;100",1400,";Eyepatch with mock eye of sapphire and moonstone;Fire opal pendant on a fine gold chain;Old masterpiece painting",
// 1,5,"5;6;100",1750,";Embroidered silk and velvet mantle with numerous moonstones;Sapphire pendant on gold chain",
// 1,5,"1;4;1000",2500,";Embroidered and bejeweled glove;Jeweled anklet;Gold music box",
// 1,5,"1;6;1000",3500,";Golden circlet with four aquamarines;A string of small pink pearls (necklace)",
// 1,4,"2;4;1000",5000,";Jeweled gold crown;Jeweled electrum ring",
// 1,1,"2;6;1000",7000,";Gold and ruby ring;Gold cup set with emeralds"
// );


// Version
// Percent
// Amount  
// Container  
// Value
// Item Name

var Table308AlchemyFiltered = new Array(0);

var Table308Alchemy = new Array(
0,0,"0","",0,"",
1,12,"1;4;0","flask",20,"Alchemist's fire",
1,12,"2;4;0","flask",10,"Acid",
1,12,"1;4;0","stick",0,"Smokesticks",
1,12,"1;4;0","flask",25,"Holy water",
1,14,"1;4;0","dose",50,"Antitoxin",
1,12,"1;0;0","",0,"Everburning torch",
1,14,"1;4;0","bag",50,"Tanglefoot bags",
1,12,"1;4;0","stone",30,"Thunderstones"
);

 

// Version
// Percent
// Value
// Item Name

var Table308ArmorFiltered = new Array(0);

var Table308Armor = new Array(
0,0,0,"",
1,12,100,"Chain shirt",
1,6,175,"Masterwork studded leather",
1,8,200,"Breastplate",
1,8,250,"Banded mail",
1,20,600,"Half-plate",
1,26,1500,"Full plate",
1,5,205,"Darkwood Buckler",
1,5,257,"Darkwood Shield",
1,2,165,"Masterwork Buckler",
1,2,153,"Masterwork Light wooden shield",
1,2,159,"Masterwork Light steel shield",
1,2,157,"Masterwork Heavy wooden shield",
1,2,170,"Masterwork Heavy steel shield"
);



// Version
// Percent
// Note
// Item Name

var Table308WeaponsFiltered = new Array(0);

var Table308Weapons = new Array(
0,0,"","",
1,50,"roll on Table 7–11: Common Melee Weapons","Masterwork common melee weapon",
1,20,"roll on Table 7–12: Uncommon Weapons","Masterwork uncommon weapon",
1,30,"roll on Table7–13: Common Ranged Weapons","Masterwork common ranged weapon"
);




// Version
// Percent
// Value
// Item Name

var Table308GearFiltered = new Array(0);

var Table308Gear = new Array(
0,0,0,"",
1,3,2,"Backpack, empty",
1,3,2,"Crowbar",
1,5,12,"Lantern, bullseye",
1,5,20,"Lock, simple",
1,5,40,"Lock, average",
1,7,80,"Lock, good",
1,8,150,"Lock, superior",
1,5,50,"Manacles, masterwork",
1,3,10,"Mirror, small steel",
1,3,10,"Rope, silk (50 ft.)",
1,7,1000,"Spyglass",
1,5,55,"Artisan's tools, masterwork",
1,5,80,"Climber's kit",
1,5,50,"Disguise kit",
1,5,50,"Healer's kit",
1,4,25,"Holy symbol, silver",
1,4,25,"Hourglass",
1,7,100,"Magnifying glass",
1,7,100,"Musical instrument, masterwork",
1,5,50,"Thieves' tools, masterwork"
);





// Table 3-17 Random Door Types

// version (1=original) 
// percent
// Type 1=wood 2=stone 3=iron 0=na
// More 1=simple 2=good 3=strong 0=na   
// Locked 1=yes 0=no
// Stuck 1=yes 0=no
// Trapped 1=yes 0=no
// Break DC
// Special Info 0=no

var Table317Filtered = new Array(0);
var Table317Temp = new Array(0);
var Table317Reroll = new Array(0);
 
var Table317RandomDoorTypes = new Array(
0,0,0,0,0,0,0,0,0,
1,8,1,1,0,0,0,0,0, 		// 1-8   Wooden, simple, unlocked 
1,1,1,1,0,0,1,0,0, 		// 9     Wooden, simple, unlocked, trapped 
1,14,1,1,0,1,0,13,0, 	// 10-23 Wooden, simple, stuck (13) 
1,1,1,1,0,1,1,13,0, 	// 24    Wooden, simple, stuck (13) and trapped
1,5,1,1,1,0,0,15,0, 	// 25-29 Wooden, simple, locked (15)
1,1,1,1,1,0,1,15,0, 	// 30    Wooden, simple, locked (15) and trapped
1,5,1,2,0,0,0,0,0, 		// 31-35 Wooden, good, unlocked
1,1,1,2,0,0,1,0,0, 		// 36    Wooden, good, unlocked and trapped
1,8,1,2,0,1,0,18,0, 	// 37-44 Wooden, good, stuck (18)
1,1,1,2,0,1,1,18,0, 	// 45    Wooden, good, stuck (18) and trapped
1,4,1,2,1,0,0,18,0, 	// 46-49 Wooden, good, locked (18)
1,1,1,2,1,0,1,18,0, 	// 50    Wooden, good, locked (18) and trapped
1,5,1,3,0,0,0,0,0, 		// 51-55 Wooden, strong, unlocked
1,1,1,3,0,0,1,0,0, 		// 56    Wooden, strong, unlocked and trapped
1,8,1,3,0,1,0,23,0, 	// 57-64 Wooden, strong, stuck (23)
1,1,1,3,0,1,1,23,0, 	// 65    Wooden, strong, stuck (23) and trapped
1,4,1,3,1,0,0,25,0, 	// 66-69 Wooden, strong, locked (25) 
1,1,1,3,1,0,1,25,0, 	// 70    Wooden, strong, locked (25) and trapped 
1,1,2,0,0,0,0,0,0, 		// 71    Stone, unlocked 
1,1,2,0,0,0,1,0,0, 		// 72    Stone, unlocked and trapped 
1,3,2,0,0,1,0,28,0, 	// 73-75 Stone, stuck (28) 
1,1,2,0,0,1,1,28,0, 	// 76    Stone, stuck (28) and trapped 
1,3,2,0,1,0,0,28,0, 	// 77-79 Stone, locked (28) 
1,1,2,0,1,0,1,28,0, 	// 80    Stone, locked (28) and trapped 
1,1,3,0,0,0,0,0,0, 		// 81    Iron, unlocked 
1,1,3,0,0,0,1,0,0, 		// 82    Iron, unlocked and trapped 
1,3,3,0,0,1,0,28,0, 	// 83-85 Iron, stuck (28) 
1,1,3,0,0,1,1,28,0, 	// 86    Iron, stuck (28) and trapped 
1,3,3,0,1,0,0,28,0, 	// 87-89 Iron, locked (28) 
1,1,3,0,1,0,1,28,0, 	// 90    Iron, locked (28) and trapped 
1,3,0,0,0,0,0,0,1, 		// 91-93 Door slides to one side rather than opening normally, Reroll type 1-90, +1 Break DC    
1,3,0,0,0,0,0,0,2, 		// 94-96 Door slides to down rather than opening normally, Reroll type 1-90, +1 Break DC    
1,3,0,0,0,0,0,0,3, 		// 97-99 Door slides to up rather than opening normally, Reroll type 1-90, +3 Break DC    
1,1,0,0,0,0,0,0,4 		// 100   Door magically reinforced, Reroll type 1-90, Break DC is 30 for wooden and 40 for stone or iron doors.    
);



// Table 3-18 Random Room Contents

// version (1=original) 
// percent
// theme
// monster 
// features 
// hidden treasure
// trap
// nothing   

var Table318Filtered = new Array(0);

var Table318RandomContents = new Array(
0,0,"",0,0,0,0,0,
1,18,"A",1,0,0,0,0,	// Monster only 
1,26,"A",1,1,0,0,0,	// Monster and features
1,1,"A",1,0,1,0,0,	// Monster and hidden treasure
1,1,"A",1,0,0,1,0,	// Monster and trap
1,1,"A",1,1,1,0,0,	// Monster, features, and hidden treasure
1,1,"A",1,1,0,1,0,	// Monster, hidden treasures, and trap
1,1,"A",1,1,1,1,0,	// Monster, features, hidden treasures, and trap
1,26,"A",0,1,0,0,0,	// Features only
1,1,"A",0,1,1,0,0,	// Features and hidden treasure
1,1,"A",0,1,0,1,0,	// Features and trap
1,1,"A",0,1,1,1,0,	// Features, hidden treasure, and trap
1,1,"A",0,0,1,0,0,	// Hidden treasure only
1,1,"A",0,0,1,1,0,	// Hidden treasure and trap
1,1,"A",0,0,0,1,0,	// Trap only
1,18,"A",0,0,0,0,1	// Nothing
);
 
// Features 
// 1-40   (1d4 minor features on Table 3-12)
// 41-80  (1d4 major features on Table 3-11)
// 81-100 (Both)

// Hidden Treasure
// Roll a random treasure on Table 3-5 (Search check DC20 + Level)

// Monster
// Roll on appropriate encounter table.

// Trap
// Roll a trap from the existing traps array.

//  Major features
var Table311Filtered = new Array(0);
var Table311 = new Array(
0,0,"","","",
1,1,"A","Alcove","Alcove",
1,1,"A","Altar","Altar",
1,1,"A","Arch","Arch",
1,1,"A","Arrow slit (wall)/murder hole (ceiling)","Arrow slit (wall)/murder hole (ceiling)",
1,1,"A","Balcony","Balcony",
1,1,"A","Barrel","Barrel",
1,1,"A","Bed","Bed",
1,1,"A","Bench","Bench",
1,1,"A","Bookcase","Bookcase",
1,1,"A","Brazier","Brazier",
1,1,"A","Cage","Cage",
1,1,"A","Caldron","Caldron",
1,1,"A","Carpet","Carpet",
1,1,"A","Carving","Carving",
1,1,"A","Casket","Casket",
1,1,"A","Catwalk","Catwalk",
1,1,"A","Chair","Chair",
1,1,"A","Chandelier","Chandelier",
1,1,"A","Charcoal bin","Charcoal bin",
1,1,"A","Chasm","Chasm",
1,1,"A","Chest","Chest",
1,1,"A","Chest of drawers","Chest of drawers",
1,1,"A","Chute","Chute",
1,1,"A","Coat rack","Coat rack",
1,1,"A","Collapsed wall","Collapsed wall",
1,1,"A","Crate","Crate",
1,1,"A","Cupboard","Cupboard",
1,1,"A","Curtain","Curtain",
1,1,"A","Divan","Divan",
1,1,"A","Dome","Dome",
1,1,"A","Door (broken)","Door (broken)",
1,1,"A","Dung heap","Dung heap",
1,1,"A","Evil symbol","Evil symbol",
1,1,"A","Fallen stones","Fallen stones",
1,1,"A","Firepit","Firepit",
1,1,"A","Fireplace","Fireplace",
1,1,"A","Font","Font",
1,1,"A","Forge","Forge",
1,1,"A","Fountain","Fountain",
1,1,"A","Furniture (broken)","Furniture (broken)",
1,1,"A","Gong","Gong",
1,1,"A","Hay (pile)","Hay (pile)",
1,1,"A","Hole","Hole",
1,1,"A","Hole (blasted)","Hole (blasted)",
1,1,"A","Idol","Idol",
1,1,"A","Iron bars","Iron bars",
1,1,"A","Iron maiden","Iron maiden",
1,1,"A","Kiln","Kiln",
1,1,"A","Ladder","Ladder",
1,1,"A","Ledge","Ledge",
1,1,"A","Loom","Loom",
1,1,"A","Loose masonry","Loose masonry",
1,1,"A","Manacles","Manacles",
1,1,"A","Manger","Manger",
1,1,"A","Mirror","Mirror",
1,1,"A","Mosaic","Mosaic",
1,1,"A","Mound of rubble","Mound of rubble",
1,1,"A","Oven","Oven",
1,1,"A","Overhang","Overhang",
1,1,"A","Painting","Painting",
1,1,"A","Partially collapsed ceiling","Partially collapsed ceiling",
1,1,"A","Pedestal","Pedestal",
1,1,"A","Peephole","Peephole",
1,1,"A","Pillar","Pillar",
1,1,"A","Pillory","Pillory",
1,1,"A","Pit (shallow)","Pit (shallow)",
1,1,"A","Platform","Platform",
1,1,"A","Pool","Pool",
1,1,"A","Portcullis","Portcullis",
1,1,"A","Rack","Rack",
1,1,"A","Ramp","Ramp",
1,1,"A","Recess","Recess",
1,1,"A","Relief","Relief",
1,1,"A","Sconce","Sconce",
1,1,"A","Screen","Screen",
1,1,"A","Shaft","Shaft",
1,1,"A","Shelf","Shelf",
1,1,"A","Shrine","Shrine",
1,1,"A","Spinning wheel","Spinning wheel",
1,1,"A","Stall or pen","Stall or pen",
1,1,"A","Statue","Statue",
1,1,"A","Statue (toppled)","Statue (toppled)",
1,1,"A","Steps","Steps",
1,1,"A","Stool","Stool",
1,1,"A","Stuffed beast","Stuffed beast",
1,1,"A","Sunken area","Sunken area",
1,1,"A","Table (large)","Table (large)",
1,1,"A","Table (small)","Table (small)",
1,1,"A","Tapestry","Tapestry",
1,1,"A","Throne","Throne",
1,1,"A","Trash (pile)","Trash (pile)",
1,1,"A","Tripod","Tripod",
1,1,"A","Trough","Trough",
1,1,"A","Tub","Tub",
1,1,"A","Wall basin","Wall basin",
1,1,"A","Wardrobe","Wardrobe",
1,1,"A","Weapon rack","Weapon rack",
1,1,"A","Well","Well",
1,1,"A","Winch and pulley","Winch and pulley",
1,1,"A","Workbench","Workbench"
)

// Minor features
var Table312Filtered = new Array(0);
var Table312 = new Array(
0,0,"","","",
1,1,"A","Anvil","Anvil",
1,1,"A","Ash","Ash",
1,1,"A","Backpack","Backpack",
1,1,"A","Bale (straw)","Bale (straw)",
1,1,"A","Bellows","Bellows",
1,1,"A","Belt","Belt",
1,1,"A","Bits of fur","Bits of fur",
1,1,"A","Blanket","Blanket",
1,1,"A","Bloodstain","Bloodstain",
1,1,"A","Bones (humanoid)","Bones (humanoid)",
1,1,"A","Bones (nonhumanoid)","Bones (nonhumanoid)",
1,1,"A","Books","Books",
1,1,"A","Boots","Boots",
1,1,"A","Bottle","Bottle",
1,1,"A","Box","Box",
1,1,"A","Branding iron","Branding iron",
1,1,"A","Broken glass","Broken glass",
1,1,"A","Bucket","Bucket",
1,1,"A","Candle","Candle",
1,1,"A","Candelabra","Candelabra",
1,1,"A","Cards (playing cards)","Cards (playing cards)",
1,1,"A","Chains","Chains",
1,1,"A","Claw marks","Claw marks",
1,1,"A","Cleaver","Cleaver",
1,1,"A","Clothing","Clothing",
1,1,"A","Cobwebs","Cobwebs",
1,1,"A","Cold spot","Cold spot",
1,1,"A","Corpse (adventurer)","Corpse (adventurer)",
1,1,"A","Corpse (monster)","Corpse (monster)",
1,1,"A","Cracks","Cracks",
1,1,"A","Dice","Dice",
1,1,"A","Discarded weapons","Discarded weapons",
1,1,"A","Dishes","Dishes",
1,1,"A","Dripping water","Dripping water",
1,1,"A","Drum","Drum",
1,1,"A","Dust","Dust",
1,1,"A","Engraving","Engraving",
1,1,"A","Equipment (broken)","Equipment (broken)",
1,1,"A","Equipment (usable)","Equipment (usable)",
1,1,"A","Flask","Flask",
1,1,"A","Flint and tinder","Flint and tinder",
1,1,"A","Foodstuffs (spoiled)","Foodstuffs (spoiled)",
1,1,"A","Foodstuffs (edible)","Foodstuffs (edible)",
1,1,"A","Fungus","Fungus",
1,1,"A","Grinder","Grinder",
1,1,"A","Hook","Hook",
1,1,"A","Horn","Horn",
1,1,"A","Hourglass","Hourglass",
1,1,"A","Insects","Insects",
1,1,"A","Jar","Jar",
1,1,"A","Keg","Keg",
1,1,"A","Key","Key",
1,1,"A","Lamp","Lamp",
1,1,"A","Lantern","Lantern",
1,1,"A","Markings","Markings",
1,1,"A","Mold","Mold",
1,1,"A","Mud","Mud",
1,1,"A","Mug","Mug",
1,1,"A","Musical instrument","Musical instrument",
1,1,"A","Mysterious stain","Mysterious stain",
1,1,"A","Nest (animal)","Nest (animal)",
1,1,"A","Odor (unidentifiable)","Odor (unidentifiable)",
1,1,"A","Oil (fuel)","Oil (fuel)",
1,1,"A","Oil (scented)","Oil (scented)",
1,1,"A","Paint","Paint",
1,1,"A","Paper","Paper",
1,1,"A","Pillows","Pillows",
1,1,"A","Pipe (smoking pipe)","Pipe (smoking pipe)",
1,1,"A","Pole","Pole",
1,1,"A","Pot","Pot",
1,1,"A","Pottery shard","Pottery shard",
1,1,"A","Pouch","Pouch",
1,1,"A","Puddle (water)","Puddle (water)",
1,1,"A","Rags","Rags",
1,1,"A","Razor","Razor",
1,1,"A","Rivulet","Rivulet",
1,1,"A","Ropes","Ropes",
1,1,"A","Runes","Runes",
1,1,"A","Sack","Sack",
1,1,"A","Scattered stones","Scattered stones",
1,1,"A","Scorch marks","Scorch marks",
1,1,"A","Scroll (nonmagical)","Scroll (nonmagical)",
1,1,"A","Scroll case (empty)","Scroll case (empty)",
1,1,"A","Skull","Skull",
1,1,"A","Slime","Slime",
1,1,"A","Sound (unexplained)","Sound (unexplained)",
1,1,"A","Spices","Spices",
1,1,"A","Spike","Spike",
1,1,"A","Teeth","Teeth",
1,1,"A","Tongs","Tongs",
1,1,"A","Tools","Tools",
1,1,"A","Torch (stub)","Torch (stub)",
1,1,"A","Tray","Tray",
1,1,"A","Trophy","Trophy",
1,1,"A","Twine","Twine",
1,1,"A","Urn","Urn",
1,1,"A","Utensils","Utensils",
1,1,"A","Whetstone","Whetstone",
1,1,"A","Wood (scraps)","Wood (scraps)",
1,1,"A","Words (scrawled)","Words (scrawled)"
)

var MonstersLevelOneFiltered = new Array(0);
var MonstersLevelOneNoReroll = new Array(0);
var MonstersLevelOneWandering = new Array(0);
var MonstersLevelOne = new Array(
0,0,"","","","","","","",0,
1,3,"A","C","Medium Monstrous Centipedes (vermin);1;3;0;1;8;0;0;0;0;4;1/2;0;M;0","","","","",0,	
1,5,"A","C","Dire Rats;1;4;0;1;8;1;0;0;0;5;1/3;0;M;0","","","","",0,
1,2,"A","C"," Giant Fire Beetles (vermin);1;4;0;1;8;0;0;0;0;4;1/3;0;M;0","","","","",0,
1,3,"A","C","Small Monstrous Scorpions (vermin);1;3;0;1;8;2;0;0;0;6;1/2;0;M;0","","","","",0,
1,3,"A","C","Small Monstrous Spiders (vermin);1;3;0;1;8;0;0;0;0;4;1/2;0;M;0","","","","",0,
1,4,"A","C","Dwarf Warriors;1;3;0;1;8;2;0;0;0;6;1/2;0;M;0","","","","",0,
1,2,"A","C","Elf Warriors;1;3;0;1;8;0;0;0;0;4;1/2;0;M;0","","","","",0,
1,3,"A","C","Darkmantle;1;1;0;1;10;1;0;0;0;6;1;0;M;0","","","","",0,
1,3,"A","C","Krenshar;1;1;0;2;10;0;0;0;0;10;1;0;M;0","","","","",0,
1,2,"A","C","Lemure (devil);1;1;0;2;8;0;0;0;0;4;1;0;M;0","","","","",0,
1,10,"A","C","Goblin Warriors;1;3;1;1;8;1;0;0;0;5;1/3;0;M;0","","","","",0,
1,10,"A","C","Kobold Warriors;1;4;2;1;8;0;0;0;0;4;1/4;0;M;0","","","","",0,
1,6,"A","C","Human Warrior Skeletons;1;4;0;1;12;0;0;0;0;6;1/3;0;M;0","","","","",0,
1,6,"A","C","Human Commoner Zombies;1;3;0;2;12;3;0;0;0;15;1/2;0;M;0","","","","",0,
1,9,"A","C","Tiny Viper Snakes (animal);1;4;1;1/4;8;0;0;0;0;1;1/3;0;M;0","","","","",0,
1,9,"A","C","Orc Warriors;1;3;0;1;8;1;0;0;0;5;1/2;0;M;0","","","","",0,
1,5,"A","C","Stirges;1;3;0;1;10;0;0;0;0;5;1/2;0;M;0","","","","",0,
1,5,"A","C","Spider Swarm;1;1;0;2;8;0;0;0;0;8;1;0;M;0","","","","",0,

1,2,"A","H","Mane;1;0;0;1;8;2 ;0;0;0;6;1;0;H;0","","","","",0,
1,2,"A","4","Varag;1;0;0;3;8;3;0;0;0;16;1;0;4;0","","","","",0,
1,2,"A","4","Howler Wasp;1;0;0;2;8;4;0;0;0;13;1;0;4;0","","","","",0,
1,2,"A","4","Windrazor;1;0;0;2;8;0;0;0;0;9;1;0;4;0","","","","",0,
1,2,"A","4","Clockroach;1;0;0;1;10;10;0;0;0;15;1;0;4;0","","","","",0,
1,2,"A","2","Tatterdemanimal (raggamoffyn);1;0;0;1;10;0;0;0;0;5;1;0;2;0","","","","",0,
1,2,"A","2","Crested Felldrake;1;0;0;2;12;4;0;0;0;17;1;0;2;0","","","","",0,
1,2,"A","2","Ether Scarab;1;0;0;1;8;0;0;0;0;4;1;0;2;0","","","","",0,
1,2,"A","F","Shadow Asp;1;0;0;1;10;2;0;0;0;7;1;0;F;0","","","","",0,
1,2,"A","F","Mongrelfolk;2;4;0;1;8;2 ;0;0;0;6;1/3;0;F;0","","","","",0,
1,2,"A","F","Minor Flame Snake;1;0;0;1;10;0;0;0;0;5;1;0;F;0","","","","",0,
1,2,"A","L","Skum Zombie;1;0;0;4;12;3 ;0;0;0;29;1;0;L;0","","","","",0,
1,2,"A","L","Gnoll Warrior Zombie;1;0;0;2;12;3 ;0;0;0;42;1;0;L;0","","","","",0,
1,2,"A","L","Gnoll Warrior Skeleton;1;0;0;2;12;0;0;0;0;13;1;0;L;0","","","","",0,
1,2,"A","L","Kobold Warrior Skeleton;1;3;0;1;12;0;0;0;0;6;1/3;0;L;0","","","","",0,
1,2,"A","L","Halfling Warrior Skeleton;1;3;0;1;12;0;0;0;0;6;1/3;0;L;0","","","","",0,
1,2,"A","L","Dire Rat Skeleton;1;3;0;1;12;0;0;0;0;6;1/3;0;L;0","","","","",0,
1,2,"A","L","Goblin Warrior Zombie;1;3;0;2;12;3 ;0;0;0;16;1/2;0;L;0","","","","",0,
1,2,"A","L","Gnome Warrior Zombie;1;3;0;2;12;3 ;0;0;0;16;1/2;0;L;0","","","","",0,
1,2,"A","L","Dire Rat Zombie;1;3;0;2;12;3 ;0;0;0;16;1/2;0;L;0","","","","",0,
1,2,"A","L","Carcass Eater;1;3;0;1;8;3;0;0;0;7;1/2;0;L;0","","","","",0,
1,2,"A","X","Thri-Kreen;1;0;0;2;8;0;0;0;0;9;1;0;X;0","","","","",0,

1,10,"A","Z","","","","","",2
);

var MonstersLevelTwoFiltered = new Array(0);
var MonstersLevelTwoNoReroll = new Array(0);
var MonstersLevelTwoWandering = new Array(0);
var MonstersLevelTwo = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",1,			
1,2,"A","C","Lantern Archon;1;1;0;1;8;0;0;0;0;4;2;0;M;0","","","","",0,
1,7,"A","C","Hobgoblin Warrior;1;1;0;1;8;2;0;0;0;6;1/2;0;M;0","Goblin Warriors;1;4;0;1;8;1;0;0;0;5;1/3;0;M;0","","","",0,
1,4,"A","C","Bugbear;1;1;0;3;8;3;0;0;0;16;2;0;M;0","","","","",0,
1,3,"A","C","Choker;1;1;0;3;8;3;0;0;0;16;2;0;M;0","","","","",0,	
1,2,"A","C","Dretch (demon);1;1;0;2;8;4;0;0;0;13;2;0;M;0","","","","",0,
1,2,"A","C","Quasit (demon);1;1;0;3;8;0;0;0;0;13;2;0;M;0","","","","",0,	
1,2,"A","C","Imp (devil);1;1;0;3;8;0;0;0;0;13;2;0;M;0","","","","",0,
1,3,"A","C","Dire Bat;1;1;0;4;8;12;0;0;0;30;2;0;M;0","","","","",0,
1,3,"A","C","Fiendish Dire Rats;1;4;1;1;8;1;0;0;0;5;1/3;0;M;0","","","","",0,
1,2,"A","C","Formian Workers;1;3;1;1;8;1;0;0;0;5;1/2;0;M;0","","","","",0,
1,3,"A","C","Halfling Warriors;1;3;1;1;8;1;0;0;0;5;1/2;0;M;0","","","","",0,
1,7,"A","C","Kobold Warriors;2;4;1;1;8;0;0;0;0;4;1/4;0;M;0","","","","",0,	
1,5,"A","C","Wererat (lycanthrope);1;1;0;1;8;1;1;8;2;12;2;0;M;0","","","","",0,
1,7,"A","C","Orc Warriors;1;3;1;1;8;1;0;0;0;5;1/2;0;M;0","","","","",0,
1,3,"A","C","Shocker Lizard;1;1;0;2;10;2;0;0;0;13;2;0;M;0","","","","",0,
1,3,"A","C","Owlbear Skeleton;1;1;0;5;12;0;0;0;0;32;2;0;M;0","","","","",0,
1,2,"A","C","Bat Swarm;1;1;0;3;8;0;0;0;0;13;2;0;M;0","","","","",0,
1,2,"A","C","Rat Swarm;1;1;0;4;8;0;0;0;0;13;2;0;M;0","","","","",0,
1,2,"A","C","Thoqqua;1;1;0;3;8;3;0;0;0;16;2;0;M;0","","","","",0,
1,5,"A","C","Worg;1;1;0;4;10;8;0;0;0;30;2;0;M;0","","","","",0,
1,4,"A","C","Constrictor Snake (animal);1;1;0;3;8;6;0;0;0;19;2;0;M;0","","","","",0,
1,4,"A","C","Small Viper Snakes (animal);1;4;2;1/4;8;0;0;0;0;1;1/3;0;M;0","","","","",0,
1,3,"A","C","Huge Monstrous Centipede (vermin);1;1;0;3;8;0;0;0;0;13;1;0;M;0","","","","",0,

1,2,"A","4","Nashrou (demon);1;0;0;4;8;20;0;0;0;42;2;1;4;0","","","","",0,
1,2,"A","4","Demonet Swarm;1;0;0;3;8;5;0;0;0;19;2;0;4;0","","","","",0,
1,4,"A","4","Greenspawn Leaper;1;0;0;3;10;3;0;0;0;19;2;0;4;0","","","","",0,
1,4,"A","4","Greenspaen Sneak;1;0;0;2;10;0;0;0;0;11;2;0;4;0","","","","",0,
1,3,"A","4","Tomb Spider Broodswarm;1;0;0;3;10;6;0;0;0;22;2;0;4;0","","","","",0,
1,3,"A","4","Sailsnake;1;0;0;3;8;5;0;0;0;19;2;0;4;0","","","","",0,
1,2,"A","4","Bloodsilk Spider;1;0;0;2;10;0;0;0;0;11;2;0;4;0","","","","",0,
1,2,"A","2","Stone Spike;1;0;0;3;8;12;0;0;0;25;2;0;2;0","","","","",0,
1,2,"A","2","Spitting Felldrake;1;0;0;3;12;3;0;0;0;22;2;0;2;0","","","","",0,
1,2,"A","2","Dread Guard;1;0;0;5;10;0;0;0;0;27;2;0;2;0","","","","",0,
1,2,"A","3","Vasuthant;1;0;0;2;12;0;0;0;4;17;2;0;3;0","","","","",0,
1,2,"A","3","Lurking Strangler;1;0;0;2;8;2;0;0;0;11;2;0;3;0","","","","",0,
1,2,"A","3","Living Blasphemy (living spell);1;0;0;1;10;0;0;0;0;5;2;0;3;0","","","","",0,
1,2,"A","F","Yellow Musk Zombie Orcs;1;3;0;1;8;0;0;0;0;4;1/2;0;F;0","","","","",0,
1,2,"A","F","Wasp Swarm;1;0;0;4;8;4;0;0;0;22;2;0;F;0","","","","",0,
1,2,"A","F","Cranium Rat Swarm, Lesser Pack;1;0;0;6;10;12;0;0;0;45;2;0;F;0","","","","",0,
1,2,"A","F","Necrophidius;1;0;0;2;10;20;0;0;0;30;2;0;F;0","","","","",0,
1,2,"A","F","Iron Cobra;1;0;0;2;10;20;0;0;0;31;2;0;F;0","","","","",0,
1,2,"A","F","Filth Imp;1;0;0;2;8;6;0;0;0;15;2;0;F;0","","","","",0,
1,3,"A","L","Ogre Skeleton;1;0;0;4;12;0;0;0;0;26;2;1;L;0","","","","",0,
1,3,"A","L","Dire Maggot (vermin);1;0;0;6;8;6;0;0;0;33;2;0;L;0","","","","",0,
1,2,"A","L","Desiccator;1;0;0;4;12;0;0;0;0;26;2;0;L;0","","","","",0,
1,2,"A","X","Folugub;1;0;0;4;8;12 ;0;0;0;30;2;0;X;0","","","","",0,
1,2,"A","X","Thought Eater;1;0;0;3;8;0;0;0;0;13;2;0;X;0","","","","",0,
1,6,"A","XC","Blue, 1st-Level Psion (Telepath);1;0;0;1;4;1;0;0;0;3;1;0;X;0","Goblin Warriors;1;4;0;1;8;1 ;0;0;0;5;1/3;0;M;0","","","",0,

1,10,"A","Z","","","","","",3
);


var MonstersLevelThreeFiltered = new Array(0);
var MonstersLevelThreeNoReroll = new Array(0);
var MonstersLevelThreeWandering = new Array(0);
var MonstersLevelThree = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",2,
1,3,"A","C","Allip;1;1;0;4;12;0;0;0;0;26;3;0;M;0","","","","",0,
1,3,"A","C","Cockatrice;1;1;0;5;10;0;0;0;0;27;3;0;M;0","","","","",0,
1,3,"A","C","Dire Rats;2;4;1;1;8;1;0;0;0;5;1/3;0;M;0","","","","",0,
1,2,"A","C","Doppelganger;1;1;0;4;8;4;0;0;0;22;3;0;M;0","","","","",0,
1,2,"A","C","Wyrmling Brass Dragon;1;1;0;4;12;4;0;0;0;30;3;0;M;0","","","","",0,
1,4,"A","C","Drow Elves;1;3;0;1;8;1;0;0;0;4;1;1;0;0;M;0","","","","",0,
1,2,"A","C","Ethereal Filcher;1;1;0;5;8;0;0;0;0;22;3;0;M;0","","","","",0,
1,2,"A","C","Ethereal Marauder;1;1;0;2;10;0;0;0;0;11;3;0;M;0","","","","",0,
1,2,"A","C","Ettercap;1;1;0;5;8;5;0;0;0;27;3;0;M;0","","","","",0,
1,2,"A","C","Violet Fungus (fungus);1;1;0;2;8;6;0;0;0;15;3;0;M;0","","","","",0,
1,3,"A","C","Ghast (ghoul);1;1;0;4;12;3;0;0;0;29;3;0;M;0","","","","",0,
1,5,"A","C","Gnolls;1;3;0;2;8;2;0;0;0;11;1;1;0;0;M;0","","","","",0,
1,2,"A","C","Grick;1;1;0;2;8;0;0;0;0;9;3;0;M;0","","","","",0,
1,3,"A","C","Hell Hound;1;1;0;4;8;4;0;0;0;22;3;0;M;0","","","","",0,
1,2,"A","C","Howler;1;1;0;6;8;12;0;0;0;39;3;0;M;0","","","","",0,
1,2,"A","C","Krenshars;1;3;0;2;10;0;0;0;0;11;1;1;0;0;M;0","","","","",0,
1,3,"A","C","Lizardfolk;1;3;0;2;8;2;0;0;0;11;1;1;0;0;M;0","","","","",0,
1,2,"A","C","Werewolf (lycanthrope);1;1;0;1;8;1;2;8;6;20;3;0;M;0","","","","",0,
1,5,"A","C","Ogre;1;1;0;4;8;11;0;0;0;29;3;0;M;0","","","","",0,
1,3,"A","C","Gelatinous Cube (ooze);1;1;0;4;10;32;0;0;0;54;3;0;M;0","","","","",0,
1,2,"A","C","Phantom Fungus;1;1;0;2;8;6;0;0;0;15;3;0;M;0","","","","",0,
1,2,"A","C","Rust Monster;1;1;0;5;8;5;0;0;0;27;3;0;M;0","","","","",0,
1,3,"A","C","Shadow;1;1;0;3;12;0;0;0;0;19;3;0;M;0","","","","",0,
1,3,"A","C","Stirges;2;4;0;1;10;0;0;0;0;5;1/2;0;M;0","","","","",0,
1,2,"A","C","Locust Swarm;1;1;0;6;8;-6;0;0;0;21;3;0;M;0","","","","",0,
1,3,"A","C","Wight;1;1;0;4;12;0;0;0;0;26;3;0;M;0","","","","",0,
1,2,"A","C","Yuan-Ti Pureblood;1;1;0;4;8;0;0;0;0;18;3;0;M;0","","","","",0,
1,2,"A","C","Troglodyte Zombies;1;3;0;4;13;3;0;0;0;29;1;1;0;0;M;0","","","","",0,
1,2,"A","C","Medium Viper Snakes (animal);1;3;0;2;8;0;0;0;0;9;1;1;0;0;M;0","","","","",0,
1,2,"A","C","Giant Praying Mantis (vermin);1;1;0;4;8;8;0;0;0;26;3;0;M;0","","","","",0,
1,2,"A","C","Medium Monstrous Scorpions (vermin);1;3;0;2;8;4;0;0;0;13;1;1;0;0;M;0","","","","",0,

1,2,"A","H","Rutterkin;1;0;0;5;8;15;0;0;0;37;3;0;H;0","","","","",0,
1,2,"A","4","Necrosis Carnex;1;0;0;4;12;0;0;0;0;26;3;0;4;0","","","","",0,
1,3,"A","4","Wrackspawn;1;0;0;4;8;27;0;0;0;45;3;0;4;0","","","","",0,
1,2,"A","4","Plaguewalker;1;0;0;6;12;3;0;0;0;42;3;0;4;0","","","","",0,
1,2,"A","4","Gnoll Slave-Taker;1;0;0;4;8;15;0;0;0;37;3;0;4;0","","","","",0,
1,2,"A","2","Common Raggamoffyn (raggamoffyn);1;0;0;3;10;0;0;0;0;16;3;0;2;0","","","","",0,
1,2,"A","2","Grell;1;0;0;5;8;10 ;0;0;0;32;3;0;2;0","","","","",0,
1,2,"A","2","Horned Felldrake;1;0;0;4;12;8;0;0;0;34;3;0;2;0","","","","",0,
1,2,"A","2","Ether Scarabs;1;3;2;1;8;0;0;0;0;4;1;0;2;0","","","","",0,
1,2,"A","2","Boggle;1;0;0;4;8;0;0;0;0;18;3;0;2;0","","","","",0,
1,2,"A","2","Hammerer (automaton);1;0;0;5;10;0;0;0;0;27;3;0;2;0","","","","",0,
1,2,"A","2","Pulverizer (automaton);1;0;0;3;10;0;0;0;0;16;3;0;2;0","","","","",0,
1,2,"A","A","Shadow Choker;1;0;0;3;8;3;0;0;0;16;3;0;A;0","","","","",0,
1,2,"A","A","Saltor (illithidae);1;0;0;5;8;5;0;0;0;27;3;0;A;0","","","","",0,
1,2,"A","A","Gas Spore;1;0;0;10;8;-30;0;0;0;15;3;1;A;0","","","","",0,
1,2,"A","F","Viper Swarm;1;0;0;5;8;5;0;0;0;27;3;0;F;0","","","","",0,
1,2,"A","F","Maug;1;0;0;2;10;30;0;0;0;41;3;1;F;0","","","","",0,
1,2,"A","F","Euphoric Imp;1;0;0;4;8;0;0;0;0;18;3;0;F;0","","","","",0,
1,2,"A","F","Bloodbag Imp;1;0;0;4;8;19;0;0;0;37;3;0;F;0","","","","",0,
1,2,"A","F","Crypt Thing;1;0;0;6;12;0;0;0;0;39;3;0;F;0","","","","",0,
1,2,"A","L","Centaur Skeleton;1;0;0;8;12;3;0;0;0;55;3;1;L;0","","","","",0,
1,2,"A","L","Minotaur Skeleton;1;0;0;6;12;0;0;0;0;39;3;1;L;0","","","","",0,
1,2,"A","L","Skin Kite;1;0;0;4;12;0;0;0;0;24;3;0;L;0","","","","",0,
1,2,"A","L","Quell;1;0;0;5;12;0;0;0;0;32;3;0;L;0","","","","",0,
1,2,"A","L","Murk;1;0;0;3;12;0;0;0;0;19;3;0;L;0","","","","",0,
1,2,"A","L","Half-Vampire 1st-Level Gnoll Barbarian;1;0;0;2;8;2;1;12;1;18;3;0;L;0","","","","",0,
1,2,"A","L","Ghost Brute Hound;1;0;0;2;12;0;0;0;0;13;3;0;L;0","","","","",0,
1,2,"A","L","Deathlock;1;0;0;3;12;0;0;0;0;19;3;0;L;0","","","","",0,
1,2,"A","L","Bone Rat Swarm;1;0;0;4;12;0;0;0;0;26;3;0;L;0","","","","",0,
1,2,"A","X","Temporal Filcher;1;0;0;8;8;16;0;0;0;52;3;1;X;0","","","","",0,
1,2,"A","X","Crysmal;1;0;0;6;8;6;0;0;0;33;3;0;X;0","","","","",0,
1,2,"A","X","Brain Moles;1;4;2;1;10;-2;0;0;0;3;1/2;0;X;0","","","","",0,

1,10,"A","Z","","","","","",4
);

var MonstersLevelFourFiltered = new Array(0);
var MonstersLevelFourNoReroll = new Array(0);
var MonstersLevelFourWandering = new Array(0);
var MonstersLevelFour = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",3,
1,2,"A","C","Barghest;1;1;0;6;8;6;0;0;0;33;4;0;M;0","","","","",0,
1,2,"A","C","Lantern Archons;1;3;0;1;8;0;0;0;0;4;2;0;M;0","","","","",0,
1,2,"A","C","Hound Archon;1;1;0;6;8;6;0;0;0;33;4;0;M;0","","","","",0,
1,4,"A","C","Carrion Crawler;1;1;0;3;8;6;0;0;0;19;4;0;M;0","","","","",0,
1,2,"A","C","Darkmantles;1;4;1;1;10;1;0;0;0;6;1;0;M;0","","","","",0,
1,5,"A","C","Displacer Beast;1;1;0;6;10;18;0;0;0;51;4;0;M;0","","","","",0,
1,3,"A","C","Young White Dragon;1;1;0;9;12;18;0;0;0;76;4;0;M;0","","","","",0,
1,3,"A","C","Duergar Dwarves;1;3;1;1;8;5;0;0;0;9;1;0;M;0","","","","",0,
1,5,"A","C","Gargoyle;1;1;0;4;8;19;0;0;0;37;4;0;M;0","","","","",0,
1,2,"A","C","Janni (genie);1;1;0;6;8;6;0;0;0;33;4;0;M;0","","","","",0,
1,3,"A","C","Ghouls;1;3;1;2;12;0;0;0;0;13;1;0;M;0","","","","",0,
1,3,"A","C","Svirfneblin Gnomes;1;3;1;1;8;4;0;0;0;8;1;0;M;0","","","","",0,
1,3,"A","C","Grimlocks;1;3;1;2;8;2;0;0;0;11;1;0;M;0","","","","",0,
1,2,"A","C","Harpy;1;1;0;7;8;0;0;0;0;31;4;0;M;0","","","","",0,
1,2,"A","C","Five-Headed Hydra;1;1;0;5;10;28;0;0;0;55;4;0;M;0","","","","",0,
1,2,"A","C","Wereboar (lycanthrope);1;1;0;1;8;4;3;8;12;34;4;0;M;0","","","","",0,
1,3,"A","C","Mimic;1;1;0;7;8;21;0;0;0;52;4;0;M;0","","","","",0,
1,3,"A","C","Minotaur;1;1;0;6;8;12;0;0;0;39;4;0;M;0","","","","",0,
1,2,"A","C","Gray Ooze (ooze);1;1;0;3;10;15;0;0;0;31;4;0;M;0","","","","",0,
1,3,"A","C","Otyugh;1;1;0;6;8;9;0;0;0;36;4;0;M;0","","","","",0,
1,2,"A","C","Owlbear;1;1;0;5;10;25;0;0;0;52;4;0;M;0","","","","",0,
1,3,"A","C","Centipede Swarm;1;1;0;9;8;-9;0;0;0;31;4;0;M;0","","","","",0,
1,2,"A","C","Spider Swarms;1;3;1;2;8;0;0;0;0;9;1;0;M;0","","","","",0,
1,3,"A","C","Troglodytes;1;4;1;2;8;4;0;0;0;13;1;0;M;0","","","","",0,
1,2,"A","C","Vampire Spawn;1;1;0;4;12;3;0;0;0;29;4;0;M;0","","","","",0,
1,2,"A","C","Worgs;1;3;0;4;10;8;0;0;0;30;2;0;M;0","","","","",0,
1,3,"A","C","Minotaur Zombie;1;1;0;12;8;3;0;0;0;81;4;0;M;0","","","","",0,
1,2,"A","C","Large Viper Snakes (animal);1;3;0;3;8;0;0;0;0;13;2;0;M;0","","","","",0,
1,3,"A","C","Large Monstrous Centipedes (vermin);1;4;1;3;8;0;0;0;0;13;1;0;M;0","","","","",0,
1,2,"A","C","Large Monstrous Spiders (vermin);1;3;0;4;8;4;0;0;0;22;2;0;M;0","","","","",0,

1,2,"A","H","Manes;1;3;5;1;8;2 ;0;0;0;6;1;0;H;0","","","","",0,
1,2,"A","4","Voor (yugoloth);1;0;0;5;8;22;0;0;0;37;4;1;4;0","","","","",0,
1,3,"A","4","Bloodhulk Fighter;1;0;0;10;12;75;0;0;0;140;4;0;4;0","","","","",0,
1,2,"A","2","Spellstitched Ghast;1;0;0;4;12;0;0;0;0;26;4;0;2;0","","","","",0,
1,2,"A","2","Iron Half-Golem;1;0;0;1;10;0;0;0;0;5;4;0;2;0","","","","",0,
1,2,"A","2","Stone Half-Golem;1;0;0;1;10;0;0;0;0;5;4;0;2;0","","","","",0,
1,2,"A","2","Clay Half-Golem;1;0;0;1;10;0;0;0;0;5;4;0;2;0","","","","",0,
1,2,"A","2","Flesh Half-Golem;1;0;0;1;10;0;0;0;0;5;4;0;2;0","","","","",0,
1,2,"A","2","Tatterdemanimal (raggamoffyn);1;3;2;1;10;0;0;0;0;5;1;0;2;0","","","","",0,
1,2,"A","2","Half-Fiend, Durzagon;1;0;0;5;8;10 ;0;0;0;32;4;0;2;0","","","","",0,
1,2,"A","2","Crested Felldrakes;1;3;2;2;12;4;0;0;0;17;1;0;2;0","","","","",0,
1,2,"A","2","Electrum Horror (clockwork horror);1;0;0;4;10;0;0;0;0;22;4;0;2;0","","","","",0,
1,2,"A","3","Summoning Ooze;1;0;0;5;10;15;0;0;0;42;4;0;3;0","","","","",0,
1,2,"A","3","Harpoon Spider;1;0;0;5;8;20;0;0;5;47;4;1;3;0","","","","",0,
1,2,"A","3","Lesser Bonedrinker;1;0;0;7;12;14;0;0;0;59;4;0;3;0","","","","",0,
1,2,"A","A","Spectator;1;0;0;4;8;8;0;0;0;26;4;0;A;0","","","","",0,
1,2,"A","F","Yellow Musk Creeper;1;0;0;6;8;30;0;0;0;57;4;2;F;0","","","","",0,
1,2,"A","F","Minor Flame Snake;1;4;1;1;10;0;0;0;0;5;1;0;F;0","","","","",0,
1,2,"A","L","Five-Headed Hydra Zombie;1;0;0;10;12;3;0;0;0;68;4;2;L;0","","","","",0,
1,2,"A","L","Nine-Headed Hydra Skeleton;1;0;0;9;12;0;0;0;0;58;4;2;L;0","","","","",0,
1,2,"A","L","Skulking Cyst;1;0;0;4;12;0;0;0;0;26;4;0;L;0","","","","",0,
1,2,"A","L","Corpse Rat Swarm;1;0;0;8;12;0;0;0;0;52;4;0;L;0","","","","",0,
1,2,"A","L","Brain in a Jar;1;0;0;3;12;0;0;0;0;19;4;0;L;0","","","","",0,
1,2,"A","P","Larval Flayers;1;4;1;2;8;2 ;0;0;0;11;1;0;P;0","","","","",0,
1,2,"A","X","Thought Eater;1;3;0;3;8;0;0;0;0;13;2;0;X;0","","","","",0,
1,2,"A","X","Folugub;2;0;0;4;8;12 ;0;0;0;30;2;0;X;0","","","","",0,

1,10,"A","Z","","","","","",5
);

var MonstersLevelFiveFiltered = new Array(0);
var MonstersLevelFiveNoReroll = new Array(0);
var MonstersLevelFiveWandering = new Array(0);
var MonstersLevelFive = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",4,
1,2,"A","C","Basilisk;1;1;0;6;10;12;0;0;0;45;5;0;M;0","","","","",0,
1,2,"A","C","Greater Barghest;1;1;0;9;8;27;0;0;0;67;5;0;M;0","","","","",0,
1,3,"A","C","Bugbears;1;3;1;3;8;3;0;0;0;16;2;0;M;0","","","","",0,
1,2,"A","C","Celestial Lions;1;3;0;5;8;10;0;0;0;32;4;0;M;0","","","","",0,
1,2,"A","C","Cloaker;1;1;0;6;8;18;0;0;0;45;5;0;M;0","","","","",0,
1,2,"A","C","Bearded Devil;1;1;0;6;8;18;0;0;0;45;5;0;M;0","","","","",0,
1,3,"A","C","Dire Bats;1;4;4;4;8;12;30;0;0;0;2;0;M;0","","","","",0,
1,2,"A","C","Doppelgangers;1;3;0;4;8;4;0;0;0;22;3;0;M;0","","","","",0,
1,5,"A","C","Drow Elves;1;4;2;1;8;0;4;0;0;0;1;0;M;0","","","","",0,
1,2,"A","C","Ettercap;1;1;0;5;8;5;0;0;0;27;3;0;M;0","Medium Monstrous Spiders (vermin);1;3;1;2;8;2;0;0;0;11;1;0;M;0","","","",0,
1,2,"A","C","Djinni (genie);1;1;0;7;8;14;0;0;0;45;5;0;M;0","","","","",0,
1,2,"A","C","Gibbering Mouther;1;1;0;4;8;24;0;0;0;42;5;0;M;0","","","","",0,
1,2,"A","C","Green Hag (hag);1;1;0;9;8;9;0;0;0;49;5;0;M;0","","","","",0,
1,2,"A","C","Hell Hounds;1;3;0;4;8;4;0;0;0;22;3;0;M;0","","","","",0,
1,2,"A","C","Six-Headed Hydra;1;1;0;6;10;33;0;0;0;66;5;0;M;0","","","","",0,
1,2,"A","C","Werebear (lycanthrope);1;1;0;1;8;1;6;8;30;62;5;0;M;0","","","","",0,
1,2,"A","C","Wererats (lycanthrope);1;3;0;1;8;1;1;8;2;12;2;0;M;0","Dire Rats;2;4;0;1;8;1;0;0;0;5;1/3;0;M;0","","","",0,
1,2,"A","C","Manticore;1;1;0;6;10;24;0;0;0;57;5;0;M;0","","","","",0,
1,2,"A","C","Mummy;1;1;0;8;12;3;0;0;0;55;5;0;M;0","","","","",0,
1,3,"A","C","Ogres;1;3;0;4;8;11;0;0;0;29;3;0;M;0","","","","",0,
1,2,"A","C","Ochre Jelly (ooze);1;1;0;6;10;36;0;0;0;69;5;0;M;0","","","","",0,
1,2,"A","C","Phase Spider;1;1;0;5;10;15;0;0;0;42;5;0;M;0","","","","",0,
1,2,"A","C","Rust Monsters;1;3;0;5;8;5;0;0;0;27;3;0;M;0","","","","",0,
1,2,"A","C","Shadow Mastiff;1;1;0;4;8;12;0;0;0;30;5;0;M;0","","","","",0,
1,2,"A","C","Skum;1;4;1;2;8;2;0;0;0;11;2;0;M;0","","","","",0,
1,2,"A","C","Rat Swarms;1;3;1;4;8;0;0;0;0;13;2;0;M;0","","","","",0,
1,3,"A","C","Troll;1;1;0;6;8;36;0;0;0;63;5;0;M;0","","","","",0,
1,2,"A","C","Vargouilles;1;4;1;1;8;1;0;0;0;5;2;0;M;0","","","","",0,
1,3,"A","C","Wraith;1;1;0;5;12;0;0;0;0;32;5;0;M;0","","","","",0,
1,2,"A","C","Yuan-Ti Halfblood;1;1;0;7;8;7;0;0;0;38;5;0;M;0","","","","",0,
1,2,"A","C","Giant Constrictor Snake (animal);1;1;0;11;8;14;0;0;0;63;5;0;M;0","","","","",0,
1,2,"A","C","Huge Viper Snakes (animal);1;3;0;6;8;6;0;0;0;33;3;0;M;0","","","","",0,
1,2,"A","C","Giant Worker Ants (vermin);1;3;0;2;8;0;0;0;0;9;1;0;M;0","","","","",0,
1,2,"A","C","Large Monstrous Scorpions (vermin);1;3;1;5;8;10;0;0;0;32;3;0;M;0","","","","",0,
1,2,"A","C","5th-level Human Monk NPC;1;1;0;5;8;8;0;0;0;31;5;0;D;0","","","","",0,
1,2,"A","C","5th-level Kobold Sorcerer NPC;1;1;0;5;4;3;0;0;0;17;5;0;D;0","","","","",0,

1,2,"A","H","Nabassu, Juvenile;1;0;0;5;8;30;0;0;0;52;5;0;H;0","","","","",0,
1,2,"A","H","Bar'lgura;1;0;0;6;8;24;0;0;0;51;5;0;H;0","","","","",0,
1,2,"A","4","Varags;1;2;4;3;8;3;0;0;0;16;1;0;4;0","","","","",0,
1,3,"A","4","Corruptor of Fate (yugoloth);1;0;0;7;8;20;0;0;0;52;5;0;4;0","","","","",0,
1,2,"A","4","Joystealer;1;0;0;6;6;6;0;0;0;27;5;0;4;0","","","","",0,
1,2,"A","2","Wyste;1;0;0;5;8;25;0;0;0;47;5;0;2;0","","","","",0,
1,2,"A","2","Spawn of Kyuss;1;0;0;4;12;3;0;0;0;29;5;0;2;0","","","","",0,
1,2,"A","2","Reason Stealer;1;0;0;5;10;15 ;0;0;0;42;5;0;2;0","","","","",0,
1,2,"A","2","Guttersnipe (raggamoffyn);1;0;0;8;10;0;0;0;0;54;5;0;2;0","","","","",0,
1,2,"A","2C","Half-Fiend, Durzagon;1;0;0;5;8;10 ;0;0;0;32;4;0;2;0","Duergar Dwarves;1;3;1;1;8;5 ;0;0;0;9;1;0;M;0","","","",0,
1,2,"A","2","Stained Glass Golem;1;0;0;12;10;0;0;0;66;5;0;2;0","","","","",0,
1,2,"A","2","Chain Golem;1;0;0;8;10;0;0;0;0;38;5;0;2;0","","","","",0,
1,2,"A","3","Lesser Knell Beetle;1;0;0;6;8;24;0;0;0;51;5;0;3;0","","","","",0,
1,2,"A","3","Dracotaur;1;2;1;3;12;9;0;0;0;28;3;1;3;0","","","","",0,
1,2,"A","3","Boneclaw;1;0;0;10;12;40;0;0;0;105;5;1;3;0","","","","",0,
1,2,"A","A","Psurlon;1;0;0;7;8;7;0;0;0;38;5;0;A;0","","","","",0,
1,2,"A","A","Kigrid (illithidae);1;0;0;9;8;18;3;61;5;0;A;0","","","","",0,
1,2,"A","F","Cranium Rat Swarm, Average Pack;1;0;0;12;10;24;0;0;0;90;5;0;F;0","","","","",0,
1,2,"A","F","Plague Ant Swarm;1;0;0;10;8;20;0;0;0;65;5;0;F;0","","","","",0,
1,2,"A","F","Necrophidius;1;4;1;2;10;20;0;0;0;30;2;0;F;0","","","","",0,
1,2,"A","L","Necropolitan, 5th-Level Human Wizard;1;0;0;5;12;0;0;0;0;32;5;0;L;0","","","","",0,
1,2,"A","L","Mummified Ogre;1;0;0;4;12;4;0;0;0;30;5;1;L;0","","","","",0,
1,2,"A","L","Entomber;1;0;0;8;12;0;0;0;0;52;2;0;L;0","","","","",0,
1,2,"A","L","Dire Maggots (vermin);1;4;1;6;8;6;0;0;0;33;2;0;L;0","","","","",0,
1,2,"A","L","Desiccators;1;4;1;4;12;0;0;0;0;26;2;0;L;0","","","","",0,
1,2,"A","L","Carcass Eater;1;4;5;1;8;3;0;0;0;7;1/2;0;L;0","","","","",0,
1,2,"A","P","Shadow Eft;1;0;0;6;8;18 ;0;0;0;45;5;0;P;0","","","","",0,
1,2,"A","P","Ectoplasmic Swarm;1;0;0;9;10;-9;0;0;0;40;5;0;P;0","","","","",0,
1,2,"A","X","Unbodied;1;0;0;4;8;4 ;0;0;0;22;5;0;X;0","","","","",0,

1,10,"A","Z","","","","","",6
);

var MonstersLevelSixFiltered = new Array(0);
var MonstersLevelSixNoReroll = new Array(0);
var MonstersLevelSixWandering = new Array(0);
var MonstersLevelSix = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",5,
1,2,"A","C","Lantern Archons;1;4;2;1;8;0;0;0;0;4;2;0;M;0","","","","",0,
1,2,"A","C","Gauth (beholder);1;0;0;6;8;18;0;0;0;45;6;0;M;0","","","","",0,
1,2,"A","C","Cockatrices;1;3;1;5;10;0;0;0;27;3;0;M;0","","","","",0,
1,2,"A","C","Babau (demon);1;0;0;7;8;35;0;0;0;66;6;0;M;0","","","","",0,
1,3,"A","C","Derros;1;3;1;3;8;3;0;0;0;16;3;0;M;0","","","","",0,
1,2,"A","C","Chain Devil;1;0;0;8;8;16;0;0;0;52;6;0;M;0","","","","",0,
1,2,"A","C","Digester;1;0;0;8;10;24;0;0;0;68;6;0;M;0","","","","",0,
1,4,"A","C","Displacer Beasts;1;3;0;6;10;18;0;0;0;51;4;0;M;0","","","","",0,
1,2,"A","C","Bralani (eladrin);1;0;0;6;8;18;0;0;0;45;6;0;M;0","","","","",0,
1,4,"A","C","Ettin;1;0;0;10;8;20;0;0;0;65;6;0;M;0","","","","",0,
1,2,"A","C","Formian Workers;1;3;1;1;8;1;0;0;0;5;1/2;0;M;0","","","","",0,
1,4,"A","C","Gargoyles;1;3;0;4;8;19;0;0;0;37;4;0;M;0","","","","",0,
1,3,"A","C","Ghasts (ghoul);1;3;1;4;12;3;0;0;0;29;3;0;M;0","","","","",0,
1,3,"A","C","Gnolls;1;4;1;2;8;2;0;0;0;11;1;0;M;0","Hyenas (animal);1;3;0;2;8;4;0;0;0;13;1;0;M;0","","","",0,
1,2,"A","C","Gricks;1;3;1;2;8;0;0;0;0;9;3;0;M;0","","","","",0,
1,2,"A","C","Annis (hag);1;0;0;7;8;14;0;0;0;45;6;0;M;0","","","","",0,
1,2,"A","C","Half-Dragon 4th-level fighter;1;0;0;4;10;16;0;0;0;43;6;0;M;0","","","","",0,
1,2,"A","C","Harpies;1;3;0;7;8;0;0;0;0;31;4;0;M;0","","","","",0,
1,2,"A","C","Howlers;1;3;1;6;8;12;0;0;0;39;3;0;M;0","","","","",0,
1,2,"A","C","Five-Headed Hydra (pyro- or cryo-);1;0;0;5;10;28;0;0;0;55;6;0;M;0","","","","",0,
1,3,"A","C","Wereboar (lycanthrope);1;0;0;1;8;4;3;8;12;34;4;0;M;0","Boars (animal);1;3;0;3;8;12;0;0;0;25;2;0;M;0","","","",0,
1,2,"A","C","","","","","",0,
1,2,"A","C","Average Salamander;1;0;0;9;8;18;0;0;0;58;6;0;M;0","","","","",0,
1,4,"A","C","Shadows;1;4;1;3;12;0;0;0;0;19;3;0;M;0","","","","",0,
1,2,"A","C","Shocker Lizards;1;3;2;2;10;2;0;0;0;13;2;0;M;0","","","","",0,
1,2,"A","C","Locust Swarms;1;3;1;6;8;-6;0;0;0;21;3;0;M;0","","","","",0,
1,3,"A","C","Troglodytes;1;3;1;2;8;4;0;0;0;13;1;0;M;0","Monitor Lizards (animal);1;3;0;3;8;9;0;0;0;22;2;0;M;0","","","",0,
1,2,"A","C","Will-O’-Wisp;1;0;0;9;8;0;0;0;0;40;6;0;M;0","","","","",0,
1,2,"A","C","Xill;1;0;0;5;8;10;0;0;0;32;6;0;M;0","","","","",0,
1,2,"A","C","Minor Xorns;1;3;1;3;8;9;0;0;0;22;3;0;M;0","","","","",0,
1,2,"A","C","Yuan-Ti Purebloods;1;3;1;4;8;0;0;0;0;18;3;0;M;0","","","","",0,
1,2,"A","C","Giant Bombardier Beetles (vermin);1;4;2;2;8;4;0;0;0;13;2;0;M;0","","","","",0,
1,3,"A","C","5th-level lizardfolk druid NPC;1;0;0;7;8;14;0;0;0;50;6;0;D;0","Crocodile Animal Companion;1;0;0;3;8;9;0;0;0;22;0;0;D;0","","","",0,
1,2,"A","4","Redspawn Arcaniss;1;0;0;8;8;16;0;0;0;52;6;0;4;0","","","","",0,

1,2,"A","4","Clockroach;6;0;0;1;10;10;0;0;0;15;1;0;4;0","","","","",0,
1,2,"A","4","Defacer;1;0;0;11;12;0;0;0;0;71;6;0;4;0","","","","",0,
1,4,"A","4","Tomb Spider;1;0;0;8;10;31;0;0;0;76;6;1;4;0","","","","",0,
1,2,"A","4","Mageripper Swarm;1;0;0;10;8;10;0;0;0;55;6;0;4;0","","","","",0,
1,3,"A","4","Fang Golem;1;0;0;8;10;29;0;0;0;74;6;1;4;0","","","","",0,
1,3,"A","4","Bloodhulk Giant;1;0;0;14;12;106;0;0;0;106;6;1;4;0","","","","",0,
1,2,"A","4","Redspawn Arcaniss;1;0;0;8;8;16;0;0;0;52;6;0;4;0","","","","",0,
1,2,"A","2","Minotaur of Legend;1;0;0;6;8;42;0;0;0;69;6;1;2;0","","","","",0,
1,2,"A","2","Stone Spikes;1;3;2;3;8;12;0;0;0;25;2;0;2;0","","","","",0,
1,2,"A","2","Hook Horror;1;0;0;10;8;20;0;0;0;65;6;1;2;0","","","","",0,
1,2,"A","2","Spitting Felldrakes;1;3;2;3;12;3;0;0;0;22;2;0;2;0","","","","",0,
1,2,"A","2","Ether Scarabs;2;3;4;1;8;0;0;0;0;4;1;0;2;0","","","","",0,
1,2,"A","2","Dread Guards;1;3;2;5;10;0;0;0;0;27;2;0;2;0","","","","",0,
1,2,"A","3","Summoning Oozes;2;0;0;5;10;15;0;0;0;42;4;0;3;0","","","","",0,
1,2,"A","3","Glitterfire (living spell);1;0;0;5;10;5;0;0;0;32;6;0;3;0","","","","",0,
1,2,"A","3","Bonedrinker;1;0;0;11;12;22;0;0;0;93;6;0;3;0","","","","",0,
1,2,"A","F","Yellow Musk Creeper;1;0;0;6;8;30;0;0;0;57;4;2;F;0","Yellow Musk Zombie Orcs;2;3;2;1;8;0;0;0;0;4;1/2;0;F;0","","","",0,
1,2,"A","F","Locust Swarm, Rapture;1;0;0;10;8;20;0;0;0;65;6;0;F;0","","","","",0,
1,2,"A","F","Minor Flame Snake;2;3;4;1;10;0;0;0;0;5;1;0;F;0","","","","",0,
1,2,"A","F","Caryatid Column;1;0;0;6;10;20;0;0;0;53;6;0;F;0","","","","",0,
1,2,"A","L","Behir Zombie;1;0;0;18;12;3;0;0;0;120;6;2;L;0","","","","",0,
1,2,"A","L","Glabrezu Skeleton;1;0;0;12;12;0;0;0;0;78;6;2;L;0","","","","",0,
1,2,"A","L","Voidwraith;1;0;0;6;12;0;0;0;0;39;6;0;L;0","","","","",0,
1,2,"A","L","Umbral Displacer Beast;1;0;0;6;12;0;0;0;0;39;6;1;L;0","","","","",0,
1,2,"A","L","Plague Blight;1;0;0;6;12;6;0;0;0;45;6;0;L;0","","","","",0,
1,2,"A","L","Forsaken Shell;1;0;0;14;12;14;0;0;0;105;6;0;L;0","","","","",0,
1,2,"A","L","Evolved Wraith;1;0;0;5;12;0;0;0;0;32;6;0;L;0","","","","",0,
1,2,"A","L","Deathlocks;3;0;0;3;12;0;0;0;0;19;3;0;L;0","","","","",0,
1,2,"A","L","Cinderspawn;1;0;0;10;12;0;0;0;0;65;6;1;L;0","","","","",0,
1,2,"A","L","Bloodmote Cloud;1;0;0;10;12;0;0;0;0;65;6;0;L;0","","","","",0,
1,2,"A","X","Phthisic;1;0;0;6;8;30;0;0;0;57;6;1;X;0","","","","",0,
1,2,"A","X","Crysmals;1;4;1;6;8;6;0;0;0;33;3;0;X;0","","","","",0,

1,10,"A","Z","","","","","",7
);

var xMephits = new Array(0);
var Mephits = new Array( 
0,0,"","","",
1,1,"A","C","Air Mephit;1;0;0;3;8;0;0;0;0;13;3;0;M;0",
1,1,"A","C","Dust Mephit;1;0;0;3;8;0;0;0;0;13;3;0;M;0",
1,1,"A","C","Earth Mephit;1;0;0;3;8;6;0;0;0;19;3;0;M;0",
1,1,"A","C","Fire Mephit;1;0;0;3;8;0;0;0;0;13;3;0;M;0",
1,1,"A","C","Ice Mephit;1;0;0;3;8;0;0;0;0;13;3;0;M;0",
1,1,"A","C","Magma Mephit;1;0;0;3;8;0;0;0;0;13;3;0;M;0",
1,1,"A","C","Ooze Mephit;1;0;0;3;8;6;0;0;0;19;3;0;M;0",
1,1,"A","C","Salt Mephit;1;0;0;3;8;6;0;0;0;19;3;0;M;0",
1,1,"A","C","Steam Mephit;1;0;0;3;8;0;0;0;0;13;3;0;M;0",
1,1,"A","C","Water Mephit;1;0;0;3;8;6;0;0;0;19;3;0;M;0"
);

var MonstersLevelSevenFiltered = new Array(0);
var MonstersLevelSevenNoReroll = new Array(0);
var MonstersLevelSevenWandering = new Array(0);
var MonstersLevelSeven = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",6,
1,2,"A","C","Aboleth;1;0;0;8;8;40;0;0;0;76;7;0;M;0","","","","",0,
1,2,"A","C","Carrion Crawlers;1;4;1;3;8;16;0;0;0;19;4;0;M;0","","","","",0,
1,2,"A","C","Chaos Beast;1;0;0;8;8;8;0;0;0;44;7;0;M;0","","","","",0,
1,3,"A","C","Chuul;1;0;0;11;8;44;0;0;0;93;7;0;M;0","","","","",0,
1,2,"A","C","Succubus (demon);1;0;0;6;8;6;0;0;0;33;7;0;M;0","","","","",0,
1,2,"A","C","Hellcat (devil);1;0;0;8;8;24;0;0;0;60;7;0;M;0","","","","",0,
1,2,"A","C","Dire Bear;1;0;0;12;8;51;0;0;0;105;7;0;M;0","","","","",0,
1,3,"A","C","Young Copper Dragon;1;0;0;11;12;22;0;0;0;93;7;0;M;0","","","","",0,
1,3,"A","C","Drider;1;0;0;6;8;18;0;0;0;45;7;0;M;0","","","","",0,
1,2,"A","C","Violet Fungi (fungus);1;3;1;2;8;6;0;0;0;15;3;0;M;0","Shriekers (fungus);1;3;2;2;8;2;0;0;0;11;1;0;M;0","","","",0,
1,2,"A","C","Jann (genie);1;3;1;6;8;6;0;0;0;33;4;0;M;0","","","","",0,
1,3,"A","C","Ghost, 5th-level fighter;1;0;0;5;12;0;0;0;0;32;7;0;M;0","","","","",0,
1,4,"A","C","Hill Giant;1;0;0;12;8;48;0;0;0;102;7;0;M;0","","","","",0,
1,3,"A","C","Flesh Golem;1;0;0;9;10;30;0;0;0;79;7;0;M;0","","","","",0,
1,2,"A","C","Eight-Headed Hydra;1;0;0;8;10;43;0;0;0;87;7;0;M;0","","","","",0,
1,2,"A","C","Invisible Stalker;1;0;0;8;8;16;0;0;0;52;7;0;M;0","","","","",0,
1,2,"A","C","Weretigers (lycanthrope);1;3;0;1;8;1;6;8;18;50;5;0;M;0","","","","",0,
1,2,"A","C","Manticores;1;3;0;6;10;24;0;0;0;57;5;0;M;0","","","","",0,
1,3,"A","C","Medusa;1;0;0;6;8;6;0;0;0;33;7;0;M;0","","","","",0,
1,3,"A","C","Minotaurs;1;3;1;6;8;12;0;0;0;39;4;0;M;0","","","","",0,
1,2,"A","C","Ogre Barbarian, 4th level;1;0;0;4;8;19;4;12;16;79;7;0;M;0","","","","",0,
1,2,"A","C","Black Pudding (ooze);1;0;0;10;10;60;0;0;0;115;7;0;M;0","","","","",0,
1,2,"A","C","Phasm;1;0;0;15;8;30;0;0;0;97;7;0;M;0","","","","",0,
1,2,"A","C","Flamebrother Salamanders;1;3;2;4;8;8;0;0;0;26;3;0;M;0","","","","",0,
1,2,"A","C","Shadow Mastiffs;1;3;0;4;8;12;0;0;0;30;5;0;M;0","","","","",0,
1,2,"A","C","Red Slaad;1;0;0;7;8;21;0;0;0;52;7;0;M;0","","","","",0,
1,3,"A","C","Spectre;1;0;0;7;12;0;0;0;0;45;7;0;M;0","","","","",0,
1,2,"A","C","Centipede Swarms;1;3;1;9;8;–9;0;0;0;31;4;0;M;0","","","","",0,
1,4,"A","C","Umber Hulk;1;0;0;8;8;35;0;0;0;71;7;0;M;0","","","","",0,
1,2,"A","C","Vampire, 5th-level fighter;1;0;0;5;12;0;0;0;0;32;7;0;M;0","","","","",0,
1,2,"A","C","Wights;1;4;1;4;12;0;0;0;0;26;3;0;M;0","","","","",0,
1,2,"A","C","Yuan-Ti Abomination;1;0;0;9;8;27;0;0;0;67;7;0;M;0","","","","",0,
1,2,"A","C","Gargantuan Monstrous Centipede;1;0;0;12;8;12;0;0;0;66;6;0;M;0","","","","",0,
1,2,"A","C","5th-level hobgoblin fighter NPC;1;0;0;5;10;15;0;0;0;47;5;0;D;0","5th-level goblin rogue NPC;1;0;0;5;6;5;0;0;0;25;5;0;D;0","","","",0,

1,2,"A","H","Rutterkin;1;2;4;5;8;15;0;0;0;37;3;0;H;0","","","","",0,
1,2,"A","4","Howler Wasps;2;3;4;2;8;4;0;0;0;13;1;0;4;0","","","","",0,
1,4,"A","4","Greathorn Minotaur;1;0;0;11;8;55;0;0;0;104;7;1;4;0","","","","",0,
1,2,"A","4","Greenspawn Razorfiend;1;0;0;10;10;30;0;0;0;85;7;1;4;0","","","","",0,
1,2,"A","4","Zern Arcanovore;1;0;0;10;8;20;0;0;0;65;7;0;4;0","","","","",0,
1,3,"A","4","Bloodfire Ooze;1;0;0;12;10;84;0;0;0;150;7;2;4;0","","","","",0,
1,2,"A","2","Spellstitched Ghast;1;2;2;4;12;0;0;0;0;26;4;0;2;0","","","","",0,
1,2,"A","2","Shrapnyl (raggamoffyn);1;0;0;12;10;0;0;0;0;66;7;0;2;0","","","","",0,
1,2,"A","2","Common Raggamoffyn (raggamoffyn);1;2;2;3;10;0;0;0;0;16;3;0;2;0","","","","",0,
1,2,"A","2","Nimblewright;1;0;0;10;10;0;0;0;0;55;7;0;2;0","","","","",0,
1,2,"A","2","Horned Felldrakes;1;3;2;4;12;8;0;0;0;34;3;0;2;0","","","","",0,
1,2,"A","2","Breathdrinker;1;0;0;8;8;24;0;0;0;60;7;0;2;0","","","","",0,
1,2,"A","2","Boggles;1;3;2;4;8;0;0;0;0;18;3;0;2;0","","","","",0,
1,2,"A","2","Hammerer (automaton);1;3;2;5;10;0;0;0;0;27;3;0;2;0","","","","",0,
1,2,"A","2","Pulverizer (automaton);1;3;2;3;10;0;0;0;0;16;3;0;2;0","","","","",0,
1,2,"A","3","Susurrus;1;0;0;8;8;24;0;0;0;60;7;1;3;0","","","","",0,
1,2,"A","3","Stonesinger;1;0;0;9;8;36;0;0;0;76;7;1;3;0","","","","",0,
1,2,"A","3","Spellwarped Ettin;1;0;0;10;8;40;0;0;0;85;7;1;3;0","","","","",0,
1,2,"A","C3","Gauth (beholder);1;0;0;6;8;18;0;0;0;45;6;0;M;0","Lurking Strangler;1;0;0;2;8;2;0;0;0;11;2;0;3;0","","","",0,
1,2,"A","3C","Web Golem;1;0;0;11;10;30;0;0;0;90;7;1;3;0","Large Monstrous Spiders (vermin);1;0;0;4;8;4 ;0;0;0;22;2;0;M;0","","","",0,
1,2,"A","3","Dust Wight;1;0;0;16;12;0;0;16;120;7;0;3;0","","","","",0,
1,2,"A","3","Conflagration Ooze;1;0;0;7;10;28;0;0;0;66;7;1;3;0","","","","",0,
1,2,"A","A","Embrac (illithidae);1;0;0;11;8;22;0;0;0;71;7;1;A;0","","","","",0,
1,2,"A","A","Cildabrin;1;0;0;11;8;55;0;0;0;104;7;1;A;0","","","","",0,
1,2,"A","F","Swordwraith;1;0;0;5;12;0;0;0;0;32;7;0;F;0","","","","",0,
1,2,"A","F","Slasrath;1;0;0;8;8;32;0;0;0;68;7;1;F;0","","","","",0,
1,2,"A","F","Quth-Maren;1;0;0;10;12;0;0;0;0;65;7;0;F;0","","","","",0,
1,2,"A","F","Huecuva;1;0;0;5;12;3;0;0;0;35;7;0;F;0","","","","",0,
1,2,"A","F","Lesser  Flame Snake;1;0;0;8;10;16;0;0;0;60;7;0;F;0","","","","",0,
1,2,"A","F","Caryatid Columns;2;0;0;6;10;20;0;0;0;53;6;0;F;0","","","","",0,
1,2,"A","L","Skirr;1;0;0;9;12;0;0;0;0;58;7;2;L;0","","","","",0,
1,2,"A","L","Murk;1;4;1;3;12;0;0;0;0;19;3;0;L;0","","","","",0,
1,2,"A","L","Hooded Pupil Ettin;1;0;0;10;8;20;0;0;0;65;7;1;L;0","","","","",0,
1,2,"A","L","Gravetouched Ghoul 6th-Level Human Monk;1;0;0;6;12;0;0;0;0;39;7;0;L;0","","","","",0,
1,2,"A","L","Crypt Chanter;1;0;0;7;12;0;0;0;0;45;7;0;L;0","","","","",0,
1,2,"A","L","Bleakborn;1;0;0;8;12;0;0;0;0;52;7;0;L;0","","","","",0,
1,2,"A","X","Phrenic Manticore;1;0;0;6;10;24 ;0;0;0;57;7;1;X;0","","","","",0,
1,2,"A","X","Intellect Devourer;1;0;0;6;8;15;0;0;0;42;7;0;X;0","","","","",0,
1,2,"A","X","Gray Glutton;1;0;0;9;10;36;0;0;0;85;7;2;X;0","","","","",0,

1,10,"A","Z","","","","","",8
);

var MonstersLevelEightFiltered = new Array(0);
var MonstersLevelEightNoReroll = new Array(0);
var MonstersLevelEightWandering = new Array(0);
var MonstersLevelEight = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",7,
1,2,"A","C","Hound Archons;1;4;2;6;8;6;0;0;0;33;4;0;M;0","","","","",0,
1,2,"A","C","Barghests;1;4;2;6;8;6;0;0;0;33;4;0;M;0","","","","",0,
1,3,"A","C","Behir;1;0;0;9;10;45;0;0;0;94;8;2;M;0","","","","",0,
1,2,"A","C","Gauths (beholder);1;3;0;6;8;18;0;0;0;45;6;0;M;0","","","","",0,
1,2,"A","C","Bodak;1;0;0;9;12;0;0;0;0;58;8;0;M;0","","","","",0,
1,2,"A","C","Destrachan;1;0;0;8;8;24;0;0;0;60;8;1;M;0","","","","",0,
1,2,"A","C","Bearded Devils;1;3;1;6;8;18;0;0;0;45;5;0;M;0","","","","",0,
1,3,"A","C","Erinyes (devil);1;0;0;9;8;45;0;0;0;85;8;0;M;0","","","","",0,
1,3,"A","C","Bralanis (eladrin);1;3;0;6;8;18;0;0;0;45;6;0;M;0","","","","",0,
1,4,"A","C","Ettin;1;0;0;10;8;20;0;0;0;65;6;1;M;0","Brown Bears (animal);1;3;0;6;8;24;0;0;0;51;4;1;M;0","","","",0,
1,2,"A","C","Formian Taskmaster;1;0;0;6;8;12;0;0;0;39;7;0;M;0","Dominated 5th-level Half-orc barbarian NPC;1;0;0;5;12;5;0;0;0;43;5;0;D;0","","","",0,
1,2,"A","C","Noble Djinni (genie);1;0;0;10;8;20;0;0;0;65;8;1;M;0","","","","",0,
1,3,"A","C","Efreeti (genie);1;0;0;10;8;20;0;0;0;65;8;1;M;0","","","","",0,
1,2,"A","C","Ghasts (ghoul);1;3;1;4;12;3;0;0;0;29;3;0;M;0","Ghouls;2;4;1;2;12;0;0;0;0;13;1;0;M;0","","","",0,
1,2,"A","C","Stone Giant;1;0;0;14;8;56;0;0;0;119;8;1;M;0","","","","",0,
1,2,"A","C","Gorgon;1;0;0;8;10;40;0;0;0;85;8;1;M;0","","","","",0,
1,3,"A","C","Seven-Headed Hydra (pyro- or cryo-);1;0;0;7;10;38;0;0;0;77;8;2;M;0","","","","",0,
1,3,"A","C","Mind Flayer;1;0;0;8;8;8;0;0;0;44;8;0;M;0","","","","",0,
1,2,"A","C","Mohrg;1;0;0;14;12;0;0;0;0;91;8;0;M;0","","","","",0,
1,2,"A","C","Mummies;1;3;1;8;12;3;0;0;0;55;5;0;M;0","","","","",0,
1,2,"A","C","Dark Naga;1;0;0;9;8;18;0;0;0;58;8;1;M;0","","","","",0,
1,4,"A","C","Ogre Mage;1;0;0;5;8;15;0;0;0;37;8;1;M;0","","","","",0,
1,2,"A","C","Phase Spiders;1;4;1;5;10;15;0;0;0;42;5;1;M;0","","","","",0,
1,3,"A","C","Greater Shadow;1;0;0;9;12;0;0;0;0;58;8;0;M;0","","","","",0,
1,2,"A","C","Advanced Megaraptor Skeletons;1;3;0;8;8;43;0;0;0;79;6;2;M;0","","","","",0,
1,2,"A","C","Blue Slaad;1;0;0;8;8;32;0;0;0;68;8;1;M;0","","","","",0,
1,2,"A","C","Hellwasp Swarm;1;0;0;12;10;27;0;0;0;93;8;0;M;0","","","","",0,
1,3,"A","C","Trolls;1;3;1;6;8;36;0;0;0;63;5;1;M;0","","","","",0,
1,3,"A","C","Vampire Spawns;1;4;1;4;12;3;0;0;0;29;4;0;M;0","","","","",0,
1,2,"A","C","Average Xorns;1;3;0;7;8;17;0;0;0;48;6;0;M;0","","","","",0,
1,3,"A","C","Yuan-Ti Halfbloods;1;3;1;7;8;7;0;0;0;38;5;0;M;0","","","","",0,
1,2,"A","C","Giant Stag Beetles (vermin);1;4;1;7;8;21;0;0;0;52;4;1;M;0","","","","",0,
1,2,"A","C","5th-level human cleric NPCs;1;3;0;5;8;10;0;0;0;36;5;0;D;0","","","","",0,

1,2,"A","H","Yochlol;1;0;0;10;8;50;0;0;0;95;8;0;H;0","","","","",0,
1,2,"A","H","Dybbuk;1;0;0;10;8;50;0;0;0;95;8;0;H;0","","","","",0,
1,4,"A","4","Tomb Spider;1;3;0;8;10;31;0;0;0;76;6;1;4;0","","","","",0,
1,2,"A","4","Nashrou (demon);1;3;5;4;8;20;0;0;0;42;2;1;4;0","","","","",0,
1,2,"A","4","Bloodsilk Spider;1;2;6;2;10;0;0;0;0;11;2;0;4;0","","","","",0,
1,3,"A","4","Bloodhulk Fighter;1;3;2;10;12;75;0;0;0;140;4;0;4;0","","","","",0,
1,2,"A","4","Bloodhulk Crusher;1;0;0;20;12;150;0;0;0;280;8;2;4;0","","","","",0,
1,2,"A","4","Inferno Spider;1;0;0;14;8;56;0;0;0;119;8;1;4;0","","","","",0,
1,2,"A","2","Spawn of Kyuss;1;3;1;4;12;3;0;0;0;29;5;0;2;0","","","","",0,
1,2,"A","2","Grell;1;4;3;5;8;10 ;0;0;0;32;3;0;2;0","","","","",0,
1,2,"A","3","Shredstorm;1;0;0;14;10;0;0;0;0;77;8;0;3;0","","","","",0,
1,2,"A","3","Salt Mummy;1;0;0;12;12;0;0;0;48;126;8;0;3;0","","","","",0,
1,2,"A","3","Lifeleach Otyugh;1;0;0;9;8;54;0;0;0;94;8;1;3;0","","","","",0,
1,2,"A","3","Lesser Bonedrinker;1;4;2;7;12;14;0;0;0;59;4;0;3;0","","","","",0,
1,2,"A","3","Boneclaw;1;3;1;10;12;40;0;0;0;105;5;1;3;0","","","","",0,
1,2,"A","A","Elder Psurlon;1;0;0;12;8;12 ;0;0;0;66;8;0;A;0","","","","",0,
1,2,"A","AC","Director;1;0;0;8;8;24;0;0;0;60;8;1;A;0","Medium Monstrous Centipedes (vermin);1;0;0;1;8;0;0;0;0;4;1/2;0;M;0","","","",0,
1,2,"A","F","Locust Swarm, Bloodfiend;1;0;0;14;8;28;0;0;0;91;8;1;F;0","","","","",0,
1,2,"A","F","Maugs;1;4;3;2;10;30;0;0;0;41;3;1;F;0","","","","",0,
1,2,"A","F","Blood Golem of Hextor;1;0;0;10;10;30;0;0;0;130;8;1;F;0","","","","",0,
1,2,"A","L","Slaughter Wight;1;0;0;18;12;18;0;0;0;135;8;0;L;0","","","","",0,
1,2,"A","L","Skulking Cysts;2;4;1;4;12;0;0;0;0;26;4;0;L;0","","","","",0,
1,2,"A","L","Entombers;1;4;1;8;12;0;0;0;0;52;2;0;L;0","","","","",0,
1,2,"A","L","Deathlocks;2;4;1;3;12;0;0;0;0;19;3;0;L;0","","","","",0,
1,2,"A","X","Unbodied;1;3;1;4;8;4 ;0;0;0;22;5;0;X;0","","","","",0,

1,10,"A","Z","","","","","",9
);

var MonstersLevelNineFiltered = new Array(0);
var MonstersLevelNineNoReroll = new Array(0);
var MonstersLevelNineWandering = new Array(0);
var MonstersLevelNine = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",8,
1,3,"A","C","Greater Barghests;1;4;2;9;8;27;0;0;0;67;5;1;M;0","","","","",0,
1,3,"A","C","Basilisks;1;4;2;6;10;12;0;0;0;45;5;0;M;0","","","","",0,
1,3,"A","C","Cloakers;1;4;2;6;8;18;0;0;0;45;5;1;M;0","","","","",0,
1,2,"A","C","Delver;1;0;0;15;8;78;0;0;0;145;9;2;M;0","","","","",0,
1,3,"A","C","Vrock (demon);1;0;0;10;8;70;0;0;0;115;9;1;M;0","","","","",0,
1,3,"A","C","Bone Devil;1;0;0;10;8;50;0;0;0;95;9;1;M;0","","","","",0,
1,3,"A","C","Hellcats (devil);1;3;0;8;8;24;0;0;0;60;7;1;M;0","","","","",0,
1,3,"A","C","Chain Devils (devil);1;3;1;8;8;16;0;0;0;52;6;0;M;0","","","","",0,
1,3,"A","C","Dire Bears;1;3;0;12;8;51;0;0;0;105;7;1;M;0","","","","",0,
1,2,"A","C","Young Adult Black Dragon;1;0;0;16;12;48;0;0;0;152;9;1;M;0","","","","",0,
1,1,"A","C","Juvenile Bronze Dragon;1;0;0;15;12;45;0;0;0;142;9;1;M;0","","","","",0,
1,3,"A","C","Drider;1;0;0;6;8;18;0;0;0;45;7;1;M;0","Medium Monstrous Spiders (vermin);2;4;3;2;8;2;0;0;0;11;1;0;M;0","","","",0,
1,2,"A","C","Formian Myrmarch;1;0;0;12;8;48;0;0;0;102;10;1;M;0","Formian Warriors;2;4;1;4;8;8;0;0;0;23;6;0;M;0","","","",0,
1,4,"A","C","Frost Giant;1;0;0;14;8;70;0;0;0;133;9;1;M;0","","","","",0,
1,4,"A","C","Hill Giant;1;0;0;12;8;48;0;0;0;102;7;1;M;0","Dire Wolves;1;4;2;6;8;18;0;0;0;45;3;1;M;0","","","",0,
1,3,"A","C","Avoral (guardinal);1;0;0;7;8;35;0;0;0;66;9;0;M;0","","","","",0,
1,3,"A","C","Half-Fiend 7th-Level Human Cleric;1;0;0;7;8;14;0;0;0;49;9;0;M;0","","","","",0,
1,3,"A","C","Ten-Headed Hydra;1;0;0;10;10;53;0;0;0;108;9;2;M;0","","","","",0,
1,2,"A","C","Zelekhut (inevitable);1;0;0;8;10;30;0;0;0;74;9;1;M;0","","","","",0,
1,3,"A","C","Spirit Naga;1;0;0;9;8;36;0;0;0;76;9;1;M;0","","","","",0,
1,3,"A","C","Night Hag;1;0;0;8;8;32;0;0;0;68;9;0;M;0","","","","",0,
1,3,"A","C","Ogre Barbarian, 4th level;1;0;0;4;8;19;4;12;16;79;7;1;M;0","Ogres;1;4;3;4;8;11;0;0;0;29;3;1;M;0","","","",0,
1,3,"A","C","Green Slaad;1;0;0;9;8;36;0;0;0;76;9;1;M;0","","","","",0,
1,2,"A","C","Will-O’-Wisp;1;3;1;9;8;0;0;0;0;40;6;0;M;0","","","","",0,
1,4,"A","C","Wraiths;1;4;1;5;12;0;0;0;0;32;5;0;M;0","","","","",0,
1,3,"A","C","Yuan-Ti Abominations;1;3;0;9;8;27;0;0;0;67;7;1;M;0","","","","",0,
1,3,"A","C","Gray Render Zombies;1;3;1;20;8;3;0;0;0;133;6;1;M;0","","","","",0,
1,3,"A","C","5th-level human paladin NPCs;1;4;2;5;10;5;0;0;0;37;5;0;D;0","","","","",0,

1,2,"A","H","Bulezau;1;0;0;10;8;70 ;0;0;0;115;9;1;H;0","","","","",0,
1,2,"A","4","Corrupture;1;0;0;11;10;99;0;0;0;159;9;2;4;0","","","","",0,
1,3,"A","4","Whisper Demon;1;0;0;12;8;36;0;0;0;90;9;0;4;0","","","","",0,
1,2,"A","4","Lodestone Marauder;1;0;0;11;8;66;0;0;0;115;9;1;4;0","","","","",0,
1,4,"A","4","Ogre Tempest;1;0;0;10;8;61;0;0;0;106;9;1;4;0","","","","",0,
1,3,"A","4","Voor, Dreadful Lasher;1;0;0;15;8;75;0;0;0;142;9;2;4;0","","","","",0,
1,2,"A","2","Chimeric Ankheg;1;0;0;9;10;45;0;0;0;94;9;1;2;0","","","","",0,
1,2,"A","2","Wyste;1;3;2;5;8;25;0;0;0;47;5;0;2;0","","","","",0,
1,2,"A","2C","Spawn of Kyuss;1;2;2;4;12;3;0;0;0;29;5;0;2;0","Troglodyte Zombies;1;4;2;4;13;3;0;0;0;29;1;0;M;0","","","",0,
1,2,"A","2","Rogue Eidolon;1;0;0;9;10;0;0;0;0;49;9;1;2;0","","","","",0,
1,2,"A","2","Guttersnipe (raggamoffyn);1;2;2;8;10;0;0;0;0;54;5;0;2;0","","","","",0,
1,2,"A","2","Stained Glass Golems;1;3;2;12;10;0;0;0;0;66;5;0;2;0","","","","",0,
1,2,"A","2","Desmodu;1;0;0;12;8;48 ;0;0;0;102;9;1;2;0","","","","",0,
1,2,"A","2","Gold Horror (clockwork horror);1;2;0;8;10;0;0;0;0;44;5;0;2;0","Electrum Horror (clockwork horror);1;6;2;4;10;0;0;0;0;22;4;0;2;0","","","",0,
1,2,"A","3","Prismatic Roper;1;0;0;9;8;27 ;0;0;0;67;9;1;3;0","","","","",0,
1,2,"A","3C","Harpoon Spiders;1;4;1;5;8;20;0;0;5;47;4;1;3;0","Ettercap;1;2;0;5;8;5 ;0;0;0;27;3;0;M;0","Medium Monstrous Spiders (vermin);1;3;1;2;8;2 ;0;0;0;11;1;0;M;0","","",0,
1,2,"A","3","Dread Harpoon Spider;1;0;0;9;8;54;0;0;0;94;9;2;3;0","","","","",0,
1,2,"A","3","Arcane Ooze;1;0;0;15;10;120;0;0;0;202;9;2;3;0","","","","",0,
1,2,"A","A","Mind Flayer, Vampire;1;0;0;8;12;0;0;0;0;52;9;0;A;0","","","","",0,
1,2,"A","A","Hound of the Gloom;1;0;0;12;8;84;0;0;0;156;9;1;A;0","","","","",0,
1,2,"A","F","Rukanyr;1;0;0;7;8;49;0;0;0;80;9;1;F;0","","","","",0,
1,2,"A","F","Half-Troll Barbazu;1;0;0;6;8;24;0;0;0;51;9;0;F;0","","","","",0,
1,2,"A","F","Chwidencha;1;0;0;12;8;60;0;0;0;114;9;0;F;0","","","","",0,
1,2,"A","F","Bhut;1;0;0;8;12;0;0;0;0;52;9;0;F;0","","","","",0,
1,2,"A","L","Visage;1;0;0;12;12;12;0;0;0;90;9;0;L;0","","","","",0,
1,2,"A","L","Skin Kites;1;4;4;4;12;0;0;0;0;24;3;0;L;0","","","","",0,
1,2,"A","L","Murk;1;6;5;3;12;0;0;0;0;19;3;0;L;0","","","","",0,
1,2,"A","L","Mummified Ogres;1;2;2;4;12;4;0;0;0;30;5;1;L;0","","","","",0,
1,2,"A","L","Hulking Corpse;1;0;0;20;12;20;0;0;0;150;9;0;L;0","","","","",0,
1,2,"A","L","Forsaken Shells;1;3;1;14;12;14;0;0;0;105;6;0;L;0","","","","",0,
1,2,"A","L","Crypt Chanters;1;3;1;7;12;0;0;0;0;45;7;0;L;0","","","","",0,
1,2,"A","L","Blood Amniote;1;0;0;10;12;0;0;0;0;65;9;2;L;0","","","","",0,
1,2,"A","L","Blaspheme;1;0;0;18;12;30;0;0;0;147;9;0;L;0","","","","",0,
1,2,"A","X","Phthisic;1;4;1;6;8;30;0;0;0;57;6;1;X;0","","","","",0,
1,2,"A","X","Phrenic Manticore;2;0;0;6;10;24 ;0;0;0;57;7;1;X;0","","","","",0,
1,2,"A","X","Intellect Devourer;1;3;1;6;8;15;0;0;0;42;7;0;X;0","","","","",0,
1,2,"A","X","Gray Glutton;2;0;0;9;10;36;0;0;0;85;7;2;X;0","","","","",0,
1,2,"A","X","Caller in Darkness;1;0;0;11;12;0;0;0;0;71;9;1;X;0","","","","",0,

1,10,"A","Z","","","","","",10
);

var MonstersLevelTenFiltered = new Array(0);
var MonstersLevelTenNoReroll = new Array(0);
var MonstersLevelTenWandering = new Array(0);
var MonstersLevelTen = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",9,
1,2,"A","C","Aboleths;1;3;1;8;8;40;0;0;0;76;7;2;M;0","","","","",0,
1,3,"A","C","Behirs;1;3;0;9;10;45;0;0;0;94;8;2;M;0","","","","",0,
1,2,"A","C","Gauths (beholder);1;4;2;6;8;16;0;0;0;45;6;0;M;0","","","","",0,
1,3,"A","C","Chuuls;1;4;1;11;8;44;0;0;0;93;7;1;M;0","","","","",0,
1,3,"A","C","Babaus (demon);1;4;2;7;8;35;0;0;0;66;6;0;M;0","","","","",0,
1,3,"A","C","Bebilith (demon);1;0;0;12;8;96;0;0;0;150;10;2;M;0","","","","",0,
1,3,"A","C","Digesters;1;4;2;8;10;24;0;0;0;68;6;0;M;0","","","","",0,
1,4,"A","C","Ghosts, 5th-level fighters;1;3;1;5;12;0;0;0;0;32;7;0;M;0","","","","",0,
1,6,"A","C","Fire Giant;1;0;0;15;8;75;0;0;0;142;10;1;M;0","","","","",0,
1,4,"A","C","Clay Golem;1;0;0;11;10;30;0;0;0;90;10;1;M;0","","","","",0,
1,3,"A","C","Flesh Golems;1;3;1;9;10;30;0;0;0;79;7;1;M;0","","","","",0,
1,3,"A","C","Nine-Headed Hydra (pyro- or cryo-);1;0;0;9;10;48;0;0;0;97;10;2;M;0","","","","",0,
1,3,"A","C","Medusas;1;3;1;6;8;6;0;0;0;33;7;0;M;0","","","","",0,
1,2,"A","C","Guardian Naga;1;0;0;11;8;44;0;0;0;93;10;1;M;0","","","","",0,
1,3,"A","C","Ogre Mages;1;3;0;5;8;15;0;0;0;37;8;1;M;0","","","","",0,
1,3,"A","C","Average Salamanders;1;3;2;9;8;18;0;0;0;57;6;0;M;0","","","","",0,
1,2,"A","C","Noble Salamander;1;0;0;15;8;45;0;0;0;112;10;1;M;0","","","","",0,
1,2,"A","C","Young Adult Red Dragon Skeletons;1;3;0;19;12;0;0;0;0;123;8;2;M;0","","","","",0,
1,3,"A","C","Red Slaad;1;4;1;7;8;21;0;0;0;52;7;1;M;0","","","","",0,
1,3,"A","C","Gray Salad;1;0;0;10;8;50;0;0;0;95;10;0;M;0","","","","",0,
1,3,"A","C","Spectres;1;3;1;7;12;0;0;0;0;45;7;0;M;0","","","","",0,
1,3,"A","C","Umber Hulks;1;3;1;8;8;35;0;0;0;71;7;1;M;0","","","","",0,
1,4,"A","C","Xills;1;4;1;5;8;10;0;0;0;32;6;0;M;0","","","","",0,
1,3,"A","C","Elder Xorns;1;3;0;15;8;63;0;0;0;130;8;1;M;0","","","","",0,
1,3,"A","C","Yuan-Ti Abomination;1;0;0;9;8;27;0;0;0;67;7;1;M;0","Yuan-Ti Halfbloods;1;3;0;7;8;7;0;0;0;38;5;0;M;0","Yuan-Ti  Purebloods;1;4;1;4;8;0;0;0;0;18;3;0;M;0","","",0,
1,2,"A","C","Huge Monstrous Scorpions (vermin);1;3;1;10;8;30;0;0;0;75;7;2;M;0","","","","",0,
1,2,"A","C","5th-level drow wizard NPC;1;0;0;5;4;3;0;0;0;17;6;0;D;0","Hellcat (devil);1;0;0;8;8;24;0;0;0;60;7;2;M;0","Mind Flayer;1;0;0;8;8;8;0;0;0;44;8;0;M;0","","",0,

1,2,"A","H","Chasme;1;0;0;9;8;36;0;0;0;76;10;1;H;0","","","","",0,
1,3,"A","4","Bloodhulk Giant;1;3;2;14;12;106;0;0;0;106;6;1;4;0","","","","",0,
1,4,"A","4","Balhannoth;1;0;0;14;8;84;0;0;0;147;10;1;4;0","","","","",0,
1,2,"A","4","Yuan-ti, Pureblood Slayer;1;0;0;12;8;6;0;0;0;60;10;0;4;0","","","","",0,
1,3,"A","4","Corruptor of Fate Assassin (yugoloth);1;0;0;12;8;57;0;0;0;111;10;0;4;0","","","","",0,
1,2,"A","2C","Spellstitched Ghast;1;2;2;4;12;0;0;0;0;26;4;0;2;0","Ghouls;1;6;6;2;12;0;0;0;0;13;1;0;M;0","","","",0,
1,2,"A","2","Leechwalker;1;0;0;13;8;39;0;0;0;97;10;0;2;0","","","","",0,
1,2,"A","2","Brass Golem;1;0;0;16;10;0;0;0;0;88;10;1;2;0","","","","",0,
1,2,"A","2","Platinum Horror (clockwork horror);1;0;0;8;10;0;0;0;0;44;7;0;2;0","Gold Horror (clockwork horror);1;2;0;8;10;0;0;0;0;44;5;0;2;0","Electrum Horror (clockwork horror);1;6;2;4;10;0;0;0;0;22;4;0;2;0","","",0,
1,2,"A","2","Bronze Serpent;1;0;0;16;10;0;0;0;0;88;10;2;2;0","","","","",0,
1,2,"A","2","Avolakai;1;0;0;10;8;30 ;0;0;0;75;10;1;2;0","","","","",0,
1,2,"A","3","Stonesingers;1;3;1;9;8;36;0;0;0;76;7;1;3;0","","","","",0,
1,2,"A","3","Plague Spewer;1;0;0;16;12;0;0;0;0;104;10;2;3;0","","","","",0,
1,2,"A","3","Knell Beetle (vermin);1;0;0;12;8;72;0;0;0;126;10;1;3;0","","","","",0,
1,2,"A","3C","Web Golem;1;3;1;11;10;30;0;0;0;90;7;1;3;0","Large Monstrous Spiders (vermin);1;3;1;4;8;4 ;0;0;0;22;2;0;M;0","","","",0,
1,2,"A","3","Dracotaurs Rager, 4th-Level Barbarian;1;0;0;3;12;15;4;12;20;80;7;1;3;0","Dracotaurs;2;3;4;3;12;9;0;0;0;28;3;1;3;0","","","",0,
1,2,"A","3","Lesser Bonedrinker;1;6;6;7;12;14;0;0;0;59;4;0;3;0","","","","",0,
1,2,"A","3","Bonedrinker;1;4;2;11;12;22;0;0;0;93;6;0;3;0","","","","",0,
1,2,"A","A","Half-Farspawn Gray Render;1;0;0;10;10;100;;155;10;1;A;0","","","","",0,
1,2,"A","F","Scarab Beetle Swarm;1;0;0;15;8;60;0;0;0;127;10;0;F;0","","","","",0,
1,2,"A","F","Maelephant;1;0;0;8;8;24 ;0;0;0;60;10;1;F;0","","","","",0,
1,2,"A","F","Brain Golem;1;0;0;12;10;30;0;0;0;96;10;1;F;0","","","","",0,
1,2,"A","F","Abyssal Ghoul;1;0;0;16;12;0;0;0;0;104;10;0;F;0","","","","",0,
1,2,"A","L","Revived Fossil Megaraptor;1;0;0;8;12;40;0;0;0;118;10;2;L;0","","","","",0,
1,2,"A","LC","Forsaken Shells;1;3;1;14;12;14;0;0;0;105;6;0;L;0","Human Commoner Zombies;2;3;4;2;12;3 ;0;0;0;15;1/2;0;M;0","","","",0,
1,2,"A","L","Entombers;2;3;4;8;12;0;0;0;0;52;2;0;L;0","","","","",0,
1,2,"A","L","Cinderspawn;1;3;2;10;12;0;0;0;0;65;6;1;L;0","","","","",0,
1,2,"A","X","Cerebrilith;1;0;0;9;8;63;0;0;0;103;10;1;X;0","","","","",0,

1,10,"A","Z","","","","","",11
);

var MonstersLevelElevenFiltered = new Array(0);
var MonstersLevelElevenNoReroll = new Array(0);
var MonstersLevelElevenWandering = new Array(0);
var MonstersLevelEleven = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",10,
1,3,"A","C","Aboleths;1;3;1;8;8;40;0;0;0;76;7;2;M;0","Skums;2;4;3;2;8;2;0;0;0;11;2;0;M;0","","","",0,
1,5,"A","C","Hezrou (demon);1;0;0;10;8;93;0;0;0;138;11;1;M;0","","","","",0,
1,4,"A","C","Retriever (demon);1;0;0;10;10;80;0;0;0;135;11;2;M;0","","","","",0,
1,4,"A","C","Barbed Devil;1;0;0;12;8;72;0;0;0;136;11;0;M;0","","","","",0,
1,4,"A","C","Devourer;1;0;0;12;12;0;0;0;0;78;11;1;M;0","","","","",0,
1,5,"A","C","Efreeti (genie);1;3;1;10;8;20;0;0;0;65;8;1;M;0","","","","",0,
1,6,"A","C","Hill Giants;1;4;1;12;8;48;0;0;0;102;7;1;M;0","","","","",0,
1,4,"A","C","Stone Golem;1;0;0;14;10;30;0;0;0;107;11;1;M;0","","","","",0,
1,4,"A","C","Avorals (guardinal);1;3;0;7;8;35;0;0;0;66;9;0;M;0","","","","",0,
1,3,"A","C","Half-Celestial 9th-Level Human Paladin;1;0;0;9;10;36;0;0;0;90;11;0;M;0","","","","",0,
1,4,"A","C","Twelve-Headed Hydra;1;0;0;12;10;63;0;0;0;129;11;2;M;0","","","","",0,
1,4,"A","C","Hill Giant Dire Wereboar (lycanthrope);1;0;0;12;8;51;7;8;49;185;11;1;M;0","","","","",0,
1,4,"A","C","Mohrgs;1;3;1;14;12;0;0;0;0;91;8;0;M;0","","","","",0,
1,3,"A","C","Dark Nagas;1;3;1;9;8;18;0;0;0;58;8;1;M;0","","","","",0,
1,4,"A","C","Elder Black Pudding (ooze);1;0;0;20;10;180;0;0;0;290;12;3;M;0","","","","",0,
1,4,"A","C","Blue Slaad;1;4;1;8;8;32;0;0;0;68;8;1;M;0","","","","",0,
1,3,"A","C","Hellwasp Swarms;1;3;1;12;10;27;0;0;0;93;8;0;M;0","","","","",0,
1,4,"A","C","Troll Hunter, 6th-Level Ranger;1;0;0;6;8;36;6;8;36;130;11;1;M;0","","","","",0,
1,4,"A","C","Dread Wraith;1;0;0;16;12;0;0;0;0;104;11;1;M;0","","","","",0,
1,4,"A","C","5th-level gnoll ranger NPC;1;0;0;7;8;14;0;0;0;49;6;0;D;0","Invisible Stalkers;1;3;0;8;8;16;0;0;0;52;7;1;M;0","Greater Shadow;1;0;0;9;12;0;0;0;0;58;8;0;M;0","","",0,

1,4,"A","4","Greathorn Minotaur;4;0;0;11;8;55;0;0;0;104;7;1;4;0","","","","",0,
1,2,"A","4","Lodestone Marauder;2;0;0;11;8;66;0;0;0;115;9;1;4;0","","","","",0,
1,3,"A","4","Demon, Kastighur;1;0;0;15;8;105;0;0;0;172;11;2;4;0","","","","",0,
1,3,"A","4","Lolth-Touched Bebilith;1;0;0;12;8;132;0;0;0;186;11;2;4;0","","","","",0,
1,2,"A","4","Verdant Prince;1;0;0;16;6;80;0;0;0;136;11;0;4;0","","","","",0,
1,2,"A","4","Vitreous Drinker;1;0;0;14;12;0;0;0;0;91;11;0;4;0","","","","",0,
1,2,"A","2","Fomorian;1;0;0;15;8;90;0;0;0;157;11;2;2;0","","","","",0,
1,2,"A","2","Bone Naga;1;0;0;15;12;0;0;0;0;97;11;1;2;0","","","","",0,
1,2,"A","3","Skindancer;1;0;0;15;8;135;0;0;0;202;11;1;3;0","","","","",0,
1,2,"A","3","Lifeleach Otyughs;1;3;1;9;8;54;0;0;0;94;8;1;3;0","","","","",0,
1,2,"A","3C","Grimweird;1;0;0;12;12;0;0;0;0;78;11;0;3;0","Chaos Beast (summoned);1;0;0;8;8;8 ;0;0;0;44;7;0;M;0","","","",0,
1,2,"A","3","Alchemical Golem;1;0;0;22;10;30;0;0;0;151;11;1;3;0","","","","",0,
1,2,"A","3","Dust Wights;1;4;1;16;12;0;0;0;16;120;7;0;3;0","","","","",0,
1,2,"A","3","Boneclaw;1;6;5;10;12;40;0;0;0;105;5;1;3;0","","","","",0,
1,2,"A","A","Giant Psurlon;1;0;0;18;8;54;0;0;0;135;11;1;A;0","","","","",0,
1,2,"A","A","Cloaker, Shadowcloak Elder;1;0;0;10;8;70;7;4;49;181;11;1;A;0","","","","",0,
1,2,"A","F","Cranium Rat Swarm, Greater Pack;1;0;0;24;10;48;0;0;0;180;11;0;F;0","","","","",0,
1,2,"A","F","Phiuhl;1;0;0;9;8;36;0;0;0;76;11;1;F;0","","","","",0,
1,2,"A","F","Blood Golem of Hextor;1;3;1;10;10;30;0;0;0;130;8;1;F;0","","","","",0,
1,3,"A","L","Wheep;1;0;0;9;12;0;0;0;0;58;11;0;L;0","","","","",0,
1,2,"A","L","Slaughter Wights;1;3;1;18;12;18;0;0;0;135;8;0;L;0","","","","",0,
1,2,"A","L","Mummified Ogres;2;3;4;4;12;4;0;0;0;30;5;1;L;0","","","","",0,
1,2,"A","LC","Hooded Pupil Ettin;1;4;1;10;8;20;0;0;0;65;7;2;L;0","Brown Bears (animal);1;2;0;6;8;24 ;0;0;0;51;4;1;M;0","","","",0,
1,2,"A","L","Blood Amniote;2;0;0;10;12;0;0;0;0;65;9;2;L;0","","","","",0,
1,2,"A","L","Blaspheme;2;0;0;18;12;30;0;0;0;147;9;0;L;0","","","","",0,
1,3,"A","L","Atropal Scion;1;0;0;9;12;9;0;0;0;67;11;0;L;0","","","","",0,
1,2,"A","X","Phrenic Manticore;1;4;1;6;10;24 ;0;0;0;57;7;1;X;0","","","","",0,
1,2,"A","X","Gray Glutton;1;3;2;9;10;36;0;0;0;85;7;2;X;0","","","","",0,

1,10,"A","Z","","","","","",12
);

var MonstersLevelTwelveFiltered = new Array(0);
var MonstersLevelTwelveNoReroll = new Array(0);
var MonstersLevelTwelveWandering = new Array(0);
var MonstersLevelTwelve = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",11,
1,4,"A","C","Bodaks;1;3;1;9;12;0;0;0;0;58;8;0;M;0","","","","",0,
1,3,"A","C","Abyssal Greater Basilisk;1;0;0;18;10;90;0;0;0;189;12;1;M;0","","","","",0,
1,7,"A","C","Vrocks (demon);1;3;1;10;8;70;0;0;0;115;9;1;M;0","","","","",0,
1,3,"A","C","Destrachans;1;3;3;8;8;24;0;0;0;60;8;1;M;0","","","","",0,
1,7,"A","C","Bone Devils;1;3;1;10;8;50;0;0;0;95;9;1;M;0","","","","",0,
1,4,"A","C","Displacer Beast Pack Lord;1;0;0;18;10;192;0;0;0;203;12;2;M;0","","","","",0,
1,7,"A","C","Frost Giants;1;4;1;14;8;70;0;0;0;133;9;1;M;0","","","","",0,
1,3,"A","C","Leonal (guardinal);1;0;0;12;8;60;0;0;0;114;12;0;M;0","","","","",0,
1,4,"A","C","Eleven-Headed Hydra (pyro- or cryo-);1;0;0;11;10;58;0;0;0;118;12;2;M;0","","","","",0,
1,3,"A","C","Kolyarut (inevitable);1;0;0;13;10;20;0;0;0;91;12;0;M;0","","","","",0,
1,3,"A","C","Mind Flayers;1;3;2;8;8;8;0;0;0;44;8;0;M;0","","","","",0,
1,4,"A","C","10th-level half-orc barbarian NPC;1;0;0;10;12;30;0;0;0;90;10;0;D;0","10th-level human cleric NPC;1;0;0;10;8;20;0;0;0;68;10;0;D;0","","","",0,
1,4,"A","C","Spirit Nagas;1;3;1;9;8;36;0;0;0;76;9;1;M;0","","","","",0,
1,6,"A","C","Purple Worm;1;0;0;16;10;112;0;0;0;200;12;3;M;0","","","","",0,
1,5,"A","C","Roper;1;0;0;10;10;30;0;0;0;85;12;1;M;0","","","","",0,
1,7,"A","C","Noble Salamanders;1;3;0;15;8;45;0;0;0;112;10;1;M;0","","","","",0,
1,6,"A","C","Green Slaad;1;4;1;9;8;36;0;0;0;76;9;1;M;0","","","","",0,

1,2,"A","H","Chasme;1;3;0;9;8;36;0;0;0;76;10;1;H;0","","","","",0,
1,2,"A","H","Lilitu;1;0;0;14;8;56;0;0;0;119;12;0;H;0","","","","",0,
1,2,"A","4","Bloodhulk Crusher;1;3;2;20;12;150;0;0;0;280;8;2;4;0","","","","",0,
1,3,"A","4","Blighted Bloodfire;1;0;0;12;10;96;0;0;0;162;12;2;4;0","","","","",0,
1,2,"A","2","Spellgaunt;1;0;0;16;10;48;0;0;0;136;12;1;2;0","","","","",0,
1,2,"A","2","Shadow Spider;1;0;0;13;10;65;0;0;0;136;12;2;2;0","","","","",0,
1,2,"A","2","Hook Horrors;2;3;4;10;8;20;0;0;0;65;6;1;2;0","","","","",0,
1,2,"A","2","Ethereal Slayer;1;0;0;16;8;32;0;0;0;104;12;0;2;0","","","","",0,
1,2,"A","2","Adamanyine Horror (clockwork horror);1;0;0;16;10;0;0;0;0;88;9;0;2;0","Platinum Horror (clockwork horror);1;2;0;12;10;0;0;0;0;66;7;0;2;0","Gold Horror (clockwork horror);1;2;2;8;10;0;0;0;0;44;5;0;2;0","Electrum Horror (clockwork horror);2;3;4;4;10;0;0;0;0;22;4;0;2;0","",0,
1,2,"A","3","Slaughterstone Evicerator;1;0;0;15;10;30;0;0;0;112;12;1;3;0","","","","",0,
1,2,"A","3","Shredstorms;1;4;1;14;10;0;0;0;0;77;8;0;3;0","","","","",0,
1,2,"A","3C","Necrothane;1;0;0;20;8;80;0;0;0;170;12;0;3;0","Troglodyte Zombies;1;4;0;4;13;3;0;0;0;29;1;0;M;0","","","",0,
1,2,"A","3","Prismatic Ropers;1;3;2;9;8;27 ;0;0;0;67;9;1;3;0","","","","",0,
1,2,"A","A","Mind Flayer, Ulitharid;1;0;0;12;8;36 ;0;0;0;90;12;1;A;0","","","","",0,
1,2,"A","AC","Cloaker, Shadowcloak Elder;1;0;0;10;8;70;7;4;49;181;11;1;A;0","Cloakers;1;4;2;6;8;18 ;0;0;0;45;5;1;M;0","","","",0,
1,2,"A","F","Sporebat;1;3;0;15;8;30;0;0;0;97;10;1;F;0","","","","",0,
1,2,"A","F","Ocularon;1;0;0;12;8;36;0;0;0;90;12;1;F;0","","","","",0,
1,2,"A","F","Lesser  Flame Snakes;1;4;3;8;10;16;0;0;0;60;7;0;F;0","","","","",0,
1,2,"A","F","Caryatid Columns;2;3;4;6;10;20;0;0;0;53;6;0;F;0","","","","",0,
1,2,"A","L","Plague Blights;2;3;4;6;12;6;0;0;0;45;6;0;L;0","","","","",0,
1,3,"A","L","Entropic Reaper;1;0;0;19;12;19;0;0;0;142;12;0;L;0","","","","",0,
1,3,"A","X","Psion-Killer;1;0;0;15;10;30;0;0;0;112;12;1;X;0","","","","",0,

1,10,"A","Z","","","","","",13
);

var MonstersLevelThirteenFiltered = new Array(0);
var MonstersLevelThirteenNoReroll = new Array(0);
var MonstersLevelThirteenWandering = new Array(0);
var MonstersLevelThirteen = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",12,
1,8,"A","C","Beholder;1;0;0;11;8;44;0;0;0;93;13;1;M;0","","","","",0,
1,6,"A","C","Glabrezu (demon);1;0;0;12;8;120;0;0;0;173;13;2;M;0","","","","",0,
1,7,"A","C","Ice Devil;1;0;0;14;8;84;0;0;0;147;13;1;M;0","","","","",0,
1,2,"A","C","Adult Green Dragon;1;0;0;20;12;100;0;0;0;230;13;2;M;0","","","","",0,
1,2,"A","C","Young Adult Silver Dragon;1;0;0;19;12;76;0;0;0;199;13;1;M;0","","","","",0,
1,6,"A","C","Ghaele (eladrin);1;0;0;10;8;20;0;0;0;65;13;0;M;0","","","","",0,
1,7,"A","C","Fire Giants;1;3;0;15;8;75;0;0;0;142;10;1;M;0","Nessian War Hound (hell hound);1;0;0;12;8;60;0;0;0;114;9;1;M;0","","","",0,
1,6,"A","C","Clay Golems;1;3;1;11;10;30;0;0;0;90;10;1;M;0","","","","",0,
1,7,"A","C","Iron Golem;1;0;0;18;10;30;0;0;0;129;13;1;M;0","","","","",0,
1,5,"A","C","Twelve-Headed Hydra (pyro- or cryo-);1;0;0;12;10;63;0;0;0;129;13;2;M;0","","","","",0,
1,4,"A","C","Lich, 11th-level wizard;1;0;0;11;12;3;0;0;0;74;13;0;M;0","","","","",0,
1,3,"A","C","10th-level drow wizard NPC;1;0;0;10;4;3;0;0;0;29;11;0;D;0","10th-level goblin rogue NPC;1;0;0;10;6;10;0;0;0;47;10;0;D;0","","","",0,
1,6,"A","C","Mummy Lord, 10th-Level Cleric;1;0;0;8;12;0;10;8;0;97;15;0;M;0","","","","",0,
1,5,"A","C","Guardian Nagas;1;3;1;11;8;44;0;0;0;93;10;1;M;0","","","","",0,
1,6,"A","C","Death Slaad;1;0;0;15;8;75;0;0;0;142;13;0;M;0","","","","",0,

1,2,"A","2","Death Knight 7th-Level Fighter/3rd-Level Blackguard;1;0;0;10;12;0;0;0;0;65;13;0;2;0","","","","",0,
1,2,"A","2","Dragonflesh Golem;1;0;0;30;10;0;0;0;0;165;13;1;2;0","","","","",0,
1,2,"A","3","Salt Mummys;2;3;3;12;12;0;0;0;48;126;8;0;3;0","","","","",0,
1,2,"A","3","Living Blasphemy (living spell);1;0;0;13;10;39;0;0;0;110;13;2;3;0","","","","",0,
1,2,"A","3","Hangman Golem;1;0;0;18;8;30;0;0;0;111;13;1;3;0","","","","",0,
1,2,"A","3","Infernal Conflagration Ooze;1;0;0;15;10;90;0;0;0;172;7;2;3;0","","","","",0,
1,2,"A","A","Giant Psurlon;1;0;0;18;8;54;0;0;0;135;11;1;A;0","Elder Psurlon;1;0;0;12;8;12 ;0;0;0;66;8;0;A;0","Psurlon;1;4;2;7;8;7;0;0;0;38;5;0;A;0","","",0,
1,2,"A","AC","Cloaker, Shadowcloak Elder;1;0;0;10;8;70;7;4;49;181;11;1;A;0","Cloakers;1;6;6;6;8;18 ;0;0;0;45;5;1;M;0","","","",0,
1,3,"A","AC","Director;1;4;2;8;8;24;0;0;0;60;8;1;A;0","Medium Monstrous Centipedes (vermin);P;0;0;1;8;0;0;0;0;4;1/2;0;M;0","","","",0,
1,2,"A","F","Steel Predator;1;0;0;12;8;48;0;0;0;102;13;1;F;0","","","","",0,
1,2,"A","F","Huecuvas;2;3;4;5;12;3;0;0;0;35;7;0;F;0","","","","",0,
1,2,"A","F","Chwidenchas;1;4;1;12;8;60;0;0;0;114;9;0;F;0","","","","",0,
1,2,"A","F","Bhuts;1;4;1;8;12;0;0;0;0;52;9;0;F;0","","","","",0,
1,2,"A","L","Visages;1;2;2;12;12;12;0;0;0;90;9;0;L;0","","","","",0,
1,2,"A","LC","Hooded Pupil Ettin;1;4;1;10;8;20;0;0;0;65;7;4;L;0","Brown Bears (animal);1;2;0;6;8;24 ;0;0;0;51;4;1;M;0","Orc Warriors;1;6;6;1;8;1 ;0;0;0;5;1/2;0;M;0","Goblin Warriors;1;8;8;1;8;1 ;0;0;0;5;1/3;0;M;0","",0,
1,2,"A","L","Crypt Chanters;1;6;5;7;12;0;0;0;0;45;7;0;L;1","","","","",0,
1,3,"A","P","Spectral Savant 11th-Level human telepath;1;0;0;11;8;22;0;0;0;71;13;1;P;0","","","","",0,
1,3,"A","X","Thought Slayer;1;0;0;14;8;70;0;0;0;133;13;2;X;0","","","","",0,
1,5,"A","X","Cerebriliths;1;3;1;9;8;63;0;0;0;103;10;1;X;0","","","","",0,

1,10,"A","Z","","","","","",14
);

var MonstersLevelFourteenFiltered = new Array(0);
var MonstersLevelFourteenNoReroll = new Array(0);
var MonstersLevelFourteenWandering = new Array(0);
var MonstersLevelFourteen = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",13,
1,5,"A","C","Astral Deva (angel);1;0;0;12;8;48;0;0;0;102;14;0;M;0","","","","",0,
1,5,"A","C","Trumpet Archon;1;0;0;12;8;72;0;0;0;126;14;0;M;0","","","","",0,
1,7,"A","C","Hezrous (demon);1;3;1;10;8;93;0;0;0;138;11;1;M;0","","","","",0,
1,8,"A","C","Nalfeshnee (demon);1;0;0;14;8;112;0;0;0;175;14;2;M;0","","","","",0,
1,11,"A","C","Barbed Devils;1;3;1;12;8;72;0;0;0;126;11;0;M;0","","","","",0,
1,7,"A","C","Displacer Beast Pack Lords;2;0;0;18;10;192;0;0;0;203;12;2;M;0","","","","",0,
1,11,"A","C","Stone Giants;2;4;2;14;8;56;0;0;0;119;8;1;M;0","Elder Stone Giant;1;0;0;14;8;56;0;0;0;119;9;1;M;0","","","",0,
1,5,"A","C","Stone Golems;1;3;1;14;10;30;0;0;0;107;11;1;M;0","","","","",0,
1,9,"A","C","Werewolf Lord (lycanthrope);1;0;0;10;10;20;6;8;30;132;14;0;M;0","","","","",0,
1,2,"A","C","Nightwing (nightshade);1;0;0;17;12;34;0;0;0;144;14;2;M;0","","","","",0,
1,3,"A","C","10th-level goblin rogue NPCs;1;4;2;10;6;10;0;0;0;47;10;0;D;0","","","","",0,
1,7,"A","C","Truly Horrid Umber Hulk;1;0;0;20;8;180;0;0;0;270;14;2;M;0","","","","",0,

1,2,"A","2","Spellgaunt;2;0;0;16;10;48;0;0;0;136;12;1;2;0","","","","",0,
1,2,"A","2","Rukarazyll;1;0;0;12;8;48;0;0;0;102;14;1;2;0","","","","",0,
1,2,"A","2","Leechwalkers;1;3;2;13;8;39;0;0;0;97;10;0;2;0","","","","",0,
1,2,"A","2","Bronze Serpents;1;3;2;16;10;0;0;0;0;88;10;2;2;0","","","","",0,
1,2,"A","3","Prismatic Ropers;2;3;4;9;8;27 ;0;0;0;67;9;1;3;0","","","","",0,
1,2,"A","3","Knell Beetle (vermin);1;3;2;12;8;72;0;0;0;126;10;1;3;0","","","","",0,
1,2,"A","3","Alchemical Golems;1;3;1;22;10;30;0;0;0;151;11;1;3;0","","","","",0,
1,2,"A","AC","Mind Flayer, Ulitharid;1;0;0;12;8;36 ;0;0;0;90;12;1;A;0","Mind Flayer;1;4;1;8;8;8;0;0;0;44;8;0;M;0","Grimlocks;2;3;4;2;8;2 ;0;0;0;11;1;0;M;0","","",0,
1,2,"A","F","Rukanyr;1;6;2;7;8;49;0;0;0;80;9;1;F;0","","","","",0,
1,2,"A","F","Abyssal Ghouls;1;4;1;16;12;0;0;0;0;104;10;0;F;0","","","","",0,
1,2,"A","L","Slaughter Wights;1;6;4;18;12;18;0;0;0;135;8;0;L;0","","","","",0,
1,2,"A","L","Boneyard;1;0;0;17;12;17;0;0;0;127;14;2;L;0","","","","",0,
1,2,"A","L","Blood Amniote;1;4;4;10;12;0;0;0;0;65;9;2;L;0","","","","",0,

1,10,"A","Z","","","","","",15
);

var MonstersLevelFifteenFiltered = new Array(0);
var MonstersLevelFifteenNoReroll = new Array(0);
var MonstersLevelFifteenWandering = new Array(0);
var MonstersLevelFifteen = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",14,
1,7,"A","C","Abyssal Greater Basilisk;1;0;0;18;10;90;0;0;0;189;12;1;M;0","","","","",0,
1,9,"A","C","Beholders;1;3;0;11;8;44;0;0;0;93;13;1;M;0","","","","",0,
1,11,"A","C","Glabrezu (demon);1;0;0;12;8;120;0;0;0;173;13;2;M;0","Succubus (demon);1;0;0;6;8;6;0;0;0;33;7;0;M;0","Vrocks (demon);1;4;1;10;8;70;0;0;0;115;9;1;M;0","","",0,
1,11,"A","C","Ice Devil;1;0;0;14;8;84;0;0;0;147;13;1;M;0","Bearded Devils;2;4;3;6;8;18;0;0;0;45;5;0;M;0","Bone Devils;1;3;0;10;8;50;0;0;0;95;9;1;M;0","","",0,
1,10,"A","C","Ghaeles (eladrin);1;3;0;10;8;20;0;0;0;65;13;0;M;0","","","","",0,
1,7,"A","C","Marut (inevitable);1;0;0;15;10;30;0;0;0;112;15;1;M;0","","","","",0,
1,9,"A","C","Elite Vampire, 13th-Level Half-Elf Monk/Shadowdancer;1;0;0;13;12;0;0;0;0;90;15;0;M;0","","","","",0,
1,8,"A","C","15th-level hobgoblin fighter NPC;1;0;0;15;10;45;0;0;0;132;15;0;D;0","","","","",0,
1,8,"A","C","15th-level kobold sorcerer NPC;1;0;0;15;4;3;0;0;0;42;15;0;D;0","","","","",0,

1,2,"A","H","Sibriex;1;0;0;15;8;150;0;0;0;217;15;1;H;0","","","","",0,
1,2,"A","H","Nabassu, Mature (demon);1;0;0;15;8;135;0;0;0;202;15;0;H;0","","","","",0,
1,2,"A","2","Fomorian;1;3;2;15;8;90;0;0;0;157;11;2;2;0","","","","",0,
1,2,"A","2","Ethereal Doppleganger;1;0;0;20;8;0;0;0;0;90;15;1;2;0","","","","",0,
1,2,"A","2","Mature Adult Sapphire Dragon;1;0;0;23;12;115;0;0;0;264;15;2;2;0","","","","",0,
1,2,"A","2","Avolakai;1;6;2;10;8;30 ;0;0;0;75;10;1;2;0","","","","",0,
1,2,"A","3","Slaughterstone Evicerators;1;3;1;15;10;30;0;0;0;112;12;1;3;0","","","","",0,
1,2,"A","3","Slaughterstone Behemoth;1;0;0;29;10;40;0;0;0;199;15;2;3;0","","","","",0,
1,2,"A","3","Grisgol;1;0;0;19;10;30;0;0;0;134;15;1;3;0","","","","",0,
1,2,"A","3","Hangman Golems;1;3;1;18;8;30;0;0;0;111;13;1;3;0","","","","",0,
1,2,"A","3","Deathshrieker;1;0;0;18;12;0;0;0;18;135;15;0;3;0","","","","",0,
1,2,"A","A","Elder Eidolon Kraken;1;0;0;20;10;60;0;0;0;170;15;3;A;0","","","","",0,
1,2,"A","A","Overseer;1;0;0;14;8;84 ;0;0;0;147;15;1;A;0","","","","",0,
1,2,"A","F","Steel Predators;2;0;0;12;8;48;0;0;0;102;13;1;F;0","","","","",0,
1,2,"A","F","Sporebat;1;3;3;15;8;30;0;0;0;97;10;1;F;0","","","","",0,
1,3,"A","X","Psion-Killers;1;4;1;15;10;30;0;0;0;112;12;1;X;0","","","","",0,
1,7,"A","X","Neothelid;1;0;0;25;8;200;0;0;0;312;15;4;X;0","","","","",0,

1,10,"A","Z","","","","","",16
);

var MonstersLevelSixteenFiltered = new Array(0);
var MonstersLevelSixteenNoReroll = new Array(0);
var MonstersLevelSixteenWandering = new Array(0);
var MonstersLevelSixteen = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",15,
1,5,"A","C","Planetar (angel);1;0;0;14;8;70;0;0;0;133;16;1;M;0","","","","",0,
1,6,"A","C","Hound Archon Hero, 11th-Level Paladin;1;0;0;6;8;18;11;10;33;143;16;0;M;0","","","","",0,
1,7,"A","C","Trumpet Archons;1;3;0;12;8;72;0;0;0;126;14;0;M;0","","","","",0,
1,8,"A","C","Nalfeshnee (demon);1;0;0;14;8;112;0;0;0;175;14;2;M;0","Hezrou (demon);1;0;0;10;8;93;0;0;0;138;11;1;M;0","Vrocks (demon);2;4;1;10;8;70;0;0;0;115;9;1;M;0","","",0,
1,11,"A","C","Horned Devil;1;0;0;15;8;105;0;0;0;172;16;1;M;0","","","","",0,
1,3,"A","C","Mature Adult Blue Dragon;1;0;0;24;12;120;0;0;0;276;16;2;M;0","","","","",0,
1,2,"A","C","Adult Gold Dragon;1;0;0;23;12;115;0;0;0;264;16;2;M;0","","","","",0,
1,8,"A","C","Iron Golem;1;3;1;18;10;30;0;0;0;129;13;1;M;0","","","","",0,
1,7,"A","C","Greater Stone Golem;1;0;0;42;10;40;0;0;0;271;16;2;M;0","","","","",0,
1,7,"A","C","Nightshade, Nightwalker;1;0;0;21;12;42;0;0;0;178;16;2;M;0","","","","",0,
1,8,"A","C","Ropers;1;4;2;10;10;30;0;0;0;85;12;1;M;0","","","","",0,
1,8,"A","C","15th-level hobgoblin fighter NPC;1;0;0;15;10;45;0;0;0;132;15;0;D;0","","","","",0,

1,2,"A","H","Goristro;1;0;0;24;8;192;0;0;0;300;16;2;H;0","","","","",0,
1,2,"A","2","Teratomorph;1;0;0;28s10;170;0;0;0;324;16;3;2;0","","","","",0,
1,2,"A","2","Spellgaunt;1;3;2;16;10;48;0;0;0;136;12;1;2;0","","","","",0,
1,2,"A","2","Rukarazyll;2;0;0;12;8;48;0;0;0;102;14;1;2;0","","","","",0,
1,2,"A","2","Moonbeast;1;0;0;18;8;90;0;0;0;171;16;2;2;0","","","","",0,
1,2,"A","2","Gravecrawler;1;0;0;25;12;0;0;0;0;162;16;1;2;0","","","","",0,
1,2,"A","2C","Ethereal Doppleganger;1;0;0;20;8;0;0;0;0;90;15;1;2;0","Janni (genie);4;4;0;6;8;6 ;0;0;0;33;4;0;M;0","","","",0,
1,2,"A","3","Knell Beetle (vermin);2;3;4;12;8;72;0;0;0;126;10;1;3;0","","","","",0,
1,2,"A","3","Brood Keeper;1;0;0;22;10;154;0;0;0;275;16;2;3;0","Brood Keeper Larva Swarm;1;0;0;22;10;50;0;0;0;171;12;0;3;0","","","",0,
1,2,"A","F","Zodar;1;0;0;16;10;20;0;0;0;108;16;0;F;0","","","","",0,
1,2,"A","F","Abyssal Ant Swarm;1;0;0;20;8;60;0;0;0;150;16;0;F;0","","","","",0,
1,2,"A","F","Greater Flame Snake;1;0;0;17;10;85;0;0;0;178;16;2;F;0","","","","",0,
1,2,"A","F","Abyssal Ghouls;2;4;4;16;12;0;0;0;0;104;10;0;F;0","","","","",0,
1,3,"A","L","Swarm-Shifter 13th-Level Mummy King Druid;1;0;0;8;12;0;13;8;21;131;16;0;L;0","","","","",0,
1,2,"A","L","Revived Fossil Megaraptor;1;4;2;8;12;40;0;0;0;118;10;2;L;0","","","","",0,
1,3,"A","L","Angel of Decay;1;0;0;26;12;29;0;0;0;198;15;1;L;0","","","","",0,
1,3,"A","X","Thought Slayer;1;3;1;14;8;70;0;0;0;133;13;2;X;0","","","","",0,

1,10,"A","Z","","","","","",17
);

var MonstersLevelSeventeenFiltered = new Array(0);
var MonstersLevelSeventeenNoReroll = new Array(0);
var MonstersLevelSeventeenWandering = new Array(0);
var MonstersLevelSeventeen = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",16,
1,10,"A","C","Aboleth Mage, 10th-Level Wizard;1;0;0;8;8;56;10;4;70;177;17;2;M;0","","","","",0,
1,10,"A","C","Beholders;1;4;2;11;8;44;0;0;0;93;13;1;M;0","","","","",0,
1,13,"A","C","Marilith (demon);1;0;0;16;8;144;0;0;0;216;17;1;M;0","","","","",0,
1,2,"A","C","Very Old White Dragon;1;0;0;27;12;162;0;0;0;337;17;2;M;0","","","","",0,
1,2,"A","C","Old Brass Dragon;1;0;0;25;12;125;0;0;0;287;17;2;M;0","","","","",0,
1,2,"A","C","Mature Adult Bronze Dragon;1;0;0;24;12;120;0;0;0;276;17;2;M;0","","","","",0,
1,13,"A","C","Frost Giant Jarl, 8th-Level Blackguard;1;0;0;14;8;84;8;10;48;231;17;1;M;0","","","","",0,
1,11,"A","C","Mind Flayer, 9th-Level Sorcerer;1;0;0;8;8;24;9;4;27;109;17;0;M;0","","","","",0,
1,9,"A","C","15th-level human paladin NPC;1;0;0;15;10;15;0;0;0;102;15;0;D;0","15th-level human monk NPC;1;0;0;15;8;15;0;0;0;86;15;0;D;0","","","",0,
1,8,"A","C","15th-level hobgoblin fighter NPCs;1;3;0;15;10;45;0;0;0;132;15;0;D;0","","","","",0,

1,2,"A","2","Effigy;1;0;0;27;12;0;0;0;0;175;17;0;2;0","","","","",0,
1,2,"A","2","Adult Topaz Dragon;1;0;0;22;12;110;0;0;0;253;17;2;2;0","","","","",0,
1,2,"A","2","Deathbringer;1;0;0;30;12;0;0;0;0;195;17;1;2;0","","","","",0,
1,2,"A","2","Banshee;1;0;0;26;12;0;0;0;0;169;17;0;2;0","","","","",0,
1,2,"A","3","Vermin Lord;1;0;0;25;8;150;0;0;0;262;17;1;3;0","","","","",0,
1,2,"A","3","Horrific Vasuthant;1;0;0;25;12;0;0;0;150;312;17;2;3;0","","","","",0,
1,2,"A","3","Slaughterstone Behemoths;1;3;1;29;10;40;0;0;0;199;15;2;3;0","","","","",0,
1,2,"A","F","Spectral Lurker;1;0;0;16;8;80;0;0;0;152;17;2;F;0","","","","",0,
1,2,"A","F","Maulgoth;1;0;0;20;8;160;0;0;0;250;17;2;F;0","","","","",0,
1,2,"A","F","Hellfire Golem;1;0;0;20;10;30;0;0;0;140;17;1;F;0","","","","",0,

1,10,"A","Z","","","","","",18
);

var MonstersLevelEighteenFiltered = new Array(0);
var MonstersLevelEighteenNoReroll = new Array(0);
var MonstersLevelEighteenWandering = new Array(0);
var MonstersLevelEighteen = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",17,
1,15,"A","C","Astral Devas (angel);1;4;2;12;8;48;0;0;0;102;14;0;M;0","","","","",0,
1,10,"A","C","Planetars (angel);1;3;0;14;8;70;0;0;0;133;16;1;M;0","","","","",0,
1,2,"A","C","Very Old Black Dragon;1;0;0;28;12;168;0;0;0;350;18;2;M;0","","","","",0,
1,2,"A","C","Old Blue Dragon;1;0;0;27;12;162;0;0;0;337;18;2;M;0","","","","",0,
1,2,"A","C","Old Green Dragon;1;0;0;26;12;156;0;0;0;325;18;2;M;0","","","","",0,
1,2,"A","C","Mature Adult Red Dagon;1;0;0;25;12;150;0;0;0;312;18;2;M;0","","","","",0,
1,2,"A","C","Mature Adult Silver Dagon;1;0;0;25;12;125;0;0;0;287;18;2;M;0","","","","",0,
1,2,"A","C","Ancient White Dragon;1;0;0;30;12;180;0;0;0;375;18;2;M;0","","","","",0,
1,15,"A","C","Nightcrawler (nightshade);1;0;0;25;12;50;0;0;0;212;18;3;M;0","","","","",0,
1,10,"A","C","15th-level human monk NPCs;1;3;0;15;8;15;0;0;0;86;15;0;D;0","15th-level human bard NPC;1;0;0;15;6;15;0;0;0;70;15;0;D;0","","","",0,
1,18,"A","C","15th-level kobold sorcerer NPC;1;0;0;15;4;3;0;0;0;42;15;0;D;0","Werewolf Lord (lycanthrope);1;0;0;10;10;20;6;8;30;132;14;0;M;0","","","",0,

1,3,"A","C4","Deathdrinker (demon);1;0;0;27;8;216;0;0;0;337;17;2;4;0","Dread Wraiths;2;0;0;16;12;0;0;0;0;104;11;0;M;0","Elite Vampire;1;0;0;13;12;0;0;0;0;90;15;0;M;0","","",0,
1,3,"A","4","Demon, Deathdrinker;1;0;0;27;8;216;0;0;0;337;17;2;4;0","","","","",0,
1,3,"A","4","Avatar, Black Rock Triskelion;1;0;0;26;8;220;0;0;0;377;18;1;4;0","","","","",0,
1,2,"A","2","Old Emerald Dragon;1;0;0;27;12;162 ;0;0;0;337;18;2;2;0","","","","",0,
1,2,"A","A","Mind Flayer Lich 12th-Level Sorcerer, Alhoon;1;0;0;20;12;0;0;0;0;130;18;0;A;0","","","","",0,
1,2,"A","F","Demonflesh Golem;1;0;0;24;10;40;0;0;0;172;18;2;F;0","","","","",0,
1,2,"A","F","Shadow Giant;1;0;0;18;8;144;0;0;0;225;18;2;F;0","","","","",0,
1,2,"A","F","Blackstone Gigant;1;0;0;32;10;60;0;0;0;236;18;3;F;0","","","","",0,

1,10,"A","Z","","","","","",19
);

var MonstersLevelNineteenFiltered = new Array(0);
var MonstersLevelNineteenNoReroll = new Array(0);
var MonstersLevelNineteenWandering = new Array(0);
var MonstersLevelNineteen = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",18,
1,11,"A","C","Abyssal Greater Basilisks;2;4;5;18;10;90;0;0;0;189;12;1;M;0","","","","",0,
1,15,"A","C","Mariliths (demon);1;3;0;16;8;144;0;0;0;216;17;1;M;0","","","","",0,
1,13,"A","C","Horned Devils;1;3;1;15;8;105;0;0;0;172;16;1;M;0","","","","",0,
1,3,"A","C","Ancient Black Dragon;1;0;0;31;12;186;0;0;0;387;19;2;M;0","","","","",0,
1,1,"A","C","Very Old Blue Dragon;1;0;0;30;12;180;0;0;0;375;19;2;M;0","","","","",0,
1,1,"A","C","Very Old Green Dragon;1;0;0;29;12;174;0;0;0;362;19;2;M;0","","","","",0,
1,1,"A","C","Very Old Brass Dragon;1;0;0;28;12;168;0;0;0;350;19;2;M;0","","","","",0,
1,2,"A","C","Wyrm White Dragon;1;0;0;33;12;231;0;0;0;445;19;3;M;0","","","","",0,
1,2,"A","C","Old Bronze Dragon;1;0;0;27;12;162;0;0;0;337;19;2;M;0","","","","",0,
1,2,"A","C","Old Copper Dragon;1;0;0;26;12;130;0;0;0;299;19;2;M;0","","","","",0,
1,3,"A","C","Mature Adult Gold Dragon;1;0;0;26;12;156;0;0;0;325;19;2;M;0","","","","",0,
1,15,"A","C","Greater Stone Golems;1;3;1;42;10;40;0;0;0;271;16;2;M;0","","","","",0,
1,11,"A","C","15th-level gnoll ranger NPCs;1;3;1;17;8;34;0;0;0;114;16;0;D;0","","","","",0,

1,3,"A","4","Concordant Killer;1;0;0;19;8;115;0;0;0;200;19;1;4;0","","","","",0,
1,2,"A","H","Molydeus;1;0;0;19;8;190;0;0;0;275;19;1;H;0","","","","",0,
1,2,"A","2","Ragewind;1;0;0;31;12;0;0;0;0;201;19;1;2;0","","","","",0,
1,2,"A","2","Famine Spirit;1;0;0;32;12;0;0;0;0;208;19;0;2;0","","","","",0,
1,2,"A","2","Effigys;2;0;0;27;12;0;0;0;0;175;17;0;2;0","","","","",0,
1,2,"A","2","Very Old Amethyst Dragon;1;0;0;30;12;180 ;0;0;0;375;19;2;2;0","","","","",0,
1,2,"A","3","Advanced Deathshrieker;1;0;0;25;12;0;0;0;25;187;19;0;3;0","","","","",0,
1,2,"A","F","Steel Predators;2;3;4;12;8;48;0;0;0;102;13;1;F;0","","","","",0,
1,2,"A","F","Century Worm;1;0;0;40;8;240;0;0;0;420;18;3;F;0","","","","",0,

1,10,"A","Z","","","","","",20
);

var MonstersLevelTwentyFiltered = new Array(0);
var MonstersLevelTwentyNoReroll = new Array(0);
var MonstersLevelTwentyWandering = new Array(0);
var MonstersLevelTwenty = new Array( 
0,0,"","","","","","","",0,
1,10,"A","Z","","","","","",19,
1,35,"A","C","Balor (demon);1;0;0;20;8;200;0;0;0;290;20;1;M;0","","","","",0,
1,35,"A","C","Pit Fiend (devil);1;0;0;18;8;144;0;0;0;225;20;1;M;0","","","","",0,
1,5,"A","C","Wyrm Black Dragon;1;0;0;34;12;238;0;0;0;459;20;3;M;0","","","","",0,
1,2,"A","C","Old Silver Dragon;1;0;0;28;12;168;0;0;0;350;20;2;M;0","","","","",0,
1,3,"A","C","Old Red Dragon;1;0;0;28;12;196;0;0;0;378;20;3;M;0","","","","",0,
1,5,"A","C","Ancient Brass Dragon;1;0;0;31;12;186;0;0;0;387;20;2;M;0","","","","",0,
1,5,"A","C","Very Old Copper Dragon;1;0;0;29;12;174;0;0;0;362;20;2;M;0","","","","",0,

1,3,"A","2","Rukarazyll;2;3;4;12;8;48;0;0;0;102;14;1;2;0","","","","",0,
1,3,"A","2","Ragewinds;2;0;0;31;12;0;0;0;0;201;19;1;2;0","","","","",0,
1,3,"A","2","Gravecrawlers;1;3;1;25;12;0;0;0;0;162;16;1;2;0","","","","",0,
1,3,"A","2","Effigys;1;3;1;27;12;0;0;0;0;175;17;0;2;0","","","","",0,
1,3,"A","2","Ancient Crystal Dragon;1;0;0;32;12;224;0;0;0;432;20;3;2;0","","","","",0,
1,3,"A","2","Deathbringer;1;3;1;30;12;0;0;0;0;195;17;1;2;0","","","","",0,
1,5,"A","AC","Overseer;1;0;0;14;8;84;0;0;0;147;15;1;A;0","Beholders;1;4;2;11;8;44;0;0;0;93;13;1;M;0","Directors;1;4;2;8;8;24;0;0;0;60;8;1;A;0","Medium Monstrous Centipedes (vermin);P;0;0;1;8;0;0;0;0;4;1/2;0;M;0","",0,
1,3,"A","F","Greater Flame Snakes;1;4;2;17;10;85;0;0;0;178;16;2;F;0","","","","",0,
1,3,"A","F","Crawling Head;1;0;0;28;12;0;0;0;0;182;18;2;F;0","","","","",0
);







// Table 3-19 Random Traps CR 1-3 -- all tables combined

// version (1=original) 
// percent
// theme 
// Trap 
// CR   

var doortraplist = new Array(0);

var mastertraplist = new Array(0);

var Table319Filtered = new Array(0);
var Table319Temp = new Array(0);

var Table319RandomTraps = new Array(
0,0,"","","",0,
1,3,"A","Basic Arrow Trap","mechanical; proximity trigger; manual reset; Atk +10 ranged (1d6/x3, arrow); Search DC 20; Disable Device DC 20.",1,
1,3,"A","Camouflaged Pit Trap","mechanical; location trigger; manual reset; DC 20 Reflex save avoids; 10 ft. deep (1d6, fall); Search DC 24; Disable Device DC 20.",1,
1,3,"A","Deeper Pit Trap","mechanical; location trigger; manual reset; hidden switch bypass (Search DC 25); DC 15 Reflex save avoids; 20 ft. deep (2d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); Search DC 20; Disable Device DC 23.",1,
1,3,"A","Fusillade of Darts","mechanical; location trigger; manual reset; Atk +10 ranged (1d4+1, dart); multiple targets (fires 1d4 darts at each target in two adjacent 5-ft. squares); Search DC 14; Disable Device DC 20.",1,
1,2,"A","Poison Dart Traps","mechanical; location trigger; manual reset; Atk +8 ranged (1d4 plus poison, dart); poison (bloodroot, DC 12 Fortitude save resists, 0/1d4 Con plus 1d3 Wis); Search DC 20; Disable Device DC 18. Market Price: 700 gp.",1,
1,3,"A","Poison Needle Trap","mechanical; touch trigger; manual reset; Atk +8 ranged (1 plus greenblood oil poison); Search DC 22; Disable Device DC 20. ",1,
1,3,"A","Portcullis Trap","mechanical; location trigger; manual reset; Atk +10 melee (3d6); Search DC 20; Disable Device DC 20. Note: Damage applies only to those underneath the portcullis. Portcullis blocks passageway. Lifting the portcullis requires a DC 25 Strength check.",1,
1,2,"A","Razor-Wire across Hallway","mechanical; location trigger; no reset; Atk +10 melee (2d6, wire); multiple targets (first target in each of two adjacent 5-ft. squares); Search DC 22; Disable Device DC 15. ",1,
1,3,"A","Roling Rock Trap"," mechanical; location trigger; manual reset; Atk +10 melee (2d6, rock); Search DC 20; Disable Device DC 22.",1,
1,2,"A","Scything Blade Trap","mechanical; location trigger; automatic reset; Atk +8 melee (1d8/x3); Search DC 21; Disable Device DC 20.",1,
1,3,"A","Spear Trap"," mechanical; location trigger; manual reset; Atk +12 ranged (1d8/x3, spear); Search DC 20; Disable Device DC 20. Note: 200-ft. max range, target determined randomly from those in its path.",1,
1,2,"A","Swinging Block Trap","mechanical; touch trigger; manual reset; Atk +5 melee (4d6, stone block); Search DC 20; Disable Device DC 20.",1,
1,3,"A","Wall Blade Trap","mechanical; touch trigger; automatic reset; hidden switch bypass (Search DC 25); Atk +10 melee (2d4/x4, scythe); Search DC 22; Disable Device DC 22. ",1,
1,3,"A","Box of Brown Mold","mechanical; touch trigger (opening the box); automatic reset; 5-ft. cold aura (3d6, cold nonlethal); Search DC 22; Disable Device DC 16. ",2,
1,3,"A","Bricks from Ceiling","CR 2; mechanical; touch trigger; repair reset; Atk +12 melee (2d6, bricks); multiple targets (all targets in two adjacent 5-ft. squares); Search DC 20; Disable Device DC 20. ",2,
1,3,"A","Burning Hands Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (burning hands, 1st-level wizard, 1d4 fire, DC 11 Reflex save half damage); Search DC 26; Disable Device DC 26. ",2,
1,2,"A","Camouflaged pit trap","mechanical; location trigger; manual reset; DC 20 Reflex save avoids; 20 ft. deep (2d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); Search DC 24; Disable Device DC 19. ",2,
1,3,"A","Inflict Light Wounds</i> trap","magic device; touch trigger; automatic reset; spell effect (inflict light wounds, 1st-level cleric, 1d8+1, DC 11 Will save half damage); Search DC 26; Disable Device DC 26.",2,
1,3,"A","Javelin Trap","mechanical; location trigger; manual reset; Atk +16 ranged (1d6+4, javelin); Search DC 20; Disable Device DC 18.",2,
1,2,"A","Large Net Trap","mechanical; location trigger; manual reset; Atk +5 melee (see note); Search DC 20; Disable Device DC 25. Note: Characters in 10-ft. square are grappled by net (Str 18) if they fail a DC 14 Reflex save. ",2,
1,4,"A","Pit Trap","mechanical, location trigger; manual reset; DC 20 Reflex save avoids; 40 ft. deep (4d6, fall); Search DC 20; Disable Device DC 20.",2,
1,3,"A","Poison Needle Trap","mechanical; touch trigger; repair reset; lock bypass (Open Lock DC 30); Atk +17 melee (1 plus poison, needle); poison (blue whinnis, DC 14 Fortitude save resists (poison only), 1 Con/unconsciousness); Search DC 22; Disable Device DC 17.",2,
1,3,"A","Spiked Pit Trap","mechanical; location trigger; automatic reset; DC 20 Reflex save avoids; 20 ft. deep (2d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); pit spikes (Atk +10 melee, 1d4 spikes per target for 1d4+2 each); Search DC 18; Disable Device DC 15. ",2,
1,2,"A","Tripping Chain","mechanical; location trigger; automatic reset; multiple traps (tripping and melee attack); Atk +15 melee touch (trip), Atk +15 melee (2d4+2, spiked chain); Search DC 15; Disable Device DC 18. Note: This trap is really one CR 1 trap that trips and a second CR 1 trap that attacks with a spiked chain. If the tripping attack succeeds, a +4 bonus applies to the spiked chain attack because the opponent is prone.",2,
1,3,"A","Well-Camouflaged Pit Trap","mechanical; location trigger; repair reset; DC 20 Reflex save avoids; 10 ft. deep (1d6, fall); Search DC 27; Disable Device DC 20. ",2,
1,3,"A","Burning Hands Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (burning hands, 5th-level wizard, 5d4 fire, DC 11 Reflex save half damage); Search DC 26; Disable Device DC 26. ",3,
1,3,"A","Camouflaged Pit Trap","mechanical; location trigger; manual reset; DC 20 Reflex save avoids; 30 ft. deep (3d6, fall); multiple targets (first target in each of two adjacent squares); Search DC 24; Disable Device DC 18. ",3,
1,2,"A","Ceiling Pendulum","mechanical; timed trigger; automatic reset; Atk +15 melee (1d12+8/x3, greataxe); Search DC 15; Disable Device DC 27. ",3,
1,2,"A","Fire Trap","spell; spell trigger; no reset; spell effect (fire trap, 3rd-level druid, 1d4+3 fire, DC 13 Reflex save half damage); Search DC 27; Disable Device DC 27.",3,
1,4,"A","Extended Bane Trap","magic device; proximity trigger (detect good); automatic reset; spell effect (extended bane, 3rd-level cleric, DC 13 Will save negates); Search DC 27; Disable Device DC 27.",3,
1,3,"A","Hail of Needles","mechanical; location trigger; manual reset; Atk +20 ranged (2d4); Search DC 22; Disable Device DC 22.",3,
1,2,"A","Acid Arrow Trap","magic device; proximity trigger (alarm); automatic reset; Atk +2 ranged touch; spell effect (acid arrow, 3rd-level wizard, 2d4 acid/round for 2 rounds); Search DC 27; Disable Device DC 27.",3,
1,3,"A","Pit Trap","mechanical, location trigger; manual reset; DC 20 Reflex save avoids; 60 ft. deep (6d6, fall); Search DC 20; Disable Device DC 20.",3,
1,3,"A","Spiked Pit Trap","mechanical; location trigger; manual reset; DC 20 Reflex save avoids; 20 ft. deep (2d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); pit spikes (Atk +10 melee, 1d4 spikes per target for 1d4+2 each); Search DC 21; Disable Device DC 20.",3,
1,2,"A","Stone Blocks from Ceiling","mechanical; location trigger; repair reset; Atk +10 melee (4d6, stone blocks); Search DC 25; Disable Device DC 20.",3,
1,1,"A","Ghoul Touch Trap","magic device; touch trigger; automatic reset; spell effect (ghoul touch, 3rd-level wizard, DC 13 Fortitude save negates); Search DC 27; Disable Device DC 27. ",3,
1,1,"A","Poisoned Arrow Trap","mechanical; touch trigger; manual reset; lock bypass (Open Lock DC 30); Atk +12 ranged (1d8 plus poison, arrow); poison (Large monstrous scorpion venom, DC 14 Fortitude save resists, 1d4 Con/1d4 Con); Search DC 19; Disable Device DC 15.",3,
1,2,"A","Bestow Curse Trap","magic device; touch trigger (detect chaos); automatic reset; spell effect (bestow curse, 5th-level cleric, DC 14 Will save negates); Search DC 28; Disable Device DC 28.",4,
1,3,"A","Camouflaged Pit Trap","mechanical; location trigger; manual reset; DC 20 Reflex save avoids; 40 ft. deep (4d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); Search DC 25; Disable Device DC 17. ",4,
1,2,"A","Colapsing Column","mechanical; touch trigger (attached); no reset; Atk +15 melee (6d6, stone blocks); Search DC 20; Disable Device DC 24.",4,
1,3,"A","Glyph of Warding (Blast)","spell; spell trigger; no reset; spell effect (glyph of warding [blast], 5th-level cleric, 2d8 acid, DC 14 Reflex save half damage); multiple targets (all targets within 5 ft.); Search DC 28; Disable Device DC 28. ",4,
1,2,"A","Lightening Bolt Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (lightning bolt, 5th-level wizard, 5d6 electricity, DC 14 Reflex save half damage); Search DC 28; Disable Device DC 28.",4,
1,3,"A","Pit Trap","mechanical, location trigger; manual reset; DC 20 Reflex save avoids; 80 ft. deep (8d6, fall); Search DC 20; Disable Device DC 20.",4,
1,3,"A","Poisoned Dart Trap","mechanical; location trigger; manual reset; Atk +15 ranged (1d4+4 plus poison, dart); multiple targets (1 dart per target in a 10-ft.-by-10-ft. area); poison (Small monstrous centipede poison, DC 10 Fortitude save resists, 1d2 Dex/1d2 Dex); Search DC 21; Disable Device DC 22.",4,
1,3,"A","Sepia Snake Sigil Trap","spell; spell trigger; no reset; spell effect (sepia snake sigil, 5th-level wizard, DC 14 Reflex save negates); Search DC 28; Disable Device DC 28.",4,
1,3,"A","Spiked Pit Trap","mechanical; location trigger; automatic reset; DC 20 Reflex save avoids; 60 ft. deep (6d6, fall); pit spikes (Atk +10 melee, 1d4 spikes per target for 1d4+5 each); Search DC 20; Disable Device DC 20.",4,
1,3,"A","Wall Scythe Trap","mechanical; location trigger; automatic reset; Atk +20 melee (2d4+8/x4, scythe); Search DC 21; Disable Device DC 18.",4,
1,3,"A","Water-Filled Room Trap","mechanical; location trigger; automatic reset; multiple targets (all targets in a 10-ft.-by-10-ft. room); never miss; onset delay (5 rounds); liquid; Search DC 17; Disable Device DC 23.",4,
1,3,"A","Wide-Mouth Spiked Pit Trap","mechanical; location trigger; manual reset; DC 20 Reflex save avoids; 20 ft. deep (2d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); pit spikes (Atk +10 melee, 1d4 spikes per target for 1d4+2 each); Search DC 18; Disable Device DC 25.",4,
1,3,"A","Camouflaged Pit Trap","mechanical; location trigger; manual reset; DC 20 Reflex save avoids; 50 ft. deep (5d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); Search DC 25; Disable Device DC 17.",5,
1,3,"A","Doorknob Smeared with Contact Poison:","mechanical; touch trigger (attached); manual reset; poison (nitharit, DC 13 Fortitude save resists, 0/3d6 Con); Search DC 25; Disable Device DC 19.",5,
1,3,"A","Falling Block Trap","mechanical; location trigger; manual reset; Atk +15 melee (6d6); multiple targets (can strike all characters in two adjacent specified squares); Search DC 20; Disable Device DC 25.",5,
1,3,"A","Fire Trap","spell; spell trigger; no reset; spell effect (fire trap, 7th-level wizard, 1d4+7 fire, DC 16 Reflex save half damage); Search DC 29; Disable Device DC 29.",5,
1,3,"A","Fireball Trap","magic device; touch trigger; automatic reset; spell effect (fireball, 8th-level wizard, 8d6 fire, DC 14 Reflex save half damage); Search DC 28; Disable Device DC 28.",5,
1,2,"A","Flooding Room Trap","mechanical; proximity trigger; automatic reset; no attack roll necessary (see note below); Search DC 20; Disable Device DC 25. Note: Room floods in 4 rounds.",5,
1,3,"A","Fusillade of Darts","mechanical; location trigger; manual reset; Atk +18 ranged (1d4+1, dart); multiple targets (1d8 darts per target in a 10-ft.-by-10-ft. area); Search DC 19; Disable Device DC 25.",5,
1,2,"A","Moving Executioner Statue","mechanical; location trigger; automatic reset; hidden switch bypass (Search DC 25); Atk +16 melee (1d12+8/x3, greataxe); multiple targets (both arms attack); Search DC 25; Disable Device DC 18.",5,
1,2,"A","Phantasmal Killer Trap","magic device; proximity trigger (alarm covering the entire room); automatic reset; spell effect (phantasmal killer, 7th-level wizard, DC 16 Will save for disbelief and DC 16 Fort save for partial effect); Search DC 29; Disable Device DC 29.",5,
1,3,"A","Pit Trap","mechanical, location trigger; manual reset; DC 20 Reflex save avoids; 100 ft. deep (10d6, fall); Search DC 20; Disable Device DC 20.",5,
1,3,"A","Poison Wall Spikes","mechanical; location trigger; manual reset; Atk +16 melee (1d8+4 plus poison, spike); multiple targets (closest target in each of two adjacent 5-ft. squares); poison (Medium monstrous spider venom, DC 12 Fortitude save resists, 1d4 Str/1d4 Str); Search DC 17; Disable Device DC 21.",5,
1,3,"A","Spiked Pit Trap","mechanical; location trigger; manual reset; DC 25 Reflex save avoids; 40 ft. deep (4d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); pit spikes (Atk +10 melee, 1d4 spikes per target for 1d4+4 each); Search DC 21; Disable Device DC 20.",5,
1,3,"A","Spiked Pit Trap (80 ft.)","mechanical; location trigger, manual reset; DC 20 Reflex save avoids; 80 ft. deep (8d6, fall), pit spikes (Atk +10 melee, 1d4 spikes for 1d4+5 each); Search DC 20; Disable Device DC 20.",5,
1,2,"A","Ungol Dust Vapor Trap","mechanical; location trigger; manual reset; gas; multiple targets (all targets in a 10-ft.-by-10-ft. room); never miss; onset delay (2 rounds); poison (ungol dust, DC 15 Fortitude save resists, 1 Cha/1d6 Cha plus 1 Cha drain); Search DC 20; Disable Device DC 16.",5,
1,2,"A","Built-to-Colapse Wall","mechanical; proximity trigger; no reset; Atk +20 melee (8d6, stone blocks); multiple targets (all targets in a 10-ft.-by-10-ft. area); Search DC 14; Disable Device DC 16.",6,
1,3,"A","Compacting Room","mechanical; timed trigger; automatic reset; hidden switch bypass (Search DC 25); walls move together (12d6, crush); multiple targets (all targets in a 10-ft.-by- 10-ft. room); never miss; onset delay (4 rounds); Search DC 20; Disable Device DC 22.",6,
1,3,"A","Flame Strike Trap","magic device; proximity trigger (detect magic); automatic reset; spell effect (flame strike, 9th-level cleric, 9d6 fire, DC 17 Reflex save half damage); Search DC 30; Disable Device DC 30.",6,
1,3,"A","Fusillade of Spears","mechanical; proximity trigger; repair reset; Atk +21 ranged (1d8, spear); multiple targets (1d6 spears per target in a 10 ft.-by-10-ft. area); Search DC 26; Disable Device DC 20.",6,
1,3,"A","Glyph of Warding (Blast)","spell; spell trigger; no reset; spell effect (glyph of warding [blast], 16th-level cleric, 8d8 sonic, DC 14 Reflex save half damage); multiple targets (all targets within 5 ft.); Search DC 28; Disable Device DC 28.",6,
1,2,"A","Lightning Bolt Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (lightning bolt, 10th-level wizard, 10d6 electricity, DC 14 Reflex save half damage); Search DC 28; Disable Device DC 28.",6,
1,3,"A","Spiked Blocks from Ceiling","mechanical; location trigger; repair reset; Atk +20 melee (6d6, spikes); multiple targets (all targets in a 10-ft.-by-10-ft. area); Search DC 24; Disable Device DC 20.",6,
1,3,"A","Spiked Pit Trap (100 ft.)","mechanical; location trigger, manual reset; DC 20 Reflex save avoids; 100 ft. deep (10d6, fall); pit spikes (Atk +10 melee, 1d4 spikes per target for 1d4+5 each); Search DC 20; Disable Device DC 20.",6,
1,3,"A","Whirling Poison Blades","mechanical; timed trigger; automatic reset; hidden lock bypass (Search DC 25, Open Lock DC 30); Atk +10 melee (1d4+4/19-20 plus poison, dagger); poison (purple worm poison, DC 24 Fortitude save resists, 1d6 Str/2d6 Str); multiple targets (one target in each of three preselected 5-ft. squares); Search DC 20; Disable Device DC 20.",6,
1,3,"A","Wide-Mouth Pit Trap","mechanical; location trigger, manual reset; DC 25 Reflex save avoids; 40 ft. deep (4d6, fall); multiple targets (all targets within a 10-ft.-by-10-ft. area); Search DC 26; Disable Device DC 25.",6,
1,3,"A","Wyvern Arrow Trap","mechanical; proximity trigger; manual reset; Atk +14 ranged (1d8 plus poison, arrow); poison (wyvern poison, DC 17 Fortitude save resists, 2d6 Con/2d6 Con); Search DC 20; Disable Device DC 16.",6,
1,4,"A","Acid Fog Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (acid fog, 11th-level wizard, 2d6/round acid for 11 rounds); Search DC 31; Disable Device DC 31.",7,
1,3,"A","Blade Barrier Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (blade barrier, 11th-level cleric, 11d6 slashing, DC 19 Reflex save half damage); Search DC 31; Disable Device DC 31.",7,
1,3,"A","Burnt Othur Vapor Trap","mechanical; location trigger; repair reset; gas; multiple targets (all targets in a 10-ft.-by-10-ft. room); never miss; onset delay (3 rounds); poison (burnt othur fumes, DC 18 Fortitude save resists, 1 Con drain/3d6 Con); Search DC 21; Disable Device DC 21.",7,
1,4,"A","Chain Lightning Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (chain lightning, 11th-level wizard, 11d6 electricity to target nearest center of trigger area plus 5d6 electricity to each of up to eleven secondary targets, DC 19 Reflex save half damage); Search DC 31; Disable Device DC 31.",7,
1,3,"A","Black Tentacles Trap","magic device; proximity trigger (alarm); no reset; spell effect (black tentacles, 7th-level wizard, 1d4+7 tentacles, Atk +7 melee [1d6+4, tentacle]); multiple targets (up to six tentacles per target in each of two adjacent 5-ft. squares); Search DC 29; Disable Device DC 29.",7,
1,3,"A","Fusillade of Greenblood Oil Darts","mechanical; location trigger; manual reset; Atk +18 ranged (1d4+1 plus poison, dart); poison (greenblood oil, DC 13 Fortitude save resists, 1 Con/ 1d2 Con); multiple targets (1d8 darts per target in a 10-ft.-by-10-ft. area); Search DC 25; Disable Device DC 25.",7,
1,3,"A","Lock Covered in Dragon Bile","mechanical; touch trigger (attached); no reset; poison (dragon bile, DC 26 Fortitude save resists, 3d6 Str/0); Search DC 27; Disable Device DC 16.",7,
1,3,"A","Summon Monster VI Trap","magic device; proximity trigger (alarm); no reset; spell effect (summon monster VI, 11th-level wizard), Search DC 31; Disable Device DC 31.",7,
1,4,"A","Water-Filled Room","mechanical; location trigger; manual reset; multiple targets (all targets in a 10-ft.-by-10-ft. room); never miss; onset delay (3 rounds); water; Search DC 20; Disable Device DC 25.",7,
1,3,"A","Well-Camouflaged Pit Trap","mechanical; location trigger; repair reset; DC 25 Reflex save avoids; 70 ft. deep (7d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); Search DC 27; Disable Device DC 18.",7,
1,3,"A","Deathblade Wall Scythe","mechanical; touch trigger; manual reset; Atk +16 melee (2d4+8 plus poison, scythe); poison (deathblade, DC 20 Fortitude save resists, 1d6 Con/2d6 Con); Search DC 24; Disable Device DC 19.",8,
1,3,"A","Destruction Trap","magic device; touch trigger (alarm); automatic reset; spell effect (destruction, 13th-level cleric, DC 20 Fortitude save for 10d6 damage); Search DC 32; Disable Device DC 32.",8,
1,3,"A","Earthquake Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (earthquake, 13th-level cleric, 65-ft. radius, DC 15 or 20 Reflex save, depending on terrain); Search DC 32; Disable Device DC 32.",8,
1,4,"A","Insanity Mist vapor Trap","mechanical; location trigger; repair reset; gas; never miss; onset delay (1 round); poison (insanity mist, DC 15 Fortitude save resists, 1d4 Wis/2d6 Wis); multiple targets (all targets in a 10-ft.-by-10-ft. room); Search DC 25; Disable Device DC 20.",8,
1,3,"A","Acid Arrow Trap","magic device; visual trigger (true seeing); automatic reset; multiple traps (two simultaneous acid arrow traps); Atk +9 ranged touch and +9 ranged touch; spell effect (acid arrow, 18th-level wizard, 2d4 acid damage for 7 rounds); Search DC 27; Disable Device DC 27. Note: This trap is really two CR 6 acid arrow traps that fire simultaneously, using the same trigger and reset.",8,
1,3,"A","Power Word Stun Trap","magic device; touch trigger; no reset; spell effect (power word stun, 13th-level wizard), Search DC 32; Disable Device DC 32.",8,
1,3,"A","Prismatic Spray Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (prismatic spray, 13th-level wizard, DC 20 Reflex, Fortitude, or Will save, depending on effect); Search DC 32; Disable Device DC 32.",8,
1,4,"A","Reverse Gravity Trap","magic device; proximity trigger (alarm, 10-ft. area); automatic reset; spell effect (reverse gravity, 13th-level wizard, 6d6 fall [upon hitting the ceiling of the 60-ft.- high room], then 6d6 fall [upon falling 60 ft. to the floor when the spell ends], DC 20 Reflex save avoids damage); Search DC 32; Disable Device DC 32.",8,
1,3,"A","Well-Camouflaged Pit Trap","mechanical; location trigger; repair reset; DC 20 Reflex save avoids; 100 ft. deep (10d6, fall); Search DC 27; Disable Device DC 18.",8,
1,3,"A","Word of Chaos Trap","magic device; proximity trigger (detect law); automatic reset; spell effect (word of chaos, 13th-level cleric); Search DC 32; Disable Device DC 32.",8,
1,3,"A","Doorknob Smeared with Contact Poison","mechanical; touch trigger (attached); manual reset; poison (black lotus extract, DC 20 Fortitude save resists, 3d6 Con/3d6 Con); Search DC 18; Disable Device DC 26.",9,
1,3,"A","Dropping Ceiling","mechanical; location trigger; repair reset; ceiling moves down (12d6, crush); multiple targets (all targets in a 10-ft.-by-10-ft. room); never miss; onset delay (1 round); Search DC 20; Disable Device DC 16.",9,
1,3,"A","Incendary Cloud Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (incendiary cloud, 15th-level wizard, 4d6/round for 15 rounds, DC 22 Reflex save half damage); Search DC 33; Disable Device DC 33.",9,
1,3,"A","Wide-Mouth Pit Trap","mechanical; location trigger; manual reset; DC 25 Reflex save avoids; 100 ft. deep (10d6, fall); multiple targets (all targets within a 10-ft.-by-10-ft. area); Search DC 25; Disable Device DC 25.",9,
1,3,"A","Wide-Mouth Spiked Pit with Poisoned Spikes","mechanical; location trigger; manual reset; hidden lock bypass  (Search DC 25, Open Lock DC 30); DC 20 Reflex save avoids; 70 ft. deep (7d6, fall); multiple targets (all targets within a 10-ft.-by-10-ft. area); pit spikes (Atk +10 melee, 1d4 spikes per target for 1d4+5 plus poison each); poison (giant wasp poison, DC 14 Fortitude save resists, 1d6 Dex/1d6 Dex); Search DC 20; Disable Device DC 20.",9,
1,4,"A","Crushing Room","mechanical; location trigger; automatic reset; walls move together (16d6, crush); multiple targets (all targets in a 10-ft.-by-10-ft. room); never miss; onset delay (2 rounds); Search DC 22; Disable Device DC 20.",10,
1,4,"A","Crushing Wall Trap","mechanical; location trigger; automatic reset; no attack roll required (18d6, crush); Search DC 20; Disable Device DC 25.",10,
1,3,"A","Energy Drain Trap","magic device; visual trigger (true seeing); automatic reset; Atk +8 ranged touch; spell effect (energy drain, 17th-level wizard, 2d4 negative levels for 24 hours, DC 23 Fortitude save negates); Search DC 34; Disable Device DC 34.",10,
1,3,"A","Forcecage and Summon Monster VII Trap","magic device; proximity trigger (alarm); automatic reset; multiple traps (one forcecage trap and one summon monster VII trap that summons a hamatula); spell effect (forcecage, 13th-level wizard), spell effect (summon monster VII, 13th-level wizard, hamatula); Search DC 32; Disable Device DC 32. Note: This trap is really one CR 8 trap that creates a forcecage and a second CR 8 trap that summons a hamatula in the same area. If both succeed, the hamatula appears inside the forcecage. These effects are independent of each other.",10,
1,3,"A","Poisoned Spiked Pit Trap","mechanical; location trigger; manual reset; hidden lock bypass (Search DC 25, Open Lock DC 30); DC 20 Reflex save avoids; 50 ft. deep (5d6, fall); multiple targets (first target in each of two adjacent 5-ft. squares); pit spikes (Atk +10 melee, 1d4 spikes per target for 1d4+5 plus poison each); poison (purple worm poison, DC 24 Fortitude save resists, 1d6 Str/2d6 Str); Search DC 16; Disable Device DC 25.",10,
1,3,"A","Wail of the banshee Trap","magic device; proximity trigger (alarm); automatic reset; spell effect (wail of the banshee, 17th-level wizard, DC 23 Fortitude save negates); multiple targets (up to 17 creatures); Search DC 34; Disable Device DC 34.",10
);


// ===================================================

// Map Layers
// 0 - Background (if any)
// 1 - Base Floor Tiles - Display Array
// 2 - 
// 3 - 
// 4 - 
// 5 - 
// 6 - Feature 1
// 7 - Feature 2
// 8 - Feature 3
// 9 - Feature 4
// 10 - Exit Type 1 - Calculation Array
// 11 - Exit Type 2 - Calculation Array
// 12 - Exit Type 3 - Calculation Array
// 13 - Exit Type 4 - Calculation Array
// 10r - Exit Type 1 Reroll - Calculation Array
// 11r - Exit Type 2 Reroll - Calculation Array
// 12r - Exit Type 3 Reroll - Calculation Array
// 13r - Exit Type 4 Reroll - Calculation Array
// 14 - Exit 1 - Display Array
// 15 - Exit 2 - Display Array
// 16 - Exit 3 - Display Array
// 17 - Exit 4 - Display Array
// 18 - Corner 1 - Calculation Array
// 19 - Corner 2 - Calculation Array
// 20 - Corner 3 - Calculation Array
// 21 - Corner 4 - Calculation Array
// 22 - Wall 1 - Calculation Array
// 23 - Wall 2 - Calculation Array
// 24 - Wall 3 - Calculation Array
// 25 - Wall 4 - Calculation Array
// 27 - Wall and Corner - Display Array
// 28 - Features - Display Array

aBaseGrid = new Array(1200);
aBlankGrid = new Array(1200);
aLayer1 = new Array(1200);
aLayer10 = new Array(1200);
aLayer11 = new Array(1200);
aLayer12 = new Array(1200);
aLayer13 = new Array(1200);
aLayer10r = new Array(1200);
aLayer11r = new Array(1200);
aLayer12r = new Array(1200);
aLayer13r = new Array(1200);
aLayer10t = new Array(1200);
aLayer11t = new Array(1200);
aLayer12t = new Array(1200);
aLayer13t = new Array(1200);
aLayer10s = new Array(1200);
aLayer11s = new Array(1200);
aLayer12s = new Array(1200);
aLayer13s = new Array(1200);
aLayer14 = new Array(1200);
aLayer15 = new Array(1200);
aLayer16 = new Array(1200);
aLayer17 = new Array(1200);
aLayer18 = new Array(1200);
aLayer19 = new Array(1200);
aLayer20 = new Array(1200);
aLayer21 = new Array(1200);
aLayer22 = new Array(1200);
aLayer23 = new Array(1200);
aLayer24 = new Array(1200);
aLayer25 = new Array(1200);
aLayer26 = new Array(1200);
aLayer27 = new Array(1200);
aLayer28 = new Array(1200);

// 0 Info Length
// 1 X
// 2 Y
// 3* Exit Info
// 4* Tile Info

aLayerShow = new Array(1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);

aStarterStart = new Array(0,35,88,131);

aStarterRoom = new Array(
34,4,4,0,0,1,0,4,0,0,0,0,0,0,2,0,3,0,0,"201","10","10","202","10","10","10","10","10","10","10","10","204","10","10","203",
52,5,5,0,0,1,0,0,0,0,0,0,0,4,0,0,0,2,0,0,0,0,0,0,0,3,0,0,"200","10","10","10","200","10","10","10","10","10","10","10","210","10","10","10","10","10","10","10","200","10","10","10","200",
42,4,5,4,0,0,2,0,0,0,0,4,0,0,2,0,0,0,0,4,0,0,2,"10","10","10","10","200","10","10","200","10","10","10","10","200","10","10","200","10","10","10","10",
0);

aRoomData = new Array(999);
totalrooms = 0;

// custom tiles

ctl = 4; // Total custom tiles minus 1

aCustomTile = new Array(
201,0,1,1,0,  
202,0,0,1,1,
203,1,0,0,1,
204,1,1,0,0,
210,0,0,0,0
);


// 31-36 are basic B&W Map Compass

aMapCompass = new Array(
"c1","c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14","c15","c16"
);

// version 1=original
// size 0=tiny 1=small 2=med 3=large
// theme A=All C=Crypt S=Sewer G=Generic
// Description
// Notes

var aRandRoomDescTinyFiltered = new Array(0);
var aRandRoomNoteTinyFiltered = new Array(0);

var aRandRoomDescSmallFiltered = new Array(0);
var aRandRoomNoteSmallFiltered = new Array(0);

var aRandRoomDescMediumFiltered = new Array(0);
var aRandRoomNoteMediumFiltered = new Array(0);

var aRandRoomDescLargeFiltered = new Array(0);
var aRandRoomNoteLargeFiltered = new Array(0);
 
var aRandRoomDesc = new Array(
1,0,"A","A crack in the ceiling above the middle of the north wall allows a trickle of water to flow down to the floor. The water pools near the base of the wall, and a rivulet runs along the wall an out into the hall. The water smells fresh.","",
1,0,"A","Thick cobwebs fill the corners of the room, and wisps of webbing hang from the ceiling and waver in a wind you can barely feel. One corner of the ceiling has a particularly large clot of webbing within which a goblin\'s bones are tangled.","",
1,0,"A","Rats inside the room shriek when they hear the door open, then they run in all directions from a putrid corpse lying in the center of the floor. As these creatures crowd around the edges of the room, seeking to crawl through a hole in one corner, they fight one another. The stinking corpse in the middle of the room looks human, but the damage both time and the rats have wrought are enough to make determining its race by appearance an extremely difficult task at best.","",
1,0,"A","Neither light nor darkvision can penetrate the gloom in this chamber. An unnatural shade fills it, and the room\'s farthest reaches are barely visible. Near the room\'s center, you can just barely perceive a lump about the size of a human lying on the floor. (It might be a dead body, a pile of rags, or a sleeping monster that can take advantage of the room\'s darkness.)","<i>DM Note:</i> The darkness can come from a deeper darkness spell effect.",
1,0,"A","A liquid-filled pit extends to every wall of this chamber. The liquid lies about 10 feet below your feet and is so murky that you can\'t see its bottom. The room smells sour.","",
1,0,"A","Fire crackles and pops in a small cooking fire set in the center of the room. The smoke from a burning rat on a spit curls up through a hole in the ceiling. Around the fire lie several fur blankets and a bag. It looks like someone camped here until not long ago, but then left in a hurry.","",
1,0,"A","A flurry of bats suddenly flaps through the doorway, their screeching barely audible as they careen past your heads. They flap past you into the rooms and halls beyond. The room from which they came seems barren at first glance.","",
1,0,"A","You open the door, and the reek of garbage assaults your nose. Looking inside, you see a pile of refuse and offal that nearly reaches the ceiling. In the ceiling above it is a small hole that is roughly as wide as two human hands. No doubt someone above disposes of his rubbish without ever thinking about where it goes.","",
1,0,"A","A dim bluish light suffuses this chamber, its source obvious at a glance. Blue-glowing lichen and violet-glowing moss cling to the ceiling and spread across the floor. It even creeps down and up each wall, as if the colonies on the floor and ceiling are growing to meet each other. Their source seems to be a glowing, narrow crack in the ceiling, the extent of which you cannot gauge from your position. The air in the room smells fresh and damp.","",
1,0,"A","There\'s a hiss as you open this door, and you smell a sour odor, like something rotten or fermented. Inside you see a small room lined with dusty shelves, crates, and barrels. It looks like someone once used this place as a larder, but it has been a long time since anyone came to retrieve food from it.","",
1,0,"A","This small chamber has several hooks on the walls from which hang dusty robes.","",
1,0,"A","Three low, oblong piles of rubble lie near the center of this small room. Each has a weapon jutting upright from one end -- a longsword, a spear, and a quarterstaff. The piles resemble cairns used to bury dead adventurers.","",
1,0,"A","This small chamber is a bloody mess. The corpse of a minotaur lies on the floor, its belly carved out. The creature\'s innards are largely missing, and yet you detect no other wounds. Bloody, froglike footprints track away from the corpse and out an open door.","",
1,0,"A","This small room is lined with benchlike seats on all the walls. The seats all have holes in their top, like a privy. Facing stones on the front of the benches prevent you from seeing how deep the holes go. It looks like a communal bathroom.  ","<i>DM Note:</i> The PCs may have heard that these are common in a nearby city.",
1,0,"A","This small bare chamber holds nothing but a large ironbound chest, which is big enough for a man to fit in and bears a heavy iron lock. The floor has a layer of undisturbed dust upon it.","",
1,0,"A","A cluster of low crates surrounds a barrel in the center of this chamber. Atop the barrel lies a stack of copper coins and two stacks of cards, one face up. Meanwhile, atop each crate rests a fan of five face-down playing cards. A thin layer of dust covers everything. Clearly someone meant to return to their game of cards.","",
1,0,"A","This chamber of well-laid stones holds a wide bas-relief of a pastoral scene. In it you see a nearby mountain and several tall towers.","",
1,0,"A","A wall that holds a seat with a hole in it is in this chamber. It\'s a privy! The noisome stench from the hole leads you to believe that the privy sees regular use.","",
1,0,"A","The burble of water reaches your ears after you open the door to this room. You see the source of the noise in the far wall: a fountain artfully carved to look like a seashell with the figure of a seacat spewing clear water into its basin.","",
1,0,"A","This room holds six dry circular basins large enough to hold a man and a dry fountain at its center. All possess chipped carvings of merfolk and other sea creatures. It looks like this room once served some group of people as a bath.","",
1,0,"A","A glow escapes this room through its open doorways. The masonry between every stone emanates an unnatural orange radiance. Glancing quickly about the room, you note that each stone bears the carving of someone\'s name. ","<i>DM Note:</i> Consider putting the name of one of your party\'s characters on the wall.",
1,0,"A","A large stewpot hangs from a thick iron tripod over a crackling fire in the center of this chamber. A hole in the ceiling allows some of the smoke from the fire to escape, but much of it expands across the ceiling and rolls down to fill the room in a dark fog. Other details are difficult to make out, but some creature must be nearby, because it smells like a good soup is cooking.","",
1,0,"A","On either side of this room, niches are set into the wall within which stand clay urns. One of the urns has been shattered, and its contents have spilled onto its shelf and the floor. Amid the ash it held, you see blackened chunks of something that might be bone.","",
1,0,"A","Rusting spikes line the walls and ceiling of this chamber. The dusty floor shows no sign that the walls move over it, but you can see the skeleton of some humanoid impaled on some wall spikes nearby.","",
1,0,"A","You open the door to reveal a 10-foot-by-10-foot room with a floor studded with spikes. The bones of some creature lie among the spikes and some insects scuttle away from the desiccated remains. it appears the door you opened was created to blend in with the walls. Additionally, you see no ceiling. You must be at the bottom of a very deep spiked pit.","",
1,0,"A","This tiny room holds a curious array of machinery. Winches and levers project from every wall, and chains with handles dangle from the ceiling. On a nearby wall, you note a pictogram of what looks like a scythe on a chain. ","<i>DM Note:</i> This room may be a control center for traps elsewhere in the dungeon.",

1,0,"A","A single stone sarcophagi reclines in silent splendor on a floor of tiled obsidian. The ominous stone coffin lid is slightly ajar ","",  // Nightfang Spire
1,0,"A","This tiny space is coated with the dust of ages. A rusted metal chest peeks from beneath the dust.","<i>DM Note:</i> The chest is locked (Open Lock DC 20) but untrapped. It contains a bit of treasure long hidden away. The metal chest contains 209gp and four flasks of alchemical fire stoppered in ornately carved ceramic vials (carved to resemble a dragon emerging from an egg).",  // Nightfang Spire
1,0,"A","This room appears to be empty of all but a litter if rocky debris and rotted funerary wrappings.","", // Nightfang Spire
1,0,"A","A litter if debris and dust partially covers a small alter.","", // Nightfang Spire
1,0,"A","The floor of this room is a morass of splintered stone, rotted tapestry, smashed wood, and glass.","", // Nightfang Spire
1,0,"A","Urns of all sizes cover almost every inch of available floor space. Many of the urns have tipped over or broken, spilling fine ashes mixed with charred bones across the stone floor. The air here is quite dusty.","", // Nightfang Spire
1,0,"A","A 1-foot-tall pile of ash, broken bones, stony debris, and filth is heaped below a 5-foot-diameter shaft in the ceiling. The heap is libererraly marked with footprints both monsterous and skeletal. The smell of old death permeates the chamber.","", // Nightfang Spire
1,0,"A","An open sarcophagus lies in this center of this tiled chamber.","", // Nightfang Spire
1,0,"A","This room appears completely bare of furnishings or features of note, except for a line of inscribed symbols running decoratively across the walls at a height of 4 feet.","", // Nightfang Spire
1,0,"A","A sarcophagus stands closed at the center of this dust-laden room.","", // Nightfang Spire
1,0,"A","This chamber appears empty of all but dust.","", // Nightfang Spire
1,0,"A","This untiled chamber appears empty, even of dust.","<i>DM Note:</i> Anyone stepping into this seemingly empty room is affected by a <i>teleportation</i> spell (Search DC 26 to find; Will DC 19 to resist), which transfers travelers to another room in the dungeon at the DM\'s discression. The effect occurs each time someone steps into the room, affecting everything already in the chamber. The <i>teleport</i> is an in-place dungeon feature and cannot be moved (although the effect can be suppressed with a successfully cast <i>dispel magic</i> against a 18th-level caster.", // Nightfang Spire
1,0,"A","Luminescent moss covers the floor to this empty chamber.","", // Bastion of Broken Souls
1,0,"A","This stark, square room seems barely lived in. Only a single cot and an empty armor rack keep it from appearing to be nothing more than a closet.","", // Lord of the Iron Fortress
1,0,"A","This small room is littered with debris and smells strongly of rodent waste and animal fur.","", // Speaker in Dreams


1,1,"A","This room contains several pieces of well-polished wood furniture. Eight ornate, high-backed chairs surround a long oval table, and a side table stands next to the far exit. All bear delicate carvings of various shapes. One bears carvings of skulls and bones, another is carved with shields and magic circles, and a third is carved with shapes like flames and lightning strokes.  ","<i>DM Note:</i> The eight chairs represent the eight schools of magic.",
1,1,"A","This room seems divided into three parts. The first has several hooks on the walls from which hang dusty robes. An open curtain separates that space from the next, which has a dry basin set in the floor. Beyond that lies another parted curtain behind which you can see several straw mats in a semicircle pointing toward a statue of a dog-headed man. ","<i>DM Note:</i> The first part of the room may have been used for changing and cleaning feet before entering the room with the statue.",
1,1,"A","A stone throne stands on a foot-high circular dais in the center of this cold chamber. The throne and dais bear the simple adornments of patterns of crossed lines -- a pattern also employed around each door to the room.","",
1,1,"A","A horrendous, overwhelming stench wafts from the room before you. Small cages containing small animals and large insects line the walls. Some of the creatures look sickly and alive but most are clearly dead. Their rotting corpses and the unclean cages no doubt result in the zoo\'s foul odor. A cat mews weakly from its cage, but the other creatures just silently shrink back into their filthy prisons.","",
1,1,"A","You\'ve opened the door to a torture chamber. Several devices of degradation, pain, and death stand about the room, all of them showing signs of regular use. The wood of the rack is worn smooth by struggling bodies, and the iron maiden appears to be occupied by a corpse.","",
1,1,"A","Upon entering this room you are assaulted by the smells of decay and earth. A fine layer of dirt settles itself on the floor and on the many objects found in the chamber. Torn and rotted purple silk tapestries hang loosley from ceiling to floor on tarnished brass hooks. Used and unlit torches are spaced at even length throughout the room. In the rear of the room sits a large coffin on a raised platform. You notice that no dust graces it black marble shell.","",  // === fan submission
1,1,"A","This room has a fine layer of black ash in a flash pattern across the entire floor reaching to the mid point of each wall. The faint smell of sulfer assaults your nose and your eyes water slightly. Among the small peices of burned debris lays a small and tarnished silver cylinder.","", // === fan submission
1,1,"A","This chamber is dominated by a bizarre painting of a man\'s screaming face stretched out to impossible dimensions and held in place by silver chains. The chains are securely mounted to the masonry of the wall and hold the painting fast. There are traces of what may have once been some manner of magical circle on the floor surrounded by pools of melted wax.","", // === fan submission
1,1,"A","As you open the door to this chamber, a waft of steam rushes out. As the steam clears you can see a pool of bubbling liquid in the center of the room. All surfaces of the room are damp.","", // === fan submission
1,1,"A","Tapestries decorate the walls of this room. Although they may once have been brilliant in hue, they now hang in graying tatters. Despite the damage of time and neglect, you can perceive once-grand images of wizards\' towers, magical beasts, and symbols of spellcasting. The tapestry that is in the best condition bulges out weirdly, as though someone stands behind it (an armless statue of a female human spellcaster).","",
1,1,"A","Burning torches in iron sconces line the walls of this room, lighting it brilliantly. At the room\'s center lies a squat stone altar, its top covered in recently spilled blood. A channel in the altar funnels the blood down its side to the floor where it fills grooves in the floor that trace some kind of pattern or symbol around the altar. Unfortunately, you can\'t tell what it is from your vantage point.","",
1,1,"A","You open the door, and the room comes alive with light and music. A sourceless, warm glow suffuses the chamber, and a harp you cannot see plays soothing sounds. Unfortunately, the rest of the chamber isn\'t so inviting. The floor is strewn with the smashed remains of rotting furniture. It looks like the room once held a bed, a desk, a chest, and a chair.","",
1,1,"A","A skeleton dressed in moth-eaten garb lies before a large open chest in the rear of this chamber. The chest is empty, but you note two needles projecting from the now-open lock. Dust coats something sticky on the needles\' points.","",
1,1,"A","Rounded green stones set in the floor form a snake\'s head that points in the direction of the doorway you stand in. The body of the snake flows back and toward the wall to go round about the room in ever smaller circles, creating a spiral pattern on the floor. Similar green-stone snakes wend along the walls, seemingly at random heights, and their long bodies make wave shapes.","",
1,1,"A","The manacles set into the walls of this room give you the distinct impression that it was used as a prison and torture chamber, although you can see no evidence of torture devices. One particularly large set of manacles -- big enough for an ogre -- have been broken open.","",
1,1,"A","You gaze into the room and hundreds of skulls gaze coldly back at you. They\'re set in niches in the walls in a checkerboard pattern, each skull bearing a half-melted candle on its head. The grinning bones stare vacantly into the room, which otherwise seems empty.","",
1,1,"A","You find this chamber lit dimly by guttering candles that squat in small hills of melted wax. The smell of their smoke hits your nose along with an odor that is reminiscent of the sea. Someone has taken a large amount of salt and drawn a broad circular symbol on the floor with the candles situated equidistantly around it. Atop the salt, someone traced the symbol with a black powder that glints a dull silver in the candlelight.","",
1,1,"A","This chamber holds one occupant: the statue of a male figure with elven features but the broad, muscular body of a male human. It kneels on the floor as though fallen to that posture. Both its arms reach upward in supplication, and its face is a mask of grief. Two great feathered wings droop from its back, both sculpted to look broken. The statue is skillfully crafted.","",
1,1,"A","Opening the door to this room you see that the chamber walls have been disguised by wood paneling, and the stone ceiling and floor are hidden by bright marble tiles. Several large and well-stuffed chairs are arranged about the room along with some small reading tables.","",
1,1,"A","Many small desks with high-backed chairs stand in three long rows in this room. Each desk has an inkwell, book stand, and a partially melted candle in a rusting tin candleholder. Everything is covered with dust. ","<i>DM Note:</i> The room could have been a scriptorium at some point.",
1,1,"A","You round the corner to see a ghastly scene. A semitranslucent figure hangs in the air, studded with crossbow bolts and with blood pouring from every wound. It reaches toward you in a pleading gesture, points to the walls on either side of the room, and then vanishes. Once it has gone, you notice small holes in the walls, each just large enough for a bolt to pass through.","",
1,1,"A","The strong, sour-sweet scent of vinegar assaults your nose as you enter this room. Sundered casks and broken bottle glass line the walls of this room. Clearly this was someone\'s wine cellar for a time. The shards of glass are somewhat dusty, and the spilled wine is nothing more than a sticky residue in some places. Only one small barrel remains unbroken amid the rubbish.","",

1,1,"A","The stench of slaughter assaults your nostrils. Humanoid bodies, long dead and strangely deflated, lie about the bleak chamber in various stages of decay.","", // Nightfang Spire 
1,1,"A","This room appears to be empty of all but a litter if rocky debris and rotted funerary wrappings.","", // Nightfang Spire
1,1,"A","Several stone sarcophagi stand in dusty ruin about the chamber. The carved stone sarcophagi lids each resemble al elflike humanoid  with odd hints of reptilian characteristics. The stone coffins cast ominous shadows in available light.","", // Nightfang Spire
1,1,"A","A tapestry hangs along the southern wall depicting a scene filled with large, horned, red-skinned humanoids in the foreground and brass towers in th ebackground suggesting a massive city, all set in an inferno. High above, an unbelievably large red dragon wings through the fiery sky. The chamber is otherwise empty.","<i>DM Note:</i> The tapestry (weight 20 pounds) is quite valuable (500gp).", // Nightfang Spire
1,1,"A","A litter if debris and dust partially covers a small alter. The debris has been scraped away, revealing a relief sculpture on the altar\'s face.","", // Nightfang Spire
1,1,"A","Stone blocks of all sizes squat in this chamber under a thin layer of dust. Some of the blocks are completely square, but many of them show evidence of the sculptor\'s chisel: Rough heads, arms, faces, and other forms are visible. A workbench against the eastern wall is cluttered with ruster stoneworking implements of common design.","", // Nightfang Spire
1,1,"A","Dust fills this dark chamber like a layer of gray snow, though many creatures\' feet have worn a path through the dust. Against a wall squats a sculpture of a dragon carved from red-veined, white marble.","", // Nightfang Spire
1,1,"A","Two round, rusty metal vats take up much of the floor space in this chamber. The vats are each 10 feet in diameter and 4 feet high. One is empty; th eother is filled with an opaque liquid from which a faint, bitter fragrance rises. The southern and eastern walls hold shelves on which dozens of glass jars sit, though the thick layer of dust prevents easy viewing of the jars\' contents.","<i>DM Note:</i> The still-filled vat contains a solution of water and vegetable oils (from crushed oak bark, sumac, and hemlock). The vats are ideal for tanning skins into leather and preserving small organs. Indeed, the dozens of glass jars on the shelves, if dusted off, can be seen to contain leathery organs of various ambiguous types. The tanning solution isn't dangerous to living creatures in the short term, but slowly kills exposed skin over the course of several hours.", // Nightfang Spire
1,1,"A","Broken glass from jars and vats competes with stony debris, small rusted tools, and loose embalmed body parts to cover the floor here.","", // Nightfang Spire
1,1,"A","Dust obscures the designs on the cracked, purple mosaic tiles that cover the floor, walls, and ceiling of this room. A 10-foot-diameter circle is inscribed in the floor, inlaid with silver. A five pointed star is inscribed within the circle, inlaid with glowing dust.","", // Nightfang Spire
1,1,"A","Coffin-shaped vats, filled with bitter liquid, are situated haphazardly about this rooml in fact, some are tipped over and have spilled forth a whittish, bitter-smelling mineral as well as a number of partially preserved bodies. The entire north wall contains shelving filled with small tools, jars, linen pads, and what appears to be bags of sawdust.","", // Nightfang Spire
1,1,"A","A tremendous roaring pillar if fire burns in th ecenter of this room. The fire almost reaches the ceiling, some 40 feet high here. A mosaic pattern of abstract design is tiled on the ceiling, though the tiles are so burnt that the pattern is eradicated in places. The floor is covered in ash and charred bones to a depth of 1 foot, but drifts and mounds of ash rise higher here and there. The stink of charred flesh is strong.","", // Nightfang Spire
1,1,"A","A smashed pedestal lies in the chamber\'s center. The tiled chamber is darkened as if from extreme heat. The outlines of humanoid forms can be seen on the walls, as if their bodies somewhat protected the wall from an extreme explosion from the chamber\'s center, creating blast silhouettes.","", // Nightfang Spire
1,1,"A","Half-finished stone sarcophagi litter the room, as if they were picked up and thrown about: Some are cracked, others are smashed. The bodies of at least three humanoids the stone cofins once sheltered lie here and there, mostly rotted to the bone.","", // Nightfang Spire
1,1,"A","Dust, bits of stony debris, and rubble lie scattered on the floor. An ornate fountain is built into the southern wall. Though cracked, stained, and dry, the fountains\'s carving of a rampant dragon remains inspiring.","", // Nightfang Spire
1,1,"A","Hundreds of urns, half of which are smashed, are situated around the periphery of this chamber. The smashed urns apparently contained dyes and colored liquids; various colors have spread across the floor, only to fade with time.","", // Bastion of Broken Souls
1,1,"A","Barrels, crates, and sacks of foodstuffs line the walls of this chamber. Among the loot, four oversized straw pallets and other simple furnishings show that this room now serves as a bunkroom.","", // The Forge of Fury
1,1,"A","Beyond the door lies a chamber covered in poorly cured animal hides and illuminated by smoking torches in bronze sconces. The smell is indescribable.","", // The Forge of Fury
1,1,"A","This room is decorated with a pair of fine silk wall hangings, and the scent of jasmine hangs in the air. A bet takes up one corner of the chamber, and a desk with chair sits opposite","", // The Forge of Fury
1,1,"A","Maps and diagrams cover the walls of this room. A large table dominates the center of the area, surounded by several chairs of various sizes.","", // The Forge of Fury
1,1,"A","Bookshelves cover two walls of this chamber. Two comfortable chairs sit in the center of the room, with a small table next to each.","", // The Forge of Fury

1,2,"A","Unlike the flagstone common throughout the dungeon, this room is walled and floored with black marble veined with white. The ceiling is similarly marbled, but the thick pillars that hold it up are white. A brown stain drips down one side of a nearby pillar.  ","<i>DM Note:</i> The stain could be old blood.",
1,2,"A","A huge iron cage lies on its side in this room, and its gate rests open on the floor. A broken chain lies under the door, and the cage is on a rotting corpse that looks to be a hobgoblin. Another corpse lies a short distance away from the cage. It lacks a head.","",
1,2,"A","This room is a tomb. Stone sarcophagi stand in five rows of three, each carved with the visage of a warrior lying in state. In their center, one sarcophagus stands taller than the rest. Held up by six squat pillars, its stone bears the carving of a beautiful woman who seems more asleep than dead. The carving of the warriors is skillful but seems perfunctory compared to the love a sculptor must have lavished upon the lifelike carving of the woman.","",
1,2,"A","A pungent, earthy odor greets you as you pull open the door and peer into this room. Mushrooms grow in clusters of hundreds all over the floor. Looking into the room is like looking down on a forest. Tall tangles of fungus resemble forested hills, the barren floor looks like a plain between the woods, and even a trickle of water and a puddle of water that pools in a low spot bears a resemblance to a river and lake, respectively.","",
1,2,"A","You open the door and before you is a dragon\'s hoard of treasure. Coins cover every inch of the room, and jeweled objects of precious metal jut up from the money like glittering islands in a sea of gold. ","<i>DM Note:</i> Taking one step in the room alerts the PCs to the disappointing truth. Their feet pass silently through the illusion of the coins to strike the solid floor beneath.",
1,2,"A","You open the door to a long narrow room with a high ceiling. Three thick circles of wood rest on wooden stands. You\'re not certain what they are because you came into the room behind them. ","<i>DM Note:</i> If the PCs step in the room to get a better look, they see that each is painted with concentric circles marred by dozens of cuts into its surface. They\'re targets, and the PCs are on the wrong end of an archery range.",
1,2,"A","You open the door to what must be a combat training room. Rough fighting circles are scratched into the surface of the floor. Wooden fighting dummies stand waiting for someone to attack them. A few punching bags hang from the ceiling. There\'s something peculiar about it all though. Every dummy is stocky and each has a bedraggled piece of leather hanging from its head that could be a long mask or a beard.","",
1,2,"A","This room looks like it was designed by drow. Rusted metal tiles create a huge mosaic of a spider in the floor, and someone set up rusted gratings like draperies of webs. At the far end of the chamber, the carving of a spider squats on the floor. It\'s about 3 feet tall and seems molded into the floor.","",
1,2,"A","You peer through the open doorway into a broad, pillared hall. The columns of stone are carved as tree trunks and seem placed at random like trees in a forest. Stone root systems crawl out into the floor and marble branches expand across the ceiling. You even note a few carvings of small birds and squirrels. Beautiful as they are, the sculpting doesn\'t appear elven, and it\'s nothing dwarves would carve.","",
1,2,"A","This chamber holds an odd contraption of metal and wood. It\'s a 20-foot-diameter circular platform that is tilted heavily to one side. Beneath it you can discern mechanisms that seem to attach to a large crank not far away. Above the platform hang metal weights on thin chains, which in turn are attached to discs and belts that are attached to other winches. It seems as though turning the winches turns and tilts the platform and sets the weights to moving. ","<i>DM Note:</i> This could be a training room for combat, but the PCs don\'t see any weapons inside. Certainly it would take a great deal of concentration to fight on the platform; perhaps it\'s a training room for monks or spellcasters.",
1,2,"A","You inhale a briny smell like the sea as you crack open the door to this chamber. Within you spy the source of the scent: a dark and still pool of brackish water within a low circular wall. Above it stands a strange statue of a lobster-headed and clawed woman. The statue is nearly 15 feet tall and holds the lobster claws crossed over its naked breasts.","",
1,2,"A","Stinking smoke wafts up from braziers made of skulls set around the edges of this room. The walls bear scratch marks and lines of soot that form crude pictures and what looks like words in some language [Goblin]. To the left lies a pile of rubbish and rubble heaped into a crude dais. The dais has upon it an ironbound chest that has been painted with a goblinlike face. Furs and skins of unknown origin are strewn haphazardly about the floor before the dais.","",
1,2,"A","This room is choked with corpses. The bodies of orcs and ogres lie in tangled heaps where they died, and the floor is sticky with dried blood. It looks like the orcs and ogres were fighting. Some side was the victor but you\'re not sure which one. The bodies are largely stripped of valuables, but a few broken weapons jut from the slain or lie discarded on the floor.","",
1,2,"A","You smelled smoke as you moved down the hall, and entering this room you see why. Every surface bears scorch marks and ash piles on the floor. The room reeks of fire and burnt flesh. Either a great battle happened here or the room bears some fire danger you cannot see for no flames light the room anymore.","",
1,2,"A","This room stinks with the wet, pungent scent of mildew. Black mold grows in tangled veins across the walls and parts of the floor. Despite the smell, it looks like it might be safe to travel through. A path of stone clean of mold wends its way through the room.","",
1,2,"A","You open the door and a gout of flame rushes at your face. A wave of heat strikes you at the same time and light fills the hall. The room beyond the door is ablaze! An inferno engulfs the place, clinging to bare rock and burning without fuel.","",
1,2,"A","You peer into this room and spot the white orb of a skull lying on the floor. Suddenly a stone falls from the ceiling and smashes the skull to pieces. An instant later, another stone from the ceiling drops to strike the floor and shatter. You hear a low rumbling and cracking noise. ","<i>DM Note:</i> The ceiling caves in during the next round.",
1,2,"A","Dozens of dead, winged beings lie scattered about the floor, each about the size of a cat. Their broken bodies are batlike and buglike at the same time. Each had two sets of bat wings, a long nose like a mosquito, and six legs, but many were split in half or had limbs or wings lopped off. Their forms are little more than dried husks now, and there\'s no sign of what killed them.","",

1,2,"A","This large chamber is filled with rough-hewn bunks, tables, and chairs, and the floor is strewn with filthy pelts. At a glance it appears a dozen or so humanoids might live here.","", // The Forge of Fury
1,2,"A","Rows of empty weapon racks and a dozen or more stands for missing suits of armor indicate that this room was once an armory. Some debris litters the floor--wrecked stands and hacked arming dummies, but nothing of value is readily apparent.","", // The Forge of Fury
1,2,"A","This room appears to have once been the library or study of a scholar. Bookshelves stand against the walls. Several piles of books rest on a reading table in the middle of the room, and the room reeks of moldy paper.","", // The Forge of Fury
1,2,"A","A ruined, plush carpet covers the floor in here, along with hundreds of paper scraps and many wooden shards. The place reeks of mildew. You see some large bits of wreckage, including most of a long tabletop. You also see a few barrels and crates heaped in the rooms csnter. At least a dozen picks, mattocs, and shovels lie in a heap next to the barrels and crates.","", // Deep Horizon

1,3,"A","You poke your head through the break in the wall and look upon a room of titanic size. It is clearly an enormous mausoleum built to the proportions of giants. Huge niches are set into the walls within which you can discern giant bones. Stern-looking statues of stone giants stand 20 feet tall against the walls, and in the center of the room lies a 15-foot-long sarcophagus.","",
1,3,"A","You open the door to confront a room of odd pillars. Water rushes down from several holes in the ceiling, and each hole is roughly a foot wide. The water pours in columns that fall through similar holes in the floor, flowing down to some unknown depth. Each of the eight pillars of water drops as much liquid as a stream in winter thaw. The floor is damp and looks slippery.","",
1,3,"A","This room smells strange, no doubt due to the weird sheets of black slime that drip from cracks in the ceiling and spread across the floor. The slime seeps from the shattered stone of the ceiling at a snails crawl, forming a mess of dangling walls of gook. As you watch, a bit of the stuff separates from a sheet and drops to the ground with a wet plop.","",
1,3,"A","This room is hung with hundreds of dusty tapestries. All show signs of wear: moth holes, scorch marks, dark stains, and the damage of years of neglect. They hang on all the walls and hang from the ceiling to brush against the floor, blocking your view of the rest of the room.","",
1,3,"A","You catch a whiff of the unmistakable metallic tang of blood as you open the door. The floor is covered with it, and splashes of blood spatter the walls. Some drops even reach the ceiling. It looks fresh, but you don\'t see any bodies or footprints leaving the chamber.","",
1,3,"A","You enter a small room and your steps echo. Looking about, you\'re uncertain why, but then a wall vanishes and reveals an enormous chamber. The wall was an illusion and whoever cast it must be nearby!","",
1,3,"A","A chill wind blows against you as you open the door. Beyond it, you see that the floor and ceiling are nothing but iron grates. Above and below the grates the walls extend up and down with no true ceiling or floor within your range of vision. It\'s as though the chamber is a bridge through the shaft of a great well. Standing on the edge of this shaft, you feel a chill wind pass down it and over your shoulder into the hall beyond.","",
1,2,"A","In the center of this room lies a 30-foot-wide round pit, its edges lined with rusting iron spikes. About 5 feet away from the pit\'s edge stand several stone semicircular benches. The scent of sweat and blood lingers, which makes the pit\'s resemblance to a fighting pit or gladiatorial arena even stronger.","",
1,3,"A","This room is shattered. A huge crevasse shears the chamber in half, and the ground and ceilings are tilted away from it. It\'s as though the room was gripped in two enormous hands and broken like a loaf of bread. Someone has torn a tall stone door from its hinges somewhere else in the dungeon and used it to bridge the 15-foot gap of the chasm between the two sides of the room. Whatever did that must have possessed tremendous strength because the door is huge, and the enormous hinges look bent and mangled.","",
1,3,"A","A pit yawns open before you just on the other side of the door\'s threshold. The entire floor of the room has fallen into a second room beneath it. Across the way you can spy a door in the wall now 15 feet off the rubble-strewn floor, and near the center of the room stands a thick column of mortared stone that appears to hold the spiral staircase that leads down to what was the lower level.","",
1,3,"A","A 30-foot-tall demonic idol dominates this room of black stone. The potbellied statue is made of red stone, and its grinning face holds what looks to be two large rubies in place of eyes. A fire burns merrily in a wide brazier the idol holds in its lap.","",
1,3,"A","The door creaks open, which somewhat overshadows the sound of bubbling liquid. Before you is a room about which alchemists dream. Three tables bend beneath a clutter of bottles of liquid and connected glass piping. Several bookshelves stand nearby stuffed to overfilling with a jumble of books, jars, bottles, bags, and boxes. The alchemist who set this all up doesn\'t seem to be present, but a beaker of green fluid boils over a burner on one of the tables.","",
1,3,"A","The scent of earthy decay assaults your nose upon peering through the open door to this room. Smashed bookcases and their sundered contents litter the floor. Paper rots in mold-spotted heaps, and shattered wood grows white fungus.","",
1,3,"A","Several white marble busts that rest on white pillars dominate this room. Most appear to be male or female humans of middle age, but one clearly bears small horns projecting from its forehead and another is spread across the floor in a thousand pieces, leaving one pillar empty.","",
1,3,"A","A dozen statues stand or kneel in this room, and each one lacks a head and stands in a posture of action or defense. All are garbed for battle. It\'s difficult to tell for sure without their heads, but two appear to be dwarves, one might be an elf, six appear human, and the rest look like they might be orcs.","",
1,3,"A","You open the door to a scene of carnage. Two male humans, a male elf, and a female dwarf lie in drying pools of their blood. It seems that they might once have been wearing armor, except for the elf, who remains dressed in a blue robe. Clearly they lost some battle and victors stripped them of their valuables.","",
1,3,"A","This chamber served as an armory for some group of creatures. Armor and weapon racks line the walls and rusty and broken weapons litter the floor. It hasn\'t been used in a long time, and all the useful weapons have been taken but for a single sword. Unlike the other weapons in the room, this one gleams untarnished in the light.","",
1,3,"A","Corpses and pieces of corpses hang from hooks that dangle from chains attached to thick iron rings. Most appear humanoid but a few of the body parts appear more monstrous. You don\'t see any heads, hands, or feet -- all seem to have been chopped or torn off. Neither do you see any guts in the horrible array, but several thick leather sacks hang from hooks in the walls, and they are suspiciously wet and the leather looks extremely taut -- as if it\' under great strain.","",
1,3,"A","When looking into this chamber, you\'re confronted by a thousand reflections of yourself looking back. Mirrored walls set at different angles fill the room. A path seems to wind through the mirrors, although you can\'t tell where it leads.","",
1,3,"A","A large forge squats against the far wall of this room, and coals glow dimly inside. Before the forge stands a wide block of iron with a heavy-looking hammer lying atop it, no doubt for use in pounding out shapes in hot metal. Other forge tools hang in racks nearby, and a barrel of water and bellows rest on the floor nearby.","",
1,3,"A","This chamber is clearly a prison. Small barred cells line the walls, leaving a narrow pathway for a guard to walk. Channels run down either side of the path next to the cages, probably to allow the prisoners\' waste to flow through the grates on the other side of the room. The cells appear empty but your vantage point doesn\'t allow you to see the full extent of them all.","",
1,3,"A","This otherwise bare room has one distinguishing feature. The stone around one of the other doors has been pulled over its edges, as though the rock were as soft as clay and could be moved with fingers. The stone of the door and wall seems hastily molded together.","",
1,3,"A","You feel a sense of foreboding upon peering into this cavernous chamber. At its center lies a low heap of refuse, rubble, and bones atop which sit several huge broken eggshells. Judging by their shattered remains, the eggs were big enough to hold a crouching man, making you wonder how large -- and where -- the mother is.","",
1,3,"A","A chill crawls up your spine and out over your skin as you look upon this room. The carvings on the wall are magnificent, a symphony in stonework -- but given the themes represented, it might be better described as a requiem. Scenes of death, both violent and peaceful, appear on every wall framed by grinning skeletons and ghoulish forms in ragged cloaks.","",
1,3,"A","Huge rusted metal blades jut out of cracks in the walls, and rusting spikes project down from the ceiling almost to the floor. This room may have once been trapped heavily, but someone triggered them, apparently without getting killed. The traps were never reset and now seem rusted in place.","",
1,3,"A","Several round pits lie in the floor of the room before you. Spaced roughly equally apart, each is about 15 feet in diameter and appears about 20 feet deep. A lattice of thick iron bars covers the top of each pit, and each lattice has a door of iron bars that can be lifted open. The pits smell of sweat and offal, but the room seems unoccupied.","",
1,3,"A","A strange ceiling is the focal point of the room before you. It\'s honeycombed with hundreds of holes about as wide as your head. They seem to penetrate the ceiling to some height beyond a couple feet, but you can\'t be sure from your vantage point.","",
1,3,"A","This chamber was clearly smaller at one time, but something knocked down the wall that separated it from an adjacent room. Looking into that space, you see signs of another wall knocked over. It doesn\'t appear that anyone made an effort to clean up the rubble, but some paths through see more usage than others.",""
);

var hookauthfig0 = new Array("The head of the local adventurer's guild","The local captain of the guard","A famous paladin or warrior","A rich guildmaster ","A friendly ranger","A noble of high esteem","The mentor of one of the player characters","The chancellor/advisor to the local lord","A powerful legendary wizard","A mighty warrior hero","A brilliant yet infamous rogue","A pious and powerful cleric");  
var hookauthfig = new Array("the head of the local adventurer's guild","the local captain of the guard","a famous paladin or warrior","a rich guildmaster ","a friendly ranger","a noble of high esteem","the mentor of one of the player characters","the chancellor/advisor to the local lord","a powerful legendary wizard","a mighty warrior hero","a brilliant yet infamous rogue","a pious and powerful cleric");  
var hookconflict = new Array("outbreaks of disease","kidnappings of local children","desecration of a local temple or cemetery","destruction of property by fire","rise in the local monstrous population","rash of major thefts from the rich and powerful","unexplained murders among the poor","unexplained deaths among the local nobility","mysterious rumors of wild magics and powerful summonings in the area","seemingly random wildfires claiming the local farms and forests","arcane lights and unidentified sounds that come at night ","increase in activity from a long-standing threat of brigands and assassins");  
var hooklocadv = new Array("the sewers of a major city","the graveyard of a nearby town","a desecrated temple or shrine","the ruins of an abbey","the ruins of a castle","the family tombs of rich noblemen","local swamps and marshes");  
var hookreward = new Array("the adulation and gratitude of the locals","your armor and weapons repaired for free","local land and property grants","whatever the village can gather (2d20 gp)","whatever the town can gather (2d20 gp each)","the reward of 1d100 gp","the reward of a minor magical item","all the supplies and clothing you can carry","your armor improved or upgraded (nonmagical)","your weapons improved or upgraded (nonmagical)","your armor improved or upgraded (magical)","your weapons improved or upgraded (magical)");  
var hookvillian = new Array("the corrupt head of the local adventurer's guild","the traitorous former captain of the guard","an infamous barbarian warrior or evil knight","a rich guildmaster ","a marauding dragon","a nobleman of questionable character","the nemesis of one of the player characters","the corrupt commander of the local army","a powerful legendary wizard","a mighty villainous warrior for hire","a brilliant and ruthless assassin","a pious and powerful cleric of an evil faith");  

