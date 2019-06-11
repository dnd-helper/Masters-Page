// ADVENTURE SEEDS

// ===================================================================

var vTitle = "";
var vLevel = 1;
var vBackground = 0; // ID Value (seperate array) 0=None 1+= ID Value	
var vIntro = 0; // ID Value (seperate array) 0=None 1+= ID Value	
var vFeatures = 0; // ID Value (seperate array) 0=None 1+= ID Value	
var vWandering = 0; // ID Value (seperate array) 0=None 1+= ID Value	
var vMaps = 0; // ID Value (seperate array) 0=None 1+= ID Value
var vHandouts = 0; // ID Value (seperate array) 0=None 1+= ID Value 
var vConclusion = 0; // ID Value (seperate array) 0=None 1+= ID Value	
var vRooms = 0; // ID Value (seperate array) 0=None 1+= ID Value	

// ===================================================================

function AdventureSeed(vSeed) {

	if (vSeed == "1") {
		vTitle = "Lair of the Mad Alchemist"
		vLevel = 1;
		vBackground = 1; // ID Value (seperate array) 0=None 1+= ID Value	
		vIntro = 1; // ID Value (seperate array) 0=None 1+= ID Value	
		vFeatures = 1; // ID Value (seperate array) 0=None 1+= ID Value	
		vWandering = 1; // ID Value (seperate array) 0=None 1+= ID Value	
		vMaps = 1; // ID Value (seperate array) 0=None 1+= ID Value
		vHandouts = 1; // ID Value (seperate array) 0=None 1+= ID Value 
		vConclusion = 1; // ID Value (seperate array) 0=None 1+= ID Value	
		vRooms = 1; // (seperate array) 0=None (semicolon delimited)				
	}

	if (vSeed == "2") {
		vTitle = "The Monastary Cellar"
		vLevel = 1;
		vBackground = 2; // ID Value (seperate array) 0=None 1+= ID Value	
		vIntro = 2; // ID Value (seperate array) 0=None 1+= ID Value	
		vFeatures = 2; // ID Value (seperate array) 0=None 1+= ID Value	
		vWandering = 2; // ID Value (seperate array) 0=None 1+= ID Value	
		vMaps = 2; // ID Value (seperate array) 0=None 1+= ID Value
		vHandouts = 2; // ID Value (seperate array) 0=None 1+= ID Value 
		vConclusion = 2; // ID Value (seperate array) 0=None 1+= ID Value			
		vRooms = 2; // (seperate array) 0=None (semicolon delimited)				
	}

}

// ADVENTURE SEED DATA ============================================

// ===== BACKGROUND ====
// Version
// ID
// Data

var vBackgroundData = new Array(
0,0,"",
1,1,"Kobolds have stolen the baron's ring and the baron has offered a reward for its return. Once the adventurers have defeated the kobolds and found the ring, they'll be further tasked to explore the alchemist's laboratory and the dungeon beyond."
);

// ===== INTRO ====
// Version
// ID
// Data

var vIntroData = new Array(
0,0,"",
1,1,"Intro test"
);

// ===== FEATURES ====
// Version
// ID
// Data 0=Basic otherwise provide text.

var vFeaturesData = new Array(
0,0,"",
1,1,"Features test" 
);

// ===== WANDERING MONSTERS ====
// Version
// ID
// Data

var vWanderingData = new Array(
0,0,"",
1,1,"Wandering monster test" // 0=Basic otherwise provide text.
);

// ===== MAPS ====
// Version
// ID
// Data (semicolon delimited)

var vMapsData = new Array(
0,0,"",
1,1,"Maps test" // 0=None otherwise provide text.
);

// ===== HANDOUTS ====
// Version
// ID
// Data (semicolon delimited)

var vHandoutsData = new Array(
0,0,"",
1,1,"Handouts test" // 0=None otherwise provide text.
);

// ===== CONCLUSION ====
// Version
// ID
// Data 

var vConclusionData = new Array(
0,0,"",
1,1,"Conclusion test" // 0=None otherwise provide text.
);

// ===== ROOMS ====
// Version
// ID
// Data (semicolon delimited)

var vRoomsData = new Array(
0,0,"",
1,1,"1" // provide room ID seperated by semicolons
);

// ROOM DATA ========================================================


// ===== ROOM INFO ====
// Version
// ID
// Title
// Mapper Data ID (seperate array)  
// Room Text ID Value (seperate array)  
// Door ID Value (seperate array) 0=Random 1+= ID Value
// Monster ID Value (seperate array) 0=Random 1+= ID Value
// Trap ID Value (seperate array) 0=Random 1+= ID Value
// Features ID Value (seperate array) 0=Random 1+= ID Value
// Treasure ID Value (seperate array) 0=Random 1+= ID Value

var vRoomInfo = new Array(
0,0,"",0,0,0,0,0,0,0,
1,1,"Test Room A",1,1,1,1,1,1,1,
1,2,"Test Room B",1,1,1,1,1,1,1
);

// ===== MAPPER DATA ====
// Version
// ID
// Data (semicolon delimited)
//      start x -->
//      start y 
//      wide
//      high
//      (door values 0=no)
//      (tile values 10=floor) 

var vRoomMapperData = new Array(
0,0,"",
1,1,"10;10;3;3;0;0;0;0;0;2;0;0;0;10;10;10;10;10;10;10;10;10",
1,2,"14;9;5;7;0;0;0;0;0;0;0;0;0;2;4;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;0;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;10;200;200;10;10;10;;200;200;10;10;10;"
);



// ===== ROOM TEXT ====
// Version
// ID
// Data (semicolon delimited)

var vRoomTextData = new Array(
0,0,"",
1,1,"",
1,2,""
);

// ===== DOOR DATA ====
// Version
// ID
// Data (semicolon delimited)

var vRoomDoorData = new Array(
0,0,"",
1,1,"",
1,2,""
);

// ===== MONSTER DATA ====
// Version
// ID
// Data (semicolon delimited)

var vRoomMonsterData = new Array(
0,0,"",
1,1,"",
1,2,""
);

// ===== TRAP DATA ====
// Version
// ID
// Data (semicolon delimited)

var vRoomTrapData = new Array(
0,0,"",
1,1,"",
1,2,""
);

// ===== FEATURES DATA ====
// Version
// ID
// Data (semicolon delimited)

var vRoomFeaturesData = new Array(
0,0,"",
1,1,"",
1,2,""
);

// ===== TREASURE DATA ====
// Version
// ID
// Data (semicolon delimited)

var vRoomTreasureData = new Array(
0,0,"",
1,1,"",
1,2,""
);
