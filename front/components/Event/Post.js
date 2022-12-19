import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Constants from 'expo-constants';

export default function Post() {
  const [event, setEvent] = useState({
    nom: '',
    date: '',
    description: '',
    publique: '',
  });

  const [loading, setLoading] = useState(false);

  const onChangeNom = (value) => {
    setEvent({ ...event, nom: value });
  };

  const onChangedate = (value) => {
    setEvent({ ...event, date: value });
  };

  const onChangeDescription = (value) => {
    setEvent({ ...event, description: value });
  };

  const onChangePublique = (value) => {
    setEvent({ ...event, publique: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://res.cloudinary.com/dlnxy723j/raw/upload/v1669580948/files/event_pym7xw.json', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        nom: event.nom,
        date: event.date,
        description: event.description,
        publique: event.publique,
      }),
    })
      .then((response) => {
        setLoading(false)
        response.text();
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
       <TextInput
        placeholder={'Nom'}
        onChangeText={(value) => onChangeNom(value)}
        style={styles.input}
        value={event.nom}
      />
      <TextInput
        placeholder={'Date'}
        onChangeText={(value) => onChangeDate(value)}
        style={styles.input}
        value={event.date}
      />
      <TextInput
        placeholder={'Description'}
        onChangeText={(value) => onChangeDescription(value)}
        style={styles.input}
        value={event.description}
      />
      <TextInput
        placeholder={'Publique'}
        onChangeText={(value) => onChangePublique(value)}
        style={styles.input}
        value={event.publique}
      />

      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: 'blue', padding: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}>
            {loading ? 'Menyimpan...' : 'Ajouter'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    margin: 15,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});
