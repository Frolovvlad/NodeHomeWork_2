const http = require('http');

function start (interval, stop) {
    const server = http.createServer(function (request, response) {
        if (request.method === 'GET' && request.url !== '/favicon.ico') {
            const timeLog = setInterval(() => {
                const currentDate = new Date();
                console.log(currentDate.toUTCString());
            }, interval * 1000)

            setTimeout(() => {
                clearInterval(timeLog);

                const currentDate = new Date()
                response.end(currentDate.toUTCString())
            }, stop * 1000)
        }
    })

    server.listen(3000, () => {
        console.log('Server running at http://localhost:3000');
    });
}

module.exports = {
    server: start
}