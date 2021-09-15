const searchFood = async () =>{
    const searchText =  document.getElementById('search-field');
    const searchInput = document.getElementById('search-field').value;
    // clear data 
    searchText.value = ''; 
    if (searchInput == '') {
        // nothing to do 
    }
    else {

        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`;
        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals);
        // fetch(url)
        // .then(res =>res.json())
        // .then(data => displaySearchResult(data.meals))
    }


}

    const displaySearchResult = meals=>{
        const searchResult = document.getElementById('search-result');
        searchResult.textContent='';
        if (meals.length == 0) {
        //    No result found
        }
        meals.forEach(meal => {
            
            const div=document.createElement('div');
            div.innerHTML=`
    <div onclick="loadMealDetail(${meal.idMeal})" class="col"> 
        <div class="card h-100">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
             <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions.slice(0,140)}</p>
            </div>
        </div>
    </div>
            `;
            searchResult.appendChild(div);
        });
    }
          

const loadMealDetail= async mealId=>{
    
   const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`

    const res = await fetch(url);
    const data = await res.json();
    displayMealResult(data.meals[0]);
   //    fetch(url)
//    .then(res=> res.json())
//    .then( data => displayMealResult(data.meals[0]))


}
const displayMealResult = meal =>{
    // console.log(meal);
    const mealDetail = document.getElementById('meal-detail');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML =`<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
      <p class="card-text">${meal.strInstructions.slice(0,130)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Watch How to Make ${meal.strMeal}</a>
    </div>`;

    mealDetail.appendChild(div);
}
