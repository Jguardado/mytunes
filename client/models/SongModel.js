// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({
  // Our input input is a object, so we need to initialize the model
  // to have the properties of that object
  intialize: function (obj){
    this.set('url', obj.url);
    this.set('title', obj.title);
    this.set('artist', obj.artist);
  },
// Our model now has the above properties


  play: function(){
    // Triggering an event on an instance of a SongModel will also trigger that event on all collections that SongModel instance belongs to.
    // Why do we need to pass along the keyword this when we trigger the 'play' event?
    this.trigger('play', this);
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  }

});
