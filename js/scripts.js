$(function(){

var color;
var food;
var pet;

$("#form1").submit(function(event){
    color = $("input:radio[name=color]:checked").val();
    event.preventDefault();
    food = $("input:radio[name=food]:checked").val();
    event.preventDefault();
    pet = $("input:radio[name=animal]:checked").val();
    event.preventDefault();
})

})


// input -> var






//5 each group
//text fields
//if even group a else group b

//radios
// value 1-4

// score totals = character
