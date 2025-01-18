import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

type RootParamList = {
  Login: undefined;
  Signup: undefined;
  Dashboard: undefined;
};

type Credentials = {
  email: string;
  password: string;
};

const VALID_CREDENTIALS: Credentials[] = [
  { email: "mayu@gmail.com", password: "mayu@123" },
  { email: "admin@eduapp.com", password: "admin@123" },
];

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSignIn = () => {
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    const isValid = VALID_CREDENTIALS.some(
      (cred) =>
        cred.email === trimmedEmail && cred.password === trimmedPassword
    );

    if (isValid) {
      navigation.navigate("Dashboard"), { 
        username: trimmedEmail.split('@')[0] 
      }
    } else {
      setError("Invalid email or password");
      Alert.alert("Error", "Invalid email or password");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <StatusBar style="light" />
        <Image
          style={styles.backgroundImage}
          source={require("../../assets/images/background.png")}
        />

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

        <View style={styles.formContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>Welcome !!!</Text>
            <Text style={styles.titleText1}>We are ready to serve you</Text>
            <Text style={styles.titleText1}>the best Health Service!</Text>
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="gray"
              onChangeText={(text) => {
                setEmail(text);
                setError("");
              }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="gray"
              onChangeText={(text) => {
                setPassword(text);
                setError("");
              }}
              secureTextEntry
            />
            {error ? <Text style={styles.errorText}>{error}</Text> : null}

            <TouchableOpacity style={styles.loginButton} onPress={handleSignIn}>
              <Text style={styles.loginButtonText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.signUpContainer}>
              <Text style={styles.signUpText}>Don't have an Account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                <Text style={styles.signUpLink}>SignUp</Text>
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
    marginBottom: 50,
    marginTop: 40,
  },
  titleText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    letterSpacing: 1.5,
  },
  titleText1: {
    color: "white",
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
  errorText: {
    color: "red",
    fontSize: 14,
    marginBottom: 10,
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
