import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, } from 'react-native';
import { useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function App() {

const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>

<Stack.Navigator>

  <Stack.Screen name= "Home" component ={ MainScreen}/>

</Stack.Navigator>

    </NavigationContainer>
  );
}


  function MainScreen(){
  const [Name, setName] = useState('')
  const [Surname, setSurname] = useState('');

  console.log("App works!");

  return (
    
    <View>
      <Text style={styles.welcomeTxt}> Welcome to my app!</Text>
      <Image style={styles.logo} source={require('./images/littleFella.png')}/>

<View style={styles.inputFlex} >

      <Text style={styles.headingTxt}> Please enter your name</Text>

      <TextInput style={styles.inputTxt}  placeholder="Robert" 

      onChangeText={newText => setName(newText)}/>

      <Text style={styles.headingTxt}> Please enter your surname</Text>

      <TextInput style={styles.inputTxt} placeholder="Downey" 

       onChangeText={newText => setSurname(newText)}/>

      </View>
      


<Button
  title="Add user"
  onPress={() => (
    console.log("Name: " + Name + " Surname: " + Surname)
  )}
/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeTxt: {
    paddingTop: 67,
    color: 'teal',
    fontWeight: 'bold',
    fontSize: 21,
    textAlign: 'center',
    

  },
  headingTxt: {
    paddingTop: 69,
    color: 'purple',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'auto', 
    
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    paddingTop: 67,
    justifyContent: 'center',
  },
  inputTxt: {
    color: 'black',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'auto', 
    borderBottomWidth: 1,
  },
  inputFlex: {
   justifyContent: 'space-evenly',
    marginTop:20 

  }
  
  
});
