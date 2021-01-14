// console.log("Welcome to the main module")

// // The contents of this object will change depending on what today's special is
// let currentSpecial = {
//     name: "Fried Green Tomato BLT",
//     description: "So good you'll cry",
//     price: 9.99
//   }
  
//   // We'll use the object to build up an HTML string
//   let htmlString = `
//     <h3 class="dish-name">${currentSpecial.name}</h3>
//     <p class="dish-description">
//       ${currentSpecial.description}
//     </p>
//     <h5 class= "dish-price">${currentSpecial.price}</h5>
//   `
//   // Then we'll put the html string in the #daily-special div
//   document.querySelector("#daily-special").innerHTML = htmlString;


//   let menuItemsArray = ["Chicken tenders", "pizza", "spaghetti", "french fries", "pie"]

//   for(let i = 0; i < menuItemsArray.length; i++){
//     // target the menu items container and add a bullet for each item in the array
//     document.querySelector("#menu-items-container").innerHTML += `<li>${menuItemsArray[i]}</li>`
//   }

//   let choresArray = ['work', 'workign', 'wofdsaf', 'zzzzzz', 'fsafdsafdsa', 'threrere'];
//   //let choreTarget = document.querySelector('#chores').innerHTML 
  

//   for (let i = 0; i<choresArray.length; i++){
//       document.querySelector('#chores').innerHTML += `<h1>${choresArray[i]}</h1>`
//     }

    // let movieObject = {
    //     title: "Star Wars: A New Hope",
    //     genre: "Science Fiction",
    //     releaseDate: "May 25, 1977"
    //     }

    //     document.querySelector('#title').innerHTML = `<h1>${movieObject.title}</h1>`

    let downtownRestaurants = ["Backyard Pizza and Raw Bar", "The Bodega", "Surin of Thailand", "Bahnhof", "Jim's Steak and Spaghetti House", "The Peddler", "Jewel City Seafood Market", "Black Sheep Burritos & Brews", "La Famiglia", "Le Bistro", "Charlie Graingers", "The Cellar Door"]; 
    
// Loop over the downtownRestaurants array.
// Use the loop to create an <li> element for each item in the array.
// Use document.querySelector and .innerHTML to add each new <li> element to the #restaurants-list container.
// You should see a bulleted list of restaurants in the DOM.



// for(let i =0; i<downtownRestaurants.length; i++){
//     document.querySelector('#restaurants-list').innerHTML += `<li>${downtownRestaurants[i]}</li>`
// }

// let sandwichToppings = ["pickles", "extra cheese", "lettuce", "tomatoes", "avocado", "bacon", "mayo", "mustard"]

// function loopFood(arr){
// for(let i =0; i<arr.length; i++){
//          document.querySelector('#sandwich-container').innerHTML += `<li>${arr[i]}</li>`
//     }
// }

// loopFood(sandwichToppings)

let movieSchedule = [
    {
      title: "Ralph Breaks the Internet",
      rating: "PG",
      currentlyPlaying: true,
      poster: "https://lumiere-a.akamaihd.net/v1/images/r_ralphbreakstheinternet_header_ddt-17403_08ef6d92.jpeg?region=0,0,1024,1274&optimize=true"
    },
    {
      title: "The Grinch",
      rating: "G",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/71vgX4VFdiL._SY679_.jpg"
    },
    {
      title: "A Star is Born",
      rating: "R",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/718zWbDKmvL._SY606_.jpg"
    },
     {
      title: "Bohemian Rhapsody",
      rating: "PG-13",
      currentlyPlaying: true
    },
    {
      title: "Fantastic Beasts: The Crimes of Grindlewald",
      rating: "PG-13",
      currentlyPlaying: true,
      poster: "https://images-na.ssl-images-amazon.com/images/I/716fk%2BBZ-NL._SY606_.jpg"
    },
    {
      title: "Robin Hood",
      rating: "PG-13",
      currentlyPlaying: false,
      poster: "https://images-na.ssl-images-amazon.com/images/I/61K%2BTyGjsCL.jpg"
    },
    {
      title: "Spider-Man: Into the Spider-Verse",
      rating: "PG-13",
      currentlyPlaying: true,
    }
  ]

  for(let i =0; i<movieSchedule.length; i++){
      if(!movieSchedule[i].poster){
          movieSchedule[i].poster = "https://www.snhrc.com/wp-content/uploads/2018/09/Image-Coming-Soon.png"
      }
      
      if(movieSchedule[i].currentlyPlaying){
            document.querySelector('#target').innerHTML += `
            <div>
            <h3>${movieSchedule[i].title}</h3>
            <h3>${movieSchedule[i].rating}</h3>
            <h3>${movieSchedule[i].currentlyPlaying}</h3>
            <img src= ${movieSchedule[i].poster} width = "100px">
            </div>
            `
    }
}

