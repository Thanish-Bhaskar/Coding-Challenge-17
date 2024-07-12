//U08201790
import React, { useState } from 'react';
import tasks from './tasks';
import FancyText from './FancyText';

const motivationalMessages = [
  "Keep pushing forward!",
  "You're doing great!",
  "Every step counts!",
];

const TaskGenerator = () => {
  const [currentTaskIndex, setCurrentTaskIndex] = useState(0);

  const nextTask = () => {
    setCurrentTaskIndex((prevIndex) => (prevIndex + 1) % tasks.length);
  };

  const toggleTaskCompletion = () => {
    tasks[currentTaskIndex].isCompleted = !tasks[currentTaskIndex].isCompleted;
    setCurrentTaskIndex(currentTaskIndex); // Trigger re-render
  };

  const task = tasks[currentTaskIndex];
  const motivationalMessage = motivationalMessages[currentTaskIndex % motivationalMessages.length];

  return (
    <div>
      <FancyText title text={`Task ${task.id}`} />
      <FancyText text={`Name: ${task.name}`} />
      <FancyText text={`Status: ${task.isCompleted ? "Completed ✔" : "Pending"}`} />
      <button onClick={toggleTaskCompletion}>
        {task.isCompleted ? "Mark as Pending" : "Mark as Completed"}
      </button>
      <button onClick={nextTask}>Next Task</button>
      <FancyText text={motivationalMessage} />
    </div>
  );
};

export default TaskGenerator;
