const express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('Project'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/login.html");
});
app.get('/sign', function (req, res) {
    res.sendFile(__dirname + "/Signup.html");
});

var user = [];
var count = 0;
app.post('/information', function (req, res) {
    if (req.body.id_is && req.body.pw_is && req.body.name_is && req.body.grade_is && req.body.department_is) {
        obj = {
            id: req.body.id_is,
            pw: req.body.pw_is,
            name: req.body.name_is,
            grade: req.body.grade_is,
            dep: req.body.department_is
        }
        user[count] = obj;
        console.log(user[count++].name + "님이 회원가입하셨습니다.");
        res.sendFile(__dirname + "/login.html");

    }
    else {
        console.log("no info");
    }
});
var numcount = 0;
app.post('/login', function (req, res) {
    var info = {
        id: req.body.id_input,
        pw: req.body.pw_input
    }
    for (var i = 0; i < user.length; i++) {
        if ((info.id == user[i].id) && (info.pw == user[i].pw)) {
            console.log(user[i].id);
            console.log(user[i].pw);
            res.sendFile(__dirname + "/main.html");
            console.log(i);
            numcount = i;
        }
        else {
            console.log("로그인 실패!");
            res.redirect("/");
        }
    }
});




app.get('/input', function(req, res){
    res.json(user[numcount]);
});

app.post('/logout', function (req, res) {
    res.sendFile(__dirname + "/login.html");
});




app.post('/save', function (req, res) {
    res.sendFile(__dirname + "/login.html");
});


app.listen(3000, () => {
    console.log('Server running at port: 3000!');
});