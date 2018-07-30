import React from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';

import FormList from './src/FormList';
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
    headerTitle: 'Employee Info',
    headerTitleStyle: {
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center'
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.userInfo}>
          <Text style={styles.white}>Full Name</Text>
          <TextInput style={styles.input}
            placeholder='Daniel Melchor'
            placeholderTextColor="white"
            />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.white}>Adress</Text>
          <TextInput style={styles.input}
            placeholder='Av. Evergay #41 Sunset Boulevard'
            placeholderTextColor="white"
            />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.white}>Social Security Number (SSN)</Text>
          <TextInput style={styles.input}
            placeholder='721-07-4426'
            placeholderTextColor="white"
            />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.white}>Department</Text>
          <TextInput style={styles.input}
            placeholder='Home and Bed'
            placeholderTextColor="white"
            />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.white}>Start Date</Text>
          <TextInput style={styles.input}
            placeholder='05/30/1998'
            placeholderTextColor="white"
            />
        </View>
        <Button
          buttonStyle={{
            backgroundColor: '#7f8c8d',
            width: 280,
            height: 45,
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginTop: 70,
            alignSelf: 'center'
          }}
          title="Go to Form List"
          onPress={() => this.props.navigation.navigate('FormList')}
        />
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    RouteNameOne: ScreenComponentOne,
    FormList: FormList,
    Form: SecondPage
  },
  {
    headerMode: 'none'
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#2c3e50',
    padding: 10
  },
  userInfo: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    color: 'white'
  },
  white: {
    color: 'white',
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  }
});
