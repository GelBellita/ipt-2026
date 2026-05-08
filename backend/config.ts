const config = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306,
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '',
        database: process.env.DB_NAME || 'node_mysql_api'
    },
    secret: process.env.JWT_SECRET || '',
    emailFrom: process.env.EMAIL_FROM || 'karlee.lind@ethereal.email',
    smtpOptions: {
        host: process.env.SMTP_HOST || 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.SMTP_USER || 'karlee.lind@ethereal.email',
            pass: process.env.SMTP_PASS || ''
        }
    }
};

export default config;