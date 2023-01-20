

document.body.addEventListener('load',function(e) {alert(e.target)})


document.getElementById('lineForm').addEventListener('submit', function() {
    let allData = localStorage.getItem('allData');
    
    let line = document.getElementById('line').value;
    let price = document.getElementById('price').value;
    let departure = document.getElementById('departure').value;
    let arrival = document.getElementById('arrival').value;

    let newLine = {
        Number: document.getElementById('price'),
        price: parseFloat(price),
        line: line,
        departure: departure,
    }
    allData = JSON.parse(allData);
    console.log(allData);
});

