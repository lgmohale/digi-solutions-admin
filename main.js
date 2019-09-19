function getValue(id){
    return document.getElementById(id).value;
};

//adding university to the api
function addVarsity(){
          
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

    fetch('http://localhost:4000/university/add', option)
    .then(res=> res.json());
};

//displaying university from the api
function showVarsity(){
    fetch('http://localhost:4000/getUniversities')
    .then(res => res.json())
    .then(res => res.map(varsity => varsity))
    .then(varsityData => document.getElementById("vtable").innerHTML = varsityData.map(data=>
        `<tr>
            <td id="id">${data.university_id}</td>
            <td id="name">${data.university_name}</td>
            <td id="website">${data.website}</td>
            <td id="telephone">${data.telephone}</td>
            <td id="email">${data.email}</td>
            <td id="city">${data.city}</td>
            <td id="province">${data.province}</td>
        </tr>`
    ).join(''));
 };