import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, TextInput } from 'react-native';

function rand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


export default function App() {
  const [number, onChangeNumber] = React.useState('0');
  const [difficulty, onChangeDifficulty] = React.useState("50");
  const [gamenumber, onChangeGameNumber] = React.useState(rand(1, difficulty));

  return (
    <SafeAreaView>
      <Text style={styles.br} />

      <Button onPress={async () => {
        onChangeNumber('')
        onChangeGameNumber(rand(1, difficulty))
      }} title="Another" />

      {number == gamenumber ? (
        <View>
          <Text>GG trouvé</Text>


        </View>
      ) : (
        <View>

          <TextInput
            style={styles.input}
            onChangeText={onChangeNumber}
            value={number}
            placeholder="écris le nombre que tu pense"
            keyboardType="numeric"
          />

          <Text>Pas trouvée,force...</Text>

          {number > gamenumber ? (
            <View>
              <Text>Plus bas</Text>
            </View>
          ) : (
            <View>
              <Text>Plus haut</Text>
            </View>
          )}
        </View>
      )}


      <View>
        <Text>Changée de difficultée :</Text>
        <Button onPress={async () => {
          onChangeNumber('')
          onChangeDifficulty(50)
          onChangeGameNumber(rand(1, difficulty))
        }} title="Normal" />
        <Button onPress={async () => {
          onChangeNumber('')
          onChangeDifficulty(100)
          onChangeGameNumber(rand(1, difficulty))
        }} title="Hard" />
                <Button onPress={async () => {
          onChangeNumber('')
          onChangeDifficulty(999999)
          onChangeGameNumber(rand(1, difficulty))
        }} title="Impossible" />
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  red: {
    backgroundColor: "red"
  },
  pp: {
    width: 70,
    height: 70,
    backgroundColor: "grey",
    borderRadius: 100

  },
  br: {
    marginTop: 10
  },
  h1: {
    fontSize: 20,
    fontWeight: "bold",
    margin: 4
  },
  title: {
    marginLeft: 10,
    backgroundColor: "grey",
    padding: 3
  },
  soustitle: {
    marginTop: 10,
    marginLeft: 20,
    backgroundColor: "red",
    padding: 3
  }
});
