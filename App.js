import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

class App extends React.Component
{
  state = {
    text: "This is a message on screen"
    ,todo:""
  }
  addTodo =()=>
  {
      this.setState({todo:this.state.text})
  }
  render(){
    return (
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
      </View>

      )
  }
}
const styles = {
  viewStyle: {
    flex:1
  ,alignItems: 'center'
  ,justifyContent:'center'
  },
  inputStyle :{
    height: 40
    ,width: 100
    ,borderColor: "green"
    ,borderWidth:1
  }
}

export default App;