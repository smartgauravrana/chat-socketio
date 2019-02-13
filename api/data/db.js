const mongoose = require('mongoose');

const dburl = 'mongodb://gaurav:vodafone8053@ds133865.mlab.com:33865/chat-db';

mongoose.connect(dburl, { useNewUrlParser: true });

mongoose.connection.on('connected', () => console.log('mongoose connected to ' + dburl));

mongoose.connection.on('disconnected', () => console.log('mongoose disconnected'));

mongoose.connection.on('error', err => console.log('mongoose connection error ' + err));

process.once('SIGUSR2', function(){

	mongoose.connection.close(function(){

		console.log('mongoose disconnected through app termination');
		process.kill(process.pid, 'SIGUSR2');
	});
});
