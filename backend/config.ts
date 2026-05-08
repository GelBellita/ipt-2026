const config = {
    database: {
        host: process.env.DB_HOST || 'localhost',
        port: Number(process.env.DB_PORT) || 3306, 
        user: process.env.DB_USER || 'root',
        password: process.env.DB_PASSWORD || '1234',
        database: process.env.DB_NAME || 'node_mysql_api'
    },
    secret: process.env.JWT_SECRET || 'mY$3cr3tK3y!2026_IPT_Project_Bellita',
    emailFrom: process.env.EMAIL_FROM || 'karlee.lind@ethereal.email', 
    smtpOptions: {
        host: process.env.SMTP_HOST || 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: process.env.SMTP_USER || 'karlee.lind@ethereal.email',  
            pass: process.env.SMTP_PASS || 'UfMAwFuCspFbF8nTn4'           
        }
    }
};

export default config;