# CW Online Store
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.4

# Technologies used
- Angular CLI 10.1.4
- Angular 10.1.4
- TypeScript 4.0.2
- Node.js 12.18.4
- npm 6.14.8

# Steps to setup and run the project locally
- If git is not installed on your machine, please install it by following the steps mentioned in the link https://www.atlassian.com/git/tutorials/install-git
- Clone the public repository https://github.com/SujitGodavarti/cw-online-store.git using the steps mentioned in the link https://help.github.com/en/github/creating-cloning-and-archiving-repositories/cloning-a-repository
- Open command prompt and check the version of Node.js currently installed using the command `node -v`. 
- It is recommended to download latest stable version of Node.js from https://nodejs.org/en/. Install it after download is complete. When you download Node.js you automatically get npm installed on your machine.
- Use the command `ng --version` to check the version of Angular CLI currently installed.
- Run the command `npm install @angular/cli` from the command prompt to install latest angular cli version.
- Open the local folder to which the repository has been cloned and run command prompt from that location. Then run the below commands.
- Run `npm install` command to install all the required dependencies for this app.
- Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
    #### Units to be tested
    1. Category List Page
        * should create.
        * should display products.
        * add a duplicate item should increment the quantity for that item.
        * should navigate to product details page
    2. Product Detail Page
        * should create.
        * Add first item to the cart.
        * When quantity is null.
        * Add duplicate item.
    3. Shopping Cart Page
        * should create.
        * change quantity of first product.
        * change quantity of second product.
        * remove item.
    4. Product Service
        * should create.
        * should return data.
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# Reasons for choosing Angular for this single page application
- Angular is a complete framework with routing, HTTP requests, testing etc built right in and maintained by the team at Google. So we don't need to depend on several third party libraries.
- Keeping HTML separate from JavaScript has better structure and hence increases clarity.

# Feature not added due to time consideration
- Although this app uses mock data instead of fetching data from an API, it would have been good to display notifications(like error notifications) to user.