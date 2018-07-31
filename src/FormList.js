import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, ScrollView } from 'react-native';

export default class FormList extends Component {
  static navigationOptions = {
    headerTitle: 'Form List',
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
      <ScrollView style={styles.container}>
        <Button
          buttonStyle={{
            backgroundColor: '#fe001a',
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Nofitication Of Traffic Violation"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            backgroundColor: '#fe001a',
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Approval Request Form"
          //onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            backgroundColor: '#fe001a',
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Acknowledgement Form"
          //onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            backgroundColor: '#fe001a',
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="New Hire QRG"
          //onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            backgroundColor: '#fe001a',
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 15
          }}
          title="Alternative Baking Request"
          //onPress={() => this.props.navigation.navigate('Form')}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
	container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
		padding: 20
	}
});
