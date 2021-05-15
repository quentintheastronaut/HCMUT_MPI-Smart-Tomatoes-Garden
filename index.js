const express = require('express');
const path = require('path');
const axios = require('axios');
const bodyParser = require('body-parser');
var mqtt = require('mqtt');
require('dotenv').config();
var cors = require('cors');


const app = express();
const port = 3001;
const options = {
	port: '1883',
	host: 'io.adafruit.com',
	username: 'quan260402',
	password: 'aio_VxTv44yWsLTLsq95KNGoNHQBXwL3',
};
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors({origin: 'http://localhost:3000'}));


var client = mqtt.connect('mqtt://' + options.host, options);

client.on('connect', function () {
	console.log('Client connected');
	// client subcribe topic
<<<<<<< HEAD
	client.subscribe(`sanghuynh20000/feeds/led`, console.log);
	client.subscribe(`sanghuynh20000/feeds/temp`, console.log);
=======
	client.subscribe(`quan260402/feeds/bk-iot-led`, sendDataToClient);
	// client.publish(`sanghuynh20000/feeds/led`, 'off');
>>>>>>> 747e6bb8ec982f0def9aee7d225c9b6a5886784f
});

client.on('message', function (topic, message) {
	console.log(message.toString());
<<<<<<< HEAD
=======
	// đóng kết nối của client
	// client.end();
>>>>>>> 747e6bb8ec982f0def9aee7d225c9b6a5886784f
});





app.get('/getAllFeeds', (req, res) => {
	axios
		.get(
			`https://io.adafruit.com/api/v2/${options.username}/feeds?X-AIO-Key=${options.password}`
		)
		.then((res1) => res.status(200).send(res1.data))
		.catch((err) => console.log(err, 'err'));
});

app.post('/changeFeed', (req, res) => {
<<<<<<< HEAD
	// console.log(req.body);
=======
	console.log(req)

	var data  = {
		id: 1,
		name:"LED", 
		data:"X", 
		unit:""
	}
>>>>>>> 747e6bb8ec982f0def9aee7d225c9b6a5886784f
	client.publish(
		`${options.username}/feeds/bk-iot-led`,
		JSON.stringify(data)
	);

	// axios
	// 	.post(
	// 		`https://io.adafruit.com/api/v2/${process.env.USER}/feeds/${req.body.feedName}/data?X-AIO-Key=${process.env.KEY}`,
	// 		{
	// 			datum: {value: req.body.value},
	// 		}
	// 	)
	// 	.then((res1) => console.log(res1))
	// 	.catch((err) => console.log(err, 'err'));
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
	console.log(`App listening at PORT:`, port);
});





// ----------------------------------------

function sendDataToClient(data){
	
	if(data){
		console.log(toString(data))
		const dataSend = JSON.parse(toString(data))
		console.log(dataSend)
	}
	
}