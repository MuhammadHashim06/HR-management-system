function submitTasks() {
    const tasks = document.querySelectorAll('input[type="checkbox"]');
    const completedTasks = [];

    tasks.forEach(task => {
        if (task.checked) {
            completedTasks.push(task.nextElementSibling.textContent);
        }
    });

    // Perform actions with the completedTasks array, such as saving them to a database or displaying a message
    console.log(completedTasks);
    alert('Tasks submitted successfully!');
}
