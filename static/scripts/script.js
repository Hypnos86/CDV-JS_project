import { Cars } from "./cars.js";
import { Accessories } from "./accessories.js";

// Obiekty statyczne
const carsInstance = new Cars();
const carLocalStorage = "buyCar";
const accessoriesInstance = new Accessories();
const accessoriesLocalStorage = "buyAccessories";

// ENUM dla list akcesoriów
export const accessoriesList = {
  newList: "newList",
  selectedList: "selectedList",
};

export function titlePage() {
  document.title = "Drifter Shop";
}

export function renderHTMLHeader() {
  const $body = document.querySelector("body");
  const $header = document.createElement("header");
  $header.classList.add("header-color");
  $header.classList.add("flex");
  $header.classList.add("justify-between");
  $header.classList.add("align-center");
  $header.innerHTML = `
      <div class="flex">
        <img src="./static/assets/logo.png" alt="Logo firmy" />
        <h1 class="title">D r i f t e r - S h o p</h1>
      </div>
      <div>
        <a class="contact-baner" href="#contact">K o n t a k t</a>
      </div>`;
  $body.insertBefore($header, $body.firstChild);
}

function setToLocalSstorage(nameList, storageObject) {
  try {
    localStorage.setItem(nameList, JSON.stringify(storageObject));
  } catch (e) {
    console.error(`setToLocalSstorage ${e}`);
  }
}

function getFromLocaStorage(nameList) {
  try {
    const items = JSON.parse(localStorage.getItem(nameList));
    return items;
  } catch (e) {
    console.error(`getFromLocaStorage: ${e}`);
  }
}

function renderHTMLCarsList(CarsList) {
  const ul = document.getElementById("cars");
  ul.style.width = "60%";

  CarsList.forEach((car) => {
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
    price.innerHTML = `Cena: ${parseFloat(car.price).toLocaleString(
      "pl-PL"
    )} zł`;
    infoPrice.appendChild(price);
    infoUl.appendChild(infoPrice);

    let description = document.createElement("P");
    description.innerText = car.shortDescription;

    let button = document.createElement("BUTTON");
    button.innerText = "Wybieram";
    button.classList.add("btn-choose");

    infoDiv.appendChild(infoUl);
    infoDiv.appendChild(description);
    infoDiv.appendChild(button);

    li.appendChild(photoDiv);
    li.appendChild(infoDiv);

    ul.appendChild(li);
  });
}

function renderHTMLSearchCar(htmlObject) {
  try {
    htmlObject.addEventListener("input", (e) => {
      const searchBrand = e.target.value.toLowerCase().trim();
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
      }
    });
  } catch (e) {
    console.error(`renderHTMLSearchCar: ${e}`);
  }
}

export function searchCar() {
  const $searchInput = document.getElementById("search");
  renderHTMLSearchCar($searchInput);
}

export function carInject(cars = null) {
  if (cars === null) {
    cars = carsInstance.getAllCars();
  }
  renderHTMLCarsList(cars);
}

export function inputCarDataFromLocalStorage() {
  let data = getFromLocaStorage(carLocalStorage);
  if (data) {
    let $price = document.getElementById("price");
    let $model = document.getElementById("modelCar");
    $price.innerText = data["cena"];
    $model.innerText = `${data["marka"]} ${data["model"]}`;
  }
}

export function choosenCar() {
  const $ulCars = document.getElementById("cars");
  const $mainTag = document.getElementById("main");
  const $customize = document.getElementById("customize");
  $ulCars.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let parentDiv = e.target.closest(".car-info");

      let storage = {};

      for (const child of parentDiv.children[0].children) {
        const meta = child.innerText.split(":")[0].toLowerCase().trim();
        let car = child.innerText.split(":")[1];

        if (car.startsWith(" ")) {
          car = car.slice(1);
        }
        storage[meta] = car;
      }
      // do zmiany metoda
      inputCarDataFromLocalStorage();

      setToLocalSstorage(carLocalStorage, storage);

      $mainTag.classList.toggle("hidden");
      $customize.classList.toggle("hidden");
    }
  });
}

export function cancelChoose() {
  const $btn = document.getElementById("cancel");
  const $mainTag = document.getElementById("main");
  const $customize = document.getElementById("customize");

  $btn.addEventListener("click", () => {
    $mainTag.classList.toggle("hidden");
    $customize.classList.toggle("hidden");
    accessoriesInstance.removeAllSelectedList();
    renderList(accessoriesList.newList);
    renderList(accessoriesList.selectedList);
  });
}

export function newCalendar() {
  const calendarInputs = document.getElementsByClassName("dateOfDelivery");

  if (calendarInputs.length === 0) {
    console.error("Nie znaleziono elementów w .dateOfDelivery");
    return;
  }

  const today = new Date();
  const minDate = today.toISOString().split("T")[0];
  today.setDate(today.getDate() + 14);
  const maxDate = today.toISOString().split("T")[0];

  for (const input of calendarInputs) {
    input.min = minDate;
    input.max = maxDate;
    input.value = minDate;
  }
}

function renderHTMLAccessoryList(accessoryList, typeList) {
  const ul = document.createElement("ul");

  accessoryList.forEach((x) => {
    let li = document.createElement("li");
    li.classList.add("flex");

    let spanId = document.createElement("span");
    spanId.innerText = x.id;
    spanId.classList.add("hidden");

    let spanName = document.createElement("span");
    spanName.classList.add("accessories-name");
    spanName.innerText = x.name;

    let spanPrice = document.createElement("span");
    spanPrice.classList.add("accessories-price");
    spanPrice.innerText = `${parseFloat(x.price).toLocaleString("pl-PL")} zł`;

    const button = document.createElement("button");
    button.innerText = typeList === accessoriesList.newList ? "+" : "-";

    li.appendChild(spanId);
    li.appendChild(spanName);
    li.appendChild(spanPrice);
    li.appendChild(button);
    ul.appendChild(li);
  });
  return ul;
}

export function renderList(typeList) {
  let accessoryList;
  if (typeList == accessoriesList.newList) {
    accessoryList = accessoriesInstance.getFilteredAccessories();
  } else {
    accessoryList = accessoriesInstance.getAllSelectedAccessproes();
  }
  const $parent = document.getElementById(
    typeList === accessoriesList.newList ? "accessories" : "choosenAccessories"
  );
  const htmlList = renderHTMLAccessoryList(accessoryList, typeList);
  $parent.innerHTML = "";
  $parent.appendChild(htmlList);
}

// export function createChoosenAccessoriesList(object) {
//   let list = [];
//   const ul = document.getElementById("choosenAccessories");
//   let li = document.createElement("LI");
//   let span = document.createElement("SPAN");
//   span.innerText = `${object.name} - ${object.price}`;
//   li.appendChild(span);
//   ul.appendChild(li);
//   list.push(object);
// }

function selectAccessory(htmlObject) {
  htmlObject.addEventListener("click", (e) => {
    const parentUl = e.target.closest(".flex");

    if (e.target.tagName === "BUTTON") {
      const itemObjects = parentUl.children;
      const itemId = itemObjects[0];
      const id = Number(itemId.innerText);

      accessoriesInstance.addAccessory(id);
      renderList(accessoriesList.newList);
      renderList(accessoriesList.selectedList);
      accessoriesInstance.getSumAccessoriesFromSelectedList();
    }
  });
}

export function addAccessoryToNewList() {
  const accessories = document.getElementById("accessories");
  selectAccessory(accessories);
}

function removeAccessoryItem(htmlObject) {
  htmlObject.addEventListener("click", (e) => {
    const parentUl = e.target.closest(".flex");
    if (e.target.tagName === "BUTTON") {
      const itemObjects = parentUl.children;
      const itemId = itemObjects[0];
      const id = Number(itemId.innerText);
      console.log(id);
      accessoriesInstance.removeAccessory(id);
      renderList(accessoriesList.newList);
      renderList(accessoriesList.selectedList);
      accessoriesInstance.getSumAccessoriesFromSelectedList();
    }
  });
}
export function removeAccessoryItemFromList() {
  const accessories = document.getElementById("choosenAccessories");
  removeAccessoryItem(accessories);
}
