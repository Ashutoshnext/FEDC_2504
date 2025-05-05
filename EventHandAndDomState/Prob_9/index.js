let container = document.querySelector('.container')
let btn = document.querySelector('button');
let todo = document.querySelector('.todo');
let pagenationbox = document.querySelector('.displayPage')
let todobox = document.querySelector('.todobox')
let alldata = []
let perPage = 10;
let currentPage = 1;
let StartIndex = 0
let LastIndex = perPage
btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then(data => {
            alldata = [...data]
            fetchtodo(data.slice(StartIndex, LastIndex))
            displayPage(data)
        })


})

function fetchtodo(data) {
    todobox.innerHTML = " ";
    data.map((item) => {
        let div = document.createElement('div')
        div.classList.add('todo')
        let Title = document.createElement('h3')
        Title.textContent = item.title;
        let check = document.createElement('input')
        check.type = 'checkbox'
        check.checked = item.completed;
        // if(item.completed===true){
        //     check.checked = true;
        // }

        div.append(Title, check)
        todobox.append(div)

})
}

function displayPage(data) {
let totalPage = Math.ceil(data.length / perPage)

    console.log(totalPage);
    for (let i = 1; i <= totalPage; i++) {
        let btn = document.createElement('button');
        btn.textContent = i;
btn.addEventListener('click', () => {
            let StartIndex = perPage * (i - 1);
            let LastIndex = StartIndex + perPage;
            fetchtodo(alldata.slice(StartIndex, LastIndex))
           
})
pagenationbox.append(btn)
}

}