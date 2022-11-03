let counter = document.querySelector('h1');
let count = 1;


setInterval(()=>{
    counter.innerText = count;
    count++
    if(count > 30) location.replace('https://cdn.discordapp.com/attachments/768786304585695275/1037715152356782201/ezgif.com-gif-maker.gif')
    
},1000)