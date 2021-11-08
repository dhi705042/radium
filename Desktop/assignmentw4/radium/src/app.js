const obj1 = require('./logger');

const obj2 = require('../src/util/helper');

const obj3 = require('../validator/formatter');
const ojb4 = require('underscore')
const obj5 = require('lodash')
const chunk = require('chunk')
const tail = require('lodash.tail')
const union = require('lodash.union')
const fromParis = require('lodash.frompairs')

const arr = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"]
const arr1 = [1,3,5,7,9,11,13,15,17,19];
const arr2 = ([1,2,3], [2,3,4], [2,3,4,5], [2,3,5,6,7], [2,3,5,7,8,9]);
const arr3 =  [["1", "one"],["2","two"],["3","three"],["4", "four"]];

obj1.myLog("dhiraj");
obj1.myWelcome();
console.log("my url is" + obj1.myUrl)

//console.log("todays date is" + obj2.date("8th november"));

obj2.date("8th november")
obj2.month("november");
obj2.batchInfo("this is radium batch. we are in week four. my name is dhiraj")

obj3.myTrim("   dhiraj   ")
obj3.changeToUpperCase("my name is dhiraj")
obj3.changeToLowerCase("MY NAME IS RAHUL")
console.log(ojb4.rest([4,6,8,9,7,6,5,3,55,76,77,97],4));
console.log(ojb4.first([4,6,8,9,7,6,5,3,55,76,77,97],4));
console.log(ojb4.last([4,6,8,9,7,6,5,3,55,76,77,97],4));
console.log(chunk(arr,3));
console.log(tail(arr1));
console.log(union(arr2));
console.log(fromParis(arr3));