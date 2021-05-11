<!-- PROJECT LOGO -->

<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://i.imgur.com/voofpjF.png" alt="Logo" >
  </a>
  

  <h3 align="center">Dog Lovers</h3>

  <p align="center">
    Cause we are lovers, we love dogs.
    <br />
    <br />
    <a href="https://dog-love.herokuapp.com/">App view</a>
  </p>
</p>

<br>


<!-- TABLE OF CONTENTS -->

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#installation">Installation</a>
    </li>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#app-overview">Overview</a>
    </li>
    <li><a href="#languages-and-tools">Languages and Tools</a></li>
    <li><a href="#special-thanks">Special Thanks</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

<br>

<!-- INSTALLATION -->

## Installation

<br>


### Frontend

<br>

Install the dependencies.


```sh
npm i
```
I advise you to create an .env to have the localhost on port 3001 for example
```sh
PORT=3001
```

In the project directory, you should run:

```sh
npm start
```

If you wanna play with scss:

```sh
npm run scss
```



### Backend

<br>

Install the dependencies.


```sh
npm i
```
Config docker-compose.yml:

```
version: '2'
services:      
  mysql:
        container_name: nameOfYourContainer
        image: mysql
        restart: always
        ports:
            - 3306:3306
        environment:
            MYSQL_DATABASE: 'nameofYourDB'
            MYSQL_USER: 'username'
            MYSQL_PASSWORD: 'userpassword'
            MYSQL_ROOT_PASSWORD: 'rootpassword' 
        expose:
        - '3306'
  phpmyadmin:
        image: phpmyadmin
        depends_on:
            - "mysql"
        links:
            - "mysql"
        ports:
            - 8080:80  
        environment: 
            PMA_HOST: 'mysql'
            PMA_USER: 'root'
            PMA_PASSWORD: 'password'
```
Run docker compose:

```sh
docker-start or docker-compose up
```
Run nodemon to have your localhost at port: 3000

```sh
npm run-dev
```

Or if you prefer work with node:

```sh
npm start
```

To create your database:

```sh
sequelize db:create
```

Run all migrations:

```sh
sequelize db:migrate
```

If you wanna test sequelize here is the list of comands:

```sh
  sequelize db:migrate                        Run pending migrations
  sequelize db:migrate:schema:timestamps:add  Update migration table to have timestamps
  sequelize db:migrate:status                 List the status of all migrations        
  sequelize db:migrate:undo                   Reverts a migration
  sequelize db:migrate:undo:all               Revert all migrations ran
  sequelize db:seed                           Run specified seeder
  sequelize db:seed:undo                      Deletes data from the database
  sequelize db:seed:all                       Run every seeder
  sequelize db:seed:undo:all                  Deletes data from the database
  sequelize db:create                         Create database specified by configuration
  sequelize db:drop                           Drop database specified by configuration
  sequelize init                              Initializes project
  sequelize init:config                       Initializes configuration
  sequelize init:migrations                   Initializes migrations
  sequelize init:models                       Initializes models
  sequelize init:seeders                      Initializes seeders
  sequelize migration:generate                Generates a new migration file 



  Generates a model and its migration:

  npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string                                                   
  
  Generates a new seed file:
             
  npx sequelize-cli seed:generate --name demo-user                 
```

<!-- ABOUT THE PROJECT -->
## About The Project

Dog Lovers is a full-stack web application that allows users to take care of dogs and take care of yours.

You can sing up and sign in as 'baby sitter' or a 'dog owner'.

As owner you can register your dog, create a care request and confirm a candidate.

As baby sitter you can offer a candidacy and wait the confirmation.

The front end of the application was built with React, JS, SCSS and Redux.

On the another hand, the back end was built with Express, SQL and Sequelize ORM.

<br>
Here is an example of the database design:

<br>

<br />
<p align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://i.imgur.com/BvNgITA.png" alt="Db" >
  </a>
  
</p>

<br>


<br>

### Duration of the project:

<br>

This is my final project at GeeksHubs Academy and took from April 27 to May 11, 2021.

Two weeks of intense work where I have been able to implement the things that I have learned throughout the bootcamp.

<br>

### New features:

<br>

In the near future, I want to implement new features:

<br>

```sh
That a user can upload a photo of himself or his dog.
```
```sh

Implement some cards with a design pattern according to the page.
```
```sh

Make the web responsive.
```
```sh

Improve the code and user flow.
```

<br>
<!-- OVERVIEW -->









## APP OVERVIEW

<img src="gif/first.gif" alt="First" >

<br>
<br>

<img src="gif/second.gif" alt="Second" >

<br>
<br>

<img src="gif/third.gif" alt="Third" >

<br>
<br>

<br>
<br>

<img src="gif/four.gif" alt="Four" >

<br>
<br>

<br>
<br>

<img src="gif/five.gif" alt="Five" >

<br>
<br>

<br>
<br>

<img src="gif/five.gif" alt="Five" >

<br>
<br>

<br>

<br>

## Languages and Tools:

<br>

<p align="left"> </a> <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.docker.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a> <a href="https://expressjs.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a>  </a> </a> <a href="https://nodejs.org" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>  <a href="https://postman.com" target="_blank"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a> <a href="https://reactjs.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/></p>

<br>

## Special Thanks:

<br>

I want to thank all my classmates for this incredible journey of frustration and improvement.

Without them it would have been very difficult to complete this path. 

They deserve the best and I hope they do great in the future.

Love you.

Goodbye Geeks.

<br>

  - [@Alvaro Aguerré](https://www.linkedin.com/in/%C3%A1lvaro-aguerr%C3%A9/)

  - [@Fede Báez](https://www.linkedin.com/in/federicobaez/)

  - [@Daniel Castillo](https://www.linkedin.com/in/daniel-castillo-garcia/)

  - [@Diego García](https://www.linkedin.com/in/diego-garcia-brisa/)

  - [@Adrián Guijarro](https://www.linkedin.com/in/adri%C3%A1n-guijarro/)

  - [@Jessica Morocho](https://www.linkedin.com/in/jessica-morocho/)

  - [@Laura Porto](https://www.linkedin.com/in/laura-porto-castro/)

  - [@Joan Puig](https://www.linkedin.com/in/joan-puig/)

  - [@Giancarlo Rondo](https://www.linkedin.com/in/gianrondo/)

  - [@Victor San](https://www.linkedin.com/in/vic-san/)

  - [@Roberto Sánchez ](https://www.linkedin.com/in/rob-moyano/)

  - [@Carlos Val](https://www.linkedin.com/in/carlos-val/)

  - [@Tarek Zemmari](https://www.linkedin.com/in/tarek-zemmari/)


<br>

### Contact:

<br>


- [@Robert de la Fuente](https://github.com/Roo-Git) 