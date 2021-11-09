const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/movies', function (req, res) {
    let movie = ["3idiot", "omkara", "race1", "race2", "race3"];
    res.send(movie)
});

router.get('/moviess', function (req, res) {
    let movie = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Demo"
       }]
    res.send(movie)
});

router.get('/films/:filmId', function (req, res) {
    let arr = [ {
        "id": 1,
        "name": "The Shining"
       }, {
        "id": 2,
        "name": "Incendies"
       }, {
        "id": 3,
        "name": "Rang de Basanti"
       }, {
        "id": 4,
        "name": "Finding Demo"
       }]

       let i = req.params.filmId;
       //console.log(typeof i)
   
       const film = arr.filter(x => x.id == i)
       //console.log(film)
       if (film.length == 0){
           res.send("Not found")
       }
   
       else{
           res.send(film);
       }
   
      

});


router.get('/movies/:movieId', function(req, res){ 
    let movies = ["3idiot", "omkara", "race1", "race2", "race3"];
    let value = req.params.movieId;
    if(value>movies.length-1){
        res.send("use a valid index")
    }else{
   // movieName = movies[value]; 
    res.send(movies[value]);
    }
})

module.exports = router;