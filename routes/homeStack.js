import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from '../shared/header';

const Stack = createStackNavigator();

function HomeStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
        options={({navigation})=>{
          return{
            headerTitle:()=><Header navigation={navigation} title='GameZone' />
          }
        }} />
        <Stack.Screen name="Details" component={ReviewDetails} />
      </Stack.Navigator>
    );
  }
export default HomeStack;