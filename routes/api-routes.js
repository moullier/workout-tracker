const Workout = require("../models/workout");

module.exports = function (app) {

  // Route for getting some data about our workout to be used client side
    app.get("/api/workouts", function (req, res) {
        console.log("Got to api route for workouts");
        console.log(Workout);
        Workout.find({}, function (err, data) {
            if (err) return handleError(err);
            console.log("data is:")
            console.log(data);
        });
        

    });


    app.post("/api/workouts", function (req, res) {
        console.log("Got to post api route for workouts");
        //   res.json({
        //     email: req.user.email,
        //     id: req.user.id,
        //     display_name: req.user.display_name
        //   });
        });

    app.put("/api/workouts", function (req, res) {
        console.log("It's me, the put request route");

        res.json({});
    })
}