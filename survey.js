const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What's your name? ", (answer) => {
  console.log(`Hi, my name is ${answer}`);
  rl.question("What's an activity you like doing?", (answer) => {
    console.log(`I like spending my evenings ${answer}`);
    rl.question("What do you listen to while doing that?", (answer) => {
      console.log(`My favourite music at the moment is ${answer}`);
      rl.question("Which meal is your favourite?", (answer) => {
        console.log(`I enjoy ${answer} the most.`);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          console.log(`${answer} is my go to.`);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            console.log(`${answer} is my favourite sport to watch and play!`)
            rl.close();
          })
        })
      })
    })
  })
});
