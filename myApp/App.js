import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native';
import Slider from '@react-native-community/slider';
import React, { useState } from 'react';
import * as Clipboard from 'expo-clipboard'; 

export default function App() {
  const [passwordLength, setPasswordLength] = useState(10);
  const [generatedPassword, setGeneratedPassword] = useState('');

  // Função para gerar a senha
  const generatePassword = () => {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+-=';
    let password = '';
    
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    setGeneratedPassword(password);
  };

  // Função para copiar a senha para a área de transferência
  const copyToClipboard = async () => {
    if (generatedPassword) {
      try {
        await Clipboard.setStringAsync(generatedPassword);
        Alert.alert('Senha Copiada!', 'Sua senha foi copiada para a área de transferência e pode ser colada em qualquer aplicativo.');
      } catch (error) {
        Alert.alert('Erro', 'Não foi possível copiar a senha.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/iconLogo.png')}
        style={styles.logo}
      />
      
      <Text style={styles.title}>Gerador de Senhas</Text>
      
      {/* Área para mostrar a senha gerada */}
      {generatedPassword ? (
        <Pressable style={styles.passwordArea} onPress={copyToClipboard}>
          <Text style={styles.passwordText}>{generatedPassword}</Text>
          <Text style={styles.copyText}>Clique para copiar</Text>
        </Pressable>
      ) : (
        <View style={styles.placeholderArea}>
          <Text style={styles.placeholderText}>Sua senha aparecerá aqui</Text>
        </View>
      )}

      <Text style={styles.lengthText}>{passwordLength} Caracteres</Text>

      <View style={styles.sliderArea}>
        <Slider
          style={{height: 30}}
          minimumValue={6}
          maximumValue={10} 
          value={passwordLength}
          onValueChange={(value) => setPasswordLength(Math.round(value))}
          thumbTintColor='#3f75fc'
          maximumTrackTintColor='#c7dceb'
          minimumTrackTintColor='#33aaff'
        />
      </View>

      <Pressable style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar Senha</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View> 
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#f3f3ff",
    padding: 16,
    justifyContent: 'center', 
    alignItems: 'center' 
  },

  logo:{
    marginBottom: 20,
    width: 120,  
    height: 120,
    resizeMode: 'contain'
  },

  title:{
    fontSize: 24,
    fontWeight: "bold",
    color: '#5e6c8f',
    marginBottom: 20
  },

  // Estilos para a área da senha
  passwordArea: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#3f75fc'
  },

  placeholderArea: {
    backgroundColor: "#e0e0e0",
    padding: 16,
    borderRadius: 8,
    width: '90%',
    alignItems: 'center',
    marginBottom: 20
  },

  passwordText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center'
  },

  placeholderText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center'
  },

  copyText: {
    fontSize: 12,
    color: '#3f75fc',
    marginTop: 5
  },

  lengthText: {
    fontSize: 18,
    color: '#5e6c8f',
    marginBottom: 10
  },

  sliderArea:{
    marginTop: 16,
    marginBottom: 16,
    padding: 8,
    borderRadius: 8,
    width: 200,
    backgroundColor: "#fff"
  },

  button:{
    backgroundColor: "#3f75fc",
    width: 200,
    padding: 16,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },

  buttonText:{
    color: "#fff",
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: "center"
  }
});