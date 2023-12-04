import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput} from 'react-native';

export default function App() {
  const [text, onChangeText] = React.useState('CLICK THE BUTTON UNDER ME');
  const [number, onChangeNumber] = React.useState('');
  return (
    <View style={styles.container}>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
       />
      <Button
        title="Press me"
        onPress={() => Alert.alert("BOO👻 🤪")}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  }
});
