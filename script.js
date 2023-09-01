function generatePDF() {
  const element = document.getElementById("invoice");

  var opt = {
    filename: "InvoicePDF-Jo'Vince.pdf",
  };

  html2pdf().set(opt).from(element).save();
}

//Price
function myPrice() {
  const totalPrice = document.getElementById("totalAmount").value;
  const price = document.getElementById("subPrice").value;
  document.getElementById("price").innerHTML = price;
  document.getElementById("totalPrice").innerHTML = totalPrice;
}

//totalPrice
/* function myTotal() {
  const price = document.getElementById("myText").value;
  document.getElementById("price").innerHTML = price;
}
 */
