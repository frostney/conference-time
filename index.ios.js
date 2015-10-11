/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {AppRegistry, StyleSheet, Text, View, Image, ScrollView, Dimensions} from 'react-native';

import data from './reactive2015.json';
import Schedule from './Schedule';
import SearchBar from './SearchBar';

import PageControl from 'react-native-page-control';

const screen = Dimensions.get('window');

var ConferenceTime = React.createClass({
  getInitialState: function () {
    return {
      currentPage: 0
    };
  },
  onScroll: function(event){
    var offsetX = event.nativeEvent.contentOffset.x,
        pageWidth = screen.width - 10;
    this.setState({
      currentPage: Math.floor((offsetX - pageWidth / 2) / pageWidth) + 1
    });
  },
  render: function() {
    const schedule = Object.keys(data).map(function(title, index) {
      return <Schedule title={title} items={data[title]} />;
    });

    return (
      <View style={styles.container}>
        <View style={{backgroundColor: '#0f1726', padding: 10}}>
          <Image source={require('image!logo')} />
          <Text style={{color: 'white', padding: 5, fontFamily: 'Raleway'}}>Now speaking: It's not conference time yet</Text>
        </View>
        <SearchBar />
        <View style={{width:screen.width, height: screen.height - 200}}>
          <ScrollView pagingEnabled={true} horizontal={true} showsHorizontalScrollIndicator={false} bounces={true} onScroll={this.onScroll} scrollEventThrottle={16}>
            {schedule}
          </ScrollView>
          <PageControl style={{position:'absolute', left:0, right:0, bottom:10}} numberOfPages={schedule.length} currentPage={this.state.currentPage} hidesForSinglePage={true} pageIndicatorTintColor='gray' indicatorSize={{width:8, height:8}} currentPageIndicatorTintColor='black' />
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    marginTop: 20,
    flex: 1,
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('ConferenceTime', () => ConferenceTime);
