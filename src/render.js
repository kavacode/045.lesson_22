export function displayUsers(users) {
	const userListElement = document.getElementById('userList');
 
	const userListHTML = users.map(user => `
	  <div key="${user.id}">
		 <p>ID: ${user.id}</p>
		 <p>Name: ${user.name}</p>
		 <p>Age: ${user.age}</p>
		 <p>Email: ${user.email}</p>
		 <p>Country: ${user.country}</p>
		 <p>Company: ${user.company}</p>
		 <p>Birthday: ${user.birthday}</p>
		 <hr />
	  </div>
	`).join('');
 
	userListElement.innerHTML = userListHTML;
 }
 