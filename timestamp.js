var express = require('express');
var app = express();

app.get('/:time', function(req, res) {
    var result = {
        'unix': null,
        'natural': null
    }
    try {
        var decoded = decodeURI(req.params.time);
        var timestamp = parseInt(decoded);
        var date;
        if (timestamp == timestamp) {
            date = new Date(timestamp);
        } else {
            date = new Date(decoded);
        }
        result.unix = date.getTime();
        result.natural = date.toDateString();
    }
    catch(err) {
    }
    res.json(result);
});


app.listen(process.env.PORT);