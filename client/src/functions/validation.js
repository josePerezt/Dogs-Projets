let characters = /^[a-zA-Z\s]*$/;
let lengthName = /^.{3,18}$/;
let Url = /^(ftp|http|https):\/\/[^ "]+$/;
let numbers = /^\d+-\d+$/;

const validation = (input) => {
  let error = {};

  if (!lengthName.test(input.name)) {
    error.name = "El nombre de la raza debe tener entre 3 y 18 caracteres";
  }

  if (!input.name) {
    error.name = "Campo obligatorio";
  }

  if (!characters.test(input.name)) {
    error.name =
      "El nombre NO debe tener caracteres especiales ni numeros ejemp: (1,2,3*,/,%,/,!,&) ";
  }

  if (!Url.test(input.image)) {
    error.image = "Debe ser un Url ejemp: http://www.ejemplo.com";
  }

  if (!input.image) {
    error.image = "Campo obligatorio";
  }

  if (!numbers.test(input.height)) {
    error.height = "Deben contener min-max";
  }

  if (input.height) {
    let number = input.height.split("-");
    if (Number(number[0]) > number[1]) {
      error.height = `La altura Min debe ser menor que la Max`;
    } else if (Number(number[0]) === number[1]) {
      error.height = "Ambos valores son iguales, debe contener un min y un max";
    }
  }
  if (!input.height) {
    error.height = "Campo obligatorio";
  }

  if (!numbers.test(input.weight)) {
    error.weight = "Deben contener min - max ejemp: 100-120";
  }
  if (input.weight) {
    let number = input.weight.split("-");
    if (Number(number[0]) > number[1]) {
      error.weight = `El peso Min debe ser menor que la Max`;
    } else if (Number(number[0]) === number[1]) {
      error.weight = "Ambos valores son iguales, debe contener un min y un max";
    }
  }
  if (!input.weight) {
    error.weight = "Campo obligatorio";
  }

  if (!numbers.test(input.life_span)) {
    error.life_span = "Deben contener min - max ejemp: 0-5";
  }

  if (input.life_span) {
    let number = input.life_span.split("-");
    if (Number(number[0]) > number[1]) {
      error.life_span = `La edad Min debe ser menor que la Max`;
    } else if (Number(number[0]) === number[1]) {
      error.life_span =
        "Ambos valores son iguales, debe contener un min y un max";
    }
  }

  if (!input.life_span) {
    error.life_span = "Campo obligatorio";
  }

  if (!lengthName.test(input.origin)) {
    error.origin = "El Origen debe tener entre 3 y 18 caracteres";
  }
  if (!input.origin) {
    error.origin = "Campo obligatorio";
  }

  return error;
};

export default validation;
