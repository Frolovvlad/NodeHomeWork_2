const http = require('http');
const yargs = require('yargs');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Type': 'text/plain' });

    const argv = yargs
        .usage('Usage: $0 [option]')
        .help('help')
        .alias('help', 'h')
        .version('1.0.0')
        .alias('version', 'v')
        .example('$0 --interval 1 --stop 2')
        .option('interval', {
            alias: 'i',
            describe: 'Временной интервал в секундах, вывода времени в консоль',
            default: '1'
        })
        .option('stop', {
            alias: 's',
            describe: 'Время в секундах, через которое завершится вывод времени в консоль',
            default: '100'
        })
        .epilog('Вывод времени в консоль через заданный промежуток времени в формате UTC')
        .argv

    timer(argv.interval, argv.stop)

}).listen(3000);

console.log('Server running at http://localhost:3000');

const getCyrrentData = function () {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const day = date.getDay()
    const hour = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    return `${year}.${month}.${day} || ${hour}:${minutes}:${seconds}`
}

const timer = function (interval, stop) {

    const timeLog = setInterval(() => {
        console.log(getCyrrentData())
    }, interval * 1000)

    setTimeout(() => {
        console.log('Вывод даты остановлен');
        clearInterval(timeLog);
    }, stop * 1000)
}
