import {programmers as trainees} from './data.js'


initGridList();

// function initGridList() {
//     const containerElement = document.querySelector(".cv");
//     console.log("containerElement=", containerElement);
//     containerElement.innerHTML += `<div value = "Next Block"> </div>`;
//     trainees.forEach(function(cv) {
//         containerElement.innerHTML += `<div class="item">${cv.firstName} ${cv.lastName} ${cv.phone} ${cv.email} </div>`;
//     })
// }



function initGridList() {
    let box = document.querySelector(".cv");
    trainees.forEach(cv => {
        box.innerHTML += `<div class="item"><a href="#Narek?id=${cv.id}">${cv.firstName} ${cv.lastName}</a></div>`;
    })
}

function homePage() {
    let linkHome = document.querySelector(".linkHome");
    linkHome.innerHTML = `<a href="#home">Home</a>`
}
homePage();

function logIn() {
    let linkLogIn = document.querySelector(".linkLogIn");
    linkLogIn.innerHTML = `<a href="#logIn">Log In</a>`;
}
logIn();
// window.addEventListener("load", function () {
//     console.log("LOAD eventlistener called");
//   });


window.addEventListener("hashchange", function() {
    let homeBody = document.querySelector(".homeBody")
    let container = document.querySelector(".cv");
    let personalPage = document.querySelector(".box");
    let user = document.querySelector(".user");
    let linkLogIn = document.querySelector(".linkLogIn");
    let linkHome = document.querySelector(".linkHome");
    let linkNewbody = document.querySelector(".addNewBody")


    if (window.location.hash.includes("Narek")) {
        container.classList.add("hidden");
        personalPage.classList.remove("hidden");
        user.classList.add("hidden");
        //vercnel hash id , programmers[id]
        linkNewbody.classList.add("hidden");
        let hashArr = window.location.hash.split("=");
        let id = hashArr[1];
        const trayni = getUserById(id);
        addUserData(trayni);
    } else if (window.location.hash.includes("logIn")) {
        linkNewbody.classList.add("hidden");
        container.classList.add("hidden");
        personalPage.classList.add("hidden");
        user.classList.remove("hidden");
    } else if (window.location.hash.includes("home")) {
        linkNewbody.classList.add("hidden");
        container.classList.add("hidden");
        personalPage.classList.add("hidden");
        user.classList.add("hidden");
    } else if(window.location.hash.includes("addnew")){
        linkNewbody.classList.remove("hidden");
        container.classList.add("hidden");
        personalPage.classList.add("hidden");
        user.classList.add("hidden");
    }else{
        linkNewbody.classList.add("hidden");
        container.classList.remove("hidden");
        personalPage.classList.add("hidden");
        user.classList.add("hidden");
    }
});
function getUserById (id){ 
    const user =trainees.find(function (data) {
    return data.id == id;
  });
return user;

}


function addUserData(programmer) {
    console.log("personalData===", programmer);
    document.querySelector(".secondPageName").innerHTML = programmer.firstName + " " + programmer.lastName;
    document.querySelector(".phone").innerHTML = "phone: " + programmer.phone;
    document.querySelector(".email").innerHTML = "email: " + programmer.email;
    document.querySelector(".infoHeader").innerHTML = "education: " + programmer.education;
    document.querySelector(".infoWork").innerHTML = "workExperience: " + programmer.workExperience;
    document.querySelector(".trainings").innerHTML = "trainings: " + programmer.trainings;
}


// instanceOf
// Array.isArray(arr) 
// true/false
// if(arr instanceof Array)
// Narine Avetisyan10:21
// if(prop instanceOf Object)