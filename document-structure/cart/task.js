let controlsAll = document.getElementsByClassName("product__quantity-controls");
let products = document.getElementsByClassName("product");
let basket = document.querySelector(".cart__products");

for (control of controlsAll) {
    const less = control.querySelector(".product__quantity-control_dec");
    const more = control.querySelector(".product__quantity-control_inc");
    const quantityValue = control.querySelector(".product__quantity-value");
    more.onclick = () => {
      quantityValue.textContent = String(Number(quantityValue.textContent) + 1);
    };
    less.onclick = () => {
        if (Number(quantityValue.textContent) > 1) {
         quantityValue.textContent = String(Number(quantityValue.textContent) - 1);
        };
    };
}

for (product of products) {
    let productAdd = product.querySelector(".product__add");
    let count = product.querySelector(".product__quantity-value");
    const img = product.querySelector(".product__image");
    let identification = product.getAttribute("data-id");
     productAdd.onclick = () => {
    let cartProducts = basket.querySelectorAll(".cart__product");
    let i = Array.from(cartProducts).find((i) => {
            if (i.getAttribute("data-id") === identification) {
                return i;
            }
        });
     if (i) {
      let productCount = i.querySelector(".cart__product-count");
            productCount.textContent = String(Number(productCount.textContent) + Number(count.textContent));
            count.textContent = 1;
            return;
        }
   let div = document.createElement("div");
   let image = document.createElement("img");
   let divChild = document.createElement("div");
        div.appendChild(image);
        image.setAttribute("src", img.getAttribute("src"));
        image.classList.add("cart__product-image");
        div.classList.add("cart__product");
        div.setAttribute("data-id", identification);
        divChild.classList.add("cart__product-count");
        divChild.textContent = count.textContent;
        count.textContent = "1";
        div.appendChild(divChild);
        basket.appendChild(div);
    }
}