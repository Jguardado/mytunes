// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    //watching the dom element to see if the song has ended. 'ended' is a listener keyword. Once the ended is triggered we invoked teh function dequeue.
    this.$el.on('ended', function(){
      //console.log(this)
      //the SongModel has a method dequeue on it.
      this.model.ended();
      //inside of the anonymous function the keyword this become the dom element so we need to bind the keyword this to the model we are referencing.
    }.bind(this));
  },

  setSong: function(song){
    this.model = song;//this is refering to 'c25'. whatever that means
    //this is called twice, second call is 'c47'.
    this.render();
  },





  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },


});
