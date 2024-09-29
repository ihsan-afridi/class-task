function calculateAge() {
    const birthDate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date();

    if (birthDate > currentDate || isNaN(birthDate)) {
        alert("Please enter a valid birth date.");
        return;
    }

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('years').textContent = years;
    document.getElementById('months').textContent = months;
    document.getElementById('days').textContent = days;
}
