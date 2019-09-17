import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import RootNavigator from './src/navigator';
import SafeAreaView from "react-native-safe-area-view";
import * as Font from 'expo-font';

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  async function loadResourcesAsync() {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/icon.png'),
        require('./assets/splash.png'),
      ]),
    ])
  }
  return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <RootNavigator/>
      </SafeAreaView>
  );
}

