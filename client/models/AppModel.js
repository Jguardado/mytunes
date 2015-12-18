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
      //console.log('this is song in queue', song);
      console.log(this.get('songQueue'));
      // console.log("enqueue event triggered.  This is: ", this);
      // console.log("this.library is: ", this.get('library'));
        //console.log("this.model 0: ", this.get('library').models[1]);



      this.get('songQueue').add(song);
    }, this);

    params.library.on('play', function(song){
      //console.log('this is the song that is being played: ', song);
      this.set('currentSong', song);
    }, this);
  }

});
