const inputValue = document.querySelector('#search');
const searchButton = document.querySelector('.searchButton');
const nameContainer = document.querySelector('.main__profile-name');
const unContainer = document.querySelector('.main__profile-username');
const ApiLocationn = document.querySelector('.main__profile-locationn ');
const urlContainer = document.querySelector('.main__profile-url');
const reposContainer = document.querySelector('.main__profile-repos');
const aboutUser = document.querySelector('.main__profile-bio');
const followers = document.querySelector('.main__profile-followers');
const colorsLi = document.querySelectorAll('.colors-list li');
const client_id = 'Iv1.b7e613a8682d8520';
const client_secret = '729bdae20d4c532a003cdab8691811d92b11c3cb';

window.onload = () => {
	inputValue.focus();
};

const fetchIUser = async (user) => {
	const api_call = await fetch(`https://api.github.com/users/${user}?client_id=${client_id}
 &client_secret=${client_secret}`);

	const data = await api_call.json();
	return { data };
};

// var mylink = document.getElementsByClassName('main__profile-url')

//     mee = appendchild(mylink)
// let toggleBtn = document.querySelector(".toggle-menu")
// let tLinks = document.querySelector(".links");

// toggleBtn.onclick = function (e) {

//   // Stop Propagation
//   e.stopPropagation();

//   // Toggle Class "menu-active" On Button
//     this.classList.toggle("menu-active")

//  // Toggle Class "open" On Links
//     tLinks.classList.toggle("open")
// };

colorsLi.forEach((li) => {
	//loop on list Items
	li.addEventListener('click', (e) => {
		console.log(e.target.dataset.color);
		//select color on root
		document.documentElement.style.setProperty('--main--color', e.target.dataset.color);

		let lilis = document.querySelectorAll('[data-color]');

		for (let i = 0; i < lilis.length; i++) {
			lilis[i].removeAttribute('class');
		}

		document.querySelector(`[data-color="${e.target.dataset.color}"]`).setAttribute('class', 'active');
	});
});

const showData = () => {
	fetchIUser(inputValue.value).then((res) => {
		console.log(res);

		nameContainer.innerHTML = `Name: <span class="main__profile-value">${res.data.name}</span>`;

		unContainer.innerHTML = `UserName: <span class="main__profile-value">${res.data.login}</span>`;

		reposContainer.innerHTML = `Repo: <span class="main__profile-value">${res.data.public_repos}</span>`;

		ApiLocationn.innerHTML = `Location: <span class="main__profile-value">${res.data.location}</span>`;

		urlContainer.innerHTML = `URL: <span class="main__profile-value">${res.data.html_url}</span>`;

		followers.innerHTML = `Followers: <span class="main__profile-value">${res.data.followers}</span>`;

		// aboutUser.innerHTML = `Bio: <span class="main__profile-value">${res.data.bio}</span>`
	});
};
searchButton.addEventListener('click', () => {
	showData();
});
