
'use strict';

let I;

module.exports = {

  _init() {
    I = actor();
  },

  fields: {
    searchArea: {id:'searchText'}

  },

  buttons:{

  },

  writeSmt(){
    I.fillField(searchArea,'volkan');
    I.fillField(searchArea,'dededededee')
  }
  // insert your locators and methods here
}
