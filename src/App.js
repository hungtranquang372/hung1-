import React, { Component } from 'react';
import "./App.css"
import TaskForm from './components/TaskForm'
import Control from './components/Control';
import TaskList from './components/TaskList'
import randomstring from 'randomstring'
class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      tasks:[],
      isDisplayForm:false,
      taskEditing:null
    };
  }
  componentWillMount(){
    if(localStorage && localStorage.getItem('tasks')){
      var tasks= JSON.parse(localStorage.getItem('tasks'));
      this.setState({
          tasks: tasks
      });
    }
  }
  onGenerate=()=>{
  var  tasks=[
      {
        id: randomstring.generate({
          length: 12,
          charset: 'numeric'
        }),
        name:'hoc lap trinh',
        status: false
      },
      {
        id: randomstring.generate({
          length: 12,
          charset: 'numeric'
        }),
        name:'di boi',
        status: false
      },
      {
        id: randomstring.generate({
          length: 12,
          charset: 'numeric'
        }),
        name:'di ngu',
        status: false
      }
    ];
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks',JSON.stringify(tasks));
  }
  onToggleForm=()=>{
    this.setState({
      isDisplayForm :!this.state.isDisplayForm
    })
  }
  onCloseForm=()=>{
    this.setState({
      isDisplayForm: false
    })
  }
  onShowForm(){
    this.setState({
      isDisplayForm:true
    })
  }
  onSubmit=(data)=>{

var{tasks}=this.state;
if(data.id===''){
  data.id= randomstring.generate({
    length: 12,
    charset: 'numeric',
  })
tasks.push(data);
}else{
  var index= this.findIndex(data.id);
  tasks[index]=data;
}
 
  
  //  data.id= randomstring.generate({
  //   length: 12,
  //   charset: 'numeric'
  // }),
  
  this.setState({
    tasks:tasks,
    taskEditing:null
  })
  localStorage.setItem('tasks',JSON.stringify(tasks))

}
onUpdateStastus=(id)=>{
  var {tasks}= this.state;
var index= this.findIndex(id);
if(index !== -1)
tasks[index].status=!tasks[index].status;
this.setState({
  tasks:tasks
});
localStorage.setItem('tasks',JSON.stringify(tasks))
}
findIndex=(id)=>{
  var {tasks}= this.state;
  var result=-1;
  tasks.forEach((task,index)=>{
    if(task.id===id){
      result= index;
    }
  });
  return result;
} 
onDelete=(id)=>{
  var {tasks}= this.state;
  var index= this.findIndex(id);
  if(index!== -1){
    tasks.splice(index,1);
  this.setState({
    tasks:tasks
  });
  
localStorage.setItem('tasks',JSON.stringify(tasks));
  }
}
onUpdate=(id)=>{
  var{tasks}= this.state;
  var index= this.findIndex(id);
  var taskEditing =tasks[index];
  console.log(taskEditing);
  
  this.setState({
    taskEditing:taskEditing
  })
  this.onShowForm();
}
  render() {
    var {tasks,isDisplayForm,taskEditing}=this.state;
    var elmTasform= isDisplayForm ?
    <TaskForm onSubmit={this.onSubmit}
    onCloseForm={this.onCloseForm}
    task={taskEditing}
    />:'';
    return (
      
      <div>
        <div className="container">
          <div className="text-center">
            <h1>Quản Lý Công Việc</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
          <div className={isDisplayForm?"col-4":''}>
                {/* Form */}
           {elmTasform}  
            </div>           
            <div className={isDisplayForm?"col-8":"col-12"}> 
            <button 
            type="button" 
            className="btn btn-primary"
            onClick={this.onToggleForm}
            >Thêm Công Việc  </button>
            <button type="button" className="btn btn-danger"onClick={this.onGenerate}>Generate</button>
              {/* Seach Sort */}
              
              <Control/>
              {/* List */}
              <TaskList 
              tasks={tasks} 
              onUpdateStastus={this.onUpdateStastus}
              onDelete={this.onDelete}
              onUpdate={this.onUpdate}
              />
           
              </div>
           
          </div>
        </div>
      </div>
  

    );
  }
}
export default App;
