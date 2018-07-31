import React from 'react';
import { Text, View, StyleSheet, TextInput, Platform } from 'react-native';
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
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#fe001a'
    },
    headerTitleStyle: {
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center'
    }
  };

  render() {
    return (
      <View style={styles.container}>

   <View style={{flex: 1, width: 270, flexDirection: 'row'}}>
        <View style={{flex: 1, flexDirection: 'column'}}>
            <Text style={styles.instructionsInput}>Full Name</Text>
            <Text style={styles.instructionsInput}>Adress</Text>
            <Text style={styles.instructionsInput}>Social Security Number (SSN)</Text>
            <Text style={styles.instructionsInput}>Department</Text>
            <Text style={styles.instructionsInput}>Start Date</Text>
        </View>
        <View style={{flex: 1, flexDirection: 'column'}}>
          <TextInput  style={styles.textInput}
            placeholder='Mr Brown'
            editable={false} selectTextOnFocus={false}
            />
          <TextInput  style={styles.textInput}
            placeholder='1st Street Columbia'
            editable={false} selectTextOnFocus={false}
            />
          <TextInput  style={styles.textInput}
            placeholder='721-07-4426'
            editable={false} selectTextOnFocus={false}
            />
          <TextInput  style={styles.textInput}
            placeholder='Home and Bed'
            editable={false} selectTextOnFocus={false}
            />
          <TextInput  style={styles.textInput}
            placeholder='05/30/1998'
            editable={false} selectTextOnFocus={false}
            />
        </View>
    </View>

        <Button
          buttonStyle={{
            backgroundColor: '#fe001a',
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
    ...Platform.select({
            ios: {
                headerMode: 'none',
            },
            android: {
                headerMode: 'screen',
            },
          })
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 10
  },
  userInfo: {
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    color: 'black'
  },
  white: {
    color: 'black',
  },
  textInput: {
    height: 40,
    width: 200,
    marginTop: 13,
    textAlign: 'center',
  },
  instructionsInput: {
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    height: 40,
    marginTop: 15,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  }
});
