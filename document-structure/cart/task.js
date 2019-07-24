const cartProducts = document.querySelector(".cart__products");

class addToCart {
	constructor( container ) {
		this.container = container;
		this.productQuantityValue = container.querySelector(".product__quantity-value");
		this.productAdd = container.querySelector(".product__add");
		this.productImage = container.querySelector(".product__image");
		this.controlInc = container.querySelector(".product__quantity-control.product__quantity-control_inc");
		this.controlDec = container.querySelector(".product__quantity-control.product__quantity-control_dec");
		this.amountOfProduct = +this.productQuantityValue.textContent; 
		this.check = false; 
		this.registerEvents();
	};

	registerEvents() {
		this.controlInc.addEventListener("click", () => { 
			this.amountOfProduct++;
			this.productQuantityValue.textContent = this.amountOfProduct;
		})
		this.controlDec.addEventListener("click", () => { 
			if (this.amountOfProduct != 1) { 																					 
				this.amountOfProduct--;																							 
				this.productQuantityValue.textContent = this.amountOfProduct;													 	 
			};
		});
		this.productAdd.addEventListener("click", (e) => { 
			let cartProduct = Array.from(cartProducts.querySelectorAll(".cart__product"));
			if (this.check === false) {
				cartProducts.insertAdjacentHTML("beforeEnd", `<div class="cart__product" data-id="${this.container.dataset.id}">
			 													<img class="cart__product-image" src="${this.productImage.src}">
			 													<div class="cart__product-count">${this.amountOfProduct}</div>
														  	  </div>
			 											 	 `);
				this.check = true;
			} else { 
				for (let a in cartProduct) {
					if (cartProduct[a].dataset.id === this.container.dataset.id) {
						let cartProductValue = +cartProduct[a].children[1].innerText + this.amountOfProduct;
						cartProduct[a].children[1].innerText = cartProductValue;
					};
				};
			};
		});
	};
};

new addToCart ( document.querySelectorAll(".product")[0] );
new addToCart ( document.querySelectorAll(".product")[1] );