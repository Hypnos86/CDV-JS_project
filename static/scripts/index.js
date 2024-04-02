import {
  accessoriesList,
  renderHTMLHeader,
  titlePage,
  carInject,
  initSearchBarCar,
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
initSearchBarCar();
choosenCar();
cancelChoose();
newCalendar();
renderList(accessoriesList.newList);
addAccessoryToNewList();
removeAccessoryItemFromList();
buyingCar();
renderHTMLFooter()
