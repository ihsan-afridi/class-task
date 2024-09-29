function calculateAge(){
    const birthDate = new Date(document.getElementById('birthdate').value);
    const currentDate = new Date();

    if (birthDate > currentDate || isNaN(birthDate)) {
        alert("please enter a valid birth date.")
        return;
    }
   

    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getDate

}