"use strict";

import React, { Component, PropTypes } from "react";
import {AppRegistry, StyleSheet, View, Text, ListView, Image, TouchableHighlight, Platform} from "react-native";
import { Player } from 'react-native-audio-streaming';
import PlayCircleOutline from 'react-native-vector-icons/Material';

//play-circle-outline


const styles = StyleSheet.create({
  backgroundVideo: {
    backgroundColor: "red",
    flex: 2,
  },
  container:{
		flex: 1,
	//	flexDirection: "column",
		// justifyContent: "center",
		// alignItems: "stretch",
		backgroundColor: "#AAAAAA"
	},
  playerContainer:{
    alignItems: "center",
    backgroundColor: "blue",
    flex: 1,
		flexDirection: "column",
    justifyContent: "center",
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
    }
  }

  render(){return(
    <View style={styles.container}>
      <View style={styles.backgroundVideo}>

      </View>
      <View style={styles.playerContainer}>
        <PlayCircleOutline/>
      </View>
    </View>
  )}
}


AppRegistry.registerComponent('musicPlayer', () => Reproductor);
