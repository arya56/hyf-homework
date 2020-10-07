let nameHolder = '';
const toDoList = [];
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
function getReply(command) {
  // later down fields will be checked if includes some arithmetic statement.
  let fields = command.split('is');

  if (command === 'Hello my name is Benjamin' && nameHolder === '') {
    const namePosition = command.search('is') + 3;
    nameHolder = command.substr(namePosition, command.length - 1);
    return 'Nice to meet you Benjamin';
  } else if (command === 'Hello my name is Benjamin') {
    return 'You already introduced to me!';
  } else if (command === 'What is my name') {
    return nameHolder ? nameHolder : `You haven't introduced to me!`;
  } else if (command === 'Add fishing to my todo') {
    toDoList.push('fishing');
    console.log('fishing added to your todo');
    return toDoList;
  } else if (command === 'Add singing in the shower to my todo') {
    toDoList.push('singing in the shower');
    return;
  } else if (command === 'Remove fishing from my todo') {
    return 'Removed fishing from your todo';
  } else if (command === 'What is on my todo?') {
    return `You have ${toDoList.length} todos ${toDoList.join(' and ')}`;
  } else if (command === 'What day is it today?') {
    let today = new Date();
    let date = `${today.getDate()}. of ${
      monthNames[today.getMonth()]
    } ${today.getFullYear()}`;
    return date;
  } else if (!isNaN(eval(fields[1]))) {
    return eval(fields[1]);
  } else if (command === 'Set a timer for 4 minutes') {
    setTimeout(function () {
      console.log('Timer done');
    }, 4000);
    return 'Timer set for 4 minutes';
  }
}
