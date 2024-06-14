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
        prodImg.className = "object-fit-contain";
        prodImg.style = "max-height: 260px";

        cardWrap.appendChild(prodImg);

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        cardWrap.appendChild(cardBody);

        const titleProd = document.createElement("h5");
        titleProd.innerText = currentProd.name;
        titleProd.className = "border";

        cardBody.appendChild(titleProd);

        const prodDescription = document.createElement("p");
        prodDescription.innerText = currentProd.description;
        prodDescription.className = " text-truncate";

        cardBody.appendChild(prodDescription);

        /* DIV per Prezzo e bottone */
        const divP_Btn = document.createElement("div");
        divP_Btn.className =
          "d-flex justify-content-between align-items-center";

        cardBody.appendChild(divP_Btn);

        const prodPrice = document.createElement("p");
        prodPrice.innerText = "€ " + currentProd.price;
        prodPrice.className = "mb-0";

        divP_Btn.appendChild(prodPrice);

        /* Aggiungere bottone di modifica */
        const btnEdit = document.createElement("button");
        btnEdit.className = "btn btn-primary btn-sm";
        btnEdit.innerText = "Edit";
        btnEdit.set;

        /* APPENDI BOTTONE */
        divP_Btn.appendChild(btnEdit);
      });
    })
    .catch((err) => console.log(err));
});
