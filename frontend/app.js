document.getElementById('compliment').addEventListener('click', () => {
    fetch('http://100.25.144.8:3000/api/compliment')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').innerText = data.message;
        })
        .catch(error => console.error('Error fetching data:', error));
});

document.getElementById('roast').addEventListener('click', () => {
    fetch('http://100.25.144.8:3000/api/roast')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').innerText = data.message;
        })
        .catch(error => console.error('Error fetching data:', error));
});
