import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
    const [winner , SetWinner] = useState('-');
    const [player_1, SetPlayer_1] = useState('');
    const [player_2 , SetPlayer_2] = useState('');
    
  const Who_win = (player1:string,player2:string) => {

  let Who_win: string = '-';
    if (player1 === player2) {
        Who_win = 'No body win!!!'
    }
    else if(player1 === 'Rock' && player2 === 'scissor'){
        Who_win = 'player 1 Win!'
    }else if(player1 === 'paper' && player2 === 'Rock'){
        Who_win = 'player 1 Win!'
    }else if(player1 === 'scissor' && player2 === 'paper'){
        Who_win = 'player 1 Win!'
    }else {
        Who_win = 'player 2 Win!'
    }
  return Who_win;
 };


  return (
    <View style={styles.container}>

      <Text style={styles.titleText}>Rock,paper,scissor</Text>

       <View style={styles.Winner_Output}>
        <Text testID = 'Winner_Text' style={styles.player_Text}>{winner}</Text>
       </View>

      <Text style={styles.player_Text}>Player_1</Text>
      <View style={styles.inputRow}>
        
        <TouchableOpacity testID = 'P1_btn_Rock' style={styles.helloButton} onPress={() => SetPlayer_1(`Rock`)}>
          <Text style={styles.buttonText}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity testID = 'P1_btn_Paper'style={styles.helloButton} onPress={() => SetPlayer_1(`paper`)}>
          <Text style={styles.buttonText}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity testID = 'P1_btn_Scissor' style={styles.helloButton} onPress={() => SetPlayer_1(`scissor`)}>
          <Text style={styles.buttonText}>Scissor</Text>
        </TouchableOpacity>
      </View>

    <Text style={styles.player_Text}>Player_2</Text>
      <View style={styles.inputRow}>
        
        <TouchableOpacity testID = 'P2_btn_Rock' style={styles.helloButton} onPress={() => SetPlayer_2(`Rock`)}>
          <Text style={styles.buttonText}>Rock</Text>
        </TouchableOpacity>
        <TouchableOpacity testID = 'P2_btn_Paper' style={styles.helloButton} onPress={() => SetPlayer_2(`paper`)}>
          <Text style={styles.buttonText}>Paper</Text>
        </TouchableOpacity>
        <TouchableOpacity testID = 'P2_btn_Scissor' style={styles.helloButton} onPress={() => SetPlayer_2(`scissor`)}>
          <Text style={styles.buttonText}>Scissor</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputRow}>
        
        <TouchableOpacity testID = 'Process_btn' style={styles.Process_Button} onPress={() => SetWinner(Who_win(player_1,player_2))}>
          <Text style={styles.buttonText}>Process</Text>
        </TouchableOpacity>
            <TouchableOpacity testID = 'Restart_btn' style={styles.Restart_Button} onPress={() => SetWinner(`-`)}>
          <Text style={styles.buttonText}>restart</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginTop: 80,
    marginBottom: 20,
  },
   player_Text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 20,
  },
  Winner_Output: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    width: 300,
    height: 100,
    marginRight: 10,
    fontSize: 16,
    marginBottom: 100,
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  helloButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 40,
    paddingVertical: 32,
    borderRadius: 8,
    marginLeft: 10
  },
    Process_Button: {
    backgroundColor: '#0fe113',
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 8,
    marginLeft: 10
  },
    Restart_Button: {
    backgroundColor: '#ff3300',
    paddingHorizontal: 25,
    paddingVertical: 18,
    borderRadius: 8,
    marginLeft: 10
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