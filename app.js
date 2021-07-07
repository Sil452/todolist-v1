const express = require('express');
const app = express();

let tasks = ["Wake up!"];

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {

  const today = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  };

  const currentDay = today.toLocaleDateString("en-US", options);
  
  //res.render uses the view engine that I set up previously to render a particular page in this case "list.ejs"
  res.render('list', {currentDay: currentDay, tasks: tasks});
});

// when a post request is triggered we will save the value of newTask to the const newTask. Then it will redirect us to the home route,
// where it will trigger the app.get for home route that will render list.ejs and parse currentDay and newTask.

app.post("/", function(req, res){

  const newTask = req.body.newTask;
  if(newTask.replace(/\s/g, '').length > 0){ 
    tasks.push(newTask);
  }

  res.redirect("/");
});



app.listen(3000, function(){
  console.log('The server is running on: localhost 3000.');
});