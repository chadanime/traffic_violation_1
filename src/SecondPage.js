import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  RecyclerViewBackedScrollView,
  ListView,
  Platform,
} from 'react-native';

import {KeyboardAwareScrollView, KeyboardAwareListView} from 'react-native-keyboard-aware-scrollview'

import SectionedMultiSelect from 'react-native-sectioned-multi-select';

const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
const instructions = Platform.select({
  ios: 'Coca-Cola Refreshments requires that all associates who drive company vehicles notify their supervisor of any moving traffic violations/citations, including those that occurred in a personal vehicle, no later than the beginning of the next scheduled work day.',
  android:
    'Coca-Cola Refreshments requires that all associates who drive company vehicles notify their supervisor of any moving traffic violations/citations, including those that occurred in a personal vehicle, no later than the beginning of the next scheduled work day.',
});

const items = [{
  id: 'Personal',
  name: 'Personal Vehicle',
}, {
  id: 'Commercial',
  name: 'Commercial (10,001 or more)',
}, {
  id: 'Other',
  name: 'Other',
}]; 

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

    this.state = {listToggle: false, dataSource: ds.cloneWithRows(this._genRows({}))};
    this.state = {
      selectedItems: [],
    }        
  }

  static navigationOptions = {
    title: "     Notification of Traffic Violation",
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: 'black',
    },
  }//end of navigationOption

  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  }

  _genRows(pressData) {
    const dataBlob = [];
    for (var ii = 0; ii < 10; ii++) {
      var pressedText = pressData[ii] ? ' (pressed)' : '';
      dataBlob.push('Row ' + ii + pressedText);
    }
    return dataBlob;
  }

  _renderRow(rowData, sectionID, rowID) {
    var rowHash = Math.abs(hashCode(rowData));
    return (
      <TouchableHighlight>
        <View>
          <View style={styles.row}>
            <Text style={styles.text}>
              {rowData + ' - ' + LOREM_IPSUM.substr(0, rowHash % 301 + 10)}
            </Text>
          </View>
          <View style={{backgroundColor: '#FF00FF'}}>
            <TextInput style={[styles.textInput, {margin: 10, borderWidth: 0.5}]} placeholder={'Text goes here'}/>
          </View>
        </View>
      </TouchableHighlight>
    );
  }

  _renderKeyboardAwareListView() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.topButton}
                            activeOpacity={0.9}
                            underlayColor="#FF00FF"
                            onPress={() => this.setState({listToggle: !this.state.listToggle})}
        >
          <Text>Switch to ScrollView</Text>
        </TouchableHighlight>
        <KeyboardAwareListView keyboardDismissMode="interactive"
                               keyboardShouldPersistTaps={"always"}
                               dataSource={this.state.dataSource}
                               renderRow={this._renderRow}
                               renderScrollComponent={props => <RecyclerViewBackedScrollView {...props} />}
                               renderSeparator={(sectionID, rowID) => <View key={`${sectionID}-${rowID}`} style={styles.separator} />}
        />
      </View>
    );
  }

  _renderKeyboardAwareScrollView() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.topButton}
                            activeOpacity={0.9}
                            underlayColor="#FF00FF"
                            onPress={() => this.setState({listToggle: !this.state.listToggle})}
        >
          <Text>Switch to ListView</Text>
        </TouchableHighlight>
        <KeyboardAwareScrollView keyboardDismissMode="interactive"
                                 keyboardShouldPersistTaps={"always"}
                                 getTextInputRefs={() => {
                                   return [this._firstNameTI, this._lastNameTI, this._countryTI, this._stateTI, this._addrTI, this._emailTI, this._msgTI, this._notesTI];
                                 }}
        >
          <Text style={styles.instructions}>{instructions}</Text>  

          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Driver's Full Name   </Text>

            <TextInput               
                style={styles.textInput}              
                placeholder="Type Driver's Name Here"
                maxLength = {30}
                onChangeText={(text_driver) => this.setState({text_driver})}
                />       
          </View> 
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Driver's Address   </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type Driver's Address Here"
              multiline = {false}
              maxLength = {30}
              onChangeText={(text_address) => this.setState({text_address})}
            />         
          </View> 







          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>City  </Text>
            <TextInput
              style={styles.textInput}
              placeholder="City Here"
              multiline = {false}
              maxLength = {15}
              onChangeText={(text_city) => this.setState({text_city})}
            />              
            <Text style={styles.instructionsInput}> State  </Text>
            <TextInput
              style={styles.textInput}
              placeholder="State"
              multiline = {false}
              maxLength = {2}
              onChangeText={(text_state) => this.setState({text_state})}
            />  
            <Text style={styles.instructionsInput}>  ZIP </Text>
            <TextInput
              style={styles.textInput}
              placeholder="ZIP Here"
              multiline = {false}
              maxLength = {5}
              onChangeText={(text_zip) => this.setState({text_zip})}
            />              
          </View>  
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Phone Number   </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type Phone Number Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_phone) => this.setState({text_phone})}
            />         
          </View>  
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Driver’s License Number  </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type License Number Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_license) => this.setState({text_license})}
            />         
          </View>   
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>License’s State  </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type License’s State Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_licenseState) => this.setState({text_licenseState})}
            />         
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Date of Violation  </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type Violations’s Date Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_date) => this.setState({text_date})}
            />         
          </View>    
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Citation Number  </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Type Citation Number Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_date) => this.setState({text_citation})}
            />         
          </View> 
     


          <SectionedMultiSelect
            items={items} 
            uniqueKey='id'          
            selectText='Vehicle Operated (check one):'
            showDropDowns={true}
            readOnlyHeadings={false}
            single={true}          
            onSelectedItemsChange={this.onSelectedItemsChange}          
            selectedItems={this.state.selectedItems}
          />                    


          <TextInput style={styles.textInput} keyboardType="email-address" placeholder={'Email'} ref={(r) => { this._emailTI = r; }}
                     returnKeyType={'next'} onSubmitEditing={(event) => this._msgTI.focus()}/>
          <TextInput style={styles.textInput} placeholder={'Message'} ref={(r) => { this._msgTI = r; }} returnKeyType={'next'}
                     onSubmitEditing={(event) => this._notesTI.focus()}/>
          <TextInput style={styles.textInput} placeholder={'Notes'} ref={(r) => { this._notesTI = r; }} returnKeyType={'go'}/>
        </KeyboardAwareScrollView>
      </View>
    );
  }

  render() {
    if (this.state.listToggle) {
      return this._renderKeyboardAwareListView();
    }
    else {
      return this._renderKeyboardAwareScrollView();
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',  
    borderWidth: 15,
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
    margin: 5,
    height: 40,
    marginTop: 15,
  },   
  mainTitle: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center'
  },
  textInput: {
    height: 40,
    width: 180,    
    margin: 5,
    paddingLeft: 10,
    fontSize: 12,
    lineHeight: 40,
    backgroundColor: 'white',
    borderWidth: 0,
    borderRadius: 4
  },
  topButton: {
    alignItems: 'center',
    marginBottom: 5
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#FFFFFF'
  },
  separator: {
    height: 1,
    backgroundColor: '#FFFFFF'
  },
  thumb: {
    width: 64,
    height: 64
  },
  text: {
    flex: 1
  }
});

var hashCode = function(str) {
  var hash = 15;
  for (var ii = str.length - 1; ii >= 0; ii--) {
    hash = ((hash << 5) - hash) + str.charCodeAt(ii);
  }
  return hash;
};