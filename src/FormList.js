import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { StyleSheet, ScrollView } from 'react-native';

export default class FormList extends Component {
  static navigationOptions = {
    headerTitle: 'Form List',
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
          title="Form 2"
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
          title="Form 3"
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
          title="Form 4"
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
          title="Form 5"
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
          title="Form 6"
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
          title="Form 7"
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
          title="Form 8"
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
          title="Form 9"
          onPress={() => this.props.navigation.navigate('Form')}
        />
        <Button
          buttonStyle={{
            backgroundColor: '#fe001a',          
            borderColor: "transparent",
            borderWidth: 0,
            borderRadius: 5,
            marginBottom: 40
          }}
          title="Form 10"
          onPress={() => this.props.navigation.navigate('Form')}
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
