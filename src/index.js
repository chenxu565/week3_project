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
    let wikiItem = document.createElement("div");
    wikiItem.classList.add("wiki-item");

    let wikiHeader = document.createElement("h1");
    wikiHeader.classList.add("wiki-header");
    wikiHeader.innerHTML = "Bread X";
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

    container.appendChild(wikiItem);

    body.appendChild(container);
  }
}
