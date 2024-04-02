import { Cars } from "./cars.js";
import { Accessories } from "./accessories.js";

// Obiekty statyczne
const carsInstance = new Cars();
const carLocalStorage = "buyCar";
const accessoriesInstance = new Accessories();
const accessoriesLocalStorage = "buyAccessories";
const clientLocalStorage = "client";
// ENUM dla list akcesoriów
export const accessoriesList = {
  newList: "newList",
  selectedList: "selectedList",
};

export function titlePage(text) {
  document.title = text;
}

function showSnackbar(message) {
  const snackbar = document.getElementById("snackbar");
  snackbar.innerText = message;
  snackbar.className = "show";
  setTimeout(function () {
    snackbar.classList.remove("show");
  }, 5000);
}

export function renderHTMLHeader() {
  const $body = document.querySelector("body");
  const $header = document.createElement("header");
  $header.classList.add("header-theme");
  $header.classList.add("flex");
  $header.classList.add("justify-between");
  $header.classList.add("align-center");
  $header.innerHTML = `
      <div class="flex">
        <a href="index.html"><img src="./static/assets/logo.png" alt="Logo firmy" /></a>
        <h1 class="title">D r i f t e r - S h o p</h1>
      </div>
      <div>
        <a class="contact-baner" href="#contact">K o n t a k t</a>
      </div>`;
  $body.insertBefore($header, $body.firstChild);
}

export function renderHTMLFooter() {
  const $body = document.querySelector("body");
  const $footer = document.createElement("footer");
  $footer.classList.add("bg-dark");

  $footer.innerHTML = `<div id="contact">
        <div class="contact">
          <p class="title-text">Napisz do nas!</p>
          <div class="row wrap">
            <div class="form">
              <form>
                <div class="form-div">
                  <span class="form-text">@</span>
                  <input
                    type="text"
                    placeholder="Imie i nazwisko"
                    class="form-input"
                    name="name_and_lastname"
                  />
                </div>
                <div class="form-div">
                  <span class="form-text">@</span>
                  <input
                    type="text"
                    placeholder="Adres emailowy"
                    class="form-input"
                    name="email"
                  />
                </div>
                <div class="form-div">
                  <textarea
                    class="form-textarea"
                    rows="6"
                    placeholder="Treść wiadomości"
                    name="message"
                  ></textarea>
                </div>
                <input type="submit" value="Wyśli" class="btn-submit" />
              </form>
            </div>
            <div class="contact-info">
              <h3>Kontakt</h3>
              <p class="factory-color">Drifter Shop <sup>&reg;</sup></p>
              <address>
                <p><i class="bi bi-at icon-color"></i> df-kontakt@email.com</p>
                <p><i class="bi bi-phone icon-color"></i> +48 792 382 000</p>
                <p>
                  <i class="bi bi-geo-alt icon-color"></i>
                  <span>ul.Kutrzeby 10,</span><br /><span>61-719 Poznań</span>
                </p>
              </address>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.4922376218096!2d16.92910287667485!3d52.41587817203419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b458e6d37f9%3A0x630f1e648e79b67!2sCollegium%20Da%20Vinci!5e0!3m2!1spl!2spl!4v1700586689917!5m2!1spl!2spl"
                width="240"
                height="auto"
                style="border: 0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <p class="copyright">&copy; Drifter Shop Copyright 2024</p>
      <ul>
        <li>
          <svg class="facebook"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"
            ></path>
          </svg>
        </li>
        <li>
          <svg class="twitter"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 26 26"
          >
            <path
              d="M 25.855469 5.574219 C 24.914063 5.992188 23.902344 6.273438 22.839844 6.402344 C 23.921875 5.75 24.757813 4.722656 25.148438 3.496094 C 24.132813 4.097656 23.007813 4.535156 21.8125 4.769531 C 20.855469 3.75 19.492188 3.113281 17.980469 3.113281 C 15.082031 3.113281 12.730469 5.464844 12.730469 8.363281 C 12.730469 8.773438 12.777344 9.175781 12.867188 9.558594 C 8.503906 9.339844 4.636719 7.246094 2.046875 4.070313 C 1.59375 4.847656 1.335938 5.75 1.335938 6.714844 C 1.335938 8.535156 2.261719 10.140625 3.671875 11.082031 C 2.808594 11.054688 2 10.820313 1.292969 10.425781 C 1.292969 10.449219 1.292969 10.46875 1.292969 10.492188 C 1.292969 13.035156 3.101563 15.15625 5.503906 15.640625 C 5.0625 15.761719 4.601563 15.824219 4.121094 15.824219 C 3.78125 15.824219 3.453125 15.792969 3.132813 15.730469 C 3.800781 17.8125 5.738281 19.335938 8.035156 19.375 C 6.242188 20.785156 3.976563 21.621094 1.515625 21.621094 C 1.089844 21.621094 0.675781 21.597656 0.265625 21.550781 C 2.585938 23.039063 5.347656 23.90625 8.3125 23.90625 C 17.96875 23.90625 23.25 15.90625 23.25 8.972656 C 23.25 8.742188 23.246094 8.515625 23.234375 8.289063 C 24.261719 7.554688 25.152344 6.628906 25.855469 5.574219"
            ></path>
          </svg>
        </li>
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          > <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#405DE6" />
    <stop offset="10%" stop-color="#5851DB" />
    <stop offset="20%" stop-color="#833AB4" />
    <stop offset="30%" stop-color="#C13584" />
    <stop offset="40%" stop-color="#E1306C" />
    <stop offset="50%" stop-color="#FD1D1D" />
    <stop offset="60%" stop-color="#F56040" />
    <stop offset="70%" stop-color="#F77737" />
    <stop offset="80%" stop-color="#FCAF45" />
  </linearGradient>
            <path
              d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"
            ></path>
          </svg>
        </li>
      </ul>`;
  $body.insertBefore($footer, $body.lastChild);
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

function removeAllLocalStorage() {
  localStorage.removeItem(carLocalStorage);
  localStorage.removeItem(clientLocalStorage);
  localStorage.removeItem(accessoriesLocalStorage);
}

function renderHTMLCarsList(carsList) {
  const ul = document.getElementById("cars");
  ul.style.width = "70%";

  carsList.forEach((car) => {
    let li = document.createElement("LI");
    li.classList.add("flex", "wrap");

    let photoDiv = document.createElement("DIV");
    photoDiv.classList.add("car-photo");
    let img = document.createElement("IMG");
    img.src = `./static/assets/cars/${car.image[0]}`;
    photoDiv.appendChild(img);

    let infoDiv = document.createElement("DIV");
    infoDiv.classList.add("car-info");
    let infoUl = document.createElement("UL");
    infoUl.setAttribute("data-id", car.id);

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
    description.setAttribute("overflow", "auto");
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

export function initSearchBarCar() {
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
    $price.innerText = `${parseFloat(data.price).toLocaleString("pl-PL")} zł`;
    $model.innerText = `${data.brand} ${data.model}`;
  }
}

export function choosenCar() {
  const $ulCars = document.getElementById("cars");
  const $mainTag = document.getElementById("main");
  const $customize = document.getElementById("customize");
  $ulCars.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      let parentDiv = e.target.closest(".car-info");
      const carId = parentDiv.children[0].dataset.id;
      const cars = carsInstance.getAllCars();
      const choosenCar = cars.find((x) => x.id === Number(carId));

      setToLocalSstorage(carLocalStorage, choosenCar);
      inputCarDataFromLocalStorage();
      $mainTag.classList.toggle("hidden");
      $customize.classList.toggle("hidden");
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
}
// ----2 page----------------------------
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
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
    accessoryList = accessoriesInstance.getAllSelectedAccessories();
  }
  const $parent = document.getElementById(
    typeList === accessoriesList.newList ? "accessories" : "choosenAccessories"
  );
  const htmlList = renderHTMLAccessoryList(accessoryList, typeList);
  $parent.innerHTML = "";
  $parent.appendChild(htmlList);
}

function injectionAccessoriesSum(sumValue) {
  let span = document.getElementById("accessoriesSum");
  span.innerText = `Kwota akesoriów brutto: ${sumValue.toLocaleString(
    "pl-PL"
  )} zł`;
}

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
      const valueSum = accessoriesInstance.getSumAccessoriesFromSelectedList();
      injectionAccessoriesSum(valueSum);
    }
  });
}

export function addAccessoryToNewList() {
  try {
    const accessories = document.getElementById("accessories");
    selectAccessory(accessories);
  } catch (e) {
    console.error(`addAccessoryToNewList: ${e}`);
  }
}

function removeAccessoryItem(htmlObject) {
  htmlObject.addEventListener("click", (e) => {
    const parentUl = e.target.closest(".flex");
    if (e.target.tagName === "BUTTON") {
      const itemObjects = parentUl.children;
      const itemId = itemObjects[0];
      const id = Number(itemId.innerText);

      accessoriesInstance.removeAccessory(id);
      renderList(accessoriesList.newList);
      renderList(accessoriesList.selectedList);

      const valueSum = accessoriesInstance.getSumAccessoriesFromSelectedList();
      injectionAccessoriesSum(valueSum);
    }
  });
}
export function removeAccessoryItemFromList() {
  const accessories = document.getElementById("choosenAccessories");
  removeAccessoryItem(accessories);
}

// Walidowanie danych
function showNoValidateHtmlElement(htmlObject) {
  const existingSpan = htmlObject.querySelector(".no-valid");

  if (!existingSpan) {
    const span = document.createElement("SPAN");
    span.innerText = "Uzupełnij";
    span.classList.add("no-valid");
    htmlObject.appendChild(span);
  }
}

function showNoValidateHtmlRadiobutons(htmlObject) {
  const spanclass = document.querySelector(".no-validate-radiobutton");

  if (htmlObject === null && !spanclass) {
    const divTag = document.querySelector(".radio-list");
    const span = document.createElement("SPAN");
    span.innerText = "Wybierz metodę finansowania";
    span.classList.add("no-validate-radiobutton");
    span.style.display = "block";
    divTag.appendChild(span);
  }
}

function hideNoValidateHtmlElement(htmlObject) {
  const existingSpan = htmlObject.querySelector(".no-valid");
  if (existingSpan) {
    existingSpan.remove();
  }
}

function hideNoValidateHtmlRadiobutons() {
  const span = document.querySelector(".no-validate-radiobutton");
  if (span) {
    span.remove();
  }
}
// function validate name i surname
function validateNameAndSurname(nameAndSurname) {
  const allLiElements = document.querySelectorAll(".customer-data li");
  const input = nameAndSurname.trim().split(" ").length >= 2;
  if (!input) {
    showNoValidateHtmlElement(allLiElements[0]);
  } else {
    hideNoValidateHtmlElement(allLiElements[0]);
  }
  return input;
}
// function validate delivery place
function validateDeliveryPlace(deliveryPlace) {
  const allLiElements = document.querySelectorAll(".customer-data li");
  const input = deliveryPlace.trim() !== "";
  if (!input) {
    showNoValidateHtmlElement(allLiElements[1]);
  } else {
    hideNoValidateHtmlElement(allLiElements[1]);
  }
  return input;
}

function validateDeliveryDate(deliveryDate) {
  const allLiElements = document.querySelectorAll(".customer-data li");
  const dateInput = deliveryDate.trim() !== "";
  if (!dateInput) {
    showNoValidateHtmlElement(allLiElements[2]);
  } else {
    hideNoValidateHtmlElement(allLiElements[2]);
  }
  return dateInput;
}

function validateRadioButtons(radiobutonsObject) {
  let selectedRadiobutonValue = null;

  radiobutonsObject.forEach((x) => {
    if (x.checked) {
      selectedRadiobutonValue = x.value;
    }
  });

  if (!selectedRadiobutonValue) {
    showNoValidateHtmlRadiobutons(selectedRadiobutonValue);
    return { isvalidate: false, content: selectedRadiobutonValue };
  } else {
    hideNoValidateHtmlRadiobutons();
    return { isvalidate: true, content: selectedRadiobutonValue };
  }
}

// Pobieranie danych kllienta i walidacja
function getClientValidationData() {
  // Validate name and surname
  const $nameAndSurname = document.getElementById("nameAndSurname");
  const nameAndSurname = $nameAndSurname.value;
  const validateInputNameAndSurname = validateNameAndSurname(nameAndSurname);
  console.log(validateInputNameAndSurname);
  // Validate delivery place
  const $deliveryPlace = document.getElementById("placeOfDelivery");
  const deliveryPlace = $deliveryPlace.value;
  const validateInputDeliveryPlace = validateDeliveryPlace(deliveryPlace);
  console.log(validateInputDeliveryPlace);
  // Validate delivery date
  const $deliveryDate = document.getElementById("dateOfDelivery");
  const deliveryDate = $deliveryDate.value;
  const validateInputDeliveryDate = validateDeliveryDate(deliveryDate);
  console.log(validateInputDeliveryDate);
  // Validate radiobuton
  const $paymentMethod = document.querySelectorAll(
    'input[type="radio"][name="finansing"]'
  );
  const radiobuttonObject = validateRadioButtons($paymentMethod);
  console.log(radiobuttonObject.isvalidate);

  if (
    validateInputNameAndSurname &&
    validateInputDeliveryPlace &&
    validateInputDeliveryDate &&
    radiobuttonObject.isvalidate
  ) {
    const clientObject = {
      name: nameAndSurname,
      deliveryPlace: deliveryPlace,
      deliveryDate: deliveryDate,
      financing: radiobuttonObject.content,
    };
    setToLocalSstorage(clientLocalStorage, clientObject);
    return true;
  } else {
    return false;
  }
}

export function buyingCar() {
  const button = document.getElementById("acceptBuy");
  button.addEventListener("click", () => {
    const accessoryChoosenList =
      accessoriesInstance.getAllSelectedAccessories();
    console.log(accessoryChoosenList);
    if (accessoryChoosenList.length != 0) {
      console.log(accessoryChoosenList);
      setToLocalSstorage(accessoriesLocalStorage, accessoryChoosenList);
    } else {
      localStorage.removeItem(accessoriesLocalStorage);
    }
    const message =
      "Gratulacje, kupiłeś auto \n Za chwile przekierujemy cię do posumowania";

    const isvalidate = getClientValidationData();
    if (isvalidate) {
      showSnackbar(message);
      setTimeout(() => {
        window.location.href = "summary.html";
      }, 6000);
    } else {
      const message = "Uzupełnij brakujce dane";
      showSnackbar(message);
    }
  });
}

function summaryRender(carInfo, accesoriesInfo) {
  console.log(carInfo);
  console.log(accesoriesInfo);
  const ul = document.getElementById("totalItems");
  if (carInfo && accesoriesInfo) {
    const carLi = document.createElement("LI");
    const spanName = document.createElement("SPAN");
    spanName.innerText = carInfo.brand;
    const spanPrice = document.createElement("SPAN");
    spanPrice.innerText = `${carInfo.price.toLocaleString("pl-PL")} zł`;

    carLi.appendChild(spanName);
    carLi.appendChild(spanPrice);
    ul.appendChild(carLi);

    accesoriesInfo.forEach((item) => {
      const li = document.createElement("LI");
      const spanName = document.createElement("SPAN");
      spanName.innerText = item.name;
      const spanPrice = document.createElement("SPAN");
      spanPrice.innerText = `${item.price.toLocaleString("pl-PL")} zł`;

      li.appendChild(spanName);
      li.appendChild(spanPrice);
      ul.appendChild(li);
    });
  } else {
    const carLi = document.createElement("LI");
    const spanName = document.createElement("SPAN");
    spanName.innerText = carInfo.brand;
    const spanPrice = document.createElement("SPAN");
    spanPrice.innerText = `${carInfo.price.toLocaleString("pl-PL")} zł`;
    carLi.appendChild(spanName);
    carLi.appendChild(spanPrice);
    ul.appendChild(carLi);
  }
}

function sumTotal(carInfo, accesoriesInfo) {
  if (carInfo && accesoriesInfo) {
    let carSum = parseFloat(carInfo.price);

    let accesoriesSum = accesoriesInfo.reduce((acc, item) => {
      return acc + parseFloat(item.price);
    }, 0);
    summaryRender(carInfo, accesoriesInfo);
    return carSum + accesoriesSum;
  } else {
    const carSum = parseFloat(carInfo.price);
    summaryRender(carInfo, accesoriesInfo);
    return carSum;
  }
}

export function renderHTMLSummary() {
  const carInfo = getFromLocaStorage(carLocalStorage);
  const clientInfo = getFromLocaStorage(clientLocalStorage);
  const accesoriesInfo = getFromLocaStorage(accessoriesLocalStorage);

  const carInfoLabel = document.getElementById("buyCarInfo");
  carInfoLabel.innerText = `${carInfo.brand} ${carInfo.model} ${carInfo.enginePower} (${carInfo.generation}) ${carInfo.year} rok `;

  const ul = document.getElementById("customerInfo");
  ul.classList.add("ul-formats");
  const customerNameLi = document.createElement("LI");
  customerNameLi.innerText = `Kupujcy: ${clientInfo.name.toUpperCase()}`;
  const deliveryPlaceLi = document.createElement("LI");
  deliveryPlaceLi.innerText = `Miejsce dostawy: ${clientInfo.deliveryPlace.toUpperCase()}`;
  const deloieryDateLi = document.createElement("LI");
  const deliveryDate = new Date(clientInfo.deliveryDate);
  const formatedDate = `${deliveryDate.getDate()}.${
    deliveryDate.getMonth() + 1
  }.${deliveryDate.getFullYear()}`;
  deloieryDateLi.innerText = `Data dostawy: ${formatedDate} r.`;
  const financingLi = document.createElement("LI");
  financingLi.innerText = `Sposób płatności: ${clientInfo.financing}`;

  ul.appendChild(customerNameLi);
  ul.appendChild(deliveryPlaceLi);
  ul.appendChild(deloieryDateLi);
  ul.appendChild(financingLi);

  const $photoCar = document.getElementById("photo-car");
  const img1 = document.createElement("IMG");
  const img2 = document.createElement("IMG");
  img1.src = `./static/assets/cars/${carInfo.image[0]}`;
  img2.src = `./static/assets/cars/${carInfo.image[1]}`;
  $photoCar.appendChild(img1);
  $photoCar.appendChild(img2);

  const totalSum = sumTotal(carInfo, accesoriesInfo).toLocaleString("pl-Pl");

  const $totalCost = document.getElementById("totalCost");
  $totalCost.innerText = `Do zapłaty: ${totalSum} zł`;

  removeAllLocalStorage();
  console.log(carInfo);
  console.log(clientInfo);
  console.log(accesoriesInfo);
}
