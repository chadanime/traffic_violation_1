import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Button } from 'react-native-elements';
import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import SecondPage from './SecondPage';

export default class FormList extends Component {
  render() {
    return <MyNavigator />;
  }
}

class ScreenComponentTwo extends React.Component {
  static navigationOptions = {
    headerTitle: 'Form List',
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 1"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 2"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 3"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 4"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 5"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 6"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 7"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 8"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 9"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Form 10"
          onPress={() => this.props.navigation.navigate('Form')}
        />
      </View>
    );
  }
}

const MyNavigator = createStackNavigator(
  {
    Initial: ScreenComponentTwo,
    Form: SecondPage
  },
  {
    // headerTransitionPreset: 'uikit',
    // mode: 'modal',
  }
);

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#2c3e50',
		padding: 20
	},
	buttonContainer: {
		backgroundColor: '#7f8c8d',
		paddingVertical: 25
	},
	buttonText: {
		textAlign: 'center',
		color: '#FFFFFF',
		fontWeight: '700'
	}
});
