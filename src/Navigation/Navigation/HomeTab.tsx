import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
  MaterialTopTabBar,
} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
import Home from '../../Screens/Home';
import MyTask from '../../Screens/Task/MyTask';
import TaskAssigned from '../../Screens/Task/TaskAssigned';
import Upload from '../../Screens/Upload';
import Messages from '../../Screens/Notification/Messages';
import Updates from '../../Screens/Notification/Updates';
import Profile from '../../Screens/Profile';

const NotificationScreen = createMaterialTopTabNavigator(
  {
    Messages: {
      screen: Messages,
      navigationOptions: {title: 'Messages'},
    },
    Updates: {
      screen: Updates,
      navigationOptions: {title: 'Updates'},
    },
  },
  {
    initialRouteName: 'Messages',
    tabBarComponent: props => (
      <SafeAreaView>
        <MaterialTopTabBar {...props} />
      </SafeAreaView>
    ),
  },
);

const TaskScreen = createMaterialTopTabNavigator(
  {
    MyTask: {
      screen: MyTask,
      navigationOptions: {title: 'My Tasks'},
    },
    TaskAssigned: {
      screen: TaskAssigned,
      navigationOptions: {title: 'Task Assigned'},
    },
  },
  {
    initialRouteName: 'MyTask',
    tabBarComponent: props => (
      <SafeAreaView>
        <MaterialTopTabBar {...props} />
      </SafeAreaView>
    ),
  },
);

const HomeTabNavigator = createBottomTabNavigator(
  {
    Home: Home,
    Task: TaskScreen,
    Upload: Upload,
    Notification: NotificationScreen,
    Profile: Profile,
  },
  {
    initialRouteName: 'Home',
  },
);

export default HomeTabNavigator;
