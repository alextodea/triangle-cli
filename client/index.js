const program = require("commander");
const {prompt} = require("inquirer");
const {inputQuestions} = require("./clientForm");
const {inputHandler} = require("./clientController");

program
    .version("1.0.0")
    .description("Application that determines a triangle type")

program
    .command("add")
    .alias("a")
    .description("Add triangle sides lengths")
    .action(() => {
        prompt(inputQuestions).then(answers => inputHandler(answers));
    });

program.parse(process.argv);