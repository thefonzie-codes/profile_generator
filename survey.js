const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let info = {
  name: "",
  macPcLinux: "",
  music: "",
  language: "",
  impression: "",
};

const updateInfo = (key, value) => {
  info[key] = value;
};

rl.question("What's your name? Nicknames work too! ", (answer) => {
  updateInfo("name", answer);

  rl.question("Are you a Mac, PC or Linux user? ", (answer) => {
    updateInfo("macPcLinux", answer);

    rl.question("What music do you like to listen to? ", (answer) => {
      updateInfo("music", answer);

      rl.question("What's your favourite programming language? ", (answer) => {
        updateInfo("language", answer);
        
        rl.question("Who is the best person you can do an impression of? ", (answer) => {
          updateInfo("impression", answer);

          console.log(`${info['name']} listens to ${info['music']} while coding in their favourite language: ${info['language']}. They do a great impression of ${info['impression']}, as well!  Oh, and they use a ${info['macPcLinux']}.`);
          rl.close();
        });
      });
    });
  });
});


