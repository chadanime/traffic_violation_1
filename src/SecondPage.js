/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StackNavigator } from 'react-navigation';
import {Platform, StyleSheet, Text, View, TextInput} from 'react-native';
import { CheckBox } from 'react-native-elements'


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Coca-Cola Refreshments requires that all associates who drive company vehicles notify their supervisor of any moving traffic violations/citations, including those that occurred in a personal vehicle, no later than the beginning of the next scheduled work day.',
});

type Props = {};
export default class SecondPage extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = { text_driver: ' ' };
    this.state = { text_address: ' '};
    this.state = { text_city: ' '};
    this.state = { text_state: ' '};
    this.state = { text_zip: ' '};
    this.state = { text_phone: ' '};
    this.state = { text_license: ' '};
    this.state = { text_licenseState: ' '};
    this.state = { text_date: ' '};
    this.state = { text_citation: ' '};
    
    
    
    

  }  

  _scrollToInput (reactNode: any) {
    // Add a 'scroll' ref to your ScrollView
    this.scroll.scrollToFocusedInput(reactNode)
  }
  static navigationOptions = {
  title: "     Notification of Traffic Violation",
  headerTintColor: '#FFFFFF',
  headerStyle: {
  backgroundColor: 'black',
  },

  }//end of navigationOption

  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 8, backgroundColor: 'white'}}>          
          <Text style={styles.instructions}>{instructions}</Text>
<View>
<CheckBox
  left
  title='Click Here to Remove This Item'
  checkedIcon='black' 
  checkedColor='red'
  checked={this.state.checked}
/>
</View>

          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Driver's Address   </Text>
            <TextInput
              style={{height: 35, width: 220}}              
              placeholder="Type Driver's Address Here"
              multiline = {false}
              maxLength = {30}
              onChangeText={(text_address) => this.setState({text_address})}
            />         
          </View> 

          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>City  </Text>
            <TextInput
              style={{height: 35, width: 100}}              
              placeholder="City Here"
              multiline = {false}
              maxLength = {15}
              onChangeText={(text_city) => this.setState({text_city})}
            />              
            <Text style={styles.instructionsInput}> State  </Text>
            <TextInput
              style={{height: 35, width: 60}}              
              placeholder="State"
              multiline = {false}
              maxLength = {2}
              onChangeText={(text_state) => this.setState({text_state})}
            />  
            <Text style={styles.instructionsInput}>  ZIP </Text>
            <TextInput
              style={{height: 35, width: 80}}              
              placeholder="ZIP Here"
              multiline = {false}
              maxLength = {5}
              onChangeText={(text_zip) => this.setState({text_zip})}
            />              
          </View>  
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Phone Number   </Text>
            <TextInput
              style={{height: 35, width: 200}}              
              placeholder="Type Phone Number Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_phone) => this.setState({text_phone})}
            />         
          </View>  
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Driver’s License Number  </Text>
            <TextInput
              style={{height: 35, width: 180}}              
              placeholder="Type License Number Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_license) => this.setState({text_license})}
            />         
          </View>   
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>License’s State  </Text>
            <TextInput
              style={{height: 35, width: 180}}              
              placeholder="Type License’s State Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_licenseState) => this.setState({text_licenseState})}
            />         
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Date of Violation  </Text>
            <TextInput
              style={{height: 35, width: 180}}              
              placeholder="Type Violations’s Date Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_date) => this.setState({text_date})}
            />         
          </View>    
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Citation Number  </Text>
            <TextInput
              style={{height: 35, width: 180}}              
              placeholder="Type Citation Number Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_date) => this.setState({text_citation})}
            />         
          </View> 


        </View>   
      </View>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    color: '#FFFFFF',
  },
  instructions: {
    textAlign: 'left',
    color: 'black',
    marginBottom: 5,
  },
  instructionsInput: {    
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',
    marginBottom: 5,
  },  
});
