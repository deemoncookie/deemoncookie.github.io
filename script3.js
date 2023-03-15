// Define variables
var numberContainer = document.getElementById('number-container');
var numbers = [];

// Define the default messages for each number
// Define the default messages and images for each number
var defaultMessages = {
  1: {
    message: "You received a head pat",
    imageSrc: "https://media.tenor.com/O4fOl9MbuIkAAAAM/pat-good.gif"
  },
  2: {
    message: "Charan! holding hands with me~",
    imageSrc: "https://media.tenor.com/WUZAwo5KFdMAAAAC/love-holding-hands.gif"
  },
  3: {
    message: "Kiss? no no no giving all my loveeeee wapaaaaa (thats not a hard punch)!",
    imageSrc: "https://media.tenor.com/GuML2yHT58kAAAAC/punch-anime.gif"
  },
  4: {
    message: "You received a chin rub~~",
    imageSrc: "https://media.tenor.com/sIpmPSce3SsAAAAC/chin-scratch-anime.gif"
  }, 
  5: {
    message: "watch date?",
    imageSrc: "https://cdn.discordapp.com/attachments/768786304585695275/1085569535886766110/image.png"
  }, 
  6: {
    message: "hug while sitting on my lap? pero di mukhang ganon HAHAHA",
    imageSrc: "https://media.tenor.com/H7i6GIP-YBwAAAAM/a-whisker-away-hug.gif"
  }, 
  7: {
    message: "1st week!! BOINK HEAD CHOP!!!",
    imageSrc: "https://media.tenor.com/I9ExDkd7d2IAAAAC/anime-chop.gif"
  }, 
  8: {
    message: "rANDOM----- i wanna do this",
    imageSrc: "https://www.gifcen.com/wp-content/uploads/2022/06/anime-girl-gif-4.gif"
  }, 
  9: {
    message: "okay special reward piggy back ride but not in public HAHAHA but we can",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7I0u1ssLsTnqO2As1V6o17p-MvVn28hUAXw&usqp=CAU"
  }, 
  10: {
    message: "U resib a taytol or calling 'kyukyu's only one baobei'",
    imageSrc: "https://www.icegif.com/wp-content/uploads/icegif-2013.gif"
  }, 
  11: {
    message: "BOINK PENALTY TIME 'kiss selfie'",
    imageSrc: "https://media.tenor.com/XFE9t_VV4xgAAAAM/anime-kiss-me.gif"
  },
  12: {
    message: "After penalty u can command me too'",
    imageSrc: "https://media.tenor.com/yCR6JOoxS6wAAAAd/anime-angry.gif"
  }, 
  13: {
    message: "Congrats u earned this! (wanna do that?) :p",
    imageSrc: "https://media.tenor.com/bH__N0zWKdgAAAAC/scums-wish-anime.gif"
  }, 
  14: {
    message: "You earned a ticket called 'take me out'",
    imageSrc: "https://static.wikia.nocookie.net/the-dere-types/images/3/31/Mizuki_Usami_Dandere.gif/revision/latest/scale-to-width-down/250?cb=20200713190719"
  }, 
  15: {
    message: "dis pulawers is for you my kyukyu",
    imageSrc: "https://media.tenor.com/tkBm5Z5QrlkAAAAM/anime-flower.gif"
  }, 
  16: {
    message: "face rub face rub face rub face rub face rub face rub face rub ",
    imageSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTzn5RMgUwFREEiFZflZHL6dxfrbsfmMy4Mw&usqp=CAU"
  }, 
  17: {
    message: "wanna raise a kitten with me soon? idk if this is a reward tho :(",
    imageSrc: "https://media.tenor.com/bcqLdYBLOhUAAAAC/suzume-no-tojimari.gif"
  },   
  18: {
    message: "u won a coffee date ticket redeem anytime",
    imageSrc: "https://cdn.discordapp.com/attachments/768786304585695275/1085568303327629452/image.png"
  },
  19: {
    message: "u can cling to my arms :p anytime",
    imageSrc: "https://media.tenor.com/ThvRTGgwWA0AAAAM/anime-girl.gif"
  }, 
  20: {
    message: "VIDEO CALL PASS EARNED!! CONGRATSU HASHSAHSAHASHAS(PABOR DIN NAMAN FOR ME)",
    imageSrc: "https://cdn.discordapp.com/attachments/768786304585695275/1085571078816026654/image.png"
  }, 
  21: {
    message: "3rd week huh want this? ",
    imageSrc: "https://media.tenor.com/YHxJ9NvLYKsAAAAM/anime-kiss.gif"
  },   
  22: {
    message: "U won a candy? ",
    imageSrc: "https://media.tenor.com/Zhhf7jc76HoAAAAC/anime-candy.gif"
  },   
  23: {
    message: "You-don with me?",
    imageSrc: "https://64.media.tumblr.com/09ee841a145b1e9c9dd2ee4a5b21084e/tumblr_oj2jo6LbrO1tdnbbbo1_500.gif"
  },   
  24: {
    message: "Massage? ill try my  best tho",
    imageSrc: "https://i.pinimg.com/originals/48/80/6e/48806ed88acb18dca1b2c420c77829b7.gif"
  },   
  25: {
    message: "Ill be your personal companion forever",
    imageSrc: "https://64.media.tumblr.com/c71ad9eaedac465b51ae401e0d148513/tumblr_njei0iU5G31u9gmmko1_250.gif"
  },   
  26: {
    message: "will cook the dish that u want ",
    imageSrc: "https://media.tenor.com/ZtccWz9BLJwAAAAC/anime-anime-food.gif"
  },   
  27: {
    message: "simply me",
    imageSrc: "https://cdn.discordapp.com/attachments/768786304585695275/1085580877339304026/image.png"
  },   
  28: {
    message: "sinasagot na kita joke lang, Keep me for a day!",
    imageSrc: "https://cdn.discordapp.com/attachments/768786304585695275/1085577300621406249/image.png"
  },     
  // Add properties for each number as needed
  // ...
};

// Create default message and image elements for each number
for (var i = 1; i <= 31; i++) {
  var numberBox = document.createElement('div');
  numberBox.classList.add('number-box');
  var number = document.createElement('div');
  number.classList.add('number');
  number.innerText = i;
  numberBox.appendChild(number);
  numberContainer.appendChild(numberBox);

  // Create variables for each number
  var variableName = 'number' + i;
  window[variableName] = number;

  // Create default message and image elements
  var defaultMsg = defaultMessages[i];
  var message = document.createElement('p');
  message.classList.add('message');
  message.contentEditable = true;
  message.id = 'number' + i + 'message';
  message.innerText = defaultMsg.message;
  var image = document.createElement('img');
  image.classList.add('image');
  image.src = defaultMsg.imageSrc;
  message.appendChild(image); // Add image element to message
  numberBox.appendChild(message);

  // Add click event listener to toggle display of message
  numberBox.addEventListener('click', function() {
    this.classList.toggle('clicked');
    var message = this.querySelector('.message');
    message.style.display = (message.style.display === 'clicked') ? 'block' : 'block';
  });

	
  // Mark number as clicked
  numberBox.classList.add('clicked');
  numberBox.style.backgroundColor = '#ddd';
  numberBox.style.color = '#888';
}

