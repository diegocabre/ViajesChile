var tooltipTriggerList = [].slice.call(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
);
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});

$("#boton").click(function () {
  alert("El Formulario fue enviado correctamente");
});

$("#imagen1").click(function () {
  $("#card-text1").animate({
    height: "toggle",
    opacity: "toggle",
  });
});
