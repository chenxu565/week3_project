//import "./styles.css";

let breeds = ["African", "Pekinese", "Cockapoo", "Beagle", "Briard"];

let wiki_addr = [
  "https://en.wikipedia.org/api/rest_v1/page/summary/Africanis",
  "https://en.wikipedia.org/api/rest_v1/page/summary/Pekingese",
  "https://en.wikipedia.org/api/rest_v1/page/summary/Cockapoo",
  "https://en.wikipedia.org/api/rest_v1/page/summary/Beagle",
  "https://en.wikipedia.org/api/rest_v1/page/summary/Briard"
];
/*
let description = [
  "Considered a landrace with limited human interference in their breeding, the Africanis has also been maintained by human owners. The Africanis is a medium-sized, lightly built dog with a long slender muzzle and, usually, a short coat. It has been described as resembling a cross between a Greyhound and a Dingo.",
  "The Pekingese is a breed of toy dog, originating in China. The breed was favored by royalty of the Chinese Imperial court as both a lap dog and companion dog, and its name refers to the city of Peking where the Forbidden City is located. ",
  "A cockapoo also known as a spoodle or cockerdoodle is a dog crossbreed bred from a Cocker Spaniel and a Poodle, most commonly the Miniature Poodle.",
  "The beagle breed is a small scent hound, similar in appearance to the much larger foxhound. The beagle was developed primarily for hunting hare known as beagling. Possessing a great sense of smell and superior tracking instincts, the beagle is the primary breed used as a detection dog for prohibited agricultural imports and foodstuffs in quarantine around the world. The beagle is intelligent. It is a popular pet due to its size, good temper, and a lack of inherited health problems. ",
  "The Briard or Berger de Brie is a French breed of large shepherd dog, traditionally used both for herding sheep and to defend them. It was first shown at the first Paris dog show, in 1863; the first Briard to be registered in the Livre des Origines Françaises, the national stud-book, was Sans Gêne in 1885."
];*/

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  // document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  let body = document.body;
  let container = document.createElement("div");
  container.classList.add("container");

  for (let i = 0; i < 5; i++) {
    /*   fetch(fetch_addr[i])
      .then((response) => response.json())
      .then((data) => {
        initItem(container, data, description[i]);
      });*/
    initItem_(container, i);
  }
  body.appendChild(container);
}

function initItem_(container, index) {
  let wikiItem = document.createElement("div");
  wikiItem.classList.add("wiki-item");

  let wikiHeader = document.createElement("h1");
  wikiHeader.classList.add("wiki-header");
  wikiHeader.innerHTML = breeds[index];
  wikiItem.appendChild(wikiHeader);

  let wikiContent = document.createElement("div");
  wikiContent.classList.add("wiki-content");

  let paragraph = document.createElement("p");
  paragraph.classList.add("wiki-text");
  //  paragraph.innerHTML = desc;

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  let wikiImg = document.createElement("img");
  wikiImg.classList.add("wiki-img");
  //  wikiImg.src = src;

  let fetch_addr =
    "https://dog.ceo/api/breed/" +
    breeds[index].toLowerCase() +
    "/images/random";

  fetch(fetch_addr)
    .then((response) => response.json())
    .then((data) => {
      //let bn = data["message"].split("/")[4];
      let src = data["message"];
      //wikiHeader.innerHTML = bn;
      //paragraph.innerHTML = description[index];
      wikiImg.src = src;
    });

  fetch(wiki_addr[index])
    .then((response) => response.json())
    .then((data) => {
      paragraph.innerHTML = data["extract"];
    });

  imageContainer.appendChild(wikiImg);

  wikiContent.appendChild(paragraph);
  wikiContent.appendChild(imageContainer);

  wikiItem.appendChild(wikiContent);

  container.appendChild(wikiItem);
}

/*
function initItem(container, data, desc) {
  let bn = data["message"].split("/")[4];
  let src = data["message"];

  let wikiItem = document.createElement("div");
  wikiItem.classList.add("wiki-item");

  let wikiHeader = document.createElement("h1");
  wikiHeader.classList.add("wiki-header");
  wikiHeader.innerHTML = bn;
  wikiItem.appendChild(wikiHeader);

  let wikiContent = document.createElement("div");
  wikiContent.classList.add("wiki-content");

  let paragraph = document.createElement("p");
  paragraph.classList.add("wiki-text");
  paragraph.innerHTML = desc;

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  let wikiImg = document.createElement("img");
  wikiImg.classList.add("wiki-img");
  wikiImg.src = src;

  imageContainer.appendChild(wikiImg);

  wikiContent.appendChild(paragraph);
  wikiContent.appendChild(imageContainer);

  wikiItem.appendChild(wikiContent);

  container.appendChild(wikiItem);
}
*/
