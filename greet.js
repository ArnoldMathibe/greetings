function Greeting(list){
    let greetCounter = 0;
    let emptyList = list || [];
    function englishGreeting(name){
            return 'Hello, ' + name;
        }
    function afrikaansGreeting(name){
            return "Hallo, " + name;
    }
    function isiXhosaGreeting(name){
            return "Molo, " + name;
    }
    function counter(){
        greetCounter = greetCounter+1;
        return greetCounter;
    }
    return{
        englishGreeting,
        afrikaansGreeting,
        isiXhosaGreeting,
        counter
        }
    }

    //take in names, and push into empty array
//check for duplicates, if the name is pushed for the first time
//function that is going to take in name and language and return greeting
//return the length of the array
//return all the names greeted