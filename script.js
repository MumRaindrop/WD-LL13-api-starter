const output = document.getElementById("output");

// Create elements
const factDiv = document.createElement("div");
const foxDiv = document.createElement("div");
const foxImg = document.createElement("img");
const refreshBtn = document.createElement("button");

// Style elements
factDiv.style.fontSize = "1.2em";
factDiv.style.margin = "20px 0";
foxImg.style.maxWidth = "400px";
foxImg.style.borderRadius = "10px";
foxImg.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";
foxImg.style.display = "block";
foxImg.style.marginBottom = "15px";

refreshBtn.textContent = "🔄 Refresh";
refreshBtn.style.padding = "10px 20px";
refreshBtn.style.fontSize = "1em";
refreshBtn.style.cursor = "pointer";
refreshBtn.style.border = "none";
refreshBtn.style.borderRadius = "8px";
refreshBtn.style.backgroundColor = "#4CAF50";
refreshBtn.style.color = "white";
refreshBtn.style.transition = "background-color 0.3s";
refreshBtn.onmouseover = () => (refreshBtn.style.backgroundColor = "#45a049");
refreshBtn.onmouseout = () => (refreshBtn.style.backgroundColor = "#4CAF50");

// Fetch functions
function fetchFact() {
  fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then(response => response.json())
    .then(data => {
      factDiv.textContent = `🧠 Random Fact: ${data.text}`;
    })
    .catch(error => {
      factDiv.textContent = "Failed to load a random fact.";
      console.error(error);
    });
}

function fetchFox() {
  fetch("https://randomfox.ca/floof/")
    .then(response => response.json())
    .then(data => {
      foxImg.src = data.image;
    })
    .catch(error => {
      foxDiv.textContent = "Failed to load a fox image.";
      console.error(error);
    });
}

// Refresh both APIs
function refreshContent() {
  fetchFact();
  fetchFox();
}

// Append everything to the page
foxDiv.appendChild(foxImg);
foxDiv.appendChild(refreshBtn);
output.appendChild(factDiv);
output.appendChild(foxDiv);

// Load content initially
refreshContent();

// Add event listener for refresh button
refreshBtn.addEventListener("click", refreshContent);
