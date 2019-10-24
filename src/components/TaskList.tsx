import React, { FunctionComponent } from 'react';
import { Task } from '../models/task';
import TaskListItem from './TaskListItem';


interface Props {
  tasks: Task[];
  onDelete: (task: Task) => void;
}


const TaskList: FunctionComponent<Props> = ({
  tasks,
  onDelete
}) => {
  return (
    <ul>
      {tasks.map((task, i) => <TaskListItem key={i} task={task} onDelete={onDelete} />)}
    </ul>
  );
};

export default TaskList;