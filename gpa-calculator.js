document.getElementById('add-course').addEventListener('click', function() {
    const courseInputs = document.getElementById('course-inputs');
    const newCourse = document.createElement('div');
    newCourse.classList.add('course');
    newCourse.innerHTML = `
        <input type="text" placeholder="Course Name" class="course-name">
        <input type="number" placeholder="Credit Hours" class="credit-hours" min="0">
        <input type="number" placeholder="Grade" class="grade" step="0.01" min="0">
    `;
    courseInputs.appendChild(newCourse);
});

document.getElementById('gpa-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const courses = document.querySelectorAll('.course');
    let totalGradePoints = 0;
    let totalCreditHours = 0;
    courses.forEach(course => {
        const creditHours = parseFloat(course.querySelector('.credit-hours').value);
        const grade  = parseFloat(course.querySelector('.grade').value);
        totalGradePoints += creditHours * grade;
        totalCreditHours += creditHours;
    });
    const gpa = totalGradePoints / totalCreditHours;
    document.getElementById('gpa-result').textContent = `Your GPA is ${gpa.toFixed(2)}`;
});