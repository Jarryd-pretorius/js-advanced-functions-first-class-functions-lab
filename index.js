// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

var selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier =  function(multi) {
 return function(money) {
    return multi * money


 };
};

var multipliedVar = createFareMultiplier();


const fareDoubler = function(multipliedVar) {
    return multipliedVar * 2 
}

const fareTripler = function(multipliedVar) {
    return multipliedVar * 3
}

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };