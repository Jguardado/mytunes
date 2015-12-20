// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    //create a listener that watches for 'ended' to be triggered and once it is we remove the first elemnt in the library and invoke our function that plays the song that has now taken the place as the first song.
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
    this.on('add', this.enqueue, this);
  },

  enqueue: function(){
    if (this.length === 1){
      this.playFirst();
    }
  },

  dequeue: function(){

    if (this.length >= 1){
      this.remove(this.model);
    }
  },

  playFirst: function(){
  //the keyword this refers to a library (items stored in this have been generated in the spec runner.. they are not the song we converted to models)
  this.at(0).play();
  },

  playNext: function(song){

    //locate where we are in the collection

    //compare to see if the first song in the collection is equal to the song we are located at.
    //if it is playfirst()
    this.shift();
    if(this.length>=1){
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  }


});