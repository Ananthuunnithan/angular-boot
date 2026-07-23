const form = document.querySelector("#student-form");
const statusMessage = document.querySelector("#form-status");

const fields = {
    studentName: {
        element: document.querySelector("#student-name"),
        message: "Enter a valid name using letters and spaces."
    },
    phone: {
        element: document.querySelector("#phone"),
        message: "Enter a phone number with 10 to 15 digits."
    },
    email: {
        element: document.querySelector("#email"),
        message: "Enter a valid email address."
    },
    age: {
        element: document.querySelector("#age"),
        message: "Age must be between 16 and 100."
    },
    department: {
        element: document.querySelector("#department"),
        message: "Select a department."
    },
    address: {
        element: document.querySelector("#address"),
        message: "Address must contain at least 10 characters."
    }
};

function getErrorMessage(field) {
    if (field.validity.valueMissing) {
        return "This field is required.";
    }

    if (field.validity.typeMismatch) {
        return fields[field.name].message;
    }

    if (field.validity.patternMismatch || field.validity.tooShort || field.validity.rangeUnderflow || field.validity.rangeOverflow) {
        return fields[field.name].message;
    }

    return "";
}

function showFieldError(field, message) {
    const errorMessage = field.closest(".form-field").querySelector(".error-message");
    errorMessage.textContent = message;
    field.setAttribute("aria-invalid", message ? "true" : "false");
}

function validateField(field) {
    const message = getErrorMessage(field);
    showFieldError(field, message);
    return !message;
}

form.addEventListener("input", (event) => {
    if (event.target.matches("input:not([type='radio']), select, textarea")) {
        validateField(event.target);
        statusMessage.textContent = "";
    }
});

form.addEventListener("change", (event) => {
    if (event.target.name === "gender") {
        const genderError = event.target.closest(".gender-field").querySelector(".error-message");
        genderError.textContent = "";
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let isValid = true;

    Object.values(fields).forEach(({ element }) => {
        if (!validateField(element)) {
            isValid = false;
        }
    });

    const selectedGender = form.querySelector("input[name='gender']:checked");
    const genderError = form.querySelector(".gender-field .error-message");
    if (!selectedGender) {
        genderError.textContent = "Select a gender.";
        isValid = false;
    } else {
        genderError.textContent = "";
    }

    if (!isValid) {
        statusMessage.textContent = "Please correct the highlighted fields.";
        form.querySelector("[aria-invalid='true'], .gender-field input:not(:checked)")?.focus();
        return;
    }

    statusMessage.textContent = "Registration submitted successfully.";
    form.reset();
    Object.values(fields).forEach(({ element }) => showFieldError(element, ""));
});