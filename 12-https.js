const http = require('http')
const server = http.createServer((req,res)=>{

    if(req.url === '/'){
        res.end('Welcome to Homepage')
    }else if(req.url === '/about'){
        res.end('Here is about page')
    }else{
        res.end(`
        <h1>Opps!</h1>
        <p>Page not available</p>
        <a href="/">< back home</a>
    `)
    }
    
    
    
})

server.listen(5000)