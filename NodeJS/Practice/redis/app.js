// const redis = require('redis');
// const redisURL = 'redis://127.0.0.1:6379';
// const client = redis.createClient(redisURL);
// client.connect();
// client.set("name", "redis");
// console.log("Data is setting...");
// client.get('name', (error, value) => {
//     if(error) {
//         console.log(error);
//     }
//     console.log(value);
// });

const redis = require("redis"); 
const redisclient = redis.createClient(); 
  
(async () => { 
    await redisclient.connect(); 
})(); 
  
console.log("Connecting to the Redis"); 
  
redisclient.on("ready", () => { 
    console.log("Connected!"); 
}); 
  
redisclient.on("error", (err) => { 
    console.log("Error in the Connection"); 
}); 