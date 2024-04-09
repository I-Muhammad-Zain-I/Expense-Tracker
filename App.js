import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';
import AllExpense from './src/screens/AllExpense';
import Settings from './src/screens/Settings';
import AddExpense from './src/screens/AddExpense';
import BottonTabWrapper from './src/components/UI/BottomTabWrapper';
import TabBarIcon from './src/components/tabBar/TabBarIcon';
import ImportantExpense from './src/screens/ImportantExpense';

import { Provider } from 'react-redux';
import store from './src/store/store';


const Tabs = createBottomTabNavigator();

const screenOpt = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 50,
    backgroundColor: '#fdfdfd',

  },

  tabBarActiveTintColor: '#4C8CF4'
}

export default function App() {
  return (
      <Provider store={store}>
      <NavigationContainer>
        <Tabs.Navigator
          screenOptions={screenOpt}
          sceneContainerStyle={{ backgroundColor: "white" }}
        >
          <Tabs.Screen name='Home' component={Home}
            options={{
              tabBarButton: (props) => (<BottonTabWrapper {...props} route={"Home"} />),
              tabBarIcon: ({ focused, color, size }) => (
                <TabBarIcon
                  focused={focused}
                  size={size}
                  color={color}
                  text={"Home"}
                  icon={'home'}
                />
              )
            }}
          />
          <Tabs.Screen name='All Expense' component={AddExpense}
            options={{
              tabBarButton: (props) => (<BottonTabWrapper {...props} route={"All Expense"} />),
              tabBarIcon: ({ focused, color, size }) => (
                <TabBarIcon
                  focused={focused}
                  size={size}
                  color={color}
                  text={"Expense"}
                  icon={'list'}
                />
              )
            }}
          />
          <Tabs.Screen name='Add Expense' component={AllExpense}
            options={{
              tabBarButton: (props) => (<BottonTabWrapper {...props} route={"Add Expense"} />),
              tabBarIcon: ({ focused, color, size }) => (
                <TabBarIcon
                  focused={focused}
                  size={size}
                  color={color}
                  text={"New Expense"}
                  icon={'add-circle'}
                />
              )
            }}
          />
          <Tabs.Screen name='Important Transaction' component={ImportantExpense}
            options={{
              tabBarButton: (props) => (<BottonTabWrapper {...props} route={"Important Transaction"} />),
              tabBarIcon: ({ focused, color, size }) => (
                <TabBarIcon
                  focused={focused}
                  size={size}
                  color={color}
                  text={"Important"}
                  icon={'star'}
                />
              )
            }}
          />
          <Tabs.Screen name='Settings' component={Settings}
            options={{
              tabBarButton: (props) => (<BottonTabWrapper {...props} route={"Settings"} />),
              tabBarIcon: ({ focused, color, size }) => (
                <TabBarIcon
                  focused={focused}
                  size={size}
                  color={color}
                  text={"Settings"}
                  icon={'settings'}
                />
              )
            }}
          />

        </Tabs.Navigator>
      </NavigationContainer>
      </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
