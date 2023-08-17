const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people:[],
			planets:[],
			starships:[],
			favorites:[],
			imageCharacter:[],
			imagePlanet:[],
			imageStarship:[]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				const fetchPeople = fetch(`https://www.swapi.tech/api/people?page=2&limit=10`).then(res => res.json());
				const fetchPlanets = fetch(`https://www.swapi.tech/api/planets?page=2&limit=10`).then(res => res.json());
				const fetchStarships = fetch(`https://www.swapi.tech/api/starships?page=2&limit=10`).then(res => res.json());
			  
				Promise.all([fetchPeople, fetchPlanets, fetchStarships])
				  .then(([peopleData, planetsData, starshipsData]) => {
					const updatedPeople = peopleData.results.map(character => {
					  const uid = parseInt(character.uid);
					  const imageCharacter = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;
					  return { ...character, imageCharacter };
					});
			  
					const updatedPlanets = planetsData.results.map(planet => {
					  const planetID = parseInt(planet.uid);
					  const imagePlanet = `https://starwars-visualguide.com/assets/img/planets/${planetID}.jpg`;
					  return { ...planet, imagePlanet };
					});
			  
					const updatedStarships = starshipsData.results.map(starship => {
					  const starshipID = parseInt(starship.uid);
					  const imageStarship = `https://starwars-visualguide.com/assets/img/starships/${starshipID}.jpg`;
					  return { ...starship, imageStarship };
					});
			  
					setStore({
					  people: updatedPeople,
					  planets: updatedPlanets,
					  starships: updatedStarships,
					  imageCharacter:imageCharacter,
					  imagePlanet:imagePlanet,
					  imageStarship:imageStarship
					});
				  })
				  .catch(err => console.error(err));
			  }
			  ,
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorites:(moreFavorite)=>{
				const store = getStore();
				const favorite = store.favorites.concat(moreFavorite);
				setStore({ favorites: favorite });
			},
			removeFavorites:(index)=>{
				const store = getStore();
				const favorite = store.favorites.filter((c, i) => {
					return index !== i
				});
				setStore({ favorites: favorite });
			}
		}
	};
};

export default getState;
