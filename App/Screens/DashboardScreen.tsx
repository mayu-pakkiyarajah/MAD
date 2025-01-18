import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types';
import { useClickStore } from '../contexts/ClickStore';
import HealthList from '../Screens/List';


type DashboardScreenProps = NativeStackScreenProps<RootStackParamList, 'Dashboard'>;

const DashboardScreen: React.FC<DashboardScreenProps> = ({ route }) => {
  const { username } = route.params;
  const { clickCount, incrementClickCount } = useClickStore();

  const handleItemClick = () => {
    incrementClickCount();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome, {username}!</Text>
      <Text>Click Count: {clickCount}</Text>
      <HealthList onItemPress={handleItemClick} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default DashboardScreen;
