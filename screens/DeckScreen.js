import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux'
import { MapView } from 'expo';
import { Card, Button } from 'react-native-elements';

import * as actions from '../actions'
import Swipe from '../components/Swipe'

class DeckScreen extends Component {

  renderCard(job) {
    return (
      <Card title={job.jobtitle}>
        <View sytle={styles.detailWrapper}>
          <Text>{job.company}</Text>
          <Text>{job.formatrelativetime}</Text>
        </View>
        <Text>
          {job.snippet.replace(/<b>/g,'').replace(/<\/b/g,'')}
        </Text>
      </Card>
    )
  }

  renderNoMoreCards() {
    return (
      <Card title='No more jobs'>

      </Card>
    )
  }

  render() {
    return (
        <View>
          <Swipe
            data={this.props.jobs}
            renderCard={this.renderCard}
            renderNoMoreCards={this.renderNoMoreCards}
          />
        </View>
    )
  }
}

const styles = {
  detailWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10
  }
}

function mapStateToProps({ jobs }) {
  return { jobs: jobs.results }
}

export default connect(mapStateToProps, actions)(DeckScreen);
