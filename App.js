import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import CardView from './components/CardView';
import Saladas from './components/saladas';
import Sobremesas from './components/Sobremesas';
import Sopas from './components/Sopas';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Change App Culinaria CES JF.
        </Text>
        <Card>
          <CardView />
        </Card>
        <Card>
          <Saladas />
        </Card>
        <Card>
          <Sobremesas />
        </Card>
        <Card>
          <Sopas />
        </Card>
        <Card>
          <CardView />
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
