import React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LandingScreen from '../Screens/LandingScreen';
import DetailScreen from '../Screens/DetailScreen';
import {RootStackParamList} from './types';
import {CartButton} from '../Components/CartButton';
import CartListScreen from '../Screens/CartListScreen';

const Stack = createStackNavigator<RootStackParamList>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen
          name="Landing"
          component={LandingScreen}
          options={({navigation}) => ({
            title: 'Fake Store',
            headerRight: () => <CartButton navigation={navigation} />,
          })}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerBackTitle: 'Back', // Custom back button title for Details screen
          }}
        />
        <Stack.Screen name="Cart" component={CartListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default StackNavigator;
