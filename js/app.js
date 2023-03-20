const cardBook = document.getElementById('cards')
const Busqueda = document.getElementById('mostrar-libros').content
const fragment = document.createDocumentFragment()
let showInput = document.querySelector("mostrar-libros")
let showInputt = document.querySelector("mostrar-libros1")
let topBooks = []

document.addEventListener('DOMContentLoaded', () => {
    loadBooks()
})

const loadBooks = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2bd83f9bamsh8f938629ab9e041p101e1bjsn9d9bf0c9ce97',
            'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
        }
    };
    fetch('https://hapi-books.p.rapidapi.com/nominees/romance/2020', options)
    //fetch('http://127.0.0.1:5500/js/api.json', options) /*https://hapi-books.p.rapidapi.com/nominees/romance/2020*/
        .then(response => response.json())
        .then(response => {
            topBooks = response
            console.log(topBooks)
            //creaTarjetas()
            /*showInput.addEventListener('onClick', () => {
                showInput.showBook();
            })*/
        })
        .catch(err => console.error(err));
        
    }      

const showBook = () => {
        Busqueda.querySelectorAll('p')[0].textContent = "ID libro: " +topBooks[0].book_id
        Busqueda.querySelectorAll('p')[1].textContent = "Nombre libro: " +topBooks[0].name
        Busqueda.querySelectorAll('p')[2].textContent = "Autor libro: " +topBooks[0].author

        Busqueda.querySelectorAll('p')[3].textContent = "ID libro: " +topBooks[1].book_id
        Busqueda.querySelectorAll('p')[4].textContent = "Nombre libro: " +topBooks[1].name
        Busqueda.querySelectorAll('p')[5].textContent = "Autor libro: " +topBooks[1].author

        Busqueda.querySelectorAll('p')[6].textContent = "ID libro: " +topBooks[2].book_id
        Busqueda.querySelectorAll('p')[7].textContent = "Nombre libro: " +topBooks[2].name
        Busqueda.querySelectorAll('p')[8].textContent = "Autor libro: " +topBooks[2].author

        Busqueda.querySelectorAll('p')[9].textContent = "ID libro: " +topBooks[3].book_id
        Busqueda.querySelectorAll('p')[10].textContent = "Nombre libro: " +topBooks[3].name
        Busqueda.querySelectorAll('p')[11].textContent = "Autor libro: " +topBooks[3].author

        Busqueda.querySelectorAll('p')[12].textContent = "ID libro: " +topBooks[4].book_id
        Busqueda.querySelectorAll('p')[13].textContent = "Nombre libro: " +topBooks[4].name
        Busqueda.querySelectorAll('p')[14].textContent = "Autor libro: " +topBooks[4].author
    
        const clone = Busqueda.cloneNode(true)
        fragment.appendChild(clone)
    
        cardBook.appendChild(fragment)
    }

    const Bookshow = () => {
        Busqueda.querySelectorAll('p')[0].textContent = "ID libro: " +topBooks[5].book_id
        Busqueda.querySelectorAll('p')[1].textContent = "Nombre libro: " +topBooks[5].name
        Busqueda.querySelectorAll('p')[2].textContent = "Autor libro: " +topBooks[5].author

        Busqueda.querySelectorAll('p')[3].textContent = "ID libro: " +topBooks[6].book_id
        Busqueda.querySelectorAll('p')[4].textContent = "Nombre libro: " +topBooks[6].name
        Busqueda.querySelectorAll('p')[5].textContent = "Autor libro: " +topBooks[6].author

        Busqueda.querySelectorAll('p')[6].textContent = "ID libro: " +topBooks[7].book_id
        Busqueda.querySelectorAll('p')[7].textContent = "Nombre libro: " +topBooks[7].name
        Busqueda.querySelectorAll('p')[8].textContent = "Autor libro: " +topBooks[7].author

        Busqueda.querySelectorAll('p')[9].textContent = "ID libro: " +topBooks[8].book_id
        Busqueda.querySelectorAll('p')[10].textContent = "Nombre libro: " +topBooks[8].name
        Busqueda.querySelectorAll('p')[11].textContent = "Autor libro: " +topBooks[8].author

        Busqueda.querySelectorAll('p')[12].textContent = "ID libro: " +topBooks[9].book_id
        Busqueda.querySelectorAll('p')[13].textContent = "Nombre libro: " +topBooks[9].name
        Busqueda.querySelectorAll('p')[14].textContent = "Autor libro: " +topBooks[9].author
    
        const clone = Busqueda.cloneNode(true)
        fragment.appendChild(clone)
    
        cardBook.appendChild(fragment)
    }

    const Buscar = () => {
        Busqueda.querySelectorAll('p')[0].textContent = "ID libro: " +topBooks[10].book_id
        Busqueda.querySelectorAll('p')[1].textContent = "Nombre libro: " +topBooks[10].name
        Busqueda.querySelectorAll('p')[2].textContent = "Autor libro: " +topBooks[10].author

        Busqueda.querySelectorAll('p')[3].textContent = "ID libro: " +topBooks[11].book_id
        Busqueda.querySelectorAll('p')[4].textContent = "Nombre libro: " +topBooks[11].name
        Busqueda.querySelectorAll('p')[5].textContent = "Autor libro: " +topBooks[11].author

        Busqueda.querySelectorAll('p')[6].textContent = "ID libro: " +topBooks[12].book_id
        Busqueda.querySelectorAll('p')[7].textContent = "Nombre libro: " +topBooks[12].name
        Busqueda.querySelectorAll('p')[8].textContent = "Autor libro: " +topBooks[12].author

        Busqueda.querySelectorAll('p')[9].textContent = "ID libro: " +topBooks[13].book_id
        Busqueda.querySelectorAll('p')[10].textContent = "Nombre libro: " +topBooks[13].name
        Busqueda.querySelectorAll('p')[11].textContent = "Autor libro: " +topBooks[13].author

        Busqueda.querySelectorAll('p')[12].textContent = "ID libro: " +topBooks[14].book_id
        Busqueda.querySelectorAll('p')[13].textContent = "Nombre libro: " +topBooks[14].name
        Busqueda.querySelectorAll('p')[14].textContent = "Autor libro: " +topBooks[14].author
    
        const clone = Busqueda.cloneNode(true)
        fragment.appendChild(clone)
    
        cardBook.appendChild(fragment)
    }

    const show = () => {
        Busqueda.querySelectorAll('p')[0].textContent = "ID libro: " +topBooks[15].book_id
        Busqueda.querySelectorAll('p')[1].textContent = "Nombre libro: " +topBooks[15].name
        Busqueda.querySelectorAll('p')[2].textContent = "Autor libro: " +topBooks[15].author

        Busqueda.querySelectorAll('p')[3].textContent = "ID libro: " +topBooks[16].book_id
        Busqueda.querySelectorAll('p')[4].textContent = "Nombre libro: " +topBooks[16].name
        Busqueda.querySelectorAll('p')[5].textContent = "Autor libro: " +topBooks[16].author

        Busqueda.querySelectorAll('p')[6].textContent = "ID libro: " +topBooks[17].book_id
        Busqueda.querySelectorAll('p')[7].textContent = "Nombre libro: " +topBooks[17].name
        Busqueda.querySelectorAll('p')[8].textContent = "Autor libro: " +topBooks[17].author

        Busqueda.querySelectorAll('p')[9].textContent = "ID libro: " +topBooks[18].book_id
        Busqueda.querySelectorAll('p')[10].textContent = "Nombre libro: " +topBooks[18].name
        Busqueda.querySelectorAll('p')[11].textContent = "Autor libro: " +topBooks[18].author

        Busqueda.querySelectorAll('p')[12].textContent = "ID libro: " +topBooks[19].book_id
        Busqueda.querySelectorAll('p')[13].textContent = "Nombre libro: " +topBooks[19].name
        Busqueda.querySelectorAll('p')[14].textContent = "Autor libro: " +topBooks[19].author
    
        const clone = Busqueda.cloneNode(true)
        fragment.appendChild(clone)
    
        cardBook.appendChild(fragment)
    }