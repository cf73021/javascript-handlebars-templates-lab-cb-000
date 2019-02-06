function createRecipe() {
  var recipe = getRecipeVals();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function updateRecipe(){
  var recipe = getRecipeVals();
  var recipeTemplate = document.getElementById("recipe-template").innerHTML;
  var template = Handlebars.compile(recipeTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function displayEditForm(){
  var name = document.getElementById("nameHeader").innerHTML;
  var description = document.getElementById("recipeDescription").innerHTML;
  var ingredientNodes = document.getElementsByName("ingredientsList");
  var ingredients = [];
  for (var i=0; i<ingredientNodes.length;i++){
    ingredients.push(ingredientNodes[i].innerText);
  }
}

function init() {
  handlebarsSetup();
  initForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
