// data.js - Defines an array of data regarding song files and their accompanying details.


// songData is collection of SongModel models and each object needs to be SongModel
/*  {
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
    title: "One In A Million",
    artist: "Aaliyah",
  }

  WAS MODIFIED TO BE:

  new SongModel({
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
    title: "One In A Million",
    artist: "Aaliyah",
  })

*/
var songData = [
  new SongModel({
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/04+One+In+A+Million.mp3",
    title: "One In A Million",
    artist: "Aaliyah",
  }),
  new SongModel({
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/03+Age+Ain%27t+Nothing+But+A+Number.mp3",
    title: "Age Ain't Nothing But A Number",
    artist: "Aaliyah",
  }),
  new SongModel({
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/05+Hot+Like+Fire.mp3",
    title: "Hot Like Fire",
    artist: "Aaliyah",
  }),
  new SongModel({
    url: "https://s3-us-west-1.amazonaws.com/hr-mytunes/data/06+If+Your+Girl+Only+Knew.mp3",
    title: "If Your Girl Only Knew",
    artist: "Aaliyah",
  })
];
