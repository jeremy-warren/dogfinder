// const firstReq = new XMLHttpRequest();
// firstReq.addEventListener('load', function(){
//     const data = JSON.parse(this.responseText);
//     for (let planet of data.results) {
//         console.log(planet.name)
//     }
//     });

//     firstReq.addEventListener('error', () => {
//         console.log('ERROR!');
//     });

//     firstReq.open('GET', 'https://swapi.co/api/planets/');
//     firstReq.send();
//     console.log("Sending request...");

async function getData() {
  const response = await axios.get("https://swapi.dev/api/planets/");
  const {next, results} = response.data;

  for (let planet of results){
    console.log(planet.name)
  }
  const response2 = await axios.get(next);
  console.log(response2.data.results);
//   const {results} = response.data;
}

