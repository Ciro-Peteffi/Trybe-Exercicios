import './App.css';

const arrayOfTasks = ['brushTeeth', 'makeDinner', 'cookLunch', 'goToGyn', 'studyReact', 'wakeUp', 'cleanHouse'];

const Task = (value) => {
  return (
    <li className='margin'>{value}</li>
  );
}

function App() {
  return arrayOfTasks.map(Task); 
}

export default App;
