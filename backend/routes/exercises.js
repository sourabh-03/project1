const router = require('express').Router();
let Exercise = require('../models/exercise.model');
const { mquery } = require('mongoose');

router.route('/').get((req, res) => {
  Exercise.find()
    .then(exercises => res.json(exercises))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const description = req.body.description;
  const duration = Number(req.body.duration);
  const date = Date.parse(req.body.date);

  const newExercise = new Exercise({
    username,
    description,
    duration,
    date,
  });

  newExercise.save()
  .then(() => res.json('Exercise added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/delete').post((req ,res) => {
  console.log(req.body.username);
  var id1=req.body._id;
  Exercise.deleteOne({"_id":id1},function(err,obj){
    if(err)
    throw err;
    else{
      console.log("deleted");
    }
  });
});
router.route('/update').post((req ,res) => {
  console.log(req.body.username);
  var id1=req.body._id;
  Exercise.updateOne({"_id":id1},{$set:{
    "decription": req.body.description,
    "duration": req.body.duration
  }},function(err,obj){
    if(err)
    throw err;
    else{
      console.log("updated");
    }
  });
});


module.exports = router;