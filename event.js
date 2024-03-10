let burgerMenu_btn = document.querySelector(".burger__menu");
let Menu_contener = document.querySelector(".container");
let swiper_box = document.querySelector(".mySwiper");

 const arr = [
  {
    id: 1,
    photo: "./img/лцщкл.jpg",
    name: "Azamat",
    famil: "Uzakov",
    direction: "Веб разработчик",
  },
  {
    id: 2,
    photo: "./img/Muhammad.jpg",
    name: "Muhammd",
    famil: "Hamrakulov",
    direction: "Веб разработчик",
  },
  {
    id: 3,
    photo: "./img/Muhammad.jpg",
    name: "Orzu",
    famil: "Utkurov",
    direction: "Веб Дизайнер",
  },
  {
    id: 4,
    photo: "./img/Muhammad.jpg",
    name: "Ramiz",
    famil: "Abdulazizov",
    direction: "Мобилограф",
  },  {
    id: 1,
    photo: "./img/лцщкл.jpg",
    name: "Azamat",
    famil: "Uzakov",
    direction: "Веб разработчик",
  },
  {
    id: 1,
    photo: "./img/лцщкл.jpg",
    name: "Azamat",
    famil: "Uzakov",
    direction: "Веб Дизайнер",
  },
  
];
  

// console.log(arr[1].photo);
function ourTeam(arr) {
  let photo_flex_box = document.querySelector(".photo_flex_box");
  let bio_h1 = document.querySelector(".bio h1");
  console.log(bio_h1);

  for (let i of arr) {
    let participant_box = document.createElement("div");
    let participant_box_img = document.createElement("img");
    let participant_box_name_p = document.createElement("p");
    let participant_box_famil_p = document.createElement("p");
    let participant_box_profession_p = document.createElement("p");

    participant_box_img.style.width = "100%";
    participant_box_img.style.height = "100%";

    participant_box_img.src = i.photo;
    participant_box_name_p.innerHTML = i.name;
    participant_box_famil_p.innerHTML = i.famil;
    participant_box_profession_p.innerHTML = i.direction;

    participant_box.classList.add("participant_box");
    participant_box_name_p.classList.add("name_p");
    participant_box_famil_p.classList.add("name_p");
    participant_box_profession_p.classList.add("profession");

    photo_flex_box.append(participant_box);
    participant_box.append(
      participant_box_img,
      participant_box_name_p,
      participant_box_famil_p,
      participant_box_profession_p
    );

    // console.log(participant_box);
  }

}
ourTeam(arr);
let participant_boxAll = document.querySelectorAll(".participant_box");
// console.log(participant_boxAll);

// participant_boxAll.forEach((button, index) => {
//   button.onclick = (event) => {
//     window.location="dinamic_page/page.html?" + index;
//   };
// });

participant_boxAll.forEach((btn) => {
  btn.onmouseover = () => {
    participant_boxAll.forEach((el) => el.classList.remove("actives"));
    btn.classList.add("actives");
  };
  btn.onmouseout = () => {
    participant_boxAll.forEach((el) => el.classList.remove("actives"));
    btn.classList.remove("actives");
  };
});
