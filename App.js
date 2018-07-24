import React from 'react';
import { Button, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

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
    headerTitle: 'First screen',
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
          title="Go to two"
          onPress={() => this.props.navigation.navigate('RouteNameTwo')}
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
