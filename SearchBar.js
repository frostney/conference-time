'use strict';

import React, {Component, View, TextInput, Text, StyleSheet} from 'react-native';

class SearchBar extends Component {
  render() {
    return (
      <View>
        <Text>Search here...</Text>
        <TextInput style={styles.textInput} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    height: 28,
    width: 180,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 4,
    padding: 4,
    fontSize: 12,
  }
});

export default SearchBar;
