/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */




let myData = [
  {
    name: "Rear Naked Choke",
    percent: 32,
    position: "Back Control",
    description: "A choke applied from the back, wrapping the arm around the neck and squeezing without using the Gi.",
    difficulty: "Medium",
    creator: "Rickson Gracie (popularizer)",
    image: "image/rear_naked_choke.jpg",
    demonstrationVideo: ["8MpFS5wvSAM", "JY9ithyvLRM"],
    tags: ["Submission", "Back", "High Percentage"]
  },
  {
    name: "Triangle Choke",
    percent: 15,
    position: "Guard",
    description: "A choke that uses the legs to trap the opponent's head and one arm in a triangle configuration.",
    difficulty: "Hard",
    creator: "Royce Gracie (popularizer)",
    image: "image/triangle_choke.jpg",
    demonstrationVideo: ["5ED_yLiMhyc", "oa-GPurs8Vw"],
    tags: ["Submission", "Choke", "Guard"]
  },
  {
    name: "Kimura",
    percent: 12,
    position: "Side Control",
    description: "A shoulder lock that involves isolating the opponent's arm and rotating it behind their back.",
    difficulty: "Medium",
    creator: "Masahiko Kimura",
    image: "image/kimura.jpg",
    demonstrationVideo: ["BPqy9gG4DYs", "fqQ4mVxJaoE"],
    tags: ["Submission", "Joint Lock", "Fundamental"]
  },
  {
    name: "Scissor Sweep",
    percent: 8,
    position: "Closed Guard",
    description: "A classic sweep using a scissor motion of the legs to off-balance the opponent and reverse positions.",
    difficulty: "Easy",
    creator: "Carlos Gracie Sr.",
    image: "image/scissors_sweep.jpg",
    demonstrationVideo: ["nVRzhBr4tj8", "lXARLAPD8wM"],
    tags: ["Sweep", "Beginner", "Guard"]
  },
  {
    name: "Armbar from Mount",
    percent: 10,
    position: "Mount",
    description: "A fundamental joint lock where the attacker traps the opponent's arm and hyperextends the elbow.",
    difficulty: "Medium",
    creator: "Judo Origins",
    image: "image/arm_bar_from_mount.jpg",
    demonstrationVideo: ["u1GRf9N_904","45SGFHd2SmE"],    
    tags: ["Submission", "Arm Lock", "Mount"]
  },
  {
    name: "Berimbolo",
    percent: 3,
    position: "De La Riva",
    description: "An advanced technique that inverts the body to take the back from De La Riva guard.",
    difficulty: "Hard",
    creator: "Mendes Brothers",
    image: "image/berimbolo.jpg",
    demonstrationVideo: ["DSpAGjs59GY", "1fQIlh3PNf0"],
    tags: ["Sweep", "Back", "Advanced"]
  },
  {
    name: "Guillotine Choke",
    percent: 7,
    position: "Front Headlock",
    description: "A choke executed by wrapping the arm around the opponent's neck while facing them, typically from a sprawl or guard.",
    difficulty: "Medium",
    creator: "Marcelo Garcia",
    image: "image/guillotine_choke.jpg",
    demonstrationVideo: ["kenuh19VAhA", "bLBHnMUjoug"],
    tags: ["Submission", "Choke", "Front Headlock"]
  },
  {
    name: "Butterfly Sweep",
    percent: 7,
    position: "Butterfly Guard",
    description: "A sweeping technique using hooks and body movement to elevate and roll the opponent over.",
    difficulty: "Easy",
    creator: "Unknown",
    image: "image/butterfly_sweep.jpg",
    demonstrationVideo: ["8JB3Bt6muFE", "ytv0Wf34Xe0"],
    tags: ["Sweep", "Guard", "Beginner"]
  },
  {
    name: "Omoplata",
    percent: 4,
    position: "Guard",
    description: "A shoulder lock submission executed by isolating an arm with the legs and rotating the opponent's shoulder.",
    difficulty: "Hard",
    creator: "Nino Schembri (modern usage)",
    image: "image/omoplata.jpg",
    demonstrationVideo: ["ra0tIjxI2Tc", "rJsJcGxDGJ0"],
    tags: ["Submission", "Shoulder Lock", "Guard"]
  },
  {
    name: "X Pass",
    percent: 6,
    position: "Open Guard",
    description: "A guard passing technique where the practitioner steps across the legs and drives forward to side control.",
    difficulty: "Medium",
    creator: "Lucas Lepri",
    image: "image/x_pass.jpg",
    demonstrationVideo: ["e0JT24znh-k", "e0JT24znh-k"],
    tags: ["Guard Pass", "Pressure"]
  },
  {
    name: "Ezekiel Choke",
    percent: 2,
    position: "Mount",
    description: "A choke applied from top mount (or inside guard) using the sleeve and forearm across the throat.",
    difficulty: "Medium",
    creator: "Ezequiel Paraguassú",
    image: "image/ezekiel_choke.jpg",
    demonstrationVideo: ["3XE2PDvhqdQ", "9Zm6C-6w14s"],
    tags: ["Submission", "Choke", "Gi"]
  }
];
let tags = ["Guard", "Choke", "Submission", "Gi", "Pressure", "Back"];
let userFavorite = [];
let currentData = myData;
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array

// This calls the addCards() function when the page is first loaded
function showCards (shuffleData = true, cards = null) {
  let showCards = null
  if (cards != null) {
    showCards = cards;
  } else {
    showCards = myData;
  }
  if (shuffleData) {
    shuffle(showCards);
  }
  currentData = showCards;

  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");
  

  for (let i = 0 ; i < showCards.length ; i++) {
    const data = showCards[i];
    // Clone the card template
    const cardClone = templateCard.cloneNode(true);
    cardClone.style.display = "block"; 

    
    const cardHeaderParas = cardClone.querySelector("#card-header h2");
    cardHeaderParas.textContent = data.name;

    
    const favorButton = cardClone.querySelector("#card-header button");
    favorButton.textContent = userFavorite.includes(data) ? "\u{1F49B}" : "\u{1F90D}";
    favorButton.addEventListener("click", () => {
      addFavor(data, favorButton);
    });

    const descParas = cardClone.querySelectorAll("#card-description p");
    descParas[0].textContent = `Description: ${data.description}`;
    descParas[1].textContent = `Difficulty: ${data.difficulty}`;
    descParas[2].textContent = `Position: ${data.position}`;
    descParas[3].textContent = `Submission Rate: ${data.percent}%`;
    descParas[4].textContent = `Creator: ${data.creator}`;


    const tagsParas = cardClone.querySelector("#card-tags");
    for (let j = 0 ; j < data.tags.length ; j++) {
      const tag = data.tags[j];
      const tagDiv = document.createElement("div");
      tagDiv.className = "card-tag";
      tagDiv.textContent = tag;
      tagDiv.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
      tagsParas.appendChild(tagDiv);
    }

    const imgParas = cardClone.querySelector("#card-img-yt img");
    imgParas.src = data.image;
    imgParas.alt = `${data.name}`;

    const tutorialParas = cardClone.querySelector("#card-img-yt button");
    tutorialParas.addEventListener("click", () => {
      showTutorial(data.demonstrationVideo, data.name);
    })
    cardContainer.appendChild(cardClone);
  }
}
function addFavor (name, paras) {
  if (userFavorite.includes(name)) {
    paras.textContent =  "\u{1F90D}"; 
    userFavorite.splice(userFavorite.indexOf(name), 1);
    return;
  } else {
    paras.textContent = "\u{1F49B}";
    userFavorite.push(name);
    return;
  }
  
}
function showTags () {
  const selectTags = document.getElementById("tags-options");
  for (let i = 0 ; i < tags.length ; i++) {
    const tag = tags[i];
    const newOption = document.createElement("option");
    newOption.value = tag;
    newOption.text = tag;
    selectTags.appendChild(newOption);
  }
}
function shuffle (arr) {
  for (let i = arr.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [arr[i], arr[j]] = [arr[j], arr[i]]; 
  }
  const input = document.getElementById('search');
  const selectTags = document.getElementById("tags-options");
  selectTags.value = "";
  input.value = "";
}
function showTutorial (videoId, name) {
  const tutorialSpace = document.getElementById("default-tutorial");
  tutorialSpace.style.display = "none";
  const tutorialButton = document.getElementById("tutorial-button");
  tutorialButton.style.display = "block";

  const video = document.querySelector("#tutorial iframe");
  video.src =  `https://www.youtube.com/embed/${videoId[0]}`;
  video.title = name;
  video.style.display = 'block';

  const giButton = document.getElementById("gi-tutorial");
  const nogiButton = document.getElementById("nogi-tutorial");

  const newGiButton = giButton.cloneNode(true);
  const newNoGiButton = nogiButton.cloneNode(true);


  giButton.parentNode.replaceChild(newGiButton, giButton);
  nogiButton.parentNode.replaceChild(newNoGiButton, nogiButton);
  
  newGiButton.addEventListener("click", () => {
    video.src = `https://www.youtube.com/embed/${videoId[0]}`;
  });

  newNoGiButton.addEventListener("click", () => {
    video.src = `https://www.youtube.com/embed/${videoId[1]}`;
  });


}
function sortByName() {
  currentData.sort((a,b) => {
    return a.name.localeCompare(b.name);
  });
  showCards(false, currentData);
}
function sortByRate() {
  currentData.sort((a,b) => {
    return a.percent - b.percent;
  });
  showCards(false, currentData);
}
function sortByDifficulty() {
  function getDiff (level) {
    if (level == "Easy") return 1;
    if (level == "Medium") return 2;
    return 3;
  }
  currentData.sort((a,b) => {
    return getDiff(a.difficulty) - getDiff(b.difficulty);
  });
  showCards(false, currentData);
}
function sortByTags() {
  const selectTags = document.getElementById("tags-options");
  const selectedTech = currentData.filter(d => d.tags.find(name => name == selectTags.value));
  showCards(false, selectedTech);
}
function onSearch() {
  let input = document.getElementById('search').value;
  let resultsContainer =  document.getElementsByClassName('search-input');
  resultsContainer.innerHTML = '';

  const filterTech = myData.filter(d => d.name.toLowerCase().substring(0, input.length + 1).includes(input));
  showCards(false, filterTech);
}
function showFavorite() {
  showCards(true, userFavorite);
}
document.addEventListener("DOMContentLoaded", showCards);
document.addEventListener("DOMContentLoaded", showTags);