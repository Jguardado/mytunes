// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
  },

  playFirst: function(){
  //the keyword this refers to a library (items stored in this have been generated in the spec runner.. they are not the song we converted to models)
  this.get(this.models[0]);//this is representative of the first song in this collection. Aaliyah: four page letter
  },


});