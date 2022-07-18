const nameElem = document.querySelector(".name");
const greetBtnElem = document.querySelector(".greetBtn");
const clearBtnElem = document.querySelector(".clearBtn");
const displayNameElem = document.querySelector(".displayName");

const languageRadioElem = document.querySelector(".languageRadio");
const langRadioXhosa = document.querySelector(".langRadioXhosa");
const langRadioEng = document.querySelector(".langRadioEng");
const langRadioAfr = document.querySelector(".langRadioAfr");
const greetCountElem = document.querySelector(".greetCount");

const errorMessage = document.querySelector(".error-message");
const langError = document.querySelector(".lang-error");

let greetings = Greeting();

var listName = [];
var checkedRadio = false;

greetCountElem.innerHTML = localStorage.getItem("list") === null ? 0
:JSON.parse(localStorage.getItem("list")).length;

langRadioEng.addEventListener("click", () => {
    checkedRadio = true;
});
langRadioAfr.addEventListener("click", () => {
    checkedRadio = true;
});
langRadioXhosa.addEventListener("click", () => {
    checkedRadio = true;
});

greetBtnElem.addEventListener("click", (e) => {
    e.preventDefault();
    var myName = nameElem.value;

    var checkedRadioBtn = document.querySelector("input[name='langRadio']:checked").value;

    if (myName === "" || myName === undefined) {
        errorMessage.style.display = "block";
        throw new Error("Please Enter A Name");
    }else if (/[0-9]/.test(myName)) {
        errorMessage.innerHTML = "Please Enter The Name With Only Letters";
        throw new Error("Please Enter The Name With Only Letters");
    }

    if (checkedRadio === false) {
        langError.style.display = "block";
        throw new Error("Please Select Greeting Language");
    }

    errorMessage.style.display = "none";
    langError.style.display = "none";

    if(checkedRadioBtn === 'english'){
        displayNameElem.innerHTML = greetings.englishGreeting(myName);
        //console.log(localStorage.getItem("list"));
        }
    if(checkedRadioBtn === 'afrikaans'){
        displayNameElem.innerHTML = greetings.afrikaansGreeting(myName);
        }
    if(checkedRadioBtn === 'isiXhosa'){
        displayNameElem.innerHTML = greetings.isiXhosaGreeting(myName);
        } 

        //  if (!listName.includes(myName)) {
        //      alert("Name Already Exists")
        //      listName.push(myName);
        //  }

        if (listName.indexOf(myName) < 0) {
            listName.push(myName);
        }
        // if (localStorage.getItem('list') === null) {
        //     listName = [];
        // }else{
        //     listName = JSON.parse(localStorage.getItem('list'));
        // }

        //listName.push(myName);
        localStorage.setItem("list", JSON.stringify(listName));
        localStorage.getItem("list", JSON.stringify(listName));
        greetCountElem.innerHTML = localStorage.getItem("list") === null ? 0 
        : JSON.parse(localStorage.getItem("list")).length;

});

clearBtnElem.addEventListener("click", (e) => {
    e.preventDefault();
    displayNameElem.innerHTML = "";
    localStorage.clear("list", JSON.stringify(listName));
    greetCountElem.innerHTML = localStorage.getItem("list") === null ? 0 
        : JSON.parse(localStorage.getItem("list")).length;
})
    
