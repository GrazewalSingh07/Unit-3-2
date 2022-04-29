var amar={
    name:"Amar",
    occupation:"Singer",
    city:"Goa",
    skill: function (){
    return this.occupation
    }
}
var akbar={
    name:"Akbar",
    occupation:"Chef",
    city:"Goa",
    skill: function (){
        return this.occupation
    }
}
var anthony={
    name:"Anthony",
    occupation:"Magician",
    city:"Kashmir",
    skill: function (){
        return this.occupation
    }
}
console.log("Akbar" +" "+ akbar.skill.call(anthony))
console.log(anthony.skill.call(akbar))
console.log(anthony.skill.call(amar))
console.log(akbar.skill.call(amar))
