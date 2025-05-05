let paginationbox = document.querySelector('.paginationbox');
let todobox = document.querySelector('.todobox')
let fetchbtn = document.querySelector('button')
let page = 1;
let perPageUser = 6
let userData = []
fetchbtn.addEventListener('click', async () => {
    let response = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if (!response.ok) {
        throw new Error("Error fetching user data")
    }
    let data = await response.json();
    userData = [...data]
    fetchUser(userData.slice(0,perPageUser))
    displaypage(userData)
})

function fetchUser(userData) {
    todobox.innerHTML=" ";
    userData.map((item) => {
        let div = document.createElement('div')
        div.classList.add('UserCard')
        let userName = document.createElement('h3');
        let userFullName=document.createElement('h4');
        let Email=document.createElement('p');
        let City=document.createElement('p');
        let Street=document.createElement('p');
        let Zipcode=document.createElement('p');
        
        userName.textContent = `User: ${item.username}`;
        userFullName.textContent=`User Name : ${item.name}`
        Email.textContent=`User Email : ${item.email}`
        City.textContent=`City : ${item.address.city}`
        Street.textContent=`Street : ${item.address.street}`
        Zipcode.textContent=`Zip-code : ${item.address.zipcode}`

        div.append(userName,userFullName,Email,City,Street,Zipcode)
        todobox.append(div)
    })
}

function displaypage(data){
let totaPage=Math.ceil(data.length/perPageUser)
for(let i=1;i<=totaPage;i++){
    let pagebtn=document.createElement('button');
    pagebtn.textContent=i
    paginationbox.append(pagebtn)
    pagebtn.addEventListener('click',()=>{
        fetch(`https://jsonplaceholder.typicode.com/users?_page=${i}&_limit=${perPageUser}`)
        .then(res=>res.json())
        .then(data=>fetchUser(data))
    
        
    })
}
}