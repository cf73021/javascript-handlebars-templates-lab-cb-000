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
  var recipe = {name, description, ingredients, submitAction: 'createRecipe()'};
  var recipeFormTemplate = document.getElementById("recipe-form-template").innerHTML;
  var template = Handlebars.compile(recipeFormTemplate);
  document.getElementById("main").innerHTML = template(recipe);
}

function getRecipeVals(){
  var ingredientNodes = document.getElementsByName("ingredients");
  var ingredients = [];
  for (var i=0;i<ingredientNodes.length;i++){
    if(ingredientNodes[i].value !== "") {
      ingredients.push)ingredientNodes[i].value);
    }
  }
  var name = document.getElementById("name").value;
  var description = document.getElementById("description").value;
  var recipe = {name, ingredients, description};
  return recipe
}

function handlebarsSetup() {
  Handlebars.registerHelper('displayIngredient', function(ingredient){
    return new Handlebars.SafeString('<li name="ingredientsList">' + ingredient + '</li>')
  })
  Handlebars.registerPartial('recipeDetailsPartial', document.getElementById("recipe-details-partial").innerHTML)
}

function init() {
  handlebarsSetup();
  initForm();
}

document.addEventListener("DOMContentLoaded", function(event) {
  init()
})
