// Mapping of Roman numerals to their corresponding Arabic values
const romanNumerals = [
    { roman: 'M', value: 1000 },
    { roman: 'CM', value: 900 },
    { roman: 'D', value: 500 },
    { roman: 'CD', value: 400 },
    { roman: 'C', value: 100 },
    { roman: 'XC', value: 90 },
    { roman: 'L', value: 50 },
    { roman: 'XL', value: 40 },
    { roman: 'X', value: 10 },
    { roman: 'IX', value: 9 },
    { roman: 'V', value: 5 },
    { roman: 'IV', value: 4 },
    { roman: 'I', value: 1 }
];

// Function to convert Arabic numbers to Roman numerals
function convertToRoman(num) {
    let result = '';
    romanNumerals.forEach(({ roman, value }) => {
        while (num >= value) {
            result += roman;
            num -= value;
        }
    });
    return result;
}

// Event listener for the "Convert" button
document.getElementById('convert-btn').addEventListener('click', () => {
    const input = document.getElementById('number').value;
    const output = document.getElementById('output');

    if (input === '') {
        output.textContent = 'Please enter a valid number';
    } else if (input < 1) {
        output.textContent = 'Please enter a number greater than or equal to 1';
    } else if (input >= 4000) {
        output.textContent = 'Please enter a number less than or equal to 3999';
    } else {
        const romanNumeral = convertToRoman(parseInt(input, 10));
        output.textContent = romanNumeral;
    }
});
