import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Image, SafeAreaView, ScrollView, Animated } from 'react-native';
import { useState, useRef, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
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
        <Stack.Screen
          name="View"
          component={ViewDetails}
          options={{
            animation: 'fade', // screen-transition animation (try 'slide_from_right', 'flip' too)
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MainScreen({ navigation }: MainScreenProps) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [Error, setError] = useState(false);

  console.log("App works!");

  return (
    <View>
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.welcomeTxt}> Welcome to my app!</Text>
          <Image style={styles.logo} source={require('./images/littleFella.png')} />

          <FadeInView duration={3000}>
            <Text style={Error? styles.redText : styles.headingTxt }>{Error? "Please enter your info" : ""}</Text>
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
          </FadeInView>

          <Button
            title="Add user"
            onPress={() => {

if ((isEmpty(name)==false) && (isEmpty(surname)==false)) {
              

              navigation.navigate('View', { NameSend: name, SurnameSend: surname });
            setError(false);
            } else {
              setError(true);
            }} }/>

          <StatusBar style="auto" />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function ViewDetails({ route }: ViewDetailProps) {
  const NameGet = route.params.NameSend;
  const SurnameGet = route.params.SurnameSend;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* Same component, different duration/toValue — proves it's configurable */}
      <FadeInView duration={4000} toValue={1}>
        <Text> Name: {NameGet}; Surname: {SurnameGet} </Text>
      </FadeInView>
    </View>
  );
}

function isEmpty(value: any){
  return (value === null ) || 
  (value.hasOwnProperty('length') && value.length === 0) || 
  (value.constructor === Object && Object.keys(value).length === 0);
};

interface FadeInViewProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  duration?: number;
  toValue?: number;
}

const FadeInView = ({ children, style, duration = 4000, toValue = 1 }: FadeInViewProps) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue,
        duration,
        useNativeDriver: false,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration,
        useNativeDriver: false,
      }),
    ]).start();
  }, [fadeAnim, slideAnim, duration, toValue]);

  return (
    <Animated.View
      style={{
        ...(style as object),
        opacity: fadeAnim,
        transform: [{ translateY: slideAnim }],
      }}
    >
      {children}
    </Animated.View>
  );
};

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

redText: {
    color: 'red',
    fontSize: 21,
    fontWeight: 'bold',
    textAlign: 'center',
  },

});