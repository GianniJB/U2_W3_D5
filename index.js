const url = "https://striveschool-api.herokuapp.com/api/product/";

window.addEventListener("DOMContentLoaded", function () {
  fetch(url, {
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmRjNjdjMjM5YzAwMTUyZjRiNjEiLCJpYXQiOjE3MTgzNTMzNTAsImV4cCI6MTcxOTU2Mjk1MH0.ROxgFarNDwszURZk-wYq0OjX_OvWwGvWJn2XnK9Qdns",
    },
  })
    .then((response) => {
      if (response.ok) {
        /* conversione in array */
        return response.json();
      }
    })

    .then((products) => {
      /* APPEND HERE */
      const showProd = document.getElementById("products_cont");

      products.forEach((currentProd) => {
        /* CREAZIONE CARD PRODOTTO */
        const cardCol = document.createElement("div");
        cardCol.className = "col";

        showProd.appendChild(cardCol);

        const cardWrap = document.createElement("div");
        cardWrap.className = "card";

        cardCol.appendChild(cardWrap);

        const prodImg = document.createElement("img");
        prodImg.src = currentProd.imageUrl;

        cardWrap.appendChild(prodImg);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        cardWrap.appendChild(cardBody);

        const titleProd = document.createElement("h5");
        titleProd.innerText = currentProd.name;

        cardBody.appendChild(titleProd);

        const prodDescription = document.createElement("p");
        prodDescription.innerText = currentProd.description;

        cardBody.appendChild(prodDescription);

        const prodPrice = document.createElement("p");
        prodPrice.innerText = currentProd.price;

        cardBody.appendChild(prodPrice);
      });
    })
    .catch((err) => console.log(err));
});
