'use strict';

import React, {Component, View, TextInput, Text, StyleSheet} from 'react-native';

class SearchBar extends Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <TextInput style={styles.textInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: '#0f1726',
    padding: 5,
  },
  textInput: {
    height: 28,
    width: 180,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    fontSize: 12,
  },
});

export default SearchBar;
