// world.js
const { setWorldConstructor } = require('@cucumber/cucumber');


class customWorld {
  constructor() {
    this.page = null;
    this.poManager = null;

  }

 
}

setWorldConstructor(customWorld);