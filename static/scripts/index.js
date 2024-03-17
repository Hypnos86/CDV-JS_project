import {
  accessoriesList,
  menu,
  titlePage,
  carInject,
  searchCar,
  choosenCar,
  cancelChoose,
  newCalendar,
  iputCarDataFromLocalStorage,
  renderList,
  addAccessoryToNewList,
  removeAccessoryItemFromList,
} from "./script.js";
titlePage();
menu();
carInject();
searchCar();
choosenCar();
cancelChoose();
newCalendar();
iputCarDataFromLocalStorage();
renderList(accessoriesList.newList);
addAccessoryToNewList();
removeAccessoryItemFromList();
