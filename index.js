const animalVoice = ['cow', 'horse', 'sheep', 'pig', 'chicken'];

const [moo, neigh, baa, oink, cluck] = animalVoice;  
//destructuring assigns variables to order of element

const [bessie, , dolly, babe, little] = animalVoice;
// the array after const can not be strings
// we can skip elements with , ,

const [blackAndWhite, , black, pink] = animalVoice
// no element was given to chicken, so it was ommitted

console.log(bessie, blackAndWhite);

const colors = 
['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, , v] = colors;

const [ , , , , , indg] = colors;

console.log(red, indigo);

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const {muppetName, color, song, job, partner} = muppet;

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {song2, song4} = nestedMuppet.album.theMuppetMovie;
//nested variables will return undefined outside of scope

const {nestedJob, nestedPartner} = nestedMuppet;

// const {partner} = nestedMuppet.nestedName;
// partner;

// console.log(partner);
// //returns undefined

// const {nestedPartner} = muppet.muppetName;
// nestedPartner;

// console.log(nestedPartner);

// const {song} = nestedMuppet.album.theMuppetMovie.song3;
// song;

// const {song2, song4} = muppet.song;


// Strings

// 1. Use destructuring to assign appropriate variables based on the sounds animals make.

// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.

// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

// Arrays

// 4. Use destructuring to assign appropriate variables using the color names.

// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.

// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner