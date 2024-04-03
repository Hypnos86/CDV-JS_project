import {
  accessoriesList,
  renderHTMLHeader,
  titlePage,
  carInject,
  initSearchBarCar,
  choosenCar,
  cancelChoose,
  adaptedCalendar,
  renderAccessoriesNewList,
  setAccessoryToNewList,
  removeAccessoryItemFromList,
  buyingCar,
  renderHTMLFooter,
} from "./script.js";
titlePage("Drifter Shop");
renderHTMLHeader();
carInject();
initSearchBarCar();
choosenCar();
cancelChoose();
adaptedCalendar();
renderAccessoriesNewList(accessoriesList.newList);
setAccessoryToNewList();
removeAccessoryItemFromList();
buyingCar();
renderHTMLFooter();
