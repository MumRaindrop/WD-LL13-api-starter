const output = document.getElementById("output");

// Create elements for fact and fox image
const factDiv = document.createElement("div");
const foxDiv = document.createElement("div");
const foxImg = document.createElement("img");

// Add some basic styling
factDiv.style.fontSize = "1.2em";
factDiv.style.margin = "20px 0";
foxImg.style.maxWidth = "400px";
foxImg.style.borderRadius = "10px";
foxImg.style.boxShadow = "0 4px 10px rgba(0,0,0,0.2)";

// Fetch random fact
fetch("https://uselessfacts.jsph.pl/random.json?language=en")
  .then(response => response.json())
  .then(data => {
    factDiv.textContent = `🧠 Random Fact: ${data.text}`;
  })
  .catch(error => {
    factDiv.textContent = "Failed to load a random fact.";
    console.error(error);
  });

// Fetch random fox image
fetch("https://randomfox.ca/floof/")
  .then(response => response.json())
  .then(data => {
    foxImg.src = data.image;
    foxDiv.appendChild(foxImg);
  })
  .catch(error => {
    foxDiv.textContent = "Failed to load a fox image.";
    console.error(error);
  });

// Add everything to the output div
output.appendChild(factDiv);
output.appendChild(foxDiv);
