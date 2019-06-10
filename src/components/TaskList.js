import React, { Component } from 'react';
import TaskItem from './TaskItem'
class TaskList extends Component {
  render() {
    
    var {tasks}= this.props;
    var elmTasks= tasks.map((task,index)=>{
        return <TaskItem 
        key={task.id}
        index={index}
        task={task}
        onUpdateStastus={this.props.onUpdateStastus}
        onDelete={this.props.onDelete}
        onUpdate={this.props.onUpdate}
        />
    })
    return (
      <div className="row">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th scope="col">STT</th>
              <th scope="col">Tên</th>
              <th scope="col">Trạng Thái</th>
              <th scope="col">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row"></th>
              <td> <input></input> </td>
              <td>
                <select className="form-control" >
                  <option>Tất cả</option>
                  <option></option>
                  <option></option>
                </select>
              </td>
              <td></td>
            </tr>
            {elmTasks}

          </tbody>
        </table>
      </div>



    );
  }
}
export default TaskList;
