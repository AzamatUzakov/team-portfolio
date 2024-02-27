let burgerMenu_btn = document.querySelector('.burger__menu')
let Menu_contener = document.querySelector('.container')
let swiper_box = document.querySelector(".mySwiper")
let participant_box = document.querySelectorAll('.participant_box')


burgerMenu_btn.onclick = () => {
    Menu_contener.classList.toggle("menu_block_active")
    console.log("click ");
}


participant_box.forEach(btn => {
    btn.onmouseenter = () => {
        participant_box.forEach(el => el.classList.remove("active"))
        btn.classList.add("active")
    }
})
/*  
swiper_box.onmouseenter = () => {
text_shadow.forEach(text => {
   text.style.display = "block"

});

box_shadow.forEach(box => {
    box.style.display = "block"
    console.log("clicl");
});

}

swiper_box.onmouseleave = () => {
text_shadow.forEach(text => {
    text.style.display = "none"
 
 });
 
 box_shadow.forEach(box => {
     box.style.display = "none"
     console.log("clicl");
 });
} */
