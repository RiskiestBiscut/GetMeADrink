// submit cocktail choice on click
document.querySelector('.butt').addEventListener('click', getDrink)

// submit cocktail choice on enter key
document.querySelector('.textInput').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector(".butt").click();
    }
  });

 function setSelectors() {
    let drinkItem = document.querySelectorAll('img')

    for (let i=0; i < drinkItem.length; i++) {
      drinkItem[i].addEventListener('click', openDrinkItem)
    }
 }

function getDrink() {
    let drink = document.querySelector('input').value
    let url ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink
    

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        //loop through queried drink array
        for (let i=0; i < data.drinks.length; i++) {
            //create needed DOM elements
            let li = document.createElement("li");
            let img = document.createElement("img")
            let p = document.createElement("p")
            //attach content to DOM elements
            img.src = data.drinks[i].strDrinkThumb
            p.textContent = data.drinks[i].strDrink

            //append elements in DOM
            li.appendChild(img);
            li.appendChild(p);
            document.querySelector("ul").appendChild(li);

            setSelectors()
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

   
}


function openDrinkItem(e) {
    let drink = e.target.textContent
    let url ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink
    console.log("clicked")
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}