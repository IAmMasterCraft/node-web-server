const http = require('http');

const port = 8080;

const server = http.createServer((request, response) => {
    // A plain text containing any message
    switch (request.url) {
        case "/plain-text":
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.write("E choke, choken't it?");
            break;

        case "/json-api":
            response.statusCode = 200;
            response.setHeader('Content-Type', 'application/json');
            response.write(
                JSON.stringify(
                    {
                        name: "IAmMasterCraft",
                        country: "Nigeria",
                        hobby: "Programming",
                    }
                )
            );
            break;

        case "/web-page":
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/html');
            response.write(`
                <!DOCTYPE html>
                <html>
                    <head>
                        <title>A Simple Web Page</title>
                    </head>
                    <body>
                        <h1>Hello World!</h1>
                        <p>This is a simple webpage</p>
                    </body>
                </html>
            `);
            break;
    
        default:
            response.statusCode = 200;
            response.write("E be like say I no dey catch this case so what's popping?");
            break;
    }
    response.end();
});
server.listen(port, () => {console.log(`Basic web server running on port ${port}`)});