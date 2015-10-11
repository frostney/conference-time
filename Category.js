'use strict';

import React, {Component, View, Text} from 'react-native';

import categories from './categories.json';

class Category extends Component {
  static defaultProps = {
    index: 0
  }

  render() {
    const category = categories[this.props.index];

    return (
      <View style={{backgroundColor: category.color, padding: 5}}>
        <Text>{category.name}</Text>
      </View>
    );
  }
}

export default Category;
