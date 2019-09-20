//adding university to the api
function addVarsity(){
          
    const newVasity = {};

    newVasity.university_name = document.getElementById("university_name").value;
    newVasity.university_description = document.getElementById("university_description").value;
    newVasity.website = document.getElementById("website").value;
    newVasity.telephone = document.getElementById("telephone").value;
    newVasity.email = document.getElementById("email").value;
    newVasity.city = document.getElementById("city").value;
    newVasity.country = document.getElementById("country").value;
    newVasity.province = document.getElementById("province").value;
    console.log(newVasity);
    var option = {
        method: 'POST',
        body: JSON.stringify(newVasity),
        headers:{
            'Content-Type': 'application/json'
        }
    };

    fetch('http://localhost:4000/putUniversities', option)
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


 function tableNames(){
    fetch('http://localhost:4000/selectNames')
    .then(res => res.json())
    .then(res => res.map(selctByname => selctByname))
    .then(name => document.getElementById("nameOption").innerHTML = name.map(data=>
        `<option>
            < id="university_name">${data.university_name}</td>
            <id="faculty_name">${data.faculty_name}</td>
        </option>`
    ).join(''));
 };


 //add course
 function addCourse(){
          
    const newCourse = {};

    newCourse.course_name = document.getElementById("course_name").value;
    // newVasity.university_description = document.getElementById("university_description").value;
    // newVasity.website = document.getElementById("website").value;
    // newVasity.telephone = document.getElementById("telephone").value;
    // newVasity.email = document.getElementById("email").value;
    // newVasity.city = document.getElementById("city").value;
    // newVasity.country = document.getElementById("country").value;
    // newVasity.province = document.getElementById("province").value;
    console.log(newCpourse);
    var option = {
        method: 'POST',
        body: JSON.stringify(newVasity),
        headers:{
            'Content-Type': 'application/json'
        }
    };

    fetch('http://localhost:4000/putUniversities', option)
    .then(res=> res.json());
};