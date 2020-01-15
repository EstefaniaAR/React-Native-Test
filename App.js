import React from 'react';
import { Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

class App extends React.Component
{
  state = {
    text: ""
    ,todo:[]
  }
  deleteTodo = (t) =>
  {
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  addTodo =()=>
  {
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
  }

  render(){
    return (
      <View style ={styles.wholeStyle}>
        <View style ={styles.viewStyle}>
          <Text style={styles.header}>Note app </Text>
          <TextInput 
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value = {this.state.text}
          />
          <View style = {{marginTop:10}}></View>
          <Button 
            title ="Add Todo"
            color="green"
            onPress={this.addTodo}
          />
          <View style = {{marginTop:100}}></View>
          {this.renderTodos()}
        </View>
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
  ,margin: 10
  
  },
  inputStyle :{
    height: 40
    ,borderColor: "green"
    ,borderWidth:1
    ,width: '100%'
  },
  header:{
    fontSize: 30
    ,color: 'green'
    ,fontWeight: 'bold'

  },
  todo:{
    fontSize: 18
    ,color: 'white'
    
  }
}

export default App;