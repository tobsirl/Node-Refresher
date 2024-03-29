const fs = require('fs');
const superagent = require('superagent');

const readFilePro = file => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, data) => {
      if (err) reject('I could not find the file');
      resolve(data);
    });
  });
};

const writeFilePro = (file, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, data, err => {
      if (err) reject('Could not write to file');
      resolve('Success');
    });
  });
};

// ! Using async/await
const getDogPic = async () => {
  try {
    const data = await readFilePro(`${__dirname}/dog.txt`);
    console.log(`Breed: ${data}`);

    const res1 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const res2 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const res3 = superagent.get(
      `https://dog.ceo/api/breed/${data}/images/random`
    );

    const all = await Promise.all([res1, res2, res3]);
    const images = all.map(el => el.body.message);
    console.log(images);

    console.log(res.body.message);

    await writeFilePro('dog-image.txt', res.body.message);
    console.log('Random dog image saved to file!');
    return '2: Ready';
  } catch (err) {
    console.log(err);
    throw err;
  }
};

(async () => {
  try {
    console.log('1: Will get dog pics!');
    const result = await getDogPic();
    console.log(result);
    console.log('3: Done getting dog pics!');
  } catch (err) {
    console.log('Error!');
  }
})();

// console.log('1: Will get dog pics!');

// getDogPic()
//   .then(x => {
//     console.log(x);
//     console.log('3: Done getting dog pics!');
//   })
//   .catch(err => console.log('Error!'));

// ! Using Promises then/catch
// readFilePro(`${__dirname}/dog.txt`)
//   .then(data => {
//     console.log(`Breed: ${data}`);

//     return superagent.get(`https://dog.ceo/api/breed/${data}/images/random`);
//   })
//   .then(res => {
//     console.log(res.body.message);
//     return writeFilePro('dog-image.txt', res.body.message);
//   })
//   .then(() => console.log('Random dog image saved to file!'))
//   .catch(err => console.log(err));
