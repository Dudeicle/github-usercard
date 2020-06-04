/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/


axios.get("https://api.github.com/users/Dudeicle")

.then(response => {
  let newCard = cardMaker(response.data)
  console.log(newCard)
  document.querySelector('.cards').appendChild(newCard)
})
.catch(error => {
  console.log(error)
})

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ["https://github.com/MaryamMosstoufi", "https://github.com/sage-jordan", "https://github.com/jduell12", "https://github.com/emilioramirezeguia", "https://github.com/Roboblox"];

let followerCards = followersArray.map((arrayItem) => {
  axios.get(arrayItem)
    .then(response => {
      let newCard = cardMaker(response.data)
      document.querySelector('.cards').appendChild(newCard)
    })
    .catch(error => {
      console.log(error)
    })
  });

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">                          // div
      <img src={image url of user} />             // img
      <div class="card-info">                     // div
        <h3 class="name">{users name}</h3>          // h3
        <p class="username">{users user name}</p>   // p
        <p>Location: {users location}</p>           // p
        <p>Profile:                                 // p
          <a href={address to users github page}>{address to users github page}</a>       // a
        </p>                                        
        <p>Followers: {users followers count}</p>   // p
        <p>Following: {users following count}</p>   // p
        <p>Bio: {users bio}</p>                     // p
      </div>                                      
    </div>                                      
*/



function cardMaker (data) {

  const card = document.createElement('div')
  

  const cardImg = document.createElement('img')
  card.classList.add('card')
  card.appendChild(cardImg)

  const cardInfo = document.createElement('div')
  cardInfo.classList.add('card-info')
  card.appendChild(cardInfo)

  const cardH3 = document.createElement('h3')
  cardH3.classList.add('name')
  cardH3.textContent = `${data.name}`
  cardInfo.appendChild(cardH3)

  const cardP1 = document.createElement('p')
  cardP1.classList.add('username')
  cardP1.textContent = `${data.login}`
  cardInfo.appendChild(cardP1)

  const cardP2 = document.createElement('p')
  cardP2.textContent = "Location:" + data.location
  cardInfo.appendChild(cardP2)

  const cardP3 = document.createElement('p')
  cardP3.textContent = `Profile: `
  cardInfo.appendChild(cardP3)
  
  const cardA = document.createElement('a')
  cardA.setAttribute = ('href', data.url)
  cardA.textContent = `${data.url}`
  cardP3.appendChild(cardA)

  const cardP4 = document.createElement('p')
  cardP4.textContent = `Followers ${data.followers}`
  cardInfo.appendChild(cardP4)

  const cardP5 = document.createElement('p')
  cardP5.textContent = `Following: ${data.following}`
  cardInfo.appendChild(cardP5)

  const cardP6 = document.createElement('p')
  cardP6.textContent = `Bio: ${data.bio}`
  cardInfo.appendChild(cardP6)

return card
}



/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
