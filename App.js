import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Text, View, SafeAreaView, ScrollView, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import Comp1 from './components/Comp1';
import styles from './components/Estilo';
import Home from './Home'; 

const Stack = createStackNavigator();

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = (newTodo) => {
    if (newTodo.trim() === '') {
      return;
    }
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  const deleteTodo = (index, listType) => {
    if (listType === 'todos') {
      const newTodos = [...todos];
      newTodos.splice(index, 1);
      setTodos(newTodos);
    } else if (listType === 'completedTodos') {
      const newCompletedTodos = [...completedTodos];
      newCompletedTodos.splice(index, 1);
      setCompletedTodos(newCompletedTodos);
    }
  };

  const completeTodo = (index) => {
    const todoToComplete = todos[index];
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    setCompletedTodos([...completedTodos, todoToComplete]);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ListaTarefas">
          {(props) => (
            <ListaTarefas
              {...props}
              todos={todos}
              inputValue={inputValue}
              addTodo={addTodo}
              deleteTodo={deleteTodo}
              completeTodo={completeTodo}
              completedTodos={completedTodos}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const ListaTarefas = ({ navigation, todos, inputValue, addTodo, deleteTodo, completeTodo, completedTodos }) => {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() === '') {
      return;
    }
    addTodo(newTodo);
    setNewTodo('');
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor={'#808080'} barStyle='dark-content' />

      <View style={styles.viewSafeAndroid}>
        <SafeAreaView>
          <Comp1 />
          <View>
            <View style={styles.viewImage}>
              <Image
                style={[styles.tamImage, { width: 200, height: 200 }]}
                source={require('./assets/todo.png')}
              />
            </View>

            <View style={styles.todoSection}>
              <Text style={styles.todoTitle}>Adicionar Tarefas</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your task"
                  onChangeText={text => setNewTodo(text)}
                  value={newTodo}
                />
                <TouchableOpacity style={styles.addButton} onPress={handleAddTodo}>
                  <Text style={styles.addButtonText}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>

            {/* Todos Section */}
            <View style={styles.todoSection}>
              <Text style={styles.todoTitle}>Tarefas a Fazer</Text>
              <ScrollView>
                {todos.map((todo, index) => (
                  <View key={index} style={styles.todoItem}>
                    <Text style={styles.todoText}>{todo}</Text>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTodo(index, 'todos')}>
                      <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.completeButton} onPress={() => completeTodo(index)}>
                      <Text style={styles.completeButtonText}>Complete</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>

            {/* Completed Todos Section */}
            <View style={styles.todoSection}>
              <Text style={styles.todoTitle}>Tarefas Concluídas</Text>
              <ScrollView keyboardShouldPersistTaps="handled"> 
                {completedTodos.map((todo, index) => (
                  <View key={index} style={styles.todoItem}>
                    <Text style={styles.todoText}>{todo}</Text>
                    <TouchableOpacity style={styles.deleteButton} onPress={() => deleteTodo(index, 'completedTodos')}>
                      <Text style={styles.deleteButtonText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                ))}
              </ScrollView>
            </View>
          </View>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};

export default App;
