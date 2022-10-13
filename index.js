'use strict'

const soap = require('soap')
const wsdlUrl = 'https://www.crcind.com/csp/samples/SOAP.Demo.cls?wsdl';

let soapWebService;

const getCityByZipCode = (zip) => {
  soapWebService.LookupCityAsync({ zip }).then((result) => {
    console.log(result[0].LookupCityResult);
  });
};

const findPersonByID = (id) => {
  soapWebService.FindPersonAsync({ id }).then((result) => {
    console.log(result[0].FindPersonResult);
  });
};

const divideInteger = (num1, num2) => {
  soapWebService.DivideIntegerAsync({ Arg1: num1, Arg2: num2 }).then((result) => {
    console.log(result[0].DivideIntegerResult);
  });
};

soap.createClientAsync(wsdlUrl).then(client => {
  soapWebService = client;

  // console.log(soapWebService);

  getCityByZipCode('10006');
  findPersonByID('1');
  divideInteger(10, 2);
});

