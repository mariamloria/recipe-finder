const API = "https://www.themealdb.com/api/json/v1/1";
const Btn = document.getElementById("btn");
const input = document.getElementById("input");
const recipes = document.getElementById("recipes");


Btn.addEventListener("click", searchRecipes);
async function searchRecipes() {
  const query = input.value.trim();

  const response = await fetch(`${API}/search.php?s=${query}`);
  const monacemebi = await response.json();

  console.log(monacemebi);

  recipes.innerHTML = "";

  if (!monacemebi.meals) {
    recipes.innerHTML = `
        <a href="https://www.youtube.com/results?search_query=${query}" class="link" target="_blank">
            დააჭირე რომ გადახვიდე იუთუბზე"${query}"
        </a>
    `;
    return;
}

  monacemebi.meals.forEach(meal => {
      recipes.innerHTML += `
      <a href="${meal.strYoutube || `https://www.youtube.com/results?search_query=${meal.strMeal}`}" target="_blank">
      <div class="card">
              <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
              <h3>${meal.strMeal}</h3>
          </div>
          </a>
      `;
  });
}