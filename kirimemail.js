const nodemailer = require('nodemailer')


const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'alvinrochafi26@gmail.com',
            clientId: '907020553938-n3nqesh8v93030j1kp2uq3gosbru9lu7.apps.googleusercontent.com',
            clientSecret: 'nBsnMi2MngRjQaYA6OaetKo4',
            refreshToken: '1/lEUJkOKl9Tv1p0iV69SJ187xrYiu-M2cnK6jjJ2tTHw'
        }
    }
)

const mail = {
    from: 'Alvin Rochafi <alvinrochafi@gmail.com>',
    to: 'rochafi.dev@gmail.com',
    subject: 'Hello from the other side',
    html: `<h1>HELLO, ITS MEH</h1>`
}

transporter.sendMail(mail, (err, result) => {
    if(err) return console.log(err.message)

    console.log('Alhamdulillah ya berhasil')
})