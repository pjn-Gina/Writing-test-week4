//fetch dengan promise

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu/", {
//     method:"GET"
// })
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data)
// })
// .catch((error) => {
//     console.log(error)
// })


//fetch dengan async/await

// fetch("https://pokeapi.co/api/v2/pokemon/pikachu/", {
//     method: "GET"
// })
// .then(async (response) => {
//     let convertData = await response.json();
//     console.log(convertData)
// })
// .catch((error) => {
//     console.log(error);
// });


//contoh ambil data provinsi saja
let listProvinsi = document.getElementById("itemProvince");

fetch("https://kipi.covid19.go.id/api/get-province", {
  method: "POST"
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.results.forEach((element) => {
      let li = document.createElement("li");
      li.textContent = element.value;
      listProvinsi.append(li);
    });
  })
  .catch((error) => {
    console.log(error);
  });