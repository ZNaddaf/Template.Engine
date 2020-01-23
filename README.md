# Unit 10 OOP Homework: Template Engine

"One of the most important aspects of programming is writing code that is readable, reliable, and maintainable. Oftentimes, *how* we design our code is just as important as the code itself. In this homework assignment, your challenge is to build a Node CLI that takes in information about employees and generates an HTML webpage that displays summaries for each person. Since testing is a key piece in making code maintainable, you will also be ensuring that all unit tests pass."


## User Story
```
As a manager
I want to generate a webpage that displays my team's basic info
so that I have quick access to emails and GitHub profiles.
```

## Operation

This is a command line application.
- Once the necessary installation is complete, you can call the app using "node app.js" in your    terminal.
- You will then be prompted for additional information about the members of your team.
    * note that you must have a manager
- The app will use your responses to these questions to create a team roster for you in the "output" directory.


## Screenshots

![Employee Summary 1](./Assets/10-OOP-homework-demo-1)
![Employee Summary 2](./Assets/10-OOP-homework-demo-2) 

### Pseudocode

Build an Engineering Team
            manager
                ^
            ^       ^
    engineers       interns

√ - inquirer prompts:
    Add an Employee
        Employee information:
        - Name
        - Employee ID
        - email      
        - role (Engineer, Intern, or Manager):
            Engineer
                - github username
            Intern
                - School
            Manager
                - Office number
                - Yacht Size


√   Classes
        Employee
            Properties
                * name
                * id
                * title
            Methods
                * getName()
                * getId()
                * getEmail()
                * getRole() // Returns 'Employee'
    √   - Intern
            Properties
                * school
            Methods
                * getSchool()
                * getRole() // Overridden to return 'Intern'

    √   - Engineer
            Properties
                * github  // GitHub username
            Methods
                * getGithub()
                * getRole() // Overridden to return 'Engineer'

    √   - Manager
            Properties
                * officeNumber
            Methods
                * getRole() // Overridden to return 'Manager'

√ Unit tests
    - templates for each type of user (main, engineers, intern, manager)

HTML Output
√    Team Page
    √    Individual Cards
            - Information from Classes
            - User input


* In your HTML template files, you may want to add a placeholder character that helps your program identify where the dynamic markup begins and ends.

Creates an HTML file
    - Displays nicely formatted team roster from user q's