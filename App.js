import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DoctorListScreen from './src/screens/DoctorListScreen';
import DoctorDetailScreen from './src/screens/DoctorDetailScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="DoctorList" 
          component={DoctorListScreen} 
          options={{ title: 'Manage Doctors' }} 
        />
        <Stack.Screen 
          name="DoctorDetail" 
          component={DoctorDetailScreen} 
          options={{ title: 'Doctor Details' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;