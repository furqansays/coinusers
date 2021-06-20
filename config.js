const isDevelopment = process.env.NODE_ENV === 'development'

module.exports={
    isDevelopment,
    DEFAULT_PORT: isDevelopment ? 8080 : process.env.PORT,
    URL: isDevelopment ? 'http://localhost:8080' : 'https://coinusers-app.herokuapp.com/',
    DATABASE: {
        URL: process.env.database_url,
  }
}