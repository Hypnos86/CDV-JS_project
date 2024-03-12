import { Cars } from "./cars.js";

const carsInstance = new Cars();

export function titlePage() {
  document.title = "Drifter Shop";
}

export function menu() {
  const $body = document.querySelector("body");
  const $div = document.createElement("div");
  $div.innerHTML = `
  <header class="header-color flex">
    <img src="static/assets/logo.png" alt="Logo firmy">
    <h1>D r i f t e r - S h o p</h1>
  </header>`;
  $body.insertBefore($div, $body.firstChild);
}

export function carInject(cars = null) {
  if (cars === null) {
    cars = carsInstance.getAllCars();
  }

  const ul = document.getElementById("cars");
  // console.log(cars);

  cars.forEach((car) => {
    // console.log(`${car.brand}`);
    let li = document.createElement("LI");
    li.classList.add("flex");

    let photoDiv = document.createElement("DIV");
    photoDiv.classList.add("car-photo", "flex");
    let img = document.createElement("IMG");
    img.src = `./static/assets/cars/${car.image}`;
    photoDiv.appendChild(img);

    let infoDiv = document.createElement("DIV");
    infoDiv.classList.add("car-info");
    let infoUl = document.createElement("UL");

    let infoBrand = document.createElement("LI");
    let brand = document.createElement("SPAN");
    brand.innerText = `Marka: ${car.brand}`;
    infoBrand.appendChild(brand);
    infoUl.appendChild(infoBrand);

    let infoYear = document.createElement("LI");
    let year = document.createElement("SPAN");
    year.innerText = `Rocznik: ${car.year}`;
    infoYear.appendChild(year);
    infoUl.appendChild(infoYear);

    let infoModelAndGeneration = document.createElement("LI");
    let modelAndGeneration = document.createElement("SPAN");
    modelAndGeneration.innerText = `Model: ${car.model} (${car.generation})`;
    infoModelAndGeneration.appendChild(modelAndGeneration);
    infoUl.appendChild(infoModelAndGeneration);

    let infoEnginePower = document.createElement("LI");
    let enginePower = document.createElement("SPAN");
    enginePower.innerText = `Moc silnika: ${car.enginePower}`;
    infoEnginePower.appendChild(enginePower);
    infoUl.appendChild(infoEnginePower);

    let infoMileage = document.createElement("LI");
    let mileage = document.createElement("SPAN");
    mileage.innerText = `Przebieg: ${car.mileage}`;
    infoMileage.appendChild(mileage);
    infoUl.appendChild(infoMileage);

    let infoPrice = document.createElement("LI");
    let price = document.createElement("SPAN");
    price.innerHTML = `Cena: ${car.price} zł`;
    infoPrice.appendChild(price);
    infoUl.appendChild(infoPrice);

    let infoDescription = document.createElement("LI");
    let description = document.createElement("P");
    description.innerText = car.shortDescription;
    infoDescription.appendChild(description);
    infoUl.appendChild(infoDescription);

    infoDiv.appendChild(infoUl);

    li.appendChild(photoDiv);
    li.appendChild(infoDiv);

    ul.appendChild(li);
  });
}

export function searchCar() {
  const searchInput = document.getElementById("search");
  searchInput.addEventListener("input", (e) => {
    const searchBrand = e.target.value.toLowerCase().trim();
    console.log(searchBrand);

    const cars = carsInstance.getAllCars();
    const filteredList = cars.filter((x) =>
      x.brand.toLowerCase().startsWith(searchBrand)
    );
    const ul = document.getElementById("cars");
    ul.innerHTML = "";
    if (filteredList.length != 0) {
      carInject(filteredList);
    } else {
      const ul = document.getElementById("cars");
      ul.style.width = "100%";

      const li = document.createElement("LI");
      li.style.border = "none";
      li.style.borderRadius = 0;

      const div = document.createElement("DIV");
      div.classList.add("empty");

      const p = document.createElement("P");
      p.innerText = "Nie znalazłeś swojej marki? \n Skonaktuj się z nami!";

      div.appendChild(p);
      li.appendChild(div);
      ul.appendChild(li);
      console.log("nic niemo");
    }

    console.log(filteredList);
  });
}

// export function choseCar(){

// }
