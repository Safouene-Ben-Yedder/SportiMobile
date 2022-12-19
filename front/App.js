import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native'


import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
const Stack = createStackNavigator();

import Post from './components/Defi/Post';
import Get from './components/Defi/Get';
import Detail from './components/Defi/Detail'


function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

     <Image style={{
            height: 100,
            width: 100
          }} source={require('./assets/Logo.png')} />


      <Text>Welcome To Sporti Application</Text>
      
    </View>
  );
}

function CRUDSeanceScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Liste des seances</Text>
    </View>
  );
}


function CRUDEventScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text> Liste des Evenements</Text>
    </View>
  );
}

function CRUDDefiScreen() {
  return (
    <Stack.Navigator
   >
    <Stack.Screen
      name="Get"
      component={Get}
      options={({ navigation, route }) => ({
        title: 'CRUD Defi',
        headerRight: () => (
          <Ionicons
            name={'ios-add-circle'}
            size={25}
            color={'white'}
            style={{ marginRight: 15 }}
            onPress={() => navigation.navigate('Post')}
          />
        ),
      })}
    />
    <Stack.Screen name="Post" component={Post} />
    <Stack.Screen name="Detail" component={Detail} />
  </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Liste des Seances" component={CRUDSeanceScreen} />
        <Tab.Screen name="Liste des Defis" component={CRUDDefiScreen} />
        <Tab.Screen name="Liste des Evenements" component={CRUDEventScreen} />  
      </Tab.Navigator>
    </NavigationContainer>



  );
}