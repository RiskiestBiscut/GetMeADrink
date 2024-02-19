//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('.butt').addEventListener('click', getDrink)

function getDrink() {
    let drink = document.querySelector('input').value
    let url ="https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drink

fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        for (let i=0; i < data.drinks.length; i++) {
            let li = document.createElement("li");
            let img = document.createElement("img")
            let p = document.createElement("p")
            img.src = data.drinks[i].strDrinkThumb
            p.textContent = data.drinks[i].strDrink

            console.log(li, img, p)
            li.appendChild(img);
            console.log(li)
            li.appendChild(p);
            console.log(li)
            document.querySelector("ul").appendChild(li);

        }
                // console.log(data.drinks)
                // document.querySelector('h2').innerHTML = data.drinks[i].strDrink
                // document.querySelector('img').src = data.drinks[i].strDrinkThumb
                // document.querySelector('h3').innerHTML = data.drinks[i].strInstructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
