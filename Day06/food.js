"use strict";
let loading = document.querySelector(".loading");
let container = document.querySelector(".container");
let card = document.querySelectorAll(".card");
card.forEach(function (cards) {
    cards.addEventListener("click", function () {
        console.log(cards);
        document.body.innerHTML = "";
        let div = document.createElement("div");
        div.classList.add("foodDetail");
        let image = cards.firstElementChild;
        div.innerHTML = `
            <img src="${image.src}" alt="">

            <div class="detailText">
                <h1>Eat Best With Laziz</h1>
                <h3>Exciting Offer Upto 50% OFF</h3>

                <p>Pay on delivery might be available</p>
                <p>Pay on delivery might be available</p>
                <p>Pay on delivery might be available</p>
                <p>Pay on delivery might be available</p>

                <button>Buy Now</button>
                <button>Add To Cart</button>
                <a href="">Back</a>
            </div>
        `;
        document.body.appendChild(div);
    });
});
// Loading
container.style.display = "none";
setTimeout(function () {
    container.style.display = "block";
    loading.style.display = "none";
}, 2000);
