import React, {Component, View, ScrollView, Text, StyleSheet, Dimensions} from 'react-native';

const screen = Dimensions.get('window');

import ScheduleItem from './ScheduleItem';

class Schedule extends Component {
  static defaultProps = {
    title: 'Some day in the future',
    items: [],
  }

  render() {
    items = this.props.items.map(function(itemProps) {
      return <ScheduleItem {...itemProps} />;
    });

    return (
      <View style={{width: screen.width}}>
        <View style={styles.header}>
          <Text style={styles.headerText}>{this.props.title}</Text>
        </View>
        <ScrollView style={styles.scrollContainer}>{items}</ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#1bd982',
    padding: 5,
    flex: 1,
  },
  headerText: {
    color: '#222',
    fontFamily: 'Raleway'
  },
  scrollContainer: {
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
    height: 300,
  },
});

export default Schedule;
