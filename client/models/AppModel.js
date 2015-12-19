// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' callback function will always be bound to that context we pass in.
    In the current example, we're binding the value of the keyword this to the App. That is helpful because otherwise
    the 'this' we use inside the function body (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */
    //var nextSong = this.get('library').at(1);
    params.library.on('enqueue', function(song){
      //the keyword this is representative of of instances of the App model. These app models have properties: currentsong, songqueue, library.

      //the items stored in these libraries are not the aaliyah song nor the song in the other occurances of libraries. 
      //console.log(this);
      this.get('songQueue').add(song);
    }, this);

    params.library.on('play', function(song){
      //this is setting the property current song on the current model instance and seting its value to song.
        //the song it is refering to is the 'test song', not any of teh aaliyah tracks
      this.set('currentSong', song);
    }, this);
  }

});
