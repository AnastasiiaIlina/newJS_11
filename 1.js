// task 1

const btnGetUsers = document.querySelector("#btnGetUsers");
const outputAllUsers = document.querySelector("#outputAllUsers");

const getAllUsers = () =>  {
	fetch('http://fecore.net.ua/rest/',{
		 method: 'get',
		})

		.then(response => {
			if (response.ok) return response.json();
			throw new Error("Error fetching data");
		})

		.then(data => {
			// outputAllUsers.textContent = JSON.stringify(data);

			data.forEach((user) => {
				outputAllUsers.innerHTML+=`${user.name}, `;
			});
		})

		.catch(error => {
			console.error("Error: ", error);
    	});
};

btnGetUsers.addEventListener("click", getAllUsers);

// task 2
const btnGetUserById = document.querySelector("#btnGetUserById");

const getUserById = (id) =>  {
	const outputUserById = document.querySelector("#outputUserById").value;
	id=outputUserById;
	console.log(outputUserById);
	fetch('http://fecore.net.ua/rest/',{
		 method: 'get',
		})

		.then(response => {
			if (response.ok) return response.json();
			throw new Error("Error fetching data");
		})

		.then(data => {
			data.forEach((user) => {
				if(id===user.id){
				document.querySelector('#content').innerHTML=`Name - ${user.name}. Score - ${user.score}.`;
				}
			});

		})

		.catch(error => {
			console.error("Error: ", error);
    	});
};

btnGetUserById.addEventListener("click", getUserById);

// task 3

const btnAddUser = document.querySelector("#btnAddUser");
const addUser = (name, score) =>  {
	
	let outputAddUserName = document.querySelector("#outputAddUserName").value;
	let outputAddUserScore = +document.querySelector("#outputAddUserScore").value;
	name = outputAddUserName;
	score = outputAddUserScore;

	let url = `http://fecore.net.ua/rest/?action=1&name=${name}&score=${score}`;

	fetch(url,{
		 method: 'POST',
		})
	.then(data=>{
		document.querySelector('#content2').innerHTML=`Вы добавили пользователя ${name} с количеством очков ${score}`;
	})

		.catch(error => {
			console.error("Error: ", error);
    	})
	};

btnAddUser.addEventListener("click", addUser);

// task 4
const btnRemoveUser = document.querySelector("#btnRemoveUser");
const removeUser = (id) =>  {
	id = document.querySelector("#outputRemoveUser").value;

let url = `http://fecore.net.ua/rest/?action=3&id=${id}`;
	fetch(url,{
		 // method: 'delete',
		})

	.then(data=>{
		document.querySelector('#content3').innerHTML=`Пользователь с id ${id} успешно удален с БД`;
	})

	.catch(error => {
		console.error("Error: ", error)
    })
};
btnRemoveUser.addEventListener("click", removeUser);

// task 5

const btnUpdateUser = document.querySelector("#btnUpdateUser");
const updateUser = (id,user) =>  {
	id = document.querySelector("#outputUpdateUser").value;
let user1 = {
			name: document.querySelector('#name').value,
			score:document.querySelector('#score').value
		}
let url = `http://fecore.net.ua/rest/?action=2&id=${id}&name=${user1.name}&score=${user1.score}`;
	fetch(url,{
		 // method: 'delete',
		})

	.then(response => {
			if (response.ok) return response.json();
			throw new Error("Error fetching data");
		})

	.then(data=>{
		document.querySelector('#content4').innerHTML=`Данные пользователя с id ${id} успешно обновлены`;
	})

	.catch(error => {
		console.error("Error: ", error)
    })
};
btnUpdateUser.addEventListener("click", updateUser);