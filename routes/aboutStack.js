import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Header from '../shared/header';
import About from '../screens/About';

const Stack = createStackNavigator();

function AboutStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name='About' component={About}
        options={({navigation})=>{
          return{
            headerTitle:()=><Header navigation={navigation} title='About GameZone' />
          }
        }}/>
      </Stack.Navigator>
    );
  }

export default AboutStack;