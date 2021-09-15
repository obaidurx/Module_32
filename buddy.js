const loadBuddy =()=>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res=>res.json())
    .then(data=>displayBuddy(data))
}
loadBuddy()

const displayBuddy=(buddiesData)=>{
    const buddies=buddiesData.results;
    const buddiesDiv = document.getElementById('buddy');
    for (const buddy of buddies) {
        // console.log(buddy.name.title,buddy.name.first,buddy.name.last);
    const p = document.createElement('p');
       p.innerText=` 
       Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} 
       Email: ${buddy.email}
       `; 
       buddiesDiv.appendChild(p);
        
    }
}
