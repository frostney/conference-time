'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';

class ScheduleItem extends Component {
  static defaultProps = {
    time: 'TBD',
    title: 'That talk',
    speaker: 'That guy',
    company: 'That company',
    category: 'Something cool'
  }

  render() {
    return (
      <View style={styles.scheduleRow}>
        <View style={styles.scheduleColLeft}>
          <Text style={styles.time}>{this.props.time}</Text>
        </View>
        <View style={styles.scheduleColRight}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.speaker}>{this.props.speaker}</Text>
          <Text style={styles.company}>{this.props.company}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scheduleRow: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 5,
    marginBottom: 10
  },
  scheduleColLeft: {
    width: 120
  },
  scheduleColRight: {

  },
  time: {
    color: '#1bd982',
    fontWeight: 'bold',
    borderTopWidth: 2,
    borderColor: '#ccc',
    fontFamily: 'Raleway'
  },
  title: {
    fontFamily: 'Raleway'
  },
  speaker: {
    fontFamily: 'Raleway'
  },
  company: {
    fontFamily: 'Raleway'
  }
});

export default ScheduleItem;
