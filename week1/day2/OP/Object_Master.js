const pokémon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);
console.log("-----------------------------------------------------------------------------------------");
const bListPkmn = pokémon.filter( p => p.name[0] === "B" );
console.log(bListPkmn);
console.log("-----------------------------------------------------------------------------------------");
const pkmnIds = pokémon.map(p => p.id);
console.log(pkmnIds);
console.log("-----------------------------------------------------------------------------------------");
const pokdiv3=pokémon.filter(poke => poke.id % 3===0)
console.log(pokdiv3);
console.log("-----------------------------------------------------------------------------------------");
const pokfire = pokémon.filter((poke) => poke.types.includes("fire"))
console.log(pokfire);
console.log("-----------------------------------------------------------------------------------------");
const poke2= pokémon.filter((poke)=>poke.types.length>1)
console.log(poke2);
console.log("-----------------------------------------------------------------------------------------");
const pkname= pokémon.map(poke => poke.name);
console.log(pkname);
console.log("-----------------------------------------------------------------------------------------");
const poke3= pokémon.filter(poke => poke.id>99).map(poke=>poke.name);
console.log(poke3);
console.log("-----------------------------------------------------------------------------------------");
const poke4 = pokémon.filter(poke => poke.types.length==1 && poke.types.includes("poison")).map(poke => poke.name);
console.log(poke4);
console.log("-----------------------------------------------------------------------------------------");
const poke5 = pokémon.filter(poke=> poke.types[1]==="flying");
console.log(poke5);
console.log("-----------------------------------------------------------------------------------------");
 const poke6= pokémon.filter(poke => poke.types.includes("normal"));
console.log(poke6);
var count=0
for( var i=0;i<poke6.length;i++)
{ count++}
console.log(count);






