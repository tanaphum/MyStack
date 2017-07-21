/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  Alert,
  Button
} from 'react-native';

export default class App extends Component {
    constructor(props) {
    super(props);
    this.state = { text: '' ,
                    data : [
            {key: 'Apple'},
            {key: 'Ball'},
            {key: 'Cat'},
            {key: 'Devil'},
            {key: 'Fox'},
          ]
                };
  }
    _handlePress() {
    Alert.alert('Poping','Are you sure?',
        [
          {text: 'PoP', onPress: () => this.state.data.splice(0, 1)
          },
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed')},
        ],
        { cancelable: false }
      )
  }
    insertText = (text) =>{
            var joined = text.concat(this.state.data);
            this.setState({ data: joined })
    }
  render() {
    return (
      <View style={styles.container}>
              <TextInput
        style={styles.input}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />
      <View style={styles.boxButton}> 
          <Button onPress={() => this.state.data.join(this.state.text)}
                  title="push"
                  accessibilityLabel="push"
                />
         </View>
         <View style={styles.boxButton}> 
          <Button onPress={() => this._handlePress()}
                  title="pop"
                  accessibilityLabel="Learn more about button"
                />
      </View>
        <FlatList style={styles.data}
          data={this.state.data}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }

  
}

var styles = require('./style');

AppRegistry.registerComponent('App', () => App);
