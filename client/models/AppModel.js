// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function (params) {
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' callback function will always be bound to that context we pass in.
    In the current example, we're binding the value of the keyword this to the App. That is helpful because otherwise
    the 'this' we use inside the function body (this.set('currentSong', song)) would
    end up referring to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    //creating a listener for the play function.
    //when the function is called the the app model should retrieve the current song.
    params.library.on('play', function (song) {

      //this sets the property current song in our app model to the song selected.
      this.set('currentSong', song);
    }, this);

    //creating a listner for the enqueue function.
    //Referencing the collection passed in via arguments accessing the library property.
    //when a song is added to the enque the listener should select the song passed in.
    params.library.on('enqueue', function (song) {
      //this should add the song to the queue
      this.get('songQueue').add(song);
    }, this);

    this.get('songQueue').on('stop', function () {
      this.set('currentSong', null);
    }, this);

  },

});
