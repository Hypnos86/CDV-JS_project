export class Accessories {
  constructor() {
    this.list = [
      { id: 1, name: "Dywaniki samochodowe", price: 120 },
      { id: 2, name: "Pokrowce na siedzenia", price: 250 },
      { id: 3, name: "Ładowarka samochodowa USB", price: 50 },
      { id: 4, name: "Organizer do bagażnika", price: 90 },
      { id: 5, name: "Uchwyt na telefon", price: 35 },
      { id: 6, name: "Zestaw narzędzi samochodowych", price: 150 },
      { id: 7, name: "Odkurzacz samochodowy", price: 80.0 },
      { id: 8, name: "Zapach samochodowy", price: 20 },
      { id: 9, name: "Pokrowiec na kierownicę", price: 60 },
      { id: 10, name: "Kamera samochodowa", price: 300 },
      { id: 11, name: "Dodatkowy zestaw opon zimowych", price: 800 },
      { id: 12, name: "Dodatkowy zestaw opon letnich", price: 750 },
      { id: 13, name: "Klimatyzacja automatyczna", price: 2500 },
      {
        id: 14,
        name: "System nawigacji satelitarnej GPS",
        price: 1200,
      },
      { id: 15, name: "Fotele ogrzewane", price: 900 },
      { id: 16, name: "Fotele wentylowane", price: 1200 },
      { id: 17, name: "Pakiet przyciemnianych szyb", price: 600 },
      { id: 18, name: "System bezkluczykowy", price: 400 },
      { id: 19, name: "System doświetlania zakrętów", price: 500 },
      { id: 20, name: "Alarm samochodowy", price: 300 },
    ];

    this.selectedList = [];
  }

  getAllAccessories() {
    return this.list;
  }

  getAllSelectedAccessories() {
    return this.selectedList;
  }

  getSumAccessoriesFromSelectedList() {
    let accessoriesSum = [];

    this.selectedList.forEach((x) => {
      accessoriesSum.push(Number(x.price));
    });

    return accessoriesSum.reduce((acc, currentValue) => {
      return acc + currentValue;
    }, 0);
  }

  getFilteredAccessories() {
    return this.list.filter((x) => {
      return this.selectedList.indexOf(x) === -1;
    });
  }

  addAccessory(id) {
    const item = this.getAllAccessories().find((x) => {
      return x.id === Number(id);
    });
    if (item) {
      return this.selectedList.push(item);
    }
  }

  removeAccessory(id) {
    const index = this.selectedList.findIndex((x) => x.id === id);
    if (index !== -1) {
      this.selectedList.splice(index, 1);
    }
  }

  removeAllSelectedList() {
    return this.selectedList.splice(0, this.selectedList.length);
  }
}
