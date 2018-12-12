$("#empty").click(function(){
    $("#modified-text").empty();
});

$("#remove").click(function(){
    $("#modified-text").remove("p");
});

$("#replace").click(function(){
    $("#modified-text").replaceWith("YOU REPLACED ME?!");
});

$("#outer-height").click(function(){
    $("#modified-text").outerHeight();
});

$("#outer-height-margin").click(function(){
    $("#modified-text").outerHeight(true);
});