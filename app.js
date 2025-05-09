

// getting an dog image from api and gett
fetch('https://dog.ceo/api/breeds/list/all')
.then(response=>response.json())
.then(data=>{
    const breeds=Object.keys(data.message);

    const randombreed=breeds[Math.floor(Math.random()*breeds.length)];


    console.log(`selected breed:${randombreed}`);

    return fetch(`https://dog.ceo/api/breed/${randombreed}/images/random`)
    .then(response=>response.json())
    .then(imageData=>{
        document.getElementById('breed-name').textContent=`Breed :${randombreed}`;
        document.getElementById('photo').src=imageData.message
    });



})
.catch(error=>{
    console.log('error fetching dog data',error);
});