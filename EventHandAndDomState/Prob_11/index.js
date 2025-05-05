let UserList = document.querySelector('.userlist');
let SelectedSort = document.querySelector('#selectsort')
let maindata = []

async function User() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users")
    let userData = await response.json()
    maindata = [...userData]
    DisplayUser(userData)

  } catch (error) {
    console.log(error)
  }
}
User()


function DisplayUser(userData) {

  userData.map((item) => {
    let div = document.createElement('div');
    div.classList.add('CardUser')
    let Username = document.createElement('h4')
    let name = document.createElement('h5')
    let email = document.createElement('p')
    Username.textContent = `UserName : ${item.username}`;
    name.textContent = `Name : ${item.name}`;
    email.textContent = `Email : ${item.email}`;
    div.append(Username, name, email);
    UserList.append(div)

  })
}
SelectedSort.addEventListener('change', () => {
  UserList.innerHTML = " "
  const criteria = SelectedSort.value;
  const sortedUsers = [...maindata].sort((a, b) => a[criteria].localeCompare(b[criteria]));
  DisplayUser(sortedUsers);

});


