fetch((url = "json/hotwheels.json"))
  .then((data) => data.json())
  .then((hotwheels) => {
    const randomNum = Math.floor(Math.random() * hotwheels.length);
    const carRandom = hotwheels[randomNum];

    function randomizer() {
      let random = hotwheels[Math.floor(Math.random() * hotwheels.length)];
      model.innerText = `${random.model}`;
      make.innerText = random.make;
      number.innerText = random.number;
      model.className = "modelname";
      make.className = "makename";
      number.className = "carnumber";
    }

    randomizer();

    document.querySelector("button").addEventListener("click", randomizer);
  });

// this is test code //

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const hotwheelcars = jsonObject;
    hotwheelcars.forEach((car) => {
      let card = document.createElement("dl");
      let model = document.createElement("dt");
      let make = document.createElement("dd");
      let number = document.createElement("dd");
      let produced = document.createElement("dd");
      let color = document.createElement("dd");

      make.innerHTML = `${car.make}`;
      model.innerHTML = `${car.model}`;
      number.innerHTML = `${car.number}`;
      produced.innerHTML = `${car.produced}`;
      color.innerHTML = `${car.color}`;

      card.appendChild(model);
      card.appendChild(make);
      card.appendChild(number);
      card.appendChild(produced);
      card.appendChild(color);

      document.querySelector("div.cards").appendChild(card);
    });
  });




  
const carbutton = document.getElementById("showrandomcar");
carbutton.addEventListener("click", showrandom);

function showrandom() {
  var x = document.getElementById("randomcar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
