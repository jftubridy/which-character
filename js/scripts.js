$(function(){


$("#form1").submit(function(event){
    var color = $("input:radio[name=color]:checked").val();
    console.log(color);
    $("#test").text(color);
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
