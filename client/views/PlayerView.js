// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
  },

  setSong: function(song){
    this.model = song;//this is refering to 'c25'. whatever that means
    //this is called twice, second call is 'c47'.
    this.render();
  },





  render: function(){
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  },

  ended: function(){//this isnt being accessed.
    var temp  = this.model.get('songQueue').at(0);
    //console.log(temp);
    this.model.set(temp);
   }


});
