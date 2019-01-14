const program = require("commander");

program
    .version("1.0.0")
    .description("Application that determines the type of triangle")

addCommand();

program.parse(process.argv);

// Command template
addCommand = (obj) => {
    program
        .command(obj.command)
        .alias(obj.alias)
        .description(obj.description)
        .action(obj.action);
};