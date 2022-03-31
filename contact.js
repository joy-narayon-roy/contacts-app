class Contacts {
  constructor() {
    this.all = [];
  }
  addContact(name, phone) {
    let cont = { name, phone };
    this.all.push(cont);
    return cont;
  }
  findContact(name) {
    let data = this.all.filter((cont) => {
      if (cont.name === name) {
        return cont;
      }
    });
    return data;
  }
  deleteContact(name) {
    for (let i = 0; i < this.all.length; i++) {
      const element = this.all[i];
      if (element.name === name) {
        this.all.splice(i, 1);
      }
    }
  }
}

module.exports = Contacts;
