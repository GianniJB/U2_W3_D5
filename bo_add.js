const pushSubmit = (e) => {
  e.preventDefault();

  /* creare nuovo prodotto e inserire dati form */

  const addProduct = {
    name: e.target.elements.pName.value,
    description: e.target.elements.pDesc.value,
    brand: e.target.elements.pBrand.value,
    imageUrl: e.target.elements.pUrl.value,
    price: e.target.elements.pPrice.value,
  };

  /* API */
  const url = "https://striveschool-api.herokuapp.com/api/product/";

  fetch(url, {
    method: "POST",
    body: JSON.stringify(addProduct),
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjZiZmRjNjdjMjM5YzAwMTUyZjRiNjEiLCJpYXQiOjE3MTgzNTMzNTAsImV4cCI6MTcxOTU2Mjk1MH0.ROxgFarNDwszURZk-wYq0OjX_OvWwGvWJn2XnK9Qdns",
    },
  });

  console.log(e);
};

window.addEventListener("DOMContentLoaded", function () {
  /* carica il form */
  const form = document.querySelector("form");

  console.log(form);

  form.addEventListener("submit", pushSubmit);
  /* ricorda preventDefalut() */
});
