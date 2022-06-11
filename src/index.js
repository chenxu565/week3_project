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
    let wikiItem = initItem();
    container.appendChild(wikiItem);
  }
  body.appendChild(container);

  let items = document.getElementsByClassName("wiki-item");
  for (let i = 0; i < items.length; i++) {
    fetchFill(items[i]);
  }
  /*
  fetch("https://dog.ceo/api/breeds/image/random")
  .then(response=> response.json())
  .then(data=>{
    console.log(data);
  });
    */
}

function fetchFill(item) {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let breed = data["message"].split("/")[4];
      let header = item.querySelectorAll(".wiki-header")[0];
      header.innerHTML = breed;
      let wikiImg = item.querySelectorAll(".wiki-img")[0];
      wikiImg.src = data["message"];
    });
}

function initItem() {
  let wikiItem = document.createElement("div");
  wikiItem.classList.add("wiki-item");

  let wikiHeader = document.createElement("h1");
  wikiHeader.classList.add("wiki-header");
  wikiHeader.innerHTML = "Breed X";
  wikiItem.appendChild(wikiHeader);

  let wikiContent = document.createElement("div");
  wikiContent.classList.add("wiki-content");

  let paragraph = document.createElement("p");
  paragraph.classList.add("wiki-text");
  paragraph.innerHTML = "Some text about this bread.";

  let imageContainer = document.createElement("div");
  imageContainer.classList.add("img-container");

  let wikiImg = document.createElement("img");
  wikiImg.classList.add("wiki-img");
  wikiImg.src = "";

  imageContainer.appendChild(wikiImg);

  wikiContent.appendChild(paragraph);
  wikiContent.appendChild(imageContainer);

  wikiItem.appendChild(wikiContent);

  return wikiItem;
}
