import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  const redirectToListaTarefas = () => {
    navigation.navigate('ListaTarefas');
  };

  return (
    <View style={styles.container}>
     <Text style={styles.head}>RM551534 - Beatriz Svestka</Text>
      <Text style={styles.title}>Bem-vindo ao Meu App de Tarefas</Text>
      <Image
        style={styles.image}
        source={require('./assets/todo.png')}
      />
      <Text style={styles.description}>
        Organize suas tarefas de forma simples e eficiente, nunca mais se esqueça do que precisa ser feito.
      </Text>
      <TouchableOpacity style={styles.button} onPress={redirectToListaTarefas}>
        <Text style={styles.buttonText}>Comece agora</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007FFF',
    paddingHorizontal: 20, 

  },

  head: {
    fontSize: 20,
    fontWeight: 'bold',
    color:'#fff',
    paddingBottom: 40,

  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center', 
  },
  button: {
    backgroundColor: '#2ecc71',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

export default Home;
