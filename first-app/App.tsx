import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, } from 'react-native';


export default function App() {
  return (
    <View>
      <Text style={styles.welcomeTxt}> Welcome to my app!</Text>
      <Image style={styles.logo} source={require('./images/littleFella.png')}/>

<View></View>

      <Text style={styles.headingTxt}> Please enter your name</Text>

      <TextInput style={styles.inputTxt}  placeholder="Robert" />

      <Text style={styles.headingTxt}> Please enter your surname</Text>

      <TextInput style={styles.inputTxt} placeholder="Downey" />


<Button title = "Add user" />
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
    textDecorationLine: 'underline',

  },
  headingTxt: {
    paddingTop: 69,
    color: 'purple',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'auto', 
    textDecorationLine: 'underline', 
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
  

  },
  inputFlex: {
    flexDirection: 'row',
    marginTop:20 

  }
  
  
});
