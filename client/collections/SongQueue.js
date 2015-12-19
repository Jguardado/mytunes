// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
  //the keyword this refers to the SongQueue (items stored in this songqueue array are the items in the songData...Aaliyah songs)
  this.get(this.models[0]);//this is representative of the first song in this collection. Aaliyah: four page letter
  },


});