# Workout Tracker

https://aqueous-ridge-73046.herokuapp.com/

## Purpose of Application

This is a simple workout tracker application that stores its data in a MongoDB database.  The application uses the Node package Mongoose to query the database in JavaScript.  The front end code was supplied and took minimal modification.  I wrote the server code, api routes and html routes to connect the database to the client.

A user can create a new workout, and add exercises to it, or modify an existing workout by adding more exercises to that existing workour.  There are two categories of exercise, cardio and resistence, which have different properties attached to them.  There is a stats page which displays data on workouts from the last 7 days, with charts showing total workout duration and total pounds lifted.

## Resources Used

https://thisinterestsme.com/javascript-one-week-ago/ - This page showed a simple example of how to manipulate dates.

https://mongoosejs.com/docs/api.html#model_Model.findOneAndUpdate - Documentation on the findOneAndUpdate query

https://masteringjs.io/tutorials/mongoose/findoneandupdate - More information on findOneAndUpdate

## License
[MIT](https://choosealicense.com/licenses/mit/)