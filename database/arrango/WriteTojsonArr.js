const fs = require('fs');
const faker = require('faker');
const jsonl = require('jsonlines');
const parser = jsonl.parse();
const stringifier = jsonl.stringify();
// const fs = require("fs");
const { parse } = require("@jsonlines/core");


const randScore = (max) => Math.ceil((Math.random() * max));
const randImage = (max = 1000) => {
  const result = [];
  const n = Math.floor(Math.random() * max);
  for (let i = 0; i < n; i += 1) {
    result.push({
      id: i,
      url: `https://sdc-images-review-service.s3-us-west-2.amazonaws.com/image${Math.floor(Math.random() * 1000)}.jpg`,
      description: faker.commerce.productDescription(),
    });
  }
  return result;
};
const randTag = () => {
  const tags = ['Shirt', 'Pratical', '#streetWear', 'JinSwagg', 'Snoop'];
  return tags.slice(Math.floor(Math.random() * 1), Math.floor(Math.random() * 5));
};
const randHeight = () => {
  const h = ['Shorter than 5\'', '5\'1"', '5\'2"', '5\'3"', '5\'4"', '5\'5"', '5\'6"', '5\'7"', '5\'8"', '5\'9"', '5\'10"', '5\'11"', '6\'1"', '6\'2"', '6\'3"', '6\'4"', '6\'5"', 'Taller than 6\'5"'];
  return h[Math.floor(Math.random() * h.length)];
};

const randWeight = () => {
  const w = ['Less than 100 lbs', '100 - 125 lbs', '125 - 150 lbs', '175 - 200 lbs', '200 - 225 lbs', '225 - 250 lbs', '250 - 275 lbs', '275 - 300 lbs', '300 - 325 lbs', '325 - 350 lbs', '350 - 375 lbs', '375 - 400 lbs', 'More than 400 lbs'];
  return w[Math.floor(Math.random() * w.length)];
};

const randAge = () => {
  const age = ['Under 18', '18 to 24', '25 to 34', '35 to 44', '45 to 54', '55 to 64', '65 to 74', '75 or over'];
  return age[Math.floor(Math.random() * age.length)];
};
const randFit = () => {
  const fit = [0, 0.5, 1];
  return fit[Math.floor(Math.random() * fit.length)];
};

const genData = (n) => {
  const collection = [];
  let doc;
for (let id = 1; id <= n; id += 1) {
   doc = {
      product_id: Math.floor(Math.random() * 10000000),
      id,
      nickname: faker.name.findName(),
      rating: randScore(5),
      // title: faker.commerce.productDescription(),
      // body: faker.lorem.sentence(),
      // images: randImage(5),
      // tags: randTag(),
      // height: randHeight(),
      // weight: randWeight(),
      // fit: randFit(),
      // age: randAge(),
      // location: faker.address.city(),
      // email: faker.internet.email(),
      // helpful_yes: 2,
      // helpful_no: 3,
    };
    collection.push(JSON.stringify(doc));
  }
  
  return collection;
};

// const newColl = genData(2);
// const splitted = newColl.split(',');
// splitted.forEach(t => console.log(`${t}`));
// create a duplex stream which parse input as lines of json

// stringifier.pipe(process.stdout);

const output = genData(2);
// const parseStream = parse(output);
// console.log((parse(output)));

fs.writeFileSync('out.jsonl', output);
