// Function to reset all checkbox preferences
function resetPreferences() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });
}

// Assuming `createDays` returns a list of workout objects per day
function populateSchedule(workoutSchedule) {
  // Loop through each day of the workout schedule
  workoutSchedule.forEach((day, index) => {
    // Create the day title dynamically
    const dayTitle = document.getElementById(`day-${index + 1}-title`);
    const dayWorkoutsList = document.getElementById(`day-${index + 1}-workouts`);

    // Set the title for the day (e.g., "Whole Body Day", "Upper Body Day", etc.)
    dayTitle.textContent = day.type;

    // Clear previous workouts (in case the user changes the schedule)
    dayWorkoutsList.innerHTML = '';

    // Loop through each workout for the day
    day.workouts.forEach(workout => {
      // Create a new list item for each workout
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.name = workout['Name of Exercise'];
      checkbox.id = workout['Name of Exercise'];

      // Optionally, if you want to pre-check the box based on saved data
      checkbox.checked = localStorage.getItem(workout['Name of Exercise']) === 'true';

      // Create a label for the checkbox
      const label = document.createElement('label');
      label.htmlFor = workout['Name of Exercise'];
      label.textContent = `${workout['Name of Exercise']} (${workout['Reps']} reps)`;

      // Append the checkbox and label to the list item
      li.appendChild(checkbox);
      li.appendChild(label);
      dayWorkoutsList.appendChild(li);

      // Store the checkbox state in localStorage when clicked
      checkbox.addEventListener('change', (e) => {
        localStorage.setItem(workout['Name of Exercise'], e.target.checked);
      });
    });
  });
}

// Example usage: Call the populateSchedule function with the generated workout schedule
populateSchedule(generateWorkoutSchedule());
