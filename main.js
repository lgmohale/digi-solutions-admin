function getValue(id){
    return document.getElementById(id).value;
};

//adding university to the api
function addUser(){
          
    const newVasity = {};

    newVasity.name = getValue("name");
    newVasity.email = getValue("email");
    newVasity.contactno = getValue("contactno");
    newVasity.address = getValue("address");
    newVasity.city = getValue("city");
    newVasity.country = getValue("country");
    newVasity.postcode = getValue("postcode");
    newVasity.about = getValue("about");

    
    var option = {
        method: 'POST',
        body: JSON.stringify(newVasity),
        headers:{
            'Content-Type': 'application/json'
        }
    };

    fetch('1', option)
    .then(res=> res.json());
};

//displaying university from the api
function display(){
    fetch('http://localhost:4000/universities')
    .then(res => res.json())
    .then(res => res.map(varsity => varsity))
    .then(varsityData => document.getElementById("vtable").innerHTML = varsityData.map(data=>
        `<tr>
            <td id="id">${data.id}</td>
            <td id="name">${data.name}</td>
            <td id="email">${data.email}</td>
            <td id="contactno">${data.contactno}</td>
            <td id="address">${data.address}</td>
        </tr>`
        ).join(''));
 };