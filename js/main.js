$(document).ready(function (){
    $('.header__burger').click(function (event){
        $('.header__burger,.menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});



const searchBtn = document.querySelector(".search-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector("input");
const searchData = document.querySelector(".search-data")
searchBtn.onclick = () => {
    searchBox.classList.add("active");
    searchInput.classList.add("active");
    searchBtn.classList.add("active");
    cancelBtn.classList.add("active");
    if (searchInput.value != "") {
        searchData.classList.remove("active");
        searchData.innerHTML = "Вы только что набрали " + "<span>" + value + "</span>";
    }else  {
        searchData.innerHTML = ""
    }
}
cancelBtn.onclick = () => {
    searchBox.classList.remove("active");
    searchInput.classList.remove("active");
    searchBtn.classList.remove("active");
    cancelBtn.classList.remove("active");
    searchData.classList.add("active");
    searchInput.value = "";
}
