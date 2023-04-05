const data = [
  {
    id: 1,
    name: "Hawk, red-tailed",
    "latest chapter": 54,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 2,
    name: "Albatross, waved",
    "latest chapter": 59,
    image: "http://dummyimage.com/600x700.png/dddddd/000000",
  },
  {
    id: 3,
    name: "Ringtail cat",
    "latest chapter": 58,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 4,
    name: "Dove, emerald-spotted wood",
    "latest chapter": 79,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 5,
    name: "Western pygmy possum",
    "latest chapter": 90,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 6,
    name: "Asian water dragon",
    "latest chapter": 76,
    image: "http://dummyimage.com/600x700.png/dddddd/000000",
  },
  {
    id: 7,
    name: "Barasingha deer",
    "latest chapter": 96,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 8,
    name: "Python, carpet",
    "latest chapter": 87,
    image: "http://dummyimage.com/600x700.png/dddddd/000000",
  },
  {
    id: 9,
    name: "Cockatoo, sulfur-crested",
    "latest chapter": 76,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 10,
    name: "Southern right whale",
    "latest chapter": 99,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 11,
    name: "Cormorant, great",
    "latest chapter": 94,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 12,
    name: "Goldeneye, barrows",
    "latest chapter": 63,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 13,
    name: "Black-backed magpie",
    "latest chapter": 62,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 14,
    name: "Long-necked turtle",
    "latest chapter": 75,
    image: "http://dummyimage.com/600x700.png/dddddd/000000",
  },
  {
    id: 15,
    name: "Peacock, blue",
    "latest chapter": 59,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 16,
    name: "Sparrow, house",
    "latest chapter": 96,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 17,
    name: "Bohor reedbuck",
    "latest chapter": 54,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 18,
    name: "North American porcupine",
    "latest chapter": 67,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 19,
    name: "Smith's bush squirrel",
    "latest chapter": 99,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 20,
    name: "Gray rhea",
    "latest chapter": 93,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 21,
    name: "Giraffe",
    "latest chapter": 82,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 22,
    name: "Roadrunner, greater",
    "latest chapter": 74,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 23,
    name: "Crocodile, nile",
    "latest chapter": 61,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 24,
    name: "Monkey, vervet",
    "latest chapter": 54,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 25,
    name: "Whale, baleen",
    "latest chapter": 60,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 26,
    name: "Lizard, blue-tongued",
    "latest chapter": 57,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 27,
    name: "Dragon, asian water",
    "latest chapter": 85,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 28,
    name: "Chimpanzee",
    "latest chapter": 74,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 29,
    name: "Common rhea",
    "latest chapter": 70,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 30,
    name: "Tawny frogmouth",
    "latest chapter": 93,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 31,
    name: "Boat-billed heron",
    "latest chapter": 55,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 32,
    name: "Armadillo, common long-nosed",
    "latest chapter": 89,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 33,
    name: "Jackal, indian",
    "latest chapter": 87,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 34,
    name: "Cockatoo, red-tailed",
    "latest chapter": 79,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 35,
    name: "Dove, galapagos",
    "latest chapter": 55,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 36,
    name: "Oystercatcher, blackish",
    "latest chapter": 91,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 37,
    name: "Gull, herring",
    "latest chapter": 89,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 38,
    name: "Wolf, mexican",
    "latest chapter": 57,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 39,
    name: "Goose, cape barren",
    "latest chapter": 89,
    image: "http://dummyimage.com/600x700.png/dddddd/000000",
  },
  {
    id: 40,
    name: "Cape fox",
    "latest chapter": 84,
    image: "http://dummyimage.com/600x700.png/dddddd/000000",
  },
  {
    id: 41,
    name: "Asian red fox",
    "latest chapter": 86,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 42,
    name: "Lion, south american sea",
    "latest chapter": 63,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 43,
    name: "Kiskadee, great",
    "latest chapter": 53,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 44,
    name: "Chilean flamingo",
    "latest chapter": 52,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 45,
    name: "Superb starling",
    "latest chapter": 83,
    image: "http://dummyimage.com/600x700.png/dddddd/000000",
  },
  {
    id: 46,
    name: "Blackish oystercatcher",
    "latest chapter": 50,
    image: "http://dummyimage.com/600x700.png/5fa2dd/ffffff",
  },
  {
    id: 47,
    name: "Bald eagle",
    "latest chapter": 88,
    image: "http://dummyimage.com/600x700.png/ff4444/ffffff",
  },
  {
    id: 48,
    name: "Indian leopard",
    "latest chapter": 83,
    image: "http://dummyimage.com/600x700.png/cc0000/ffffff",
  },
  {
    id: 49,
    name: "African polecat",
    "latest chapter": 68,
    image: "http://dummyimage.com/600x700.png/dddddd/000000",
  },
  {
    id: 50,
    name: "Vulture, white-headed",
    "latest chapter": 82,
    image: "http://dummyimage.com/600x700.png/dddddd/000000",
  },
];

const $bookList = document.getElementById("wibu-book-list");
// This option runs 2 loops while the below one run 1 loop
// $bookList.innerHTML = data.map(({name, latest_chapper, image})) => {
//     return
//     `
//     <div class="col-3 mb-3">
//     <div class="card">
//             <img
//               class="card-img-top-"
//              src="${image}"
//              alt=""
//             />
//             <div class="card-body">
//               <b class="card-title">${name}</b>
//               <p class="card-text">${latest_chapter}</p>
//               <a href="#" class="btn btn-primary btn-sm">Doc truyen</a>
//               <a href="#" class="btn btn-danger btn-sm">Yeu thich</a>
//             </div>
//           </div>
//         </div>`;
// }).join('');

let result = "";
for (const item of data) {
  result += `
    <div class="col-3 mb-3">
    <div class="card">
            <img
              class="card-img-top-"
             src="${item.image}"
             alt=""
            />
            <div class="card-body">
              <b class="card-title">${item.name}</b>
              <p class="card-text">${item.latest_chapter}</p>
              <a href="#" class="btn btn-primary btn-sm">Doc truyen</a>
              <a href="#" class="btn btn-danger btn-sm">Yeu thich</a>
            </div>
          </div>
        </div>`;
}
$bookList.innerHTML = result;
