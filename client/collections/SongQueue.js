// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //create a listener that watches for 'ended' to be triggered and once it is we remove the first elemnt in the library and invoke our function that plays the song that has now taken the place as the first song.
    this.on('ended', function(){
      //console.log('end the songqueue', this);
      this.shift();
      this.playFirst();

    });
    
    //console.log(this);
    this.on('add', function(){
      console.log("songqueue change listener");
      if(this.length === 1){
        this.playFirst();
      }
    });
  },

  playFirst: function(){
  //the keyword this refers to a library (items stored in this have been generated in the spec runner.. they are not the song we converted to models)
  this.at(0).play();
  },


});