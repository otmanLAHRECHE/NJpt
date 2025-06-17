const http = require('http')

const server = http.createServer((req,res)=>{
     console.log(req.url)
     if(req.url === '/'){
        res.end('this is the home page')
        
     }if(req.url ==='/about'){
        res.end('this is the about page')
     }

     res.end(`<h1>404</h1>
        <p>We cant seem to find his page</p>
        <a href="/">back home</a>
        `)
})

server.listen(5000)

