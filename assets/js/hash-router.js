const pageTitle = "JS Single Page Application Router";
// create an object that maps the url to the template, title, and description
const routes = {
	"/": {
		page: "./Pages/index.html",
		title: "Home | " + TitreGeneral,
		description: "This is the home page",
	},
	"/about": {
		page: "./Pages/about.html",
		title: "About Us | " + TitreGeneral,
		description: "This is the about page",
	},
	"/contact": {
		page: "./Pages/contact.html",
		title: "Contact Us | " + TitreGeneral,
		description: "This is the contact page",
	},
	"/blog": {
		page: "./Pages/blog.html",
		title: "Blog | " + TitreGeneral,
		description: "This is the blog page",
	},
	"/portfolio": {
		page: "./Pages/portfolio.html",
		title: "PortFolio | " + TitreGeneral,
		description: "This is the portFolio page",
	},
	"/resume": {
		page: "./Pages/resume.html",
		title: "Resume | " + TitreGeneral,
		description: "This is the resume page",
	}
};

// create a function that watches the url and calls the urlLocationHandler
const locationHandler = async () => {
	// get the url path, replace hash with empty string
	let location = window.location.hash.replace("#", "");
	// if the path length is 0, set it to primary page route
	if (location.length === 0) {
		location = "/";
	}
	// get the route object from the routes object
	const route = routes[location] || routes["/"];
	// get the html from the template
	// set the content of the content div to the html
	document.getElementById("content").innerHTML = await fetch(route.page).then((response) => response.text());
	// set the title of the document to the title of the route
	document.title = route.title;
	// set the description of the document to the description of the route
	document
		.querySelector('meta[name="description"]')
		.setAttribute("content", route.description);
};
// create a function that watches the hash and calls the urlLocationHandler
window.addEventListener("hashchange", locationHandler);
// call the urlLocationHandler to load the page
locationHandler();