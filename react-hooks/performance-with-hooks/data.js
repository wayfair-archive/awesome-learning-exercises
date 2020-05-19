const pokemonData = [
  {
    id: 1,
    value:
      'Bulbasaur is the only unevolved dual type starter Pokémon.'
  },
  {
    id: 2,
    value:
      'Ivysaur is the only Generation I Pokémon whose name begins with the letter I.'
  },
  {
    id: 3,
    value:
      'Venusaur is a combination of the words Venus which refers to the Venus Flytrap plant, and the Greek word saur, meaning lizard.'
  },
  {
    id: 4,
    value:
      'Charmander is the tallest Fire-type starter Pokémon.'
  },
  {
    id: 5,
    value:
      'Charmeleon is capable of learning Leer in Generation I.'
  },
  {
    id: 6,
    value:
      'Charizard was voted as the favorite Pokémon by Official Nintendo Magazine readers in February 2012.'
  },
  {
    id: 7,
    value:
      'Squirtle is the first Water-type Pokémon in National Pokédex.'
  },
  {
    id: 8,
    value:
      'Wartortle gets its name from a combination of war/warrior, tortoise, and turtle.'
  },
  {
    id: 9,
    value:
      'Blastoise has the highest base Special Defense of all fully evolved starter Pokémon.'
  },
  {
    id: 10,
    value:
      'Caterpie was the first Pokémon to be seen evolving in the animé.'
  },
  {
    id: 11,
    value: 'Metapod is known as a Cocoon Pokémon.'
  },
  {
    id: 12,
    value:
      'Butterfree has been trained by Trainers Ash, Drew, Ritchie and Solidad.'
  },
  {
    id: 13,
    value:
      'Weedle evolves at level 7, the lowest level required for any Pokémon to evolve by leveling up.'
  },
  {
    id: 14,
    value:
      'Kakuna has been shown evolving more than any other Pokémon in the animé.'
  },
  {
    id: 15,
    value:
      'Beedrill was originally going to be spelled with only one "L".'
  },
  {
    id: 16,
    value:
      'Pidgey is the only Pokémon with a base stat total of 251.'
  },
  {
    id: 17,
    value:
      'Pidgeotto was caught by Ash in Ash Catches a Pokémon. Since then, it was one of Ash’s main Pokémon.'
  },
  {
    id: 18,
    value:
      'Pidgeot is the only Pokémon with a base stat total of 469.'
  },
  {
    id: 19,
    value:
      'Rattata is the first pure Normal-type in National Pokédex order.'
  },
  {
    id: 20,
    value:
      'Raticate was classified as a Rat Pokémon in Pokémon Red and Blue, however, from Generation III onward, it is classified as a mouse.'
  },
  {
    id: 21,
    value:
      'Spearow is a combination of spear and sparrow or arrow.'
  },
  {
    id: 22,
    value: 'Fearow weighs 38kg.'
  },
  {
    id: 23,
    value:
      'Ekans spells snake backwards, which is also Ekans’ species.'
  },
  {
    id: 24,
    value:
      'Arbok is the last Pokémon to be featured on the Kanto Pokérap.'
  },
  {
    id: 25,
    value: 'Pikachu is voiced by Ikue Outani.'
  },
  {
    id: 26,
    value:
      'Raichu can be male or female, the difference in appearance is the female has smaller, blunted lightning bolt at the end of its tail.'
  },
  {
    id: 27,
    value:
      'Sandshrew is based on an animal called the pangolin, it’s a mammal that curls up into a ball, has sharp claws, and lives in desert regions.'
  },
  {
    id: 28,
    value:
      'Sandslash evolves from Sandshrew from level 22.'
  },
  {
    id: 29,
    value:
      'Nidoran♀ can lay eggs which have a chance of hatching into a Nidoran♂‚.'
  },
  {
    id: 30,
    value:
      'Nidorina are common in the Kanto region, but rare in Sinnoh.'
  },
  {
    id: 31,
    value:
      'Nidoqueen evolves from Nidorina when exposed to a Moon Stone.'
  },
  {
    id: 32,
    value:
      "Nidoran♂‚ made its first appearance in the animé in 'Pokémon Fashion Flash'."
  },
  {
    id: 33,
    value:
      'Nidorino appeared in the very first episode, battling a Gengar in a battle Ash was watching on TV.'
  },
  {
    id: 34,
    value:
      'Nidoking, along with Nidoqueen are the only two Pokémon with a Poison/Ground type combination.'
  },
  {
    id: 35,
    value:
      'Clefairy was originally going to be the mascot of Pokémon instead of Pikachu.'
  },
  {
    id: 36,
    value:
      'Clefable is based on a fairy and pixie.'
  },
  {
    id: 37,
    value:
      'Vulpix was originally going to be called "Foxfire".'
  },
  {
    id: 38,
    value:
      'Ninetales was misspelled as "Ninetails" in the Pokémon Trading Card Game for the Game Boy Color.'
  },
  {
    id: 39,
    value:
      'Jigglypuff is the only character to keep its original voice track through all three Super Smash Bros. games.'
  },
  {
    id: 40,
    value:
      'Wigglytuff is 1m tall, which is 3’03".'
  },
  {
    id: 41,
    value: 'Zubat does not have eyes.'
  },
  {
    id: 42,
    value:
      'Golbat is the first Pokémon in the National Pokédex to gain a new evolution in a later generation.'
  },
  {
    id: 43,
    value:
      'Oddish has a scientific name, which is Oddium Wanderus. It was first shown in the FireRed Pokédex entry.'
  },
  {
    id: 44,
    value:
      'Gloom is the only Pokémon to evolve into two different Pokémon with two different stones, other than Eevee.'
  },
  {
    id: 45,
    value:
      "Vileplume's species is Flower Pokémon."
  },
  {
    id: 46,
    value:
      'Paras and its evolved form are the only Pokémon to have a 5x weakness due to the Ability Dry Skin.'
  },
  {
    id: 47,
    value:
      'Parasect has used Sleep Powder in the animé, however it cannot learn this in the games.'
  },
  {
    id: 48,
    value:
      'Venonat has red eyes and nose, however the shiny Venonat’s eyes and nose are blue.'
  },
  {
    id: 49,
    value:
      'Venomoth shares the same species name with Dustox. They are both known as Poison Moth Pokémon.'
  },
  {
    id: 50,
    value:
      'Diglett has been shown to have no feet however it is mentioned as being one of the seven mysteries of Pokémon.'
  },
  {
    id: 51,
    value:
      'Dugtrio is the fastest Ground-type Pokémon.'
  },
  {
    id: 52,
    value:
      'Meowth is the first Pokémon in the animé to talk.'
  },
  {
    id: 53,
    value:
      "Persian's level-up moves are all Normal-type or Dark-type, except the move Power Gem."
  },
  {
    id: 54,
    value:
      'Psyduck is the only Pokémon to learn Psychic by breeding.'
  },
  {
    id: 55,
    value:
      'Golduck is one of the few Pokémon that is obtainable in every game, including expansion games and remakes.'
  },
  {
    id: 56,
    value:
      'Mankey is the first Fighting-type Pokémon in National Pokédex order.'
  },
  {
    id: 57,
    value: "Primape's like to eat bananas."
  },
  {
    id: 58,
    value:
      'Growlithe is a Puppy Pokémon, the only other Pokémon that has this species name is Lillipup.'
  },
  {
    id: 59,
    value:
      'Arcanine is said to be capable of running over 6,200 miles in a single day and night.'
  },
  {
    id: 60,
    value:
      'Poliwag has the same cry as Ditto in the games.'
  },
  {
    id: 61,
    value:
      'Poliwhirl is the first Pokémon in National Pokédex order to evolve by trading while holding an item.'
  },
  {
    id: 62,
    value:
      'Poliwrath is a combination the word polliwog, which is a tadpole, and wrath, meaning anger.'
  },
  {
    id: 63,
    value:
      'Abra has the highest Special Attack of all unevolved Pokémon.'
  },
  {
    id: 64,
    value:
      'Kadabra is based on a magician and also a spoon-bender.'
  },
  {
    id: 65,
    value:
      "Alakazam's have a shorter moustache if they are female."
  },
  {
    id: 66,
    value:
      'Machop can learn Strength, which is the only HM move it can learn.'
  },
  {
    id: 67,
    value: 'Machoke weighs 70.5 kg.'
  },
  {
    id: 68,
    value:
      'Machamp is one of the four Pokémon having a total of four arms.'
  },
  {
    id: 69,
    value:
      'Bellsprout eat insects and takes in nutrients from the soil.'
  },
  {
    id: 70,
    value:
      'Weepinbell first appeared in the animé in The School of Hard Knocks.'
  },
  {
    id: 71,
    value:
      'Victreebel and its pre-evolutions are based on carnivorous pitcher plants.'
  },
  {
    id: 72,
    value:
      'Tentacool is weak against Ground, Electric and Psychic type moves.'
  },
  {
    id: 73,
    value:
      'Tentacruel is said to have eighty tentacles, however only about ten are often seen.'
  },
  {
    id: 74,
    value:
      'Geodude are often shown to be floating, however it cannot have the Levitate Ability, and it can’t learn Magnet Rise.'
  },
  {
    id: 75,
    value:
      "Graveler's diet mainly consists of moss-covered rocks."
  },
  {
    id: 76,
    value:
      'Golem are able to withdraw their head, arms, and legs into their shell and roll at high speeds.'
  },
  {
    id: 77,
    value: 'Ponyta in shiny form has blue flames.'
  },
  {
    id: 78,
    value:
      'Rapidash has no flames for a split second, in the first movie.'
  },
  {
    id: 79,
    value:
      'Slowpoke was originally going to be called "Slowmo".'
  },
  {
    id: 80,
    value:
      'Slowbro and Slowking are the only Pokémon that can de-evolve in the anime.'
  },
  {
    id: 81,
    value:
      'Magnemite is the first Steel-type Pokémon in National Pokédex order.'
  },
  {
    id: 82,
    value:
      'Magneton has been used by more rival characters than any other Pokémon.'
  },
  {
    id: 83,
    value:
      'Farfetch’d is the only non-glitch Pokémon with an apostrophe in its name.'
  },
  {
    id: 84,
    value:
      'Doduo have brown necks if they are female and males have black necks.'
  },
  {
    id: 85,
    value:
      'Dodrio is based on the dodo, a flightless bird, however it is able to learn Fly.'
  },
  {
    id: 86,
    value:
      'Seel is the only non-Ice-type Pokémon to have the Ice Body Ability.'
  },
  {
    id: 87,
    value:
      'Dewgong is the first Ice Pokémon in National Pokédex order.'
  },
  {
    id: 88,
    value:
      'Grimer is one of two Pokémon who don’t change weight during evolution, the other is Gastly.'
  },
  {
    id: 89,
    value:
      'Muk is tied with Mew for the shortest English name out of all Pokémon.'
  },
  {
    id: 90,
    value:
      'Shellder learns Hydro Pump at level 61.'
  },
  {
    id: 91,
    value:
      'Cloyster is the only Ice-type Pokémon in the purple color group.'
  },
  {
    id: 92,
    value:
      'Gastly and its evolution Haunter are the lightest Pokémon in existence.'
  },
  {
    id: 93,
    value:
      'Haunter has a slightly different cry starting in Generation III.'
  },
  {
    id: 94,
    value:
      'Gengar is theorised to be a shadow of a Clefable.'
  },
  {
    id: 95,
    value:
      'Onix is the longest Pokémon that can hatch from an Egg.'
  },
  {
    id: 96,
    value:
      'Drowzee is based on the Japanese myth of the baku, creatures who eat bad dreams of sleeping people.'
  },
  {
    id: 97,
    value:
      'Hypno in shiny form is purple/pink in color.'
  },
  {
    id: 98,
    value:
      'Krabby can grow back its pincers in a short amount of time if they are lost during battle.'
  },
  {
    id: 99,
    value:
      'Kingler mainly eat Shellder for their diet.'
  },
  {
    id: 100,
    value:
      'Voltorb has the lowest Attack stat of all Electric-type Pokémon.'
  },
  {
    id: 101,
    value:
      'Electrode is based on a living Poké Ball, and is often mistaken for one.'
  },
  {
    id: 102,
    value:
      'Exeggcute can be found in the Dream World in Pleasant Forest.'
  },
  {
    id: 103,
    value:
      'Exeggutor and its pre-evolved form are the only known Pokémon that learn Barrage.'
  },
  {
    id: 104,
    value:
      'Cubone is only 40cm in height and weighs 6.5kg.'
  },
  {
    id: 105,
    value:
      'Marowak sometimes is found holding a Thick Club, however it’s only a 5% chance since Generation III.'
  },
  {
    id: 106,
    value:
      'Hitmonlee is a combination of hit, monster and Lee, which references Bruce Lee.'
  },
  {
    id: 107,
    value: 'Hitmonchan is based on Jackie Chan.'
  },
  {
    id: 108,
    value:
      'Lickitung\'s name was misspelled "Likitung" in the Kanto Pokérap.'
  },
  {
    id: 109,
    value:
      'Koffing was originally known as "Ny", representing New York City’s polluted air.'
  },
  {
    id: 110,
    value:
      'Weezing has the highest Defense out of all Poison-type Pokémon.'
  },
  {
    id: 111,
    value:
      'Rhyhorn has the exact same cry as Charizard in the games.'
  },
  {
    id: 112,
    value:
      'Rhydon was the first Pokémon ever created!'
  },
  {
    id: 113,
    value:
      'Chansey is a female-only species with no male counterpart.'
  },
  {
    id: 114,
    value:
      'Tangela is the first pure Grass-type Pokémon in National Pokédex order, also the only pure Grass-type in Generation I.'
  },
  {
    id: 115,
    value:
      'Kangaskhan are born with a baby already in their pouch, the baby Kangaskhan is not a separate Pokémon.'
  },
  {
    id: 116,
    value:
      'Horsea cannot learn any physical attacks without TMs.'
  },
  {
    id: 117,
    value:
      "Seadra's are capable of swimming backwards while facing forward."
  },
  {
    id: 118,
    value:
      'Goldeen was one of three original Pokémon Misty acquired.'
  },
  {
    id: 119,
    value:
      'Seaking and its pre-evolved form are the only Pokémon that can learn Waterfall through leveling up.'
  },
  {
    id: 120,
    value:
      'Staryu\'s Japanese name is Hitodeman, which roughly translates to "starfish man".'
  },
  {
    id: 121,
    value: 'Starmie is a genderless species.'
  },
  {
    id: 122,
    value:
      'Mr. Mime are not all male, it is just as common to see a female.'
  },
  {
    id: 123,
    value:
      'Scyther hates the color red, according to the animé episode Showdown in Dark City.'
  },
  {
    id: 124,
    value:
      'Jynx is a female-only species, based on a fat, bulky human woman.'
  },
  {
    id: 125,
    value:
      'Electabuzz evolves into Electivire when traded holding an Electirizer.'
  },
  {
    id: 126,
    value:
      'Magmar first appeared under the ownership of Blaine.'
  },
  {
    id: 127,
    value:
      'Pinsir is currently the only non-Fighting-type Pokémon to learn Vital Throw.'
  },
  {
    id: 128,
    value:
      'Tauros is based on the Zodiac Taurus, the bull.'
  },
  {
    id: 129,
    value:
      'Magikarp living for many years can leap a mountain using Splash.'
  },
  {
    id: 130,
    value:
      'Gyarados has the greatest increase of its base stat total of any Pokémon compared to its pre-evolution.'
  },
  {
    id: 131,
    value:
      'Lapras has the highest base HP of all Ice-types.'
  },
  {
    id: 132,
    value: 'Ditto has the same cry as Poliwag.'
  },
  {
    id: 133,
    value:
      "Eevee's evolutionary family has the most evolutionary relatives out of any other Pokémon."
  },
  {
    id: 134,
    value:
      'Vaporeon is the only Eeveelution that does not share any weakness with another.'
  },
  {
    id: 135,
    value: 'Jolteon is the lightest Eeveelution.'
  },
  {
    id: 136,
    value:
      'Flareon is the only fully-evolved Fire-type Pokémon that cannot learn SolarBeam.'
  },
  {
    id: 137,
    value:
      'Porygon is the only Pokémon that evolves by trade twice.'
  },
  {
    id: 138,
    value:
      "Omanyte's are resurrected from a Helix Fossils."
  },
  {
    id: 139,
    value:
      'Omastar first appeared in episode 46, Attack of the Prehistoric Pokémon.'
  },
  {
    id: 140,
    value:
      'Kabuto and its evolved form are the only non-Steel-type Pokémon able to learn Metal Sound via leveling up.'
  },
  {
    id: 141,
    value:
      "Kabutops' scientific name is Kabutops maximis, it is one of two Pokémon to have a scientific name, the other being Oddish."
  },
  {
    id: 142,
    value:
      'Aerodactyl is the fastest Rock-type Pokémon, with a base Speed of 130.'
  },
  {
    id: 143,
    value:
      'Snorlax is the heaviest Pokémon that has a gender and the heaviest Normal-type Pokémon.'
  },
  {
    id: 144,
    value:
      'Articuno is the only Pokemon that did not appear in Season 1.'
  },
  {
    id: 145,
    value:
      'Zapdos and Jolteon have very similar names in Japanese: Zapdos is サンダー (Thunder), while Jolteon is サンダース (Thunders).'
  },
  {
    id: 146,
    value:
      'Moltres is the only Fire-type Pokémon to learn SolarBeam by level-up.'
  },
  {
    id: 147,
    value:
      'Dratini is the lightest Dragon-type Pokémon.'
  },
  {
    id: 148,
    value:
      'Dragonair was originally named "Dragyn".'
  },
  {
    id: 149,
    value: 'Dragonite are very rare in the wild.'
  },
  {
    id: 150,
    value:
      'Mewtwo is a clone of the Pokémon Mew, yet it comes before Mew in the Pokédex.'
  },
  {
    id: 151,
    value:
      'Mew was a little-known secret when Pokémon Red and Green were first released in Japan. Even Nintendo was not initially aware that Mew was programmed it into the game.'
  }
];

export default pokemonData;
