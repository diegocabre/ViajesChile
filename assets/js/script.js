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

$("#imagen2").hover(function () {
  $("#card-text2").animate({
    height: "toggle",
    opacity: "toggle",
  });
});

$("#destacados-titulo").hover(function () {
  $("#destacados-titulo").animate({
    fontSize: "50px",
    opacity: "3",
  });
  $("#destacados-titulo").css("color", "blue");
});

$("#destacados-titulo").mouseout(function () {
  $("#destacados-titulo").animate({
    fontSize: "30px",
    opacity: "1",
  })
  $("#destacados-titulo").css("color", "white");
})

$("#contacto-titulo").hover(function () {
  $("#contacto-titulo").css("color", "#b87201");
});

$("#contacto-titulo").mouseout(function () {
  $("#contacto-titulo").css({
    fontDecoration: "none",
    opacity: "1",
  })
})
