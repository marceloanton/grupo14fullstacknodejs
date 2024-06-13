// Array con la información de varias tarjetas, o proveniente de una base de datos
const cardsData = [
    {
        ciudad: 'Paris',
        pais: 'Francia',
        imageUrl: 'https://imgs.search.brave.com/Kh9WKIM8F6y28NvHTMBFcXwvEBAmxYiKaw_oGj9o_c0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9waG90/bzk4MHg4ODAubW5z/dGF0aWMuY29tLzNm/NzdmNWMzYjI5OTM1/M2U3YjQwNjgwNjM3/Mjg2YTdjL3B1ZW50/ZS1kZS1sb3MtaW52/YWxpZG9zLTQ3OTMx/MS5qcGc',
        link: 'https://www.algundiaire.com/paris'
    },
    {
        ciudad: 'Roma',
        pais: 'Italia',
        imageUrl: 'https://imgs.search.brave.com/BH9IQ6pesxcGCeKd-Z1yO-L8EZhmXaxQvVE6ukgRuk8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/Zm90by1ncmF0aXMv/Y29saXNlby1yb21h/bm9fMTgxNjI0LTMw/NTEwLmpwZz9zaXpl/PTYyNiZleHQ9anBn',
        link: 'https://www.algundiaire.com/roma'
    },
    {
        ciudad: 'Nueva York',
        pais: 'Estados Unidos',
        imageUrl: 'https://imgs.search.brave.com/D4jzEjt_DM0f8mD9UxP3G1T993yCLjYDCccezd1BteY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4LzEy/L2E4LzM4MTJhODRi/NjdjNmE4MjRhOTlm/OWVkZGI1Y2E1NGJj/LmpwZw',
        link: 'https://www.algundiaire.com/nyc'
    },
    {
        ciudad: 'Marruecos',
        pais: 'Marruecos',
        imageUrl: 'https://imgs.search.brave.com/T1-eCifBJafqAHNsuedhlLB8L0VxHq0_fDaFFk6WqTA/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEy/NDQ3NDI5Mi9lcy9m/b3RvL3Zpc3Rhcy1w/YW5vciVDMyVBMW1p/Y2FzLWRlLW1hcnJh/a2VjaC1tb3JvY29v/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1sZ0R5dU9WZHk5/MW1GQ1N4V0JGLWVv/NC1sb1o5bGFQak4w/WS10VklLSWZFPQ',
        link: 'https://www.algundiaire.com/morroco'
    },
    {
        ciudad: 'Barcelona',
        pais: 'España',
        imageUrl: 'https://imgs.search.brave.com/GgdfQRykl8Y3Vvu6m5BE-028Gw70jaNZ4ojEE3vs1KY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/cGl4YWJheS5jb20v/cGhvdG8vMjAxNi8w/My8yNC8wNy8zMS9z/cGFpbi0xMjc2MjA5/X18zNDAuanBn',
        link: 'https://www.algundiaire.com/España'
    },
    {
        ciudad: 'Bariloche',
        pais: 'Argentina',
        imageUrl: 'https://imgs.search.brave.com/UsG6dxt9oEOXwNlXPy8MEPyKYVovD20E2rzpqSmBXag/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM3/MTE4Mzc1My9lcy9m/b3RvL2Jhcmlsb2No/ZS1hci12aXN0YS1k/ZXNkZS1hcnJpYmEt/dW4tcGFpc2FqZS1l/bmNhbnRhZG9yLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz1D/ZlNJY2ZOTGxYb295/MVhSdExPcUdFYVNE/MWdnV2tTZHJnMjJI/SzBpdEVRPQ',
        link: 'https://www.algundiaire.com/Argentina'
    },
    {
        ciudad: 'Cancun',
        pais: 'Mexico',
        imageUrl: 'https://imgs.search.brave.com/xF906_3B8843WjtECBaW7StsTzyDopUSGxTgLxJfhPc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU1/MTQ1NTY3L2VzL2Zv/dG8vbGFndW5hLWVu/LW0lQzMlQTl4aWNv/LmpwZz9zPTYxMng2/MTImdz0wJms9MjAm/Yz1wb0tSckZ3dldY/V3NpWjFDdXJUNDhR/Nk83a1dFZGJrUWtr/MkJqa01xWlIwPQ',
        link: 'https://www.algundiaire.com/Mexico'
    },
    {
        ciudad: 'Islas de Pascua',
        pais: 'Chile',
        imageUrl: 'https://imgs.search.brave.com/zrfHIW52qHXNJrgCJ0G-swWhbEPrWC5QV3xVTVMBGa8/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/aW5haXNsYWRlcGFz/Y3VhLmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMC8wNS9B/aHUtVmFpLVVyaS1U/YWhhaS1SYXBhLU51/aS1Jc2xhLWRlLVBh/c2N1YS0xLmpwZw',
        link: 'https://www.algundiaire.com/Chile'
    }

];

// Función para crear una tarjeta
function createCard(ciudad, pais, imageUrl, link) {
    // Crear el contenedor de la tarjeta
    const card = document.createElement('div');
    card.classList.add('card', 'destinos');
    card.id = 'destinos';
    // Crear la imagen de la tarjeta
    const image = document.createElement('img');
    image.src = imageUrl;
    image.alt = ciudad;
    // Crear el contenido de la tarjeta
    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');
    // Crear el encabezado de la tarjeta
    const heading = document.createElement('h2');
    heading.textContent = `${ciudad}, ${pais}`;
    // Crear el enlace de la tarjeta
    const cardLink = document.createElement('a');
    cardLink.href = link;
    cardLink.classList.add('button');
    cardLink.textContent = 'Saber más';
    // Crear el icono
    const arrowSpan = document.createElement('span');
    arrowSpan.classList.add('material-symbols-outlined');
    // Agregar el icono
    const arrowIcon = document.createElement('i');
    arrowIcon.textContent = '➡';
    // Agregar el icono al span
    arrowSpan.appendChild(arrowIcon);
    cardLink.appendChild(arrowSpan);
    // Agregar los elementos a la tarjeta
    cardContent.appendChild(heading);
    cardContent.appendChild(cardLink);
    // Agregar la tarjeta al contenedor
    card.appendChild(image);
    card.appendChild(cardContent);
    // devuelve la tarjeta
    return card;
}

// Obtener el contenedor donde se agregarán las tarjetas
const cardContainer = document.getElementById('cardContainer');

// Recorrer el array de datos de tarjetas y agregar cada tarjeta al contenedor
cardsData.forEach(card => {
    const newCard = createCard(card.ciudad, card.pais, card.imageUrl, card.link);
    cardContainer.appendChild(newCard);
});

document.body.appendChild(cardContainer);