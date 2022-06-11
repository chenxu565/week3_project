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
  /*
  let items = document.getElementsByClassName("wiki-item");
  for (let i = 0; i < items.length; i++) {
    fetchFill(items[i]);
  }*/
}

function initItem() {
  result = fetchFill();
  let bn = result.breed_name;
  let src = res.img_src;

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

function fetchFill() {
  return fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let breed_name = data["message"].split("/")[4];
      let img_src = data["message"];
      return { breed_name, img_src };
    });
}
