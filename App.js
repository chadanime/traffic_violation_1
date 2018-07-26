import React from 'react';
import { Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button, CheckBox } from 'react-native-elements';

import FirstPage from './src/FirstPage';
import SecondPage from './src/SecondPage';

export default class App extends React.Component {
  render() {
    return <MyNavigator />;
  }
}

function getRandomNumber() {
  return Math.floor(Math.random() * 10);
}

class ScreenComponentOne extends React.Component {
  static navigationOptions = {
    headerTitle: 'La mujersuela debe poner el titulo',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 25,
          borderColor: 'teal',
        }}>  
        <Button
          buttonStyle={{
            backgroundColor: "black",
            width: 280,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}          
          title="Go to First Screen For Data Capture"
          onPress={() => this.props.navigation.navigate('RouteNameTwo')}
        />            
        <Button      
          buttonStyle={{
            backgroundColor: "rgba(92, 99,216, 1)",
            width: 280,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5
          }}          
          title="Go to Second Screen For Data Capture"
          onPress={() => this.props.navigation.navigate('RouteNameThree')}
        />        
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    RouteNameOne: ScreenComponentOne,
    RouteNameTwo: FirstPage,
    RouteNameThree: SecondPage,
  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);
