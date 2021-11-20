const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use((req, res, next) => {
	console.log('Time:', Date.now());
	next();
});

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
	res.send('Hello World');
});

app.get('/user/:userId', (req, res) => {
	console.log('/user:userId');
	console.log(`${req.params.userId}의 정보를 가져옵니다`);

	// TODO: DB에서 userID에 해당하는 정보를 가져오기
	// dummy data
	const user = {
		userId: 13579,
		name: 'sarchoi',
		email: 'srngch.dev_AT_gmail.com',
		school: '42Seoul',
	};

	res.send(user);
});

app.post('/user', (req, res) => {
	console.log(`데이터 확인 ${req.body}`);

	// TODO: DB에 데이터 저장하는 로직

	res.send({state: 'OK', data: req.body});
});

app.put('/user/:userId', (req, res) => {
	res.send('PUT (Update)');
});

app.delete('/user/:userId', (req, res) => {
	res.send('DELETE (Delete)');
});

app.get('/user/search', (req, res) => {
	console.log(`${req.query.name}의 정보를 조회합니다`);

	// TODO: DB에서 name에 해당하는 정보를 조회하기
	// dummy data
	const users = [
		{
			userId: 13579,
			name: 'sarchoi',
			email: 'srngch.dev_AT_gmail.com',
			school: '42Seoul',
		},
	];
	res.send({ result: users });
});

app.listen(3000, () => {
	console.log('Example app listening on port 3000');
	console.log('http://localhost:3000');
});

app.use(express.static('public'));
