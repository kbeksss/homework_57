const tasks = [
    {id: 234, title: 'Create user registration API', timeSpent: 4, category: 'Backend', type: 'task'},
    {id: 235, title: 'Create user registration UI', timeSpent: 8, category: 'Frontend', type: 'task'},
    {id: 237, title: 'User sign-in via Google UI', timeSpent: 3.5, category: 'Frontend', type: 'task'},
    {id: 238, title: 'User sign-in via Google API', timeSpent: 5, category: 'Backend', type: 'task'},
    {id: 241, title: 'Fix account linking', timeSpent: 5, category: 'Backend', type: 'bug'},
    {id: 250, title: 'Fix wrong time created on new record', timeSpent: 1, category: 'Backend', type: 'bug'},
    {id: 262, title: 'Fix sign-in failed messages', timeSpent: 2, category: 'Frontend', type: 'bug'},
];

const frontendTotal = tasks.filter(task => (task.category === 'Frontend')).reduce((total, task) => (total + task.timeSpent), 0);
console.log('Total amount of time spent on Frontend: ', frontendTotal);

const bugTotal = tasks.filter(task => (task.type === 'bug')).reduce((total, task) => (total + task.timeSpent), 0);
console.log('Total amount of time spent for bugs: ', bugTotal);

const UICount = tasks.filter(task => (task.title.includes('UI'))).reduce((total) => (total + 1), 0);
console.log('Number of tasks that contain the word UI in the title: ', UICount);


const findAmount = (array, category) => ( array.filter(element => (element.category === category)).reduce((total) => (total + 1), 0) );

const tasksByCat = {Frontend: findAmount(tasks, 'Frontend'), Backend: findAmount(tasks, 'Backend')};
console.log('Number of tasks by categories: ', tasksByCat);

const moreThanFour = tasks.filter(task => (task.timeSpent >= 4)).map(task => ({title: task.title, category: task.category}));
console.log('Tasks that has taken more than 4 hours: \n', moreThanFour);
