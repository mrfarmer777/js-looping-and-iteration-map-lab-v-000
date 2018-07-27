// Code your solution in this file.



function lowerCaseDrivers(drvs){
  return drvs.map(function (drv){return drv.toLowerCase();});
}

function nameToAttributes(drvs){
  return drvs.map(function (drv){
    first=drv.split(" ")[0];
    last=drv.split(" ")[1];
    return Object.assign({},{firstName: first},{lastName: last});
  });
}

function attributesToPhrase(drvs){
  return drvs.map(function (drv){
    return `${drv.name} is from ${drv.hometown}`;
  });
}