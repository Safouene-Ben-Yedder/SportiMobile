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
  const [defi, setDefi] = useState({
    nom: '',
    objectif: '',
    description: '',
    lienVideo: '',
  });

  const [loading, setLoading] = useState(false);

  const onChangeNom = (value) => {
    setDefi({ ...defi, nom: value });
  };

  const onChangeObjectif = (value) => {
    setDefi({ ...defi, objectif: value });
  };

  const onChangeDescription = (value) => {
    setDefi({ ...defi, description: value });
  };

  const onChangeLienVideo = (value) => {
    setDefi({ ...defi, lienVideo: value });
  };

  const saveData = () => {
    setLoading(true);
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://res.cloudinary.com/dlnxy723j/raw/upload/v1669561452/files/defis_qjcchi.json', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        nom: defi.nom,
        objectif: defi.objectif,
        description: defi.description,
        lienVideo: defi.lienVideo,
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
        value={defi.nom}
      />
      <TextInput
        placeholder={'Objectif'}
        onChangeText={(value) => onChangeObjectif(value)}
        style={styles.input}
        value={defi.objectif}
      />
      <TextInput
        placeholder={'Description'}
        onChangeText={(value) => onChangeDescription(value)}
        style={styles.input}
        value={defi.description}
      />
      <TextInput
        placeholder={'Lien Video'}
        onChangeText={(value) => onChangeLienVideo(value)}
        style={styles.input}
        value={defi.lienVideo}
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
