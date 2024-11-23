/** @format */

import { carsData } from "./carsdata.js";
import { getDataFromLocalStorage, setDataToLocalStorage } from "./functions.js";

const tBody = document.querySelector("tbody");
const clearAllBtn = document.querySelector(".clear-all");
const totalPrice = document.querySelector(".total-price");
const users = getDataFromLocalStorage("users") || [];

const user = users.find((us) => us.isLogged);


  function drawTable(basketArr, productsArr) {
    tBody.innerHTML = "";
    basketArr.forEach((item) => {
      console.log(item);

      const product = productsArr.find((p) => p.id == item.productId);

      const trElem = document.createElement("tr");
      trElem.innerHTML = `
                            <td><img src="${
                              product.imageUrl
                            }" width="100"/></td>
                            <td>${product.title}</td>
                            <td>$ ${product.price}</td>
      
                             <td><button class="btn btn-outline-success decrement" data-id="${
                               product.id
                             }"><i class="fa-solid fa-minus"></i></button></td>
                        
                            <td>${item.count}</td>
                           
                                <td><button class="btn btn-outline-success increment" data-id="${
                                  product.id
                                }"><i class="fa-solid fa-plus"></i></button></td>
                                <td>$ ${(product.price * item.count).toFixed(
                                  2
                                )}</td>
                            <td><button class="btn btn-outline-danger delete" data-id="${
                              product.id
                            }"><i class="fa-solid fa-xmark"></i></button></td>
              `;

      tBody.append(trElem);
    });
  }

function updateBasket() {
    setDataToLocalStorage("users", users);
    calculateTotalPrice(products);
    calcBasketCount(user);
    drawTable(user.basket, products);
  }
