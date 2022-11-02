window.onload = () => {
	const MenuIcon = document.querySelector('.icon-menu')
	const NavBar = document.querySelector(".navBar");
	
	if (MenuIcon){
		MenuIcon.addEventListener('click', () => {
			console.log('icon-menu')
			if (NavBar.style.display === 'block'){
				NavBar.style.display = 'none';
			}else {
				NavBar.style.display = "block";
			}
			// NavBar.style.display = 'none';
			
		})
	}
	
}