fetch((url = "json/hotwheels.json"))
  .then((data) => data.json())
  .then((hotwheels) => {
    const randomCar = Math.floor(Math.random() * hotwheels.length);
    const carRandom = hotwheels[randomCar];

    function randomizer() {
      model.innerText = carRandom.model;
      make.innerText = carRandom.make;
      number.innerText = carRandom.number;
      model.id = "modelname";
      make.id = "makename";
      number.id = "carnumber";
    }

    randomizer();

    document.querySelector("button").addEventListener("click", randomizer);
  });

// collection list//

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);

    const hotwheelcars = jsonObject;
    hotwheelcars.forEach((car) => {
      let card = document.createElement("div");
      let model = document.createElement("ul");
      let make = document.createElement("li");
      let number = document.createElement("li");
      let produced = document.createElement("li");
      let color = document.createElement("li");
      card.id = "listcard";
      model.id = "listmodel";
      make.className = "listdetailsmake";
      number.className = "listdetails";
      produced.className = "listdetails";
      color.className = "listdetails";

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
  let x = document.getElementById("randomcar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

const listbutton = document.getElementById("listbutton");
listbutton.addEventListener("click", showlist);

function showlist() {
  let x = document.getElementById("hwcarList");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}

document.getElementById("copyrightyear").innerHTML = new Date().getFullYear();