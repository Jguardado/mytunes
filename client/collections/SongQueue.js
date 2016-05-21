// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function () {
    //create a listeners that watch for the below events to be triggered in the song models that compose this collection.
    this.on('ended', this.playNext, this);
    this.on('dequeue', this.dequeue, this);
    this.on('add', this.enqueue, this);
  },

  //When there is only one item in this collection that song is played
  enqueue: function (song) {
    if (this.length === 1) {
      this.playFirst();
    }
  },

  //creates a function that removes song fromthe queue as long as there are song in the queue to be removed.
  dequeue: function (song) {

    if (this.at(0) === song) {
      this.playNext();
    }else {
      this.remove(song);
    }
  },

  //creates a function that selects the first item in the array of song models and invokes the function play on that model.
  playFirst: function () {
    this.at(0).play();
  },

  //locate where we are in the collection
  //compare to see if the first song in the collection is equal to the song we are located at.
  //if it is playfirst()
  playNext: function (song) {

    this.shift();
    if (this.length >= 1) {
      this.playFirst();
    } else {
      this.trigger('stop');
    }
  },

});
