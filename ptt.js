const delay = require('delay');
const Client = require('ssh2').Client;

(async function() {

const connection = new Client();
const account = '';
const pwd = '';

const stream = await new Promise(async (resolve) => {
	connection.on('ready', () => {
		connection.shell((err, stream) => {
			resolve(stream);
		});
	}).connect({
		host: 'ptt.cc',
		port: 22,
		username: 'bbsu',
	});
});

await delay(2000);
stream.write(`${account}\r`);

await delay(2000);
stream.write(`${pwd}\r`);

await delay(2000);
stream.write('\r');

await delay(2000);
connection.end();

})();
