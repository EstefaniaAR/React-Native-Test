import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

class App extends React.Component
{
  state = {
    text: "This is a message on screen"
    ,todo:""
  }
  addTodo =()=>
  {
<<<<<<< Updated upstream
      this.setState({todo:this.state.text})
=======
      var newTodo = this.state.text;
      var arr = this.state.todo;
      arr.push(newTodo);
      this.setState ({todo:arr, text:""})
  }
  renderTodos = () =>
  {
    return this.state.todo.map(t =>
    {
      return (
        <TouchableOpacity key = {t}>
          <Text 
          style = {styles.todo}
          onPress={()=>{this.deleteTodo(t)}}>
          {t}
          </Text>
        </TouchableOpacity>
        )
    })
>>>>>>> Stashed changes
  }
  render(){
    return (
<<<<<<< Updated upstream
      <View style ={styles.viewStyle}>
        <Text>Hello World This is </Text>
        <TextInput 
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
        />
        <Button 
          title ="Add Todo"
          color="green"
          onPress={this.addTodo}
        />
        <Text>{this.state.todo}</Text>
=======
      <View style ={styles.wholeStyle}>
        <View style ={styles.viewStyle}>
          <Text style={styles.header}>Note app </Text>
          <TextInput 
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value = {this.state.text}
          />
          <Button 
            title ="Add Todo"
            color="green"
            onPress={this.addTodo}
          />
          <View style = {{marginTop:100}}></View>
          {this.renderTodos()}
        </View>
>>>>>>> Stashed changes
      </View>

      )
  }
}
const styles = {
  wholeStyle:{
    backgroundColor: "#e6ceff"
    ,flex:1
  },
  viewStyle: {
  marginTop: 30
  ,alignItems: 'center'
  ,justifyContent:'center'
<<<<<<< Updated upstream
=======
  ,margin: 10
  
>>>>>>> Stashed changes
  },
  inputStyle :{
    height: 40
    ,borderColor: "green"
    ,borderWidth:1
<<<<<<< Updated upstream
=======
    ,width: '100%'
    ,marginBottom: 10
  },
  header:{
    fontSize: 30
    ,color: 'green'
    ,fontWeight: 'bold'

  },
  todo:{
    fontSize: 18
    ,color: 'white'
    
>>>>>>> Stashed changes
  }
}

export default App;