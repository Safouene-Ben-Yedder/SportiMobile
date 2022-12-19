//import liraries
import React, { Component, useEffect, useState } from 'react';


import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// create a component
const Get = ({ navigation }) => {
  const [event, setEvent] = useState();

  const getEventData = async () => {
    try {

      let response = await fetch("https://res.cloudinary.com/dlnxy723j/raw/upload/v1669580948/files/event_pym7xw.json");

      let json = await response.json();
      setEvent(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useState(() => {
    getEventData();
  }, []);

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={()=>navigation.navigate('Detail', {
        item: item
      })}>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
            padding: 5,
          }}>
          <Text style={{ fontWeight: 'bold' }}>{item.nom}</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={event}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
   // alignItems: 'center',
    backgroundColor: '#fff',
  },
});

//make this component available to the app
export default Get;
