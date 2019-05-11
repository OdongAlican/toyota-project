

// Adding javascript methods and properties to objects 


// Adding properties and methods to a new javaScript object called computer
const computer = new object();
computer.Color = "black";
computer.size = "21 inches";
computer['weight'] = "15 kg";
computer.typeOf = function(){
    alert('this is a brand new laptop computer');
    return "if the size is less than " + this.size + "then its a laptop"
};

computer.portability = function(){
        alert("this is a dekstop")
    return this.size + this.weight;
};
computer.operation = function(){
    return "A laptop can work without constantly connecting it to a power source"
}


// Adding properties and methods to a new javaScript object called operatingSystem
const operatingSystem = new object();
operatingSystem.openSource = "Linux";
operatingSystem.highSecurity = "Macintosh";
operatingSystem.virusProne = "Windows";
operatingSystem.dualBoot = function(){
    return "both" + operatingSystem.openSource + "and" + operatingSystem.virusProne 
        + "can be used on dual boot";
}
operatingSystem.compatibility = function(){
    return "A" + operatingSystem.virusProne + "operating system can not be installed on a " 
        + operatingSystem.highSecurity + "computer";
}
operatingSystem.accessibility = function(){
    return "One can easily download a" + operatingSystem.virusProne + "operating system or a " 
        + operatingSystem.openSource + "operating system" 
}

// Adding properties and methods to a new javaScript object called medicalExpert
const Doctors = new object();
Doctors.age = 25;
Doctors.name ="Sunday";
Doctors.yearOfExperience = "below 5 years"
Doctors.operation = function(){
   return "My name is " +  this.name + "and i am" + this.age;
}
Doctors.councelling = function(){
   return "Any person below " + this.age + "is considered an experienced nurse"
}
Doctors.consultancy = function(){
   return "Everyone having" + this.yearOfExperience + " in medical field is a trainee"
} 


// Adding properties and methods to a new javaScript object called sportsPerson
const Athlete = new object();
Athlete['age'] = 25;
Athlete.gender = "male";
Athlete.numberOfGames = "3";
Athlete.footWare = "boots";
Athlete.jersey = "addidas"
Athlete.levelofExperience = function(){
   return "All " + this.gender + "footballers claim to be below " + this.age + "years old";
}
Athlete.typeOfSport = function(){
   return "he plays more than" + this.numberOfGames + "games";
}
Athlete.dressCode = function(){
   return "he wares" + this.footWare + "and" + this.jersey;
}


// Adding properties and methods to a new javaScript object called television
const television = new object();
television.color = "green";
television.screenSize = "13 inches";
television.price = (200,000 + " shillings");
television.screenDimensionDisplay = "2D";
television.screenColorDisplay = "Black and white";
televisio.origin = "China";
television.typeOfTelevision = function(){
   return "if it a " + this.color + "television and the size is " + this.screenSize + "then it must cost " 
   + this.price; 
}
television.operation = function(){
   return "if it is a " + this.screenDimensionDisplay + "TV and the display color is " + this.screenColorDisplay  + " then it must cost less than " + this.price;
}
televison.make = function(){
    return "if its display is " + this.screenColorDisplay + " then its from " + this.origin;
}
