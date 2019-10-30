import React, {Component} from 'react';
import YouTube from 'react-youtube';

export class MainCarousel extends Component {

    VideoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.playVideoAt(10);
        console.log(event.target)
      }
      VideoOnPlay(event){
          const player = event.target
          console.log(player.getCurrentTime())
      }
    render() {
      const opts = {
        height: '390',
        width: '100%',
        playerVars: { // https://developers.google.com/youtube/player_parameters
          autoplay: 1, 
          controls: 0
        }
       
      };
   
      return (
        <YouTube
          videoId="8TyE6gyaMNg"
          opts={opts}
          onReady={this.VideoOnReady}
          onPlay={this.VideoOnPlay}
        />
      );
    }
    
    }
