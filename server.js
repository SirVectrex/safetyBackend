const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT;
app = express();


// Session handling


let indexRouter = require('./routes/index');
let listrouter = require('./routes/userlist');
let loginRouter = require('./routes/login');
let registerRouter = require('./routes/register');
let logoutRouter = require('./routes/logout');
let modal = require('./routes/module')
let mycollection = require('./routes/mycollection')

app.use('/modal', modal)
app.use('/mylist', mycollection)
app.use('/logout', logoutRouter)
app.use('/register', registerRouter)
app.use('/login', loginRouter);
app.use('/list', listrouter);
app.use('/', indexRouter);



app.listen(PORT, function() {
  console.log(`MI Finance running and listening on port ${PORT}`);
});