"use strict";

const
    React = require("react"),
    Sound = require("react-sound");

module.exports = React.createClass({
  render() {
  return <Sound
    url="./doot.mp3"
    playStatus={Sound.status.PLAYING}
    playFromPosition={0}
    onLoading={this.handleSongLoading}
    onPlaying={this.handleSongPlaying}
    onFinishedPlaying={this.handleSongFinishedPlaying} />
}
});