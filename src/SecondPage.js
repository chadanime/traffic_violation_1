import React, {Component} from 'react';
import {
  StyleSheet,
  TextInput,
  Text,
  View,
  TouchableHighlight,
  ListView,
  Platform,
} from 'react-native';
import { Button } from 'react-native-elements';
import {KeyboardAwareScrollView, KeyboardAwareListView} from 'react-native-keyboard-aware-scrollview'

import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import Icon from 'react-native-vector-icons/FontAwesome';
import { WebView } from 'react-native';


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
    headerTitle: 'Notification of Traffic Violation',
    headerTintColor: '#FFFFFF',
    headerStyle: {
      backgroundColor: '#fe001a'
    },
    headerTitleStyle: {
      flex: 1,
      alignSelf: 'center',
      textAlign: 'center'
    }
  }

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
      <View style={styles.containerFullScreen}>
        <KeyboardAwareScrollView keyboardDismissMode="interactive"
                                 keyboardShouldPersistTaps={"always"}
                                 getTextInputRefs={() => {
                                   return [this._firstNameTI, this._lastNameTI, this._countryTI, this._stateTI, this._addrTI, this._emailTI, this._msgTI, this._notesTI];
                                 }}
        >          
          <WebView
            source={{ 
              html: 
              "<style>p{text-align:justify;font-size:14;font-family:Open Sans}</style>"+
              "<p>" + 
              "Coca-Cola Refreshments requires that all associates who drive company vehicles notify their supervisor of any moving traffic violations/citations, including those that occurred in a personal vehicle, no later than the beginning of the next scheduled work day"+
              "</p>"
            }}
            style={{height:90, width: this.screenWidth, paddingBottom: 0, padding: 0, backgroundColor: 'transparent'}}
          /> 
          <View style={styles.container}>
            <View style={{flex: 1, width: 270, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.instructionsInput}>Driver's Full Name   </Text>
                <Text style={styles.instructionsInput}>Driver's Address   </Text>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <TextInput               
                    style={styles.textInput}              
                    placeholder="Type Driver's Name Here"
                    maxLength = {30}
                    onChangeText={(text_driver) => this.setState({text_driver})}
                    />             
                <TextInput
                  style={styles.textInput}
                  placeholder="Type Driver's Address Here"
                  multiline = {false}
                  maxLength = {30}
                  onChangeText={(text_address) => this.setState({text_address})}
                />  
              </View>            
            </View>
            <View style={{flex: 1, width: 270, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={styles.instructionsInput}>City  </Text>
                  <TextInput
                    style={styles.textInputSmall}
                    placeholder="City Here"
                    multiline = {false}
                    maxLength = {15}
                    onChangeText={(text_city) => this.setState({text_city})}
                  />              
                </View>                       
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{width: 100, flexDirection: 'row'}}>
                    <Text style={styles.instructionsInput}>State</Text>
                  </View>     
                  <View style={{flex: 1, flexDirection: 'row'}}>         
                    <TextInput
                      style={styles.textInputSmall}
                      placeholder="State Here"
                      multiline = {false}
                      maxLength = {2}
                      onChangeText={(text_state) => this.setState({text_state})}
                    />             
                  </View>
                </View> 
                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-end'}}>
                </View>             
              </View>
            </View>
            <View style={{flex: 1, width: 270, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                 <Text style={styles.instructionsInput}>ZIP   </Text>
                  <TextInput
                    style={styles.textInputSmall}
                    placeholder="ZIP Here"
                    multiline = {false}
                    maxLength = {5}
                    onChangeText={(text_zip) => this.setState({text_zip})}
                  />                
                </View>
              </View> 
              <View style={{flex: 1, flexDirection: 'column'}}>
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <Text style={styles.instructionsInput}>Phone Number  </Text>
                  <TextInput
                    style={styles.textInputSmall}
                    placeholder="Phone Here"
                    multiline = {false}
                    maxLength = {10}
                    onChangeText={(text_phone) => this.setState({text_phone})}
                  />                 
                </View>
              </View>                     
            </View>

            <View style={{flex: 1, width: 270, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.instructionsInput}>Driver’s License Number  </Text>
                <Text style={styles.instructionsInput}>License’s State  </Text>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}> 
                <TextInput
                  style={styles.textInput}
                  placeholder="Type License Number Here"
                  multiline = {false}
                  maxLength = {10}
                  onChangeText={(text_license) => this.setState({text_license})}
                />   
                <TextInput
                  style={styles.textInput}
                  placeholder="Type License’s State Here"
                  multiline = {false}
                  maxLength = {10}
                  onChangeText={(text_licenseState) => this.setState({text_licenseState})}
                />                                                  
              </View>
            </View> 
            <View style={{flex: 1, width: 270, flexDirection: 'row'}}>
              <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={styles.instructionsInput}>Date of Violation  </Text>
                <Text style={styles.instructionsInput}>Citation Number  </Text>            
              </View>  
              <View style={{flex: 1, flexDirection: 'column'}}> 
                <TextInput
                  style={styles.textInputNOTOP}
                  placeholder="Type Violations’s Date Here"
                  multiline = {false}
                  maxLength = {10}
                  onChangeText={(text_date) => this.setState({text_date})}
                />      
                <TextInput
                  style={styles.textInput}
                  placeholder="Type Citation Number Here"
                  multiline = {false}
                  maxLength = {10}
                  onChangeText={(text_citation) => this.setState({text_citation})}
                />             
              </View> 
            </View>

            <View style={{flex: 1, flexDirection: 'column'}}> 
            </View>


            <View style={styles.containerMulti}>
              <SectionedMultiSelect                  
                items={items} 
                uniqueKey='id'                
                searchPlaceholderText='Please Choose Only One'
                selectText='    Vehicle Operated (check one):'
                showDropDowns={true}
                readOnlyHeadings={false}              
                single={true}          
                colors={{text:'black', 
                         primary:'white', 
                         selectToggleTextColor:'white', 
                         searchPlaceholderTextColor:'gray',
                       }}
                onSelectedItemsChange={this.onSelectedItemsChange}          
                selectedItems={this.state.selectedItems}
              />                    
            </View> 

            <View style={{flex: 1, width: 270, flexDirection: 'row'}}>
             <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.instructionsInput}>Please Describe   </Text>
              <Text style={styles.instructionsInput}>Location of Offense (City/Town/County)  </Text>
             </View>
             <View style={{flex: 1, flexDirection: 'column'}}>
              <TextInput
                style={styles.textInput}
                placeholder="Description Here"
                maxLength = {60}
                onChangeText={(text_description) => this.setState({text_description})}
              />   
              <TextInput
                style={styles.textInput}
                placeholder="Location of Offense Here"
                multiline = {false}
                maxLength = {30}
                onChangeText={(text_location) => this.setState({text_location})}
              />                                           
             </View>
              
            </View>   
     
            <View style={{flex: 1, width: 270, flexDirection: 'row'}}>
             <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.instructionsInput}>State  </Text>
              <Text style={styles.instructionsInput}>Nature of Violation   </Text>           
             </View>
             <View style={{flex: 1, flexDirection: 'column'}}>
              <TextInput
                style={styles.textInput}
                placeholder="State Here"
                multiline = {false}
                maxLength = {2}
                onChangeText={(text_ofensestate) => this.setState({text_ofensestate})}
              />   
              <TextInput
                style={styles.textInput}
                placeholder="Type Nature of Violation Here"
                multiline = {false}
                maxLength = {30}
                onChangeText={(text_nature) => this.setState({text_nature})}
              />             
             </View>                      
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
                backgroundColor: "#fe001a",
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
                backgroundColor: "#fe001a",
                width: 280,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5,
                marginBottom: 20,
              }} 
            />    

            <View style={{flex: 1, width: 270, flexDirection: 'row'}}>
             <View style={{flex: 1, flexDirection: 'column'}}>
              <Text style={styles.instructionsInput}>Today’s Date:  </Text>
             </View>                                          
             <View style={{flex: 1, flexDirection: 'column'}}>
              <TextInput
                style={styles.textInput}             
                placeholder="Type Today’s Date Here"
                multiline = {false}
                maxLength = {10}
                onChangeText={(text_Tdate) => this.setState({text_Tdate})}
              />             
             </View>            
            </View>
            <View style={{flexDirection: 'row'}}>
              
         
            </View>      
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
    borderColor: 'white',  
    height: 40,  
    width:330,
  },  
  containerFullScreen: {
    flex: 1,
    backgroundColor: 'white',  
    borderWidth: 5,
    borderColor: 'white',
  },  
  container: {
    flex: 1,
    backgroundColor: 'white',      
    borderColor: 'white',
    borderWidth: 10,
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
    width: 100,    
    marginTop: 8,
    textAlign: 'center',    
  },  
  textInput: {
    height: 40,
    width: 200,    
    marginTop: 8,
    textAlign: 'center',
  },
  textInputNOTOP: {
    height: 40,
    width: 200,   
    marginTop: 4, 
    textAlign: 'center',
  },  
  contanerStyle: {
    height: 40,
    width: 220,
    textAlign: 'center',
  },
  textInput2: {
    height: 40,
    width: 340, 
    textAlign: 'center',
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
