async function getRandomDog() {
  const res = await axios.get("https://dog.ceo/api/breeds/image/random");
  console.log(res.data);
  const img = document.querySelector("#dog");
  img.src = res.data.message;
}

async function getDogByBreed(breed) {
  try {
    const url = `https://dog.ceo/api/breed/${breed}/images/random`;
    const res = await axios.get(url);
    const img = document.querySelector("#dog");
    img.src = res.data.message;
  } catch (e) {
    alert("Breed not found! Have a random dog!");
    getRandomDog();
  }
}

const dogButton = document.getElementById('dogButton');

dogButton.addEventListener('click', function(){
    console.log ('clicked!');
    getRandomDog()
});

const breedBox = document.getElementById('breedBox');

breedBox.addEventListener("focusout", function(){
    getDogByBreed(breedBox.value);
})