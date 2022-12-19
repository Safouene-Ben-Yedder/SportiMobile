//import liraries
import React, { Component, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// create a component
const Detail = ({ route, navigation }) => {
  const { item } = route.params;

  const [defi, setDefi] = useState({
    nom: item.nom,
    objectif: item.objectif,
    description: item.description,
    lienVideo: item.lienVideo,
  });

  const onChangeNom = (value) => {
    setDefi({ ...defi, nom: value });
  };

  const onChangeObjectif = (value) => {
    setDefi({ ...defi, objectif: value });
  };

  const onChangeDescription = (value) => {
    setDefi({ ...defi, description: value });
  };

  const onChangeLienVideo= (value) => {
    setDefi({ ...defi, lienVideo: value });
  };

  const updateData = () => {
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://res.cloudinary.com/dlnxy723j/raw/upload/v1669561452/files/defis_qjcchi.json/'+item.id, {
      method: 'PATCH',
      headers: myHeaders,
      body: JSON.stringify({
        nom: defi.nom,
        objectif: defi.objectif,
        description: defi.description,
        lienVideo: defi.lienVideo,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push('Get')
      })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const deleteData = () => {
    var myHeaders = new Headers();

    myHeaders.append(
      'Authorization',
      'Bearer 62ddfa7559d5fdec64517e3ab70ee4fd60b2244e71fa042a44f914f8fa688263'
    );

    myHeaders.append('Content-Type', 'application/json');

    fetch('https://res.cloudinary.com/dlnxy723j/raw/upload/v1669561452/files/defis_qjcchi.json/'+item.id, {
      method: 'DELETE',
      headers: myHeaders,
      body: JSON.stringify({
        nom: defi.nom,
        objectif: defi.objectif,
        description: defi.description,
        lienVideo: defi.lienVideo,
      }),
    })
      .then((response) => {
        response.text();
        navigation.push('Get')
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

      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={updateData}>
          <View style={{ backgroundColor: 'blue', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Update</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={deleteData}>
          <View style={{ backgroundColor: 'red', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Supprimer</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 5,
  },
});

//make this component available to the app
export default Detail;
