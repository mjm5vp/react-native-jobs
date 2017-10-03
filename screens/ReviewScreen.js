import React, { Component } from 'react';
import { View, Text, Platform, ScrollView, Linking } from 'react-native';
import { MapView } from 'expo'
import { Button, Card, Icon } from 'react-native-elements';
import { connect } from 'react-redux'

class ReviewScreen extends Component {
  static navigationOptions = ({ navigation }) => {
   return {
       title: 'Review Jobs',
       tabBarIcon: ({ tintColor }) => {
           return <Icon name='favorite' size={30} color={tintColor} />
       },
       headerRight: (
           <Button
             title='Settings'
             onPress={() => navigation.navigate('settings')}
             backgroundColor='rgba(0,0,0,0)'
             color='rgba(0, 122, 255, 1)'
           />
         ),
         style: {
           marginTop: Platform.OS === 'android' ? 24 : 50
         }
       }
   }

   renderLikedJobs() {
     console.log(this.props.likedJobs.length)
     return this.props.likedJobs.map(job => {
       const { company, formattedRelativeTime, url, longitude, latitude, jobtitle, jobkey } = job
       const initialRegion = {
         longitude,
         latitude,
         longitudeDelta: 0.045,
         latitudeDelta: 0.02
       }
       console.log(initialRegion)

       return (
         <Card title={jobtitle} key={jobkey}>
           <View style={{ height: 200 }}>
             <MapView
               style={{ flex: 1 }}
               cacheEnabled={Platform.OS === 'android'}
               scrollEnabled={false}
               initialRegion={initialRegion}
             />

             <View style={styles.detailWrapper}>
               <Text style={styles.italics}>{company}</Text>
               <Text style={styles.italics}>{formattedRelativeTime}</Text>
             </View>
             <Button
               title='Apply Now'
               backgroundColor='#03a9f4'
               onPress={() => Linking.openURL(url)}
             />

           </View>
         </Card>
       )
     })
   }

  render() {
    console.log(this.props.likedJobs.length)
    return (
      <ScrollView>
        {this.renderLikedJobs()}
      </ScrollView>
    )
  }
}

const styles = {
  detailWrapper: {
    marginBottom: 10,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  italics: {
    fontStyle: 'italic'
  }
}

const mapStateToProps = state => {
  // console.log(this.props.likedJobs.length)
  return { likedJobs: state.likedJobs }
}

export default connect(mapStateToProps)(ReviewScreen);
