document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const dataInput = document.getElementById('dataInput');
    const dataList = document.getElementById('dataList');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = dataInput.value;
    listItem.classList.add('animate__animated', 'animate__fadeIn'); // Add Animate.css classes

    // Add the new item to the list
    dataList.appendChild(listItem);

    // Clear the input field
    dataInput.value = '';
});
document.getElementById('dataForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const dataInput = document.getElementById('dataInput');
    const dataList = document.getElementById('dataList');

    // Create a new list item
    const listItem = document.createElement('li');
    listItem.textContent = dataInput.value;

    // Add the new item to the list
    dataList.appendChild(listItem);

    // Clear the input field
    dataInput.value = '';
});

