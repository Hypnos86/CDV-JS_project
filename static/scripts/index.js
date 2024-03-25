import {
  accessoriesList,
  renderHTMLHeader,
  titlePage,
  carInject,
  searchCar,
  choosenCar,
  cancelChoose,
  newCalendar,
  renderList,
  addAccessoryToNewList,
  removeAccessoryItemFromList,
  buyingCar,
  renderHTMLFooter
} from "./script.js";
titlePage("Drifter Shop");
renderHTMLHeader();
carInject();
searchCar();
choosenCar();
cancelChoose();
newCalendar();
renderList(accessoriesList.newList);
addAccessoryToNewList();
removeAccessoryItemFromList();
buyingCar();
renderHTMLFooter()
