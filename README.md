# triangle-cli

# Description

A program that outputs the triangle type based on an input containing its sides lengths.

In order to solve the triangle challenge, I decided to go an extra mile, and "wrap" the solution process in a small CLI application, built using Node.js.

# Solution

The app is divided in modules, so that these self-contained components do not share files between each other. The purpose is to structure the project, so that it's easier to manage.
Async/Await was used together with Promises in order to write more structured code (i.e. avoid callback hell).

It is made sure that the triangle sides lengths respect the "Triangle Inequality" theorem, (the sum of smallest two sides should be bigger than the large side). In this way we avoid an extra checking for negative input values. As well, we check if the triangle is valid before further processing.
The "client" makes a POST request to the "triangle-type" endpoint, in order to process the triangle solution.
The server responds with an output message containing the determined triangle type.

# Triangle solving steps pseuducode.

if equilateral ( (a === b) && (b === c) ) return
else if Isosceles ( (a === b) || (b === c) ) return
else Scalene

# Setting up the project

1. In order to set up the project, first run the console and change to its root location. Then run "npm install".
2. Run "npm link" so that you can access the app be simply typing "triangle-cli add" in the shell. The executable expects a path to a javascript file to execute, and the location changes depending on where everyone stores the project on their file system.
3. Run "npm run devstart" or "node server" in order to start the server.
4. Open a new console instance and run "triangle-cli add". You will be prompted to add the triangle lengths sides.
