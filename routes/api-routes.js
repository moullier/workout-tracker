const db = require("../models");

module.exports = function (app) {

  // Route for getting some data about our workout to be used client side
    app.get("/api/workouts", function (req, res) {
        console.log("Got to api route for workouts");
        console.log(db.Workout);
        db.Workout.find({}, function (err, data) {
            if (err) return handleError(err);
            console.log("data is:")
            console.log(data);
            return res.json(data)
        });
    });

  // Route for getting all data about the workouts to be used client side
    app.get("/api/workouts/range", function (req, res) {
        console.log("Got to api route for workouts");
        console.log(db.Workout);
        db.Workout.find({}, function (err, data) {
            if (err) return handleError(err);
            console.log("data is:")
            console.log(data);
            return res.json(data)
        });
    });


    app.post("/api/workouts", function (req, res) {
        console.log("Got to post api route for workouts");
        // console.log(req.body);
        db.Workout.create(req.body, function (err, data) {
            if (err) return handleError(err);
            // saved!
            console.log("successfully added workout");
            console.log("workout:");
            console.log(data);
            return res.json(data);
          });
        });

    app.put("/api/workouts/:id", function (req, res) {
        console.log("It's me, the put request route for id " + req.params.id);
        console.log("req.body = ");
        console.log(req.body);
        const filter = { _id: req.params.id };


        let newExercise = req.body;

        console.log("req.body: " + req.body)
        console.log(req.body);



        let existingExercises = [];
        
        db.Workout.findOne(filter)
        .then(function(doc) {
            console.log("doc = ");
            console.log(doc);
            existingExercises = doc.exercises;
            console.log("ExistingExercises before we push req.body");
            console.log(existingExercises);

            existingExercises.push(req.body);
            console.log("ExistingExercises after we push req.body");
            console.log(existingExercises);
    
            const update = { exercises: existingExercises };
            const opts = { new: true };
    
            // console.log("update:");
            // console.log(update);
    
            db.Workout.findOneAndUpdate(filter, {
                $set: {
                    exercises: existingExercises
                }
              }, opts)
            .then(function (newdoc) {
                console.log("newdoc = ");
                console.log(newdoc);
                res.json(newdoc);
            });
        });
    })
}