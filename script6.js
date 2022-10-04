let counter = document.querySelector('h1');
let count = 1;
setInterval(()=>{
    counter.innerText = count;
    count++
    
    if(count > 50) location.replace('https://media.discordapp.net/attachments/768786304585695275/1026828746818338937/Untitled.png?width=744&height=498')
    
},1000)