"use strict";

import React, { Component, PropTypes } from "react";
import {AppRegistry, StyleSheet, View, Text, ListView, Image, TouchableHighlight, Platform} from "react-native";
import { Player } from 'react-native-audio-streaming';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


const styles = StyleSheet.create({
  backgroundVideo: {
    backgroundColor: "red",
    flex: 2,
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
	}
});
const audioRoot = ""
const audiosPlaylist = [`${audioRoot}goodbey mylover`,`${audioRoot}hello`,
`${audioRoot}quedate`,`${audioRoot}si pudiera`];

class Reproductor extends Component{
  constructor(props){
    super(props);
    this.state={
      actualAudio: audiosPlaylist[0],
      audios: audiosPlaylist,
      reproductorState: "play-circle-outline",
    }
  }

  render(){return(
    <View style={styles.container}>
      <View style={styles.backgroundVideo}>

      </View>
      <View style={styles.playerContainer}>
        <MaterialIcons size={40} name="skip-previous" color="white"/>
        <MaterialIcons size={40} name={this.state.reproductorState} color="white"/>
        <MaterialIcons size={40} name="skip-next" color="white"/>
      </View>
    </View>
  )}
}


AppRegistry.registerComponent('musicPlayer', () => Reproductor);
