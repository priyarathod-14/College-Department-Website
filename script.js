function toggleMode() {
    document.body.classList.toggle("dark");
}

function showSemester(semester) {
    let subjects = document.getElementById("subjects");

    if (semester == 3) {
        subjects.innerHTML = "<h3>Semester III</h3><p>Data Structures • Database Management Systems • Computer Networks • Operating Systems</p>";
    }
    else if (semester == 4) {
        subjects.innerHTML = "<h3>Semester IV</h3><p>Web Technology • Software Engineering • Microprocessors • Computer Graphics</p>";
    }
    else if (semester == 5) {
        subjects.innerHTML = "<h3>Semester V</h3><p>Artificial Intelligence • Machine Learning • Cloud Computing • Cyber Security</p>";
    }
    else {
        subjects.innerHTML = "<h3>Semester VI</h3><p>Data Science • Advanced Web Development • Project Management • Major Project</p>";
    }
}