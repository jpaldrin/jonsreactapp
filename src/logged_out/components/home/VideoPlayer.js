import React, { Component } from 'react';
import { Player } from 'video-react';
export default class PlayerExample extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      playerSource: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
       
    };
    this.handleValueChange = this.handleValueChange.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.playerSource !== prevState.playerSource) {
      this.player.load();
    }
  }

  handleValueChange(e) {
    const { value } = e.target;
    this.setState({
      inputVideoUrl: value
    });
  }
  
  render() {
    return (
      <div>
        <Player
        playsInline
        poster = {`${process.env.PUBLIC_URL}/images/logged_out/dotnettootlogo.png`}
          ref={player => {
            this.player = player;
          }}
          videoId="video-1"
        >
          <source src={this.state.playerSource} />
        </Player>
      </div>
    );
  }
}