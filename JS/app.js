function loadTodos(){
    fetch('https://jsonplaceholder.typicode.com/todos')
.then(response=>response.json())
.then(data =>console.log(data))
}

function userData(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>displayUserData(data))
}
function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=>console.log(data));
}
function displayUserData(data){
    const ul = document.getElementById('users')
     for (const user of data) {
     const li = document.createElement('li');
     li.innerText = `Name: ${user.name}  Email: ${user.email}`;
     ul.appendChild(li);         
     }
}