const express = require('express');

const app = express();

try{

    require('./prod')(app);

    //const hostname = 'http://covidsimpact.herokuapp.com';

    app.use(express.static(__dirname+'/public'));
    app.use((req,res,next) =>{
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body><center><h1>Error 404: NOT FOUND!</h1></center></body></html>');
    });
} 
catch(err){
    console.log(err.message);
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`server running on port: ${PORT}`);

});

