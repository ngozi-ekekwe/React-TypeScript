import React, { Component } from 'react';

import NewTaskForm from './components/NewTaskForm';
import { Task } from './models/task';
import TaskList from './components/TaskList';


interface State {
  newTask: Task;
  tasks: Task[];
}

class App extends Component<{}, State> {
  state = {
    newTask: {
      id: 1,
      name: ""
    },
    tasks: []
  };

  private addTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    this.setState((previousState) => ({
      newTask: {
        id: previousState.newTask.id + 1,
        name: ""
      },
      tasks: [...previousState.tasks, previousState.newTask]
    }));

  }

  private handleTaskChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTask: {
        ...this.state.newTask,
      name: event.target.value
      }
    })
  }

  private onDeleteTask = (taskToDelete: Task) => {
    this.setState((previousState) => ({
      tasks: [...previousState.tasks.filter((task) => {
        return task.id !== taskToDelete.id;
      })]
    }))
  }

  render() {
    return (
      <div>
        <h2>Hello React TS!</h2>
        <NewTaskForm
          task={this.state.newTask}
          onAdd={this.addTask}
          onChange={this.handleTaskChange}
        />
        <TaskList tasks={this.state.tasks} onDelete={this.onDeleteTask} />
      </div>
    );
  }
}

export default App;