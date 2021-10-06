



const http = require('http');
const os = require('os');
const user = os.userInfo();
const data = {
    name: [
        'jimmy',
        'john',
        'tommy',
        'doughnut',
        'donut',

    ],
    data: '10/20/30',
    numbers: [1,2,3,4,5,6,7,8],
}

const server = http.createServer((req, res) => {
    if(req.url === '/') {
        console.log(`${user.username} visted your site`);
        res.end(`
        
        <h1 style="color:grey;font-style: Sans-serif; text-align:center">Welcome to the Home Page<h1>
        <p style="font-size:25px; text-align:center;">You will be playing a Puzzle Game <p>
        <p style="font-size:22px; text-align:center;  ">Try to find the treasure by getting into each <p style="font-size:22px; position:relative; bottom:48px; left:256px; color: #52D5F2; text-align:center;" >/Server!!!<p><p>
        <p style="font-size:20px; text-align:center;">You will be getting <p style="color: red; left:110px; bottom: 43px; position: relative; font-size:20px; text-align:center">/Hints<p><p>
        <p style="font-size:22px; padding-bottom:200px; position: relative; bottom:50px; text-align:center;">So have Fun:) and Focus on finding solutions to problems, not reasons to quit<p>
        <p style="font-size:22px; position:relative; bottom:200px; text-align:center;">Here is your First Hint:<p>
        <p style="font-size:30px; position:relative; bottom:200px; text-align:center;">What has hands but can't clap?<p>
        `);
    } else if (req.url === '/clock'){
        res.end(`
        <p style="font-size:22px; text-align:center;">Great!!!<p>
        <p style="font-size:22px; text-align:center;">Here is your Second Hint:<p>
        <p style="font-size:32px; text-align:center;">Who can shave 25 times a day but still have a beard?<p>
        `);
    } else if (req.url === '/barber') {
        res.end(`
        <p style="font-size:22px; text-align:center;">Marvelous!!!<p>
        <p style="font-size:22px; text-align:center;">Here is your Third Hint:<p>
        <p style="font-size:32px; text-align:center;">What is more useful when it is broken?<p>
        
        `)
    } else if (req.url === '/egg') {
        res.end(`
        <p style="font-size:22px; text-align:center;">Stunning!!!<p>
        <p style="font-size:22px; text-align:center;">Here is your Forth Hint:<p>
        <p style="font-size:32px; text-align:center;">Simon’s dad had four sons: March, April, and May. What is the name of the fourth son?<p>
        
        `)
    } else if (req.url === '/simon') {
        res.end(`
        <p style="font-size:22px; text-align:center;">Amazing!!!<p>
        <p style="font-size:22px; text-align:center;">Here is your Fifth Hint:<p>
        <p style="font-size:32px; text-align:center;">The rich men want it, the wise men know it, the poor all need it, the kind men show it.<p>
        
        `)
    } else if (req.url === '/love') {
        res.end(`
        <p style="font-size:22px; text-align:center;">Spectacular!!!<p>
        <p style="font-size:22px; text-align:center;">Here is your Sixth Hint:<p>
        <p style="font-size:32px; text-align:center;">What runs around the whole yard without moving?<p>
        
        `)
    } else if (req.url === '/fence') {
        res.end(`
        <p style="font-size:22px; text-align:center;">Great Job<p>
        <p style="font-size:22px; text-align:center;">You have made it to the end<p>
        <p style="font-size:32px; text-align:center;">Thank you for playing :)<p>
        
        `)
    }
    
    
    else if(req.url === '/data'){
        res.end(JSON.stringify(data));
    } else {
        res.end(`
        <h1>Opps!</h1>
        <p>We can't find what you're looking for<p>
        `);
    }
});

server.listen(3001);