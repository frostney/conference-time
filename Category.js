'use strict';

import React, {Component, View, Text, StyleSheet} from 'react-native';

import categories from './categories.json';

class Category extends Component {
  static defaultProps = {
    index: 0
  }

  render() {
    const category = categories[this.props.index];

    return (
      <View style={[styles.categoryContainer, {backgroundColor: category.color}]}>
        <Text style={styles.categoryText}>{category.name}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  categoryContainer: {
    borderRadius: 4,
    padding: 5,
  },
  categoryText: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
  }
});

export default Category;
