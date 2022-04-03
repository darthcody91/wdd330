fetch("json/hotwheels.json")
    .then((data) => data.json())
    .then((hotwheels) => {
        const randomNum = Math.floor(Math.random() * hotwheels.length);
        const carRandom = hotwheels[randomNum];

    
        function randomizer() {
            let random = hotwheels[Math.floor(Math.random() * hotwheels.length)];
            model.innerText = `${random.model}`;
            make.innerText = random.make;
            number.innerText = random.number;
        }

        randomizer();

        document.querySelector("button").addEventListener("click", randomizer);      
        
        


    });



 fetch('json/hotwheels.json')
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                appendData(data);
            })
            .catch(function (err) {
                console.log('error: ' + err);
            });
    
        function appendData(data) {
           
            let myTable = document.querySelector('#table');

let headers = ['Make', 'Model', 'Year', 'Color', 'Code'];


    let table = document.createElement('table');
    table.className = "myTable";
    let headerRow = document.createElement('tr');

    headers.forEach(headerText => {
        let header = document.createElement('th');
        let textNode = document.createTextNode(headerText);
        header.appendChild(textNode);
        headerRow.appendChild(header);
    });

    table.appendChild(headerRow);

    data.forEach(cars => {
        let row = document.createElement('tr');

        Object.values(cars).forEach(text => {
            let cell = document.createElement('td');
            let textNode = document.createTextNode(text);
            cell.appendChild(textNode);
            row.appendChild(cell);
        })

        table.appendChild(row);
    })

    myTable.appendChild(table);
    

        }
    
    ;


   


      
