// jQuery is a JS library
// that means jQuery is JS
// jQuery can't live without JS

// jQuery allows you to change stuff but doesn't keep track odf the changes
// in a big......this is CONFUSING

// react, angular and vue are the answer to this

// jQuery directly manipulates the DOM
// this is expensive (takes a lot of resources)

// react and other use "virtual DOM" which is

// a $ means I am writing JS but not just any JS, jQuery!

// targetting stuff
// instead of document.getElementById, document.getElementsByClassName, etc
// $ use dollar sign

$("#row")
console.log($("#row p"))

// jquery targets with css rules
// jquery adds listeners as methods
// click = .click()
// listener takes 1 arg: code to run when event happens
$("#hide").click(function(){
    $("#thing").hide();
});

$("#show").click(function(){
    $("#thing").show();
});

$("#toggle").click(function(){
    $("#thing").toggle();
});

$("#html").click(function(){
    $("#thing").html("<p>new html here</p>")
});

$("#text").click(function(){
    $("#thing").text("<p>new html here</p>")
});

$("#css").click(function(){
    // .css takes a JS object
    // a key is a string for any css property
    // value is what you want to apply
    // same as .style.property = value
    $("#thing").css({
        "background-color": "green",
        "border-radius": "50%",
        "font-size": "100px",
    })
});

$("#add-class").click(function(){
    $("#thing").addClass("btn-danger");
});

$("#toggle-class").click(function(){
    $("#thing").toggleClass("btn-danger");
});

$("#prepend").click(function(){
    $("#thing").prepend("some prepended text");
});

$("#append").click(function(){
    $("#thing").append("some appended text");
});

$("#fade-out").click(function(){
    // fadeToggle works the same as toggle but it adds an animated fade
    $("#thing").fadeToggle(1500);
});

$("#slide-out").click(function(){
    // slideToggle works the same as toggle but it adds an animated slide
    $("#thing").slideToggle(1500);
});

$("#animate").click(function(){
$("#thing").animate({
    "height" : "200px",
    "margin-left" : "100px",
},3000);
});

$("#goodbye").click(function(){
    $("#thing").animate({
        "margin-left" : "1000px",
    },3000);
    });

$("#hello").click(function(){
    $("#thing").animate({
        "margin-left" : "0",
    },1000);
    });