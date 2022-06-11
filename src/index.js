import "./styles.css";

if (document.readyState !== "loading") {
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    initializeCode();
  });
}

function initializeCode() {
  document.getElementById("app").innerHTML = "<h1>Hello!</h1>";
  let body = document.body;
  let container = document.createElement("div");
  container.classList.add("container");

  for (let i = 0; i < 5; i++) {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => {
        initItem(container, data);
      });
  }
  body.appendChild(container);
}

function initItem(container, data) {
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
  paragraph.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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
