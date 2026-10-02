import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  // สร้าง State สำหรับเก็บข้อความที่พิมพ์ และข้อความที่จะแสดงตอนกดปุ่ม
  const [name, setName] = useState('');
  const [hello_name, SetHello_name] = useState('');


  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>hello</Text>
      
      <View style={styles.inputRow}>

        <TextInput
          style={styles.textInput}
          placeholder="name"
          value={name}
          onChangeText={setName}
        />
        
        <TouchableOpacity style={styles.helloButton} onPress={() => SetHello_name(`hello ${name}`)}>
          <Text style={styles.buttonText}>Hello</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.resultText}>{hello_name}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    width: 200,
    marginRight: 10,
    fontSize: 16,
  },
  helloButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  resultText: {
    fontSize: 20,
    color: '#333',
    minHeight: 30, 
  },
});