const TitreGeneral = "Herman JS unique Page";

// ecouter les evenements dans le nav links
document.addEventListener("click", (e) => {
	const { target } = e;
	if (!target.matches("nav ul li a")) {
		return;
	}
	e.preventDefault();
	urlRoute();
});

// creation d'un objet pour mapper les url des pages et le titre de chaque page pour le rendre dynamique
const urlRoutes = {
	"/": {
		page: "/Pages/index.html",
		title: "Home | " + TitreGeneral,
	},
	"/about": {
		page: "/Pages/about.html",
		title: "About Us | " + TitreGeneral,
	},
	"/contact": {
		page: "/Pages/contact.html",
		title: "Contact Us | " + TitreGeneral,
	},
	"/blog": {
		page: "/Pages/blog.html",
		title: "Blog | " + TitreGeneral,
	},
	"/portfolio": {
		page: "/Pages/portfolio.html",
		title: "PortFolio | " + TitreGeneral,
	},
	"/resume": {
		page: "/Pages/resume.html",
		title: "Resume | " + TitreGeneral,
	}
};

// creation d'une fonction qui observe les urls et les appels avec leur localisation specifics
const urlRoute = (event) => {
	event = event || window.event; // get window.event if event argument not provided
	event.preventDefault();
	// window.history.pushState(state, unused, target link);
	window.history.pushState({}, "", event.target.href);
	urlLocationHandler();
};

// create a function that handles the url location
const urlLocationHandler = async () => {
	let location = window.location.pathname; // obtenir url de la page
	// s'il n'y a rien apres le / 0, ouvrir l'index page
	if (location.length === 0) {
		location = "/";
	}
	// obtenir l'objet route depuis la variable urlRoutes
	const route = urlRoutes[location] || urlRoutes["/"];
	// recevoir le contenu html de la page et le mettre dans le div de Id content
	document.getElementById('content').innerHTML = await fetch(route.page).then((response) => response.text());
	// ajouter un titre dynamique au document selon la page
	document.title = route.title;
};

// scouter le changement dans l'url pour modifier le contenu selon le changement
window.onpopstate = urlLocationHandler;
// appeler la fonction urlLocationHandler pour gérer l'url initiale
window.route = urlRoute;
urlLocationHandler();