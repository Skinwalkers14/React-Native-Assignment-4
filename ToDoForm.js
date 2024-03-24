import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  return (
    <View style={formStyles.form}>
      <TextInput
        style={formStyles.input}
        placeholder="Add a new task..."
        onChangeText={(text) => setTaskText(text)}
        value={taskText}
      />
      <Button
        title="Add Task"
        onPress={() => {
          if (typeof taskText === 'string' && taskText.trim() !== '') {
            addTask(taskText);
            setTaskText('');
          }
        }}
      />
    </View>
  );
}

const formStyles = StyleSheet.create({
  form: {
    flexDirection: 'column',
    alignItems: 'stretch',
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
});

export default ToDoForm;
