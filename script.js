function calculateCalories() {
    const gender = document.getElementById('gender').value;
    const age = parseInt(document.getElementById('age').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const activity = parseFloat(document.getElementById('activity').value);
    const goal = parseInt(document.getElementById('goal').value); // kaloriemål justering

    if (isNaN(age) || isNaN(weight) || isNaN(height)) {
        alert("Venligst udfyld alle felter korrekt.");
        return;
    }

    // Mifflin-St Jeor ligning
    let bmr;
    if (gender === "male") {
        bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    // TDEE = BMR * aktivitetsniveau
    let tdee = bmr * activity;

    // Juster for vægttab eller vægtøgning
    tdee += goal;

    document.getElementById('result').innerHTML = 
        `Dit daglige kaloribehov er ca. <strong>${Math.round(tdee)}</strong> kcal.`;
}
Add script.js
