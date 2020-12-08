import * as React from 'react';
import { View } from 'react-native';
import SoundButton from './components/SoundButton'
class appHeader extends React.Component{
  render(){
    return (
       <View style={styles.textContainer}>
       <Text style={styles.text}>quiz buzzer app 
       </Text>
       </View>
    )
  }
}


export default class App extends React.Component {
  render() {
    return (
      <View>
        <SoundButton />
      </View>
    );
  }
}

