import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { MapView } from 'expo';
// import Map from 'react-native-maps';

class MapScreen extends Component {
  state = {
    mapLoaded: false,
    region: {
      longitude: -122,
      latitude: 37,
      longitudeDelta: 0.04,
      latitudeDelta: 0.09
    }
  }

  componentDidMount() {
    this.setState({ mapLoaded: true })
  }

  render() {
    if (!this.state.mapLoaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
    return (
      <View style={{ flex: 1 }}>
          <MapView
            // provider={PROVIDER_GOOGLE}
            region={this.state.region}
            style={{ flex: 1 }}
          />
      </View>
    )
  }
}

export default MapScreen;
