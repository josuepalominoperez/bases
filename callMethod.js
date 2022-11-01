const person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  }
  const person1 = {
    firstName:"John",
    lastName: "Doe"
  }
  const person2 = {
    firstName:"Mary",
    lastName: "Doe"
  }
  document.write(person.fullName.call(person1)); // John Doe




  //The call() Method with Arguments
  const personX = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
  
  const person3 = {
    firstName:"Lucho",
    lastName: "YK"
  }
  
  person.fullName.call(person3, "Oslo", "Norway"); //John Doe,Oslo,Norway