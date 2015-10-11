'use strict';

import React, {Component, StyleSheet, View, Text} from 'react-native';

class ScheduleItem extends Component {
  static defaultProps = {
    time: 'TBD',
    title: '',
    speaker: '',
    company: '',
    category: '',
    isBreak: false,
  }

  render() {
    // TODO: Improve naming!
    let scheduleStyle = [styles.scheduleColRight];

    if (this.props.isBreak) {
      scheduleStyle.push(styles.scheduleBreak);
    }

    return (
      <View style={styles.scheduleRow}>
        <View style={styles.scheduleColLeft}>
          <Text style={styles.time}>{this.props.time}</Text>
          {(this.props.category) ? <Text>{this.props.category}</Text> : null}
        </View>
        <View style={scheduleStyle}>
          {(this.props.title) ? <Text style={styles.title}>{this.props.title}</Text> : null}
          {(this.props.speaker) ? <Text style={styles.speaker}>{this.props.speaker}</Text> : null}
          {(this.props.company) ? <Text style={styles.company}>{this.props.company}</Text> : null}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scheduleRow: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    flexDirection: 'row'
  },
  scheduleColLeft: {
    width: 120,
    borderTopWidth: 2,
    borderColor: '#ccc',
    paddingTop: 5,
  },
  scheduleColRight: {
    paddingTop: 7,
    flex: 1,
  },
  scheduleBreak: {
    opacity: 0.5,
  },
  time: {
    color: '#1bd982',
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: 'Raleway'
  },
  title: {
    fontFamily: 'Raleway',
    color: '#212739',
  },
  speaker: {
    fontFamily: 'Raleway',
    fontWeight: 'bold',
    color: '#212739',
  },
  company: {
    fontFamily: 'Raleway',
    color: '#212739',
  }
});

export default ScheduleItem;
