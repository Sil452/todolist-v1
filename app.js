const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');


//res.render uses the view engine that I set up previously to render a particular page in this case "list.ejs"
app.get('/', (req, res) => {

  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Saturday"];
  const dayIndex = new Date().getDay();
  const currentDay = weekday[dayIndex];

  res.render('list', {currentDay: currentDay});
});





app.listen(3000, function(){
  console.log('The server is running on: localhost 3000.');
});