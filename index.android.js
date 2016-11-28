"use strict";

import React, { Component, PropTypes } from "react";
import {AppRegistry, StyleSheet, View, Text, ListView, Image, TouchableHighlight, Platform} from "react-native";
import { ReactNativeAudioStreaming, Player } from 'react-native-audio-streaming';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const styles = StyleSheet.create({
  backgroundVideo: {
    alignItems: "center",
    flex: 2,
    justifyContent: "center",
  },
  backgroundImage:{
    alignItems: "center",
    height: 450,
    justifyContent: "flex-start",
    width: 450,
  },
  container:{
		flex: 1,
		backgroundColor: "#AAAAAA"
	},
  playerContainer:{
    alignItems: "center",
    backgroundColor: "#555555",
    flex: 1,
		flexDirection: "row",
    justifyContent: "space-around",
  },
	imageContainer:{
		height: 100,
		backgroundColor: "#333333"
	},
	imageListContentContainer:{
		flex: 1,
		flexDirection: "row",
		justifyContent: "flex-start",
		alignItems: "stretch"
	},
	buttonContainer:{
		flex: 1,
		flexDirection: "row"
	},
	spaceContainer:{
		flex: 2
	},
  textImagePre:{
    flex: 6,
    marginBottom: 80,
  },
  textImage:{
    color: "white",
    flex: 2,
    fontSize: 30,
    textDecorationLine: "underline",
  }
});
const audioRoot = ""
const audiosPlaylist = [
  {name: "Mañanitas",song:"https://firebasestorage.googleapis.com/v0/b/audio-8bd52.appspot.com/o/Las%20man%CC%83anitas%20Minions.mp3?alt=media&token=0f1b083c-9d73-4cd8-b508-1eae9f3bb19c"},
  {name: "Goodbye mylover",song:"https://firebasestorage.googleapis.com/v0/b/audio-8bd52.appspot.com/o/goodbey%20mylover.mp3?alt=media&token=fa37cba9-2989-4fb7-88d3-b393dbb72387"},
  {name: "La vamos a Tumbar",song:"https://firebasestorage.googleapis.com/v0/b/audio-8bd52.appspot.com/o/la%20vamos%20a%20tumbar.mp3?alt=media&token=5d1ec1da-78cc-4640-b644-bc6e809f2114"},
  {name: "Hello",song:"https://firebasestorage.googleapis.com/v0/b/audio-8bd52.appspot.com/o/hello.mp3?alt=media&token=19a12a17-fef8-4bd7-a479-f3edf4630cf8"},
];
const audiosPlaylistLength = audiosPlaylist.length;
function findSong(audiosPlaylist, actualAudio) {
    let index = -1;
    let count = 0;
    while (audiosPlaylistLength > count) {
      if (audiosPlaylist[count].song == actualAudio.song) {
        index = count + 1;
      }
      count +=1 ;
    }
    if(index >= audiosPlaylistLength || index < 0){index=-1;}
    return index;
}
class Reproductor extends Component{
  constructor(props){
    super(props);
    this.state={
      actualAudio: audiosPlaylist[0],
      audios: audiosPlaylist,
      reproductorState: {img: "play-circle-outline", state: "pause"},
    }
    this._onPrevButton = this._onPrevButton.bind(this);
    this._onPlayButton = this._onPlayButton.bind(this);
    this._onNextButton = this._onNextButton.bind(this);
  }

  _onNextButton(){
    ReactNativeAudioStreaming.play(this.state.actualAudio, { showInAndroidNotifications: true});
  }

  _onPlayButton(){
    if(this.state.reproductorState.img == "play-circle-outline"){
      ReactNativeAudioStreaming.resume();
      ReactNativeAudioStreaming.pause();
      console.log(`actualAudio: ${this.state.actualAudio.name}`);
      this.setState({
        reproductorState: {img: "pause-circle-outline", state: "pause"},
      })
    }else {
      ReactNativeAudioStreaming.pause();
      this.setState({
        reproductorState: {img: "play-circle-outline", state: "play"}
      })
    }

  }
  _onPrevButton(){

  }
  render(){return(
    <View style={styles.container}>
      <View style={{ position:'absolute', right: 9999}}>
      </View>
      <View style={styles.backgroundVideo}>
        <Image
         style={{width: 450, height: 450}}
         source={{uri: "http://i1.ytimg.com/vi/eEmWrpF8lNA/maxresdefault.jpg"}}
       />
      </View>
      <View style={styles.playerContainer}>
        <TouchableHighlight onPress={this._onPrevButton}><MaterialIcons size={40} name="skip-previous" color="white"/></TouchableHighlight>
        <TouchableHighlight onPress={this._onPlayButton}><MaterialIcons size={40} name={this.state.reproductorState.state} color="white"/></TouchableHighlight>
        <TouchableHighlight onPress={this._onNextButton}><MaterialIcons size={40} name="skip-next" color="white"/></TouchableHighlight>
      </View>
    </View>
  )}
}


AppRegistry.registerComponent('musicPlayer', () => Reproductor);
