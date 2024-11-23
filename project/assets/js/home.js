/** @format */

import { getDataFromLocalStorage, setDataToLocalStorage } from "./functions.js";
import { carsData } from "./carsdata.js";

const section = document.querySelector("#cards");
const container = document.querySelector(".container")



function drawCards(arr) {
  section.innerHTML = "";
  arr.forEach((product) => {
    const cardsDiv = document.createElement("div");
    cardsDiv.className = "cards";
    cardsDiv.innerHTML = `
          <div class = "container m-auto">
            <div class="row align-items-center">
              <div class="card col-12 col-md-6 col-lg-3">
                <div class="card-header bg-white">
                  <div><h2>${product.name}</h2>
                    <p class="category">${product.type}</p></div>
                     <button class="btn btn-outline-warning basket" data-id="${
                    product.id
                  }">
                    <i class=" fa-solid fa-cart-shopping"></i>
                  </button>
                     <button class="btn btn-outline-danger basket" data-id="${
                    product.id
                  }">
                    <span class="favorite"><i class=" far fa-heart"></i></span>
                  </button>
                  
                </div>
                <img
                  src="${product.image}"
                  alt="Nissan GT-R"
                  class="car-image" />
                <div class="card-info">
                  <div class="feature">
                    <i class="fas fa-gas-pump"></i>
                    <p>${product.fuel}</p>
                  </div>
                  <div class="feature">
                    <i class="fas fa-cogs"></i>
                    <p>${product.transmission}</p>
                  </div>
                  <div class="feature">
                    <i class="fas fa-user-friends"></i>
                    <p>${product.passengers}</p>
                  </div>
                </div>
                <div class="card-footer bg-white">
                  <div class="price">
                    <p class="current-price">${product.price}/day</p>
                  </div>
                  <button class="rent-button">Rent Now</button>
                </div>
              </div>
            </div>
          </div>
        
        
        `;
    
    section.append(cardsDiv);
  });
}
drawCards(carsData);

// window.addEventListener("DOMContentLoaded" , function(){

//     drawCards(carsData)

// })
const allBasketBtns = document.querySelectorAll(".basket");
allBasketBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    const pId = this.getAttribute("data-id");
    if (user) {
      addToBasket(pId);
    } else {
      Swal.fire({
        position: "top-end",
        icon: "error",
        title: "please go to login or registration page",
        showConfirmButton: false,
        timer: 1500,
      }).then(() => {
        window.location.replace("login.html");
      });
    }
  });
});
function addToBasket(id) {
  const found = user.basket.find((q) => q.productId == id);
  console.log(found);

  if (!found) {
    user.basket.push({ productId: id, count: 1 });
  } else {
    found.count++;
  }

  calcBasketCount(user);
  setDataToLocalStorage("users", users);

  
}