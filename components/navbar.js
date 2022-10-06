function navbar() {
  return `<nav>
            <div><a href="../index.html">Foods<sub>Recipe</sub></a></div>
            <div>
                <input type="text" id="input_search" placeholder="Search Food Here...">
                <button>Search</button>
                <div id="search_result"></div>
            </div>
            <div>
            <button class="navBtn"><a href="../pages/recipeOfday.html">Recipe Of Day</a></button>
            <button class="navBtn"><a href="../pages/latest.html">Latest Recipe</a></button>
                 
            </div>
        </nav>
    `;
}

export default navbar;
