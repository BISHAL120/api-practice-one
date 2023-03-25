function loaddata(){
  fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
}
function loaduser(){
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => displayuser(data))
}

function loadpost(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then (post => console.log(post))
}
   
function displayuser(data){
  const ul = document.getElementById('users');
  //const title = document.getElementById('loadtitle') 
  for (const user of data){
    const li = document.createElement('li');
    li.innerText = `name:${user.name}--email:${user.email}`
    ul.appendChild(li);
  }
};

function loadtitle(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(post => displaytitle(post))
}

function displaytitle (post){
  const section = document.getElementById('title');
  for (const user of post){
    const div = document.createElement('div');
    section.appendChild(div);
    div.classList.add('post');
    const h2 = document.createElement('h2');
    h2.innerText = `Tittle:${user.title}`
    div.appendChild(h2);
    const body = document.createElement('p');
    body.innerText = `body:${user.body}`
    div.appendChild(body);
  } 

}
 

