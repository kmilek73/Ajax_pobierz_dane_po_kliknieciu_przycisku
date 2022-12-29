
//pobranie id do nasłuchu
let btnGetData = document.getElementById('get-data');
//funkcja następująca po kliknięciue
//pobranie danych zewnętrznych
//utworzenie fotmatu JSON

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
        .then(res => res.json())
        .then(data => {
            //tworzymy element <p>
            let pId = document.createElement('p');
            let pUserId = document.createElement('p');
            let pTitle = document.createElement('p');
            let pBody = document.createElement('p');
            let hr = document.createElement('hr');
            // przypisujemy tekst i wartości jakie chcemy wstawić do <p>
            pId.innerText = `Post Id: ${data.id}`;
            pUserId.innerText = `User Id: ${data.userId}`;
            pTitle.innerText = `Tytuł : ${data.title}`;
            pBody.innerText = `Body : ${data.body}`;

            //wyświetlamy tekst i wartości na www - appendChild
            document.body.appendChild(pId);
            document.body.appendChild(pUserId);
            document.body.appendChild(pTitle);
            document.body.appendChild(pBody);
            document.body.appendChild(hr);

        })
        .catch(error => {
            console.error(error)
        })
}
//odwołanie do funkcji wykonującej się po naciśnięciu przycisku
btnGetData.addEventListener('click', getData);