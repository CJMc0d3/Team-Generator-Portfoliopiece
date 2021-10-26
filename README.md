# Team-Generator-Portfoliopiece
A dynamic team generator with options to generate Engineer, Intern and Manager.
I used a lib folder to store the Employee.js, Engineer.js, Intern.js and Manager.js files.
The Employee.js file was a object that is used to program the rest of the files within the lib folder. 
The Engineer, Intern, and Manager extends the Employee file.
I then installed Inquirer, fs and Jest for the project to work correctly.
I put a git ignore on the node_modules and made an Output folder for output from my app.js file.
Within the app.js file I required all the needed extensions to run the code and prompted questions that will be asked when inputting 
the command node app.js within the terminal. Depending on which answers the user chooses it will then prompt other questions and populate them in the ouput html.
I was not able to get the answers to populate the html correctly, but I was able to get the html head and body tag to populate from the javascript including the navbar with title.

This app was create with Node.js, Inquirer, es6 syntax, Jest, and fs.
