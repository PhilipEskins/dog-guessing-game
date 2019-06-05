# _Dog Guessing Game - React Edition_

#### _Website that lets you guess the breed of a dog and earn points._

#### By _**Philip Eskins**_

## Description

Live version can be viewed here: https://dog-react.web.app/

_This application shows a random picture of a dog from https://dog.ceo/dog-api/ it also populates the drop down list with the breed categories that are available from the api. The user is able to select the dog from the list and earn points when they guess correctly. Upon earning one point you are offered the chance you submit your name to be recorded as a highscore. The app also stores the key associated with your record so you can update your score._

## Current Features
* Displays random picture from api.
* Grabs list of breeds from the api to populate the drop down list.
* Able to select the dog based on breed.
* Correct guess will add 1 point.
* After you earn one point you are able to upload your score to the database.
* The website will then store your database record key so you can continue to update your score.

## Future Features
* Option to get a new picture if you can't figure out what breed it is.
* Implement a way to check user inputs so it doesn't store any bad words.
* Possibly provide hints.
* Implement machine learning to have the computer try and guess what breed the dog is.

## Process

#### 5/31/2019
_My wife provided a new template to work with on redesigning the website. Made a few adjustments and implemented the new design._

#### 5/9/2019
_Had a new idea to implement a High Score function to the game. We got it to store the score and a typed name into the database. Then we added a way to store the randomly generated key to the local storage so you can update your score if you wanted to. Worked with <a href='https://github.com/cjbreaux'>Chris Breaux</a> again on this day._

#### 5/8/2019
_Got an idea to implement redux into this project. Spent most of the day refactoring to allow the app to use redux. Towards the end of the day we started adding Firebase to store information too. Worked with <a href='https://github.com/cjbreaux'>Chris Breaux</a> on this day._

#### 5/7/2019
_Decided to recreate an old site I did using react. It was a basic site that got a random picture of a dog and gave you points if you guess correctly. Was able to redo the basic function of the original website. Worked with <a href='https://github.com/drewyox'>Drew Yoxsimer</a> on this day._


## Setup/Installation Requirements

* _Download repository from https://github.com/PhilipEskins/dog-react/_
* _Create a new file src/constants/firebaseConfig.js to add your database information_
* _Type npm install from the command line interface_
* _Type npm run start from the command line interface_
* _If you'd like to alter or see the code for the project, after downloading open the project up in your favorite code editor._

## Known Bugs

_Currently you are unable to get a new picture if you can't figure out what kind of dog is in the current picture._

## Support and contact details

_If you have problems or would like to comment about something feel free to contact me at philipeskins@gmail.com_

## Technologies Used

_This website uses HTML, SCSS, JavaScript, Webpack, React, redux, Firebase, local storage._


### License

*MIT*

Copyright (c) 2019 **_Philip Eskins_**
