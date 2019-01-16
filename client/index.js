const program = require("commander");
const {prompt} = require("inquirer");
const {handleInput} = require("./clientController");
const {questions} = require("./commandQuestions");

program
    .version("1.0.0")
    .description("Application that determines a triangle type")

program
    .command("add")
    .alias("a")
    .description("Add triangle sides lengths")
    .action( () => {
        prompt(questions).then(answersObj => handleInput(answersObj));
    });

program.parse(process.argv);