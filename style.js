'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  data: {
    textAlign: 'center',
  },
  input: {
   height: 40,
   borderColor: 'gray',
   borderWidth: 1,
   width: 200,
   marginTop : 20,
   marginBottom : 20
  },
 boxButton: {
     marginBottom : 20
 },
});