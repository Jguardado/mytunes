// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  //For every instance of the song model the corresponding properties below are set in the attributes property of teh song model.
  intialize: function (obj) {
    this.set('url', obj.url);
    this.set('title', obj.title);
    this.set('artist', obj.artist);
  },

  //For every instance of the song model the corresponding properties below are set in the attributes property of teh song model.
  intialize: function (obj) {
    this.set('url', obj.url);
    this.set('title', obj.title);
    this.set('artist', obj.artist);
  },

  //creates a function that trigger the repective listen function on our app model. Providing the song as the context for teh keyword this.
  play: function () {

    this.trigger('play', this);
  },

  //creates a function that triggers the respective listener function on our app model, when there is a song in the queue.
  enqueue: function () {

    this.trigger('enqueue', this);
  },

  //creates a function that triggers the respective listener function on our app model, when the current song is  removed from the queue.
  dequeue: function () {
    this.trigger('dequeue', this);
  },

  //creates a function that triggers the respective listenr function on our app model when the current song has ended.
  ended: function () {
    this.trigger('ended', this);
  },

});
