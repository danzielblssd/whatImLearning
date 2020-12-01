/*
Assignments Part 1 ##############################
//let country = "United States";
//let continent = "North America";
let population = 328200000;
// console.log(country);
// console.log(continent);
// console.log(population);

//let isIsland = false;
let language;


language = 'english';
const country = "United States";
const continent = "North America";
const isIsland = false;
//let isIsland = true; - is already a const

console.log(continent);
console.log(typeof isIsland);
console.log(population);
console.log(typeof population);
console.log(country);
console.log(typeof country);
console.log(language);
console.log(typeof language);

console.log(population / 2);
population++;
console.log(population);
console.log(population > 6000000);
console.log(population < 33000000);

// const description = country + ' is in ' + continent + ', ' + 'and its ' + population
//     + ' people speak ' + language;
// console.log(description);

const description = `${country} is in ${continent}, and its ${population} people speak ${language}.`;
console.log(description);

const averagePopulation = 33000000;

if (population >= averagePopulation) {
    console.log(`${country}'s population is above average.`)
}
else {
    console.log(`${country}'s population is ${averagePopulation - population} below average.`)
};

'9' - '5'; //4
'19' - '13' + '17'; //617
'19' - '13' + 17; //23
'123' < 57;//false
5 + 6 + '4' + 9 - 4 - 2;//117

console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' /*at this point, its completely a string
so no math, just string then number variable */// + 9 - 4 - 2);
//i was wrong, this is 1143

// let numNeighbors = Number(prompt('How many neighbour countries does your country have?'));
// if (numNeighbors === 1) {
//     console.log('Only 1 border!')
// }
// else if (numNeighbors > 1) {
//     console.log('More than 1 border')
// }
// else {
//     console.log('No borders..')
// };

/*

if (language === 'english' && population < 50000000 && !isIsland) {
    console.log(`You should live in the ${country}!`)
}
else {
    console.log(`You should not live in ${country}`)
};




switch (language) {
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language')
        break;
    default:
        console.log('Great language too :D');



};


console.log(`${country}'s population is ${population > 33000000 ? 'above average.' : 'below average.'}`);
*/



function describeCountry(country, population, capitalCity) {

    return `${country} has ${population} million people and its capitol city is ${capitalCity}.`;

}
const descPortugal = describeCountry('Porugal', 10, 'Helsinki');
const descChina = describeCountry('China', 1441, 'Hong Kong');
const descUSA = describeCountry('USA', 300, 'Washington, D.C.');

describeCountry(descPortugal);
describeCountry(descChina);
describeCountry(descUSA);

// console.log(descPortugal);
// console.log(descChina);
// console.log(descUSA);
console.log(descPortugal, descChina, descUSA);





function percentageOfTheWorld1(country, population) {
    //declaration
    return `${country} has ${population} million people, so that about ${(population / 7900) * 100}% of the world's population.`
}

const percentageOfTheWorld2 = function (country, population) {
    //expression
    return `${country} has ${population} million people, so that about ${(population / 7900) * 100}% of the world's population.`
}



const chinaPopInfo = percentageOfTheWorld1('China', 1441);
console.log(chinaPopInfo);

const portugalPopInfo = percentageOfTheWorld1('Portugal', 10);
console.log(portugalPopInfo);

const usaPopInfo = percentageOfTheWorld1('USA', 300);
console.log(usaPopInfo);



const thisCountryInfo = percentageOfTheWorld2('Fake Place', 6000);
console.log(thisCountryInfo);


const percentageOfTheWorld3 = (country, population) =>
    `${country} has ${population} million people, so that about ${(population / 7900) * 100}% of the world's population.`;

console.log(percentageOfTheWorld3('Icing', 1000));


function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
console.log(percentageOfWorld1(100));

function describePopulation(country, population) {
    let percent = percentageOfWorld1(population);
    let description = `${country} has ${population} million people, which is about ${percent}% of the world.`

    return console.log(description);
}
console.log(describePopulation('China', 1441));


function getOneFree(saleUnit) {
    return saleUnit * 2;
}
function priceOff(costs) {
    return costs / 1;
}
function thisTax(taxes) {
    return taxes * 1.10;
}
console.log(getOneFree(30));

function laptopSale(unit, price) {
    let saleUnits = getOneFree(unit);
    let SalePrice = priceOff(price);
    let tax = thisTax(price);
    let info = `You get ${saleUnits} laptops for $${SalePrice} plus tax, $${tax}.`;
    return console.log(info);
}

console.log(laptopSale(1, 1000));

const populations = [100, 2000, 310, 12];

console.log(populations.length === 4);

//const percentages = [((populations[0] / 7900) * 100), (populations[1] / 7900) * 100, (populations[2] / 7900) * 100, (populations[3] / 7900) * 100];
const percentages = [
    percentageOfWorld1(populations[0]),
    percentageOfWorld1(populations[1]),
    percentageOfWorld1(populations[2]),
    percentageOfWorld1(populations[3])
]

console.log(populations);
console.log(percentages);