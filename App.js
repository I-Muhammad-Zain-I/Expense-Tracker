import { StatusBar } from 'expo-status-bar';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './src/screens/Home';
import AllTransaction from './src/screens/AllTransaction';
import ImportantTransaction from './src/screens/ImportantTransaction';
import Settings from './src/screens/Settings';
import AddTransaction from './src/screens/AddTransaction';
import Ionicons from '@expo/vector-icons/Ionicons'
import BottonTabWrapper from './src/components/UI/BottomTabWrapper';
import TabBarIcon from './src/components/tabBar/TabBarIcon';
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
    background: '#fff'
  }
}

export default function App() {
  return (
    <NavigationContainer>
      <Tabs.Navigator screenOptions={screenOpt}>
        <Tabs.Screen name='Home' component={Home}
          options={{
            tabBarButton: (props) =>( <BottonTabWrapper {...props} route={"Home"}/>),

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
        <Tabs.Screen name='All Transactions' component={AllTransaction}
          options={{
            tabBarButton: (props) =>( <BottonTabWrapper {...props} route={"All Transactions"}/>),

            tabBarIcon: ({ focused, color, size }) => (
              <TabBarIcon 
                focused={focused}
                size={size}
                color={color}
                text={"Transactions"}
                icon={'list'}
              />
            )
          }}
        />
        <Tabs.Screen name='Add Transaction' component={AddTransaction}
          options={{
            tabBarButton: (props) =>( <BottonTabWrapper {...props} route={"Add Transaction"}/>),
            tabBarIcon: ({ focused, color, size }) => (
              // <View style={{
              //   // top: Platform.OS == 'ios' ? -20 : -30,
              //   width: Platform.OS == 'ios' ? 50 : 60,
              //   height: Platform.OS == 'ios' ? 50 : 60,
              //   borderRadius: Platform.OS == 'ios' ? 25 : 30,
              //   alignItems: 'center',
              //   justifyContent: 'center'
              // }}>
                <Ionicons name={"add-circle"} size={40} color={focused ? "red" : "green"} />
              // </View>
            )
          }}
        />
        <Tabs.Screen name='Important Transaction' component={ImportantTransaction}
          options={{
            tabBarButton: (props) =>( <BottonTabWrapper {...props} route={"Important Transaction"}/>),
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
            tabBarButton: (props) =>( <BottonTabWrapper {...props} route={"Settings"}/>),
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
