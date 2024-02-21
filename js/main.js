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
            img.classList.add('listImg')
            li.classList.add('list')

            //append elements in DOM
            li.appendChild(img);
            li.appendChild(p);
            document.querySelector("#container").appendChild(li);

            setSelectors()
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });

   
}


function openDrinkItem(e) {
    document.querySelector('.detailView').classList.remove('hidden')
    let drink = e.target.nextSibling.textContent
    console.log(drink)
    let url ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        document.querySelector('.detailImg').src = data.drinks[0].strDrinkThumb
        document.querySelector('.detailTitle').textContent = data.drinks[0].strDrink
        for (let i=0; i<15; i++) {
            if (data.drinks[0][`strIngredient${i}`] ) {
                let li = document.createElement("li");
                li.textContent = data.drinks[0][`strIngredient${i}`]
                li.classList.add('detailList')
                console.log(li)
                document.querySelector('#detailContainer').appendChild(li)
            }
        }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}