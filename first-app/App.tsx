import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image } from 'react-native';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  View: {
    NameSend: string;
    SurnameSend: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type ViewDetailProps = NativeStackScreenProps<RootStackParamList, 'View'>;

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="View" component={ViewDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }: MainScreenProps) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  console.log("App works!");

  return (
    <View>
      <Text style={styles.welcomeTxt}> Welcome to my app!</Text>
      <Image style={styles.logo} source={require('./images/littleFella.png')} />

      <View style={styles.inputFlex}>

        <Text style={styles.headingTxt}> Please enter your name</Text>

        <TextInput
          style={styles.inputTxt}
          placeholder="Robert"
          onChangeText={newText => setName(newText)}
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
        />

        <Text style={styles.headingTxt}> Please enter your surname</Text>

        <TextInput
          style={styles.inputTxt}
          placeholder="Downey"
          onChangeText={newText => setSurname(newText)}
          autoCapitalize="words"
          autoCorrect={false}
          keyboardType="default"
        />

      </View>

      <Button
        title="Add user"
        onPress={() => {
          navigation.navigate('View', { NameSend: name, SurnameSend: surname });
          console.log("Name: " + name + " Surname: " + surname);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

function ViewDetails({ route }: ViewDetailProps) {
  const nameGet = route.params.NameSend;
  const surnameGet = route.params.SurnameSend;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text> Name: {nameGet}; Surname: {surnameGet} </Text>
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
    marginTop: 20,
  },
});