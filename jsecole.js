function animechauffement() {
  var echauffement = document.querySelector(".divechauffement");
  echauffement.animate([{ opacity: "0" }, { opacity: "1" }], {
    // timing options
    duration: 500,
    fill: "forwards",
    easing: "ease-in-out",
    iterations: 1,
    direction: "alternate",
  });
}

function animechauffementreverse() {
  var echauffement = document.querySelector(".divechauffement");
  echauffement.animate([{ opacity: "1" }, { opacity: "0" }], {
    // timing options
    duration: 500,
    fill: "forwards",
    easing: "ease-in-out",
    iterations: 1,
    direction: "alternate",
  });
}

function animpointes() {
  var pointes = document.querySelector(".divpointes");
  pointes.animate([{ opacity: "0" }, { opacity: "1" }], {
    // timing options
    duration: 500,
    fill: "forwards",
    easing: "ease-in-out",
    iterations: 1,
    direction: "alternate",
  });
}

function animpointesreverse() {
  var pointes = document.querySelector(".divpointes");
  pointes.animate([{ opacity: "1" }, { opacity: "0" }], {
    // timing options
    duration: 500,
    fill: "forwards",
    easing: "ease-in-out",
    iterations: 1,
    direction: "alternate",
  });
}

function animclassique() {
  var classique = document.querySelector(".divclassique");
  classique.animate([{ opacity: "0" }, { opacity: "1" }], {
    // timing options
    duration: 500,
    fill: "forwards",
    easing: "ease-in-out",
    iterations: 1,
    direction: "alternate",
  });
}

function animclassiquereverse() {
  var classique = document.querySelector(".divclassique");
  classique.animate([{ opacity: "1" }, { opacity: "0" }], {
    // timing options
    duration: 500,
    fill: "forwards",
    easing: "ease-in-out",
    iterations: 1,
    direction: "alternate",
  });
}
