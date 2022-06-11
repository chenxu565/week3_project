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
  for (let i = 0; i < 5; i++) {
    let body = document.body;
    let wikiHeader = document.createElement("h1");
    wikiHeader.classList.add("wiki-header");
    wikiHeader.innerHTML = "Bread X";
    body.appendChild(wikiHeader);
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
    body.appendChild(wikiContent);
  }
}
