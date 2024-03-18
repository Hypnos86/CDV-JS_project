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
} from "./script.js";
titlePage();
renderHTMLHeader();
carInject();
searchCar();
choosenCar();
cancelChoose();
newCalendar();
renderList(accessoriesList.newList);
addAccessoryToNewList();
removeAccessoryItemFromList();
