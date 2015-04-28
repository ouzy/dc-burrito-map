var data = {
	locations: [{	
		name: 'Pica Taco #2',
		street: '1406 Florida Ave NW',
		street2: 'Washington, DC 20009',
		latitude: 38.919771,
		longitude: -77.032472
	},
	{
		name: 'District Taco (M Street)',
		street: '1919 M St NW',
		street2: 'Washington, DC 20036',
		latitude: 38.9059623,
		longitude: -77.0444798
	},
	{
		name: 'District Taco (F Street)',
		street: '1309 F St NW',
		street2: 'Washington, DC 20004',
		latitude: 38.8981807,
		longitude: -77.0382357
	},
	{
		name: "Chinito's Burritos",
		street: '635 Florida Ave NE',
		street2: 'Washington, DC 20002',
		latitude: 38.905222,
		longitude: -76.996369
	},
	{
		name: "Burrito Brothers",
		street: '205 Pennsylvania Ave SE',
		street2: 'Washington, DC 20003',
		latitude: 38.8872,
		longitude: -77.003164
	},
	{
		name: "The Well Dressed Burrito",
		street: '1220 19th St NW (in the alley)',
		street2: 'Washington, DC 22036',
		latitude: 38.906561,
		longitude: -77.043742
	},
	{
		name: "Pedro and Vinny's Burrito Cart",
		street: '1500 K St NW',
		street2: 'Washington, DC 20005',
		latitude: 38.902076,
		longitude: -77.034887
	}]
};

Router.configure({
	layoutTemplate: 'main',
});

Router.route('home', {
	path: '/'
});

Template.list.helpers(data); 

