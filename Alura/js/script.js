const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())// //conceito de DOM (document object model - modelo de objetos de documento) - o documento é o código html
// const searchInput = document.getElementById('search-input'); //retorna um elemento do DOM (página html) pelo id
// const resultArtist = document.getElementById('result-artist');
// const resultPlaylist = document.getElementById('result-playlists');// constante que vai fazer as playlists serem ocultadas


// function requestApi(searchTerm){
//     const url= `http://localhost:3000/artists?name_like=${searchTerm}`
    
//     fetch(url)
//         .then((response) => response.json())
//         .then((result) => displayResults(result, searchTerm)) 
// }

// function displayResults(result, searchTerm){
//     resultPlaylist.classList.add("hidden");
//     const artistName = document.getElementById('artist-name');
//     const artistImage = document.getElementById('artist-img');


//     result.forEach(element => { //array - é uma lista
//         console.log ("O artista: " + element.name + " contém o texto: " + searchTerm + "?" + element.name.indexOf(searchTerm));
//         if(element.name.indexOf(searchTerm) != -1 )
//         {
//             artistName.innerText = element.name;
//             artistImage.src = element.urlImg;
//         }
        
//     });

//     resultArtist.classList.remove('hidden');
// }


// document.addEventListener('input', function(){
//     const searchTerm = searchInput.value.toLowerCase(); //é o que nós vamos digitar - toLowecase: deix tudo minúsculo
//     if (searchTerm === ''){
//         resultPlaylist.classList.add('hidden'); //vai desaparecer
//         resultArtist.classList.remove('hidden');
//         return;
//     } //=== verifica se os valores são iguais e do mesmo tipo / se não digitar nada, vai aparecer somente os cards do início

//     requestApi(searchTerm);
// }); //quando esse evento acontecer vai ocorrer essa lógica - tem que terf uma function como parâmetro

const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result, searchTerm))
}

function displayResults(result, searchTerm) {
    resultPlaylist.classList.add("hidden");
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    
    const filteredArtists = result.filter(artist =>
        artist.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (filteredArtists.length > 0) {
        
        const artist = filteredArtists[0]; 
        artistName.innerText = artist.name;
        artistImage.src = artist.urlImg;
    } else {
        
        artistName.innerText = 'Nenhum artista encontrado';
        artistImage.src = ''; 
    }

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.trim().toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return;
    }

    requestApi(searchTerm);
});
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.add('hidden');
        resultArtist.classList.remove('hidden');
        return
    }
    
    requestApi(searchTerm);
})
