import http from 'http'
import { exec } from "child_process";

// Create a server
http.createServer((request, response)=>{
   
    if (request.url == '/playAlarm') {
        let responsestring = ''
        response.writeHead(200, { 'Content-Type': 'application/json' });
        exec("ls", (error, stdout, stderr) => {
            if (error) {
                response.write(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                response.write(`stderr: ${stderr}`);
                return;
            }
            responsestring = stdout;
        });
        response.write(responsestring);

        response.end();

    } else {

        response.end('Invalid request');
    }
})
.listen(3000);