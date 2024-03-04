import React, { useState } from 'react';
import { Text, View, SafeAreaView, ScrollView, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import Comp1 from './components/Comp1';
import Soma from './components/Soma';
import styles from './components/Estilo';

export default () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = () => {
    if (inputValue.trim() === '') {
      return;
    }
    setTodos([...todos, inputValue]);
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
    <ScrollView>
      <StatusBar backgroundColor={'#808080'} barStyle='dark-content' />

      <View style={styles.viewSafeAndroid}>
        <SafeAreaView>
          <Comp1></Comp1>
          <View>
            {/* Image */}
            <View style={styles.viewImage}>
              <Image
                style={[styles.tamImage, { width: 200, height: 200 }]}
                source={require('./assets/todo.png')}
              />
            </View>

            {/* Add Todo Section */}
            <View style={styles.todoSection}>
              <Text style={styles.todoTitle}>Adicionar Tarefas</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  style={styles.input}
                  placeholder="Enter your task"
                  onChangeText={text => setInputValue(text)}
                  value={inputValue}
                />
                <TouchableOpacity style={styles.addButton} onPress={addTodo}>
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
              <ScrollView>
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
