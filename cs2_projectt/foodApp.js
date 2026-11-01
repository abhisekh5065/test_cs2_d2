// Query Param technique 
// URL : it load whole data 
// URL?key=value    it search information base upon value if present it return data else return null

let BASE_URL = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function loadFoodDetails() {

    // get the food name from input field.
    let foodName = document.getElementById("foodName").value;

    let API_URL = BASE_URL + foodName;

    fetch(API_URL)
    .then(response => response.json())
    .then(result => {
        let foodDetails = result.meals;

        // Clear previous search results
        document.getElementById("result").innerHTML = "";

        if (foodDetails == null) {
            document.getElementById("result").innerHTML =
                "No Food Found";
            return;
        }

        foodDetails.forEach(menu => {

            let divTag = document.createElement("div");

            // Image creation and set attribute
            let foodImage = document.createElement("img");

            foodImage.setAttribute("src", menu.strMealThumb);
            foodImage.setAttribute("width", "150px");
            foodImage.setAttribute("height", "150px");

            let foodNameTag = document.createElement("b");

            let foodNameContent =
                document.createTextNode(menu.strMeal + " : ");

            foodNameTag.appendChild(foodNameContent);

            let foodDescriptionTag =
                document.createElement("i");

            let foodDescriptionContent =
                document.createTextNode(menu.strInstructions);

            foodDescriptionTag.appendChild(foodDescriptionContent);

            divTag.appendChild(foodImage);
            divTag.appendChild(document.createElement("br"));
            divTag.appendChild(foodNameTag);
            divTag.appendChild(foodDescriptionTag);

            // Append div tag to existing result section
            document.getElementById("result").appendChild(divTag);

            divTag.appendChild(document.createElement("hr"));

        });

    })
    .catch(error => console.log(error))
    .finally(() => console.log("Data Loaded.."));
}


// Keyup event - search while typing
document.getElementById("foodName")
.addEventListener("keyup", function() {

    loadFoodDetails();

});