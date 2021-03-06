const moment = require("moment");
const age = require("../ages").ColonialAge.key;

module.exports = {
  key: "wire",
  age: age,
  building: {
    resources: {
      coins: 37000,
      supplies: 79000
    },
    time: moment.duration({ hours: 13, minutes: 30 }),
    size: {
      length: 3,
      width: 3
    },
    population: 720,
    connection: 1
  },
  unrefined: null
};
