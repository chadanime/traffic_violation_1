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
import { Button} from 'react-native-elements';
import {KeyboardAwareScrollView, KeyboardAwareListView} from 'react-native-keyboard-aware-scrollview'

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/FontAwesome';


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

    this.state = { text_description: ' ' };
    this.state = { text_location: ' '};    
    this.state = { text_ofensestate: ' '};
    this.state = { text_nature: ' '};
    this.state = { text_disposition: ' '};
    this.state = { text_Tdate: ' '};     

    this.state = {listToggle: false, dataSource: ds.cloneWithRows(this._genRows({}))};
    this.state = {
      selectedItems: [],
    }        
  }

  static navigationOptions = {
    title: "     Notification of Traffic Violation",
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#fe001a',
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

      </View>
    );
  }

  _renderKeyboardAwareScrollView() {
    return (
      <View style={styles.container}>
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
              style={styles.textInputSmall}
              placeholder="City Here"
              multiline = {false}
              maxLength = {15}
              onChangeText={(text_city) => this.setState({text_city})}
            />              
            <Text style={styles.instructionsInput}> State  </Text>
            <TextInput
              style={styles.textInputSmall}
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
              onChangeText={(text_citation) => this.setState({text_citation})}
            />         
          </View> 
     

          <View style={styles.containerMulti}>
            <SectionedMultiSelect
              style={styles.contanerStyle}      
              items={items} 
              uniqueKey='id'                
              searchPlaceholderText='Please Choose Only One'
              selectText='    Vehicle Operated (check one):'
              showDropDowns={true}
              readOnlyHeadings={false}              
              single={true}          
              onSelectedItemsChange={this.onSelectedItemsChange}          
              selectedItems={this.state.selectedItems}
            />                    
          </View> 

          <View style={{flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Please Describe   </Text>
            <TextInput
              style={styles.textInput}
              placeholder="Description Here"
              maxLength = {60}
              onChangeText={(text_description) => this.setState({text_description})}
            />         
          </View> 
          <View>
            <Text style={styles.instructionsInput2}>Location of Offense (City/Town/County)  </Text>
            <TextInput
              style={styles.textInput2}

              placeholder="Location of Offense Here"
              multiline = {false}
              maxLength = {30}
              onChangeText={(text_location) => this.setState({text_location})}
            />         
          </View>    
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>State  </Text>
            <TextInput
              style={styles.textInputSmall}
              placeholder="State Here"
              multiline = {false}
              maxLength = {2}
              onChangeText={(text_ofensestate) => this.setState({text_ofensestate})}
            />                          
        </View>     
        <View style={{ flexDirection: 'row'}}>
          <Text style={styles.instructionsInput}>Nature of Violation   </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Type Nature of Violation Here"
            multiline = {false}
            maxLength = {30}
            onChangeText={(text_nature) => this.setState({text_nature})}
          />         
        </View>
        <View>
          <Text style={styles.instructionsInput}>Disposition of Case (bail forfeiture, conviction with fine, loss of license, etc.)  </Text>                
          <TextInput
            style={styles.textInput2}
            placeholder="Type Information Here"
            multiline = {false}
            maxLength = {60}
            onChangeText={(text_disposition) => this.setState({text_disposition})}
          />          
        </View>

        <View>           
          <Text style={styles.instructionsInput}>Driver’s Signature:  </Text>
          <Button
            title='Press To Write Driver’s Signature'
            buttonStyle={{
              backgroundColor: "black",
              width: 280,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              marginBottom: 20,
            }} 
          />                                                 
          <Text style={styles.instructionsInput}>Supervisor Signature:  </Text>
          <Button              
            title="Press To Write Supervisor Signature"
            buttonStyle={{
              backgroundColor: "black",
              width: 280,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5,
              marginBottom: 20,
            }} 
          />                                                
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.instructionsInput}>Today’s Date:  </Text>
            <TextInput
              style={styles.textInput}             
              placeholder="Type Today’s Date Here"
              multiline = {false}
              maxLength = {10}
              onChangeText={(text_Tdate) => this.setState({text_Tdate})}
            />         
          </View>              
        </View> 



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
  containerMulti: {
    flex: 1,
    backgroundColor: '#fe001a',  
    borderWidth: 15,
    borderColor: 'white',
    borderRadius: 100/2,
    color: 'white',
  },  
  container: {
    flex: 1,
    backgroundColor: 'white',  
    borderWidth: 15,
    borderColor: 'white',
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
    height: 40,
    marginTop: 15,
  },   
  instructionsInput2: {    
    fontWeight: 'bold',
    textAlign: 'left',
    color: 'black',    
    height: 25,
    marginTop: 15,
  },   
  mainTitle: {
    fontSize: 20,
    marginTop: 10,
    textAlign: 'center'
  },
  textInputSmall: {
    height: 40,
    width: 80,        
  },  
  textInput: {
    height: 40,
    width: 220,    
  },
  contanerStyle: {
    height: 40,
    width: 220,
    textAlign: 'center',    
  },  
  textInput2: {
    height: 40,
    width: 320, 
    marginBottom: 20
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