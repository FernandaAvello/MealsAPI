function getRecipe(param) {
  url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${param}`;
  fetch(url).then(
    response => response.json()
    ).then(
      data => {
        const recipeData = data
        getCardRecipe(recipeData)
      })
    }

function searchRecipe() {
  let recipeSearch = document.getElementById('search-recipe').value;
  getRecipe(recipeSearch)
}

function getCardRecipe(recipeData) {
  document.getElementById('recipe-card').style.display= 'block'
  document.getElementById('meal-image').src = recipeData.meals[0].strMealThumb
  document.getElementById('meal-name').innerHTML = `Nombre: "${recipeData.meals[0].strMeal}"`
  document.getElementById('meal-category').innerHTML = `Categoría: ${recipeData.meals[0].strCategory}`
  document.getElementById('meal-area').innerHTML = `Área: ${recipeData.meals[0].strArea}`
  document.getElementById('meal-instructions').innerHTML = `Instrucciones: ${recipeData.meals[0].strInstructions}`
}
