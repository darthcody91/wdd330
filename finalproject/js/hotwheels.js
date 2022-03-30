

fetch('json/hotwheels.json')
      .then(data => data.json())
      .then(hotwheels => {
          const randomNum = Math.floor(Math.random() * hotwheels.length)
          const carRandom = hotwheels[randomNum]

          //console.log(randomNum)
          //console.log(carRandom.make)

          function randomizer() {
            let random = hotwheels[Math.floor(Math.random() * hotwheels.length)];
            model.innerText = `${random.model}`;
            make.innerText = random.make;
            number.innerText = random.number;
          }
          
          randomizer();
          
          document.querySelector("button").addEventListener('click', randomizer)


          let col = [];
          for (let i = 0; i < hotwheels.length; i++) {
              for (let key in hotwheels[i]) {
                  if (col.indexOf(key) === -1) {
                      col.push(key);
                  }
              }
          }
          
          let table = document.createElement("table");
             
          let tr = table.insertRow(-1); 
      
          for (let i = 0; i < col.length; i++) {
              let th = document.createElement("th"); 
              th.innerHTML = col[i];
              tr.appendChild(th);
          }
      
          for (let i = 0; i < hotwheels.length; i++) {
              tr = table.insertRow(-1);
              for (let j = 0; j < col.length; j++) {
                  let tabCell = tr.insertCell(-1);
                  tabCell.innerHTML = hotwheels[i][col[j]];
              }
          }
    
          let divContainer = document.getElementById("showData");
          divContainer.innerHTML = "";
          divContainer.appendChild(table);

       
          
              
        });
    
        
        