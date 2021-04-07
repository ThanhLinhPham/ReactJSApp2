import React, { useState, useEffect } from "react";
import './App.css';
import TaskForm from './components/TaskForm.js'
import Control from './components/Control.js'
import TaskList from './components/TaskList.js'

function App() {
  const [state, setSate] = useState({
    tasks: []
  })
  // useEffect(() => {
  //   state.tasks = JSON.parse(localStorage.tasks) 
  // });
  let onGenerateData = () => {
    var tasks = [
      {
        id: generateID(),
        name: 'Học lập trình',
        status: true
      },
      {
        id: generateID(),
        name: 'Đi bơi',
        status: false
      },
      {
        id: generateID(),
        name: 'Ngủ',
        status: true
      },
    ];
    setSate({
      tasks: tasks
    })
    localStorage.setItem('task', JSON.stringify(tasks))
  }
  let s4 = () => {
    return Math.floor((1 + Math.random()) *0x10000).toString(16).substring(1)
  }
  let generateID = () => {
    return s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' +s4() + '-' +s4() + '-' +s4()
  }
  return (
    <div className="App">
      <div className="container">
        <div className="text-center">
          <h1>Quản Lý Công Việc</h1>
          <hr />
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <TaskForm />
          </div>
          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            <button type="button" className="btn btn-primary">
              <span className="fa fa-plus mr-5" />Thêm Công Việc
            </button>
            <button type="button" className="btn btn-danger" onClick={onGenerateData}>
              Generate Data
            </button>
            <Control />
            <div className="row mt-15">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <TaskList tasks={state.tasks}/>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
