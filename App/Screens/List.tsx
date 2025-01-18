import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { HealthItem } from '../types';

interface HealthListProps {
  onItemPress: () => void;
}

const HealthList: React.FC<HealthListProps> = ({ onItemPress }) => {
  const [healthItems, setHealthItems] = useState<HealthItem[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch health data from API
  useEffect(() => {
    const fetchHealthData = async () => {
      try {
        const response = await axios.get('https://api.sampleapis.com/health/health');
        const items = response.data.map((entry: any) => ({
          title: entry.title,
          description: entry.description,
          status: entry.status ? 'Available' : 'Unavailable',
          image: entry.image || 'https://via.placeholder.com/150',
        }));
        setHealthItems(items);
      } catch (error) {
        console.error('Error fetching health data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHealthData();
  }, []);

  const renderHealthItem = ({ item }: { item: HealthItem }) => (
    <TouchableOpacity style={styles.itemContainer} onPress={onItemPress}>
      <Image source={{ uri: item.image }} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemDescription}>{item.description}</Text>
      <Text style={styles.itemStatus}>{item.status}</Text>
    </TouchableOpacity>
  );

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading health data...</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={healthItems}
      renderItem={renderHealthItem}
      keyExtractor={(item, index) => index.toString()}
      contentContainerStyle={styles.listContainer}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 10,
  },
  itemContainer: {
    marginBottom: 20,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    elevation: 2,
  },
  itemImage: {
    width: 300,
    height: 200,
    borderRadius: 5,
  },
  itemTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  itemStatus: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HealthList;