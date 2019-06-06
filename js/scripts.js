$(function(){

//Backend Logic
var color;
var food;
var pet;
var total;
var name;
var calc = function (color,food,pet) {
  return color+food+pet;
}








$("#form1").submit(function(event){
    name = $("input#name1").val();

    color = parseInt($("input:radio[name=color]:checked").val());
    event.preventDefault();
    food = parseInt($("input:radio[name=food]:checked").val());
    pet = parseInt($("input:radio[name=animal]:checked").val());

    total = calc(color,food,pet);

      if (name.length % 2 ==0) {
      // if () {
        $(".personB1").text(total)
      } else if (name.length % 2 ==1){
        $(".personB2").text(total)
      } else {

      }


})





})






//5 each group
//text fields
//if even group a else group b

//radios
// value 1-4

// score totals = character
