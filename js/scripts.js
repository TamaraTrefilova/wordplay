var arrays = [];
var newArrays = [];
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    arrays = $("input#inputItem").val();

    newArrays = arrays.split(" ");
    console.log(newArrays);
    arrays = [];
    console.log(arrays);
    newArrays.forEach(function(newArray){
      if(newArray.length>=3){
        arrays.push(newArray);
      }
    });
    arrays.reverse();
    var newString = arrays.join(" ");
      $("#new_sentence").text(newString);
      $(".output").show();
  });
});
