// class person {
//   constructor(name,food,energy,mood){
//   this.name = name;
//   this.food = food;
//   this.energy = energy;
//   this.mood = mood;
// }

// setName(name) {
//   this.name = name;
//  }
// }
// const person1 = new person ('Toma',1,4,3)
// console.log(person1)
class createTamagochi {
    constructor(name, food, energy, mood){
    this.name = name;
    this.food = food;
    this.energy = energy;
    this.mood = mood;
};

getStatus(){
let foodStatus = this.food < 3 ? `Я голоден (${this.food})` : 'Я сыт';
let energyStatus = this.energy < 3 ? `Я хочу спать (${this.energy})` : 'Я не хочу спать';
let moodStatus = this.mood < 3 ? `Мне скучно (${this.mood}) ` : 'Мне весело';

console.log(`Еда: ${foodStatus} ; Энергия: ${energyStatus}; Натсроение: ${moodStatus} ;`);

if(this.food <= 0 || this.energy <= 0 || this.mood <= 0){
  console.log(`${this.name} умер :(`)
}

}

setName (name){
  this.name = name
}

eat (){
  if(this.food < 5){
  this.food++
  this.mood--
} console.log()
}

sleep(){
if(this.energy < 5){
  this.energy++
  this.food--
}
}

play(){
  if(this.mood < 5){
    this.mood++
    this.energy--
  }
}

}


 const tmg = new createTamagochi('adasd',1,3,4)
 tmg.eat()
tmg.getStatus()
console.log(tmg)