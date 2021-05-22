const { response } = require('express');
const express = require('express');
const app = express();
app.listen(10000, ()=> console.log('listening at 10000'));
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
app.use(express.urlencoded())

app.post('/api',(request,response) =>{
    console.log(request.body);
    const data = request.body;
    //console.log(data);
    response.json({
        status:'succes',
    });


    app.get('/api', (request, response) =>{
        response.json(data);
    });
});


app.post('/rain', (request, response) =>{
    console.log(request.body);
    const datas = request.body;
    //console.log(datas);
    response.json({
        status:'succes',
    });


    app.get('/rain', (request, response) =>{
        response.json(datas);
    });

});



app.post('/apit', (request, response) =>{
    console.log(request.body);
    const dat = request.body;
    //console.log(dat);
    response.json({
        status:'succes',
    });


    app.get('/apit', (request, response) =>{
        response.json(dat);
    });

});
