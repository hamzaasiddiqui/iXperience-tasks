import React, { useEffect, useState } from "react";
import Recipe from "../../models/recipe";

export default function RecipePage() {
  const API_APP_ID = "22cb6f2b";
  const API_APP_KEY = "82557cb472daf0f9300029f601144211";

  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState([]);
  const [query, setQuery] = useState("chicken");

  let url = `https://api.edamam.com/search?q=${query}&app_id=${API_APP_ID}&app_key=${API_APP_KEY}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  async function getRecipes() {
    const response = await fetch(url);
    const data = await response.json();
    setRecipe(data.hits);
  }

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();

    setQuery(search);

    setSearch("");
  };

  return (
    <div className="p-3 m-3 border border-3 border-white rounded">
      <form onSubmit={getSearch}>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Search Recipe"
            value={search}
            onChange={updateSearch}
          />
          <button class="btn btn-outline-light" type="button">
            GetRecipe
          </button>
        </div>
      </form>

      <div className="d-flex flex-wrap justify-content-center">
        {recipe.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            mealType={recipe.recipe.mealType}
            img={recipe.recipe.image}
            cuisineType={recipe.recipe.cuisineType}
            ingredients={recipe.recipe.ingredients}
            calories={recipe.recipe.calories}
          />
        ))}
      </div>
    </div>
  );
}
