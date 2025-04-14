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

const FRESH_PRINCE_URL =
  "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL =
  "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL =
  "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";

// This is an array of strings (TV show titles)
let titles = [
  "Fresh Prince of Bel Air",
  "Curb Your Enthusiasm",
  "East Los High",
];
let myData = [
  {
    name: "Rear Naked Choke",
    percent: "32%",
    position: "Back Control",
    description: "A choke applied from the back, wrapping the arm around the neck and squeezing without using the Gi.",
    difficulty: "Medium",
    creator: "Rickson Gracie (popularizer)",
    image: "image/rear_naked_choke.jpg",
    demonstrationVideo: ["", "JY9ithyvLRM"],
    tags: ["Submission", "Back", "High Percentage"]
  },
  {
    name: "Triangle Choke",
    percent: "15%",
    position: "Guard",
    description: "A choke that uses the legs to trap the opponent’s head and one arm in a triangle configuration.",
    difficulty: "Hard",
    creator: "Royce Gracie (popularizer)",
    image: "image/triangle_choke.jpg",
    demonstrationVideo: ["5ED_yLiMhyc", "oa-GPurs8Vw"],
    tags: ["Submission", "Choke", "Guard"]
  },
  {
    name: "Kimura",
    percent: "12%",
    position: "Side Control",
    description: "A shoulder lock that involves isolating the opponent’s arm and rotating it behind their back.",
    difficulty: "Medium",
    creator: "Masahiko Kimura",
    image: "image/kimura.jpg",
    demonstrationVideo: ["BPqy9gG4DYs", "fqQ4mVxJaoE"],
    tags: ["Submission", "Joint Lock", "Fundamental"]
  },
  {
    name: "Scissor Sweep",
    percent: "8%",
    position: "Closed Guard",
    description: "A classic sweep using a scissor motion of the legs to off-balance the opponent and reverse positions.",
    difficulty: "Easy",
    creator: "Carlos Gracie Sr.",
    image: "image/scissor_sweep.jpg",
    demonstrationVideo: ["nVRzhBr4tj8", "lXARLAPD8wM"],
    tags: ["Sweep", "Beginner", "Guard"]
  },
  {
    name: "Armbar from Mount",
    percent: "10%",
    position: "Mount",
    description: "A fundamental joint lock where the attacker traps the opponent’s arm and hyperextends the elbow.",
    difficulty: "Medium",
    creator: "Judo Origins",
    image: "image/armbar_from_mount.jpg",
    demonstrationVideo: ["u1GRf9N_904","45SGFHd2SmE"],    
    tags: ["Submission", "Arm Lock", "Mount"]
  },
  {
    name: "Berimbolo",
    percent: "3%",
    position: "De La Riva",
    description: "An advanced technique that inverts the body to take the back from De La Riva guard.",
    difficulty: "Hard",
    creator: "Mendes Brothers",
    image: "image/berimbolo.jpg",
    demonstrationVideo: ["DSpAGjs59GY", "1fQIlh3PNf0"],
    tags: ["Sweep", "Back Take", "Advanced"]
  },
  {
    name: "Guillotine Choke",
    percent: "7%",
    position: "Front Headlock",
    description: "A choke executed by wrapping the arm around the opponent’s neck while facing them, typically from a sprawl or guard.",
    difficulty: "Medium",
    creator: "Marcelo Garcia (modern variation)",
    image: "image/guillotine_choke.jpg",
    demonstrationVideo: ["kenuh19VAhA", "bLBHnMUjoug"],
    tags: ["Submission", "Choke", "Front Headlock"]
  },
  {
    name: "Butterfly Sweep",
    percent: "5%",
    position: "Butterfly Guard",
    description: "A sweeping technique using hooks and body movement to elevate and roll the opponent over.",
    difficulty: "Easy",
    creator: "Unknown (refined in modern BJJ)",
    image: "image/butterfly_sweep.jpg",
    demonstrationVideo: ["8JB3Bt6muFE", "ytv0Wf34Xe0"],
    tags: ["Sweep", "Guard", "Beginner Friendly"]
  },
  {
    name: "Omoplata",
    percent: "4%",
    position: "Guard",
    description: "A shoulder lock submission executed by isolating an arm with the legs and rotating the opponent’s shoulder.",
    difficulty: "Hard",
    creator: "Nino Schembri (modern usage)",
    image: "image/omoplata.jpg",
    demonstrationVideo: ["ra0tIjxI2Tc", "rJsJcGxDGJ0"],
    tags: ["Submission", "Shoulder Lock", "Guard"]
  },
  {
    name: "X Pass",
    percent: "6%",
    position: "Open Guard",
    description: "A guard passing technique where the practitioner steps across the legs and drives forward to side control.",
    difficulty: "Medium",
    creator: "Lucas Lepri (modern refinement)",
    image: "image/x_pass.jpg",
    demonstrationVideo: ["e0JT24znh-k", "e0JT24znh-k"],
    tags: ["Pass", "Guard Pass", "Pressure"]
  },
  {
    name: "Ezekiel Choke",
    percent: "2%",
    position: "Mount",
    description: "A choke applied from top mount (or inside guard) using the sleeve and forearm across the throat.",
    difficulty: "Medium",
    creator: "image/ezekiel_choke.jpg",
    image: "",
    demonstrationVideo: ["3XE2PDvhqdQ", "9Zm6C-6w14s"], // [Gi, noGi]
    tags: ["Submission", "Choke", "Gi"]
  }
];
let userFavorite = [

]
// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.

// This function adds cards the page to display the data in the array
