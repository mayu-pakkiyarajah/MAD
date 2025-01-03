import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
}

from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";


type RootParamList = {
  Login: undefined;
  Signup: undefined;
};

export default function SignupScreen() {

  const navigation = useNavigation<NavigationProp<RootParamList>>();

  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        style={styles.backgroundImage}
        source={require("../../assets/images/background.png")}
      />

      {/* Lights */}
      <View style={styles.overlayContainer}>
        <Image
          style={styles.lightImage1}
          source={require("../../assets/images/light.png")}
        />
        <Image
          style={styles.lightImage2}
          source={require("../../assets/images/light.png")}
        />
      </View>

      {/* Title and Forms */}
      <View style={styles.formContainer}>
        {/* Title */}
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Sign Up</Text>
          <Text style={styles.titleText1}>Create user account to get</Text>
          <Text style={styles.titleText1}>Health Service!</Text>
        </View>

        {/* Form */}
        <View style={styles.inputContainer}>
          <View></View>
          <TextInput
            style={styles.input}
            placeholder="User name"
            placeholderTextColor="darkgray"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="gray"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.loginButton}>
              <Text style={styles.loginButtonText}>SignUp</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.signUpContainer}>
            <Text style={styles.signUpText}>Already have an Account</Text>
            <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
              <Text style={styles.signUpLink}>LogIn</Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlayContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
  },
  lightImage1: {
    height: 225,
    width: 90,
  },
  lightImage2: {
    height: 160,
    width: 65,
  },
  formContainer: {
    flex: 1,
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 10,
    paddingHorizontal: 20,
    
  },
  titleContainer: {
    alignItems: "stretch",
    marginBottom: 40,
    marginTop: 90,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: 1.5,
  },
  titleText1: {
    color: "white",
    // fontWeight: "bold",
    fontSize: 17,
    letterSpacing: 1.5,
  },
  inputContainer: {
    marginTop: 10,
  },
  input: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: "#38BDF8",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  loginButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
  signUpContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  signUpText: {
    fontSize: 16,
    marginRight: 5,
  },
  signUpLink: {
    color: "#38BDF8",
    fontSize: 16,
    fontWeight: "bold",
  },
});
