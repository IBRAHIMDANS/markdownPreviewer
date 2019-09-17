import React from 'react';
import MarkDownScreen from './screens/MarkDown';
import HomeScreen from './screens/Home';
import {createAppContainer} from "react-navigation";
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const HomeStack = createStackNavigator({
    Home: {
        screen: HomeScreen,
    },
    MarkDown: {
        screen: MarkDownScreen,
    }
}, {
    initialRouteName: 'Home',
});

const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen,
    },
    MarkDown: {
        screen: MarkDownScreen
    }
}, {
    initialRouteName: 'Home',
});

const AppContainer = createAppContainer(HomeStack);

export default AppContainer;
