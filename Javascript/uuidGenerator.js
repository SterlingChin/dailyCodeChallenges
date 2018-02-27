// Your mission today is to write a unique identifier (uuid) generator.
// Output E.g. 'bf7348be-e4e9-493a-b66e-25d827230905'

const genArgs = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const random = () => {
  return Math.floor((Math.random() * genArgs.length - 1) + 1);
};

const generator = () => {
  const outputArgs = [8, 4, 4, 4, 12];
  let generated = [];
  const arg = x => {
    let num = [];
    for(let i = 0; i < x; i++) {
      num.push(genArgs[random()]);
    }
    generated.push(num.join(''));
  };
  outputArgs.map(x=> {
    arg(x);
  });
  return generated.join('-');
};

generator();

//See the code in action here: https://repl.it/@SterlingChin/AncientTediousTag