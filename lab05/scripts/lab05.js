/* Phone number input formatting */

$("input[type='tel']").each(function () {
  $(this).on("change keyup paste", function (e) {
    let output,
      $this = $(this),
      input = $this.val();

    if (e.keyCode != 8) {
      input = input.replace(/[^0-9]/g, '');
      let area = input.substr(0, 3);
      let pre = input.substr(3, 3);
      let tel = input.substr(6, 4);
      if ((area.length < 3) && (area.length !== 0)) {
        output = "(" + area;
      } else if (area.length == 3 && pre.length < 3) {
        output = "(" + area + ")" + " " + pre;
      } else if (area.length == 3 && pre.length == 3) {
        output = "(" + area + ")" + " " + pre + "-" + tel;
      }
      $this.val(output);
    }
  });
});

/* CC Number input formatting */

$("input[id='ccNumber']").each(function () {
  $(this).on("change keyup paste", function (e) {
    let output,
      $this = $(this),
      input = $this.val();

    if (e.keyCode != 8) {
      input = input.replace(/[^0-9]/g, '');
      let first = input.substr(0, 4);
      let second = input.substr(4, 4);
      let third = input.substr(8, 4);
      let fourth = input.substr(12, 4);
      if ((first.length < 4) && (first.length !== 0)) {
        output = first + " ";
      } else if (first.length == 4 && second.length < 4) {
        output = first + " " + second;
      } else if (first.length == 4 && second.length == 4 && third.length < 4) {
        output = first + " " + second + " " + third;
      } else if (first.length == 4 && second.length == 4 && third.length == 4 && fourth.length < 4) {
        output = first + " " + second + " " + third + " " + fourth;
      } else if (first.length == 4 && second.length == 4 && third.length == 4 && fourth.length == 4) {
        output = first + " " + second + " " + third + " " + fourth;
      }

      $this.val(output);
    }
  });
});

/* CC Expiry input formatting */

$("input[id='ccExpiry']").each(function () {
  $(this).on("change keyup paste", function (e) {
    let output,
      $this = $(this),
      input = $this.val();

    if (e.keyCode != 8) {
      input = input.replace(/[^0-9]/g, '');
      let month = input.substr(0, 2);
      let year = input.substr(2, 2);
      if ((month.length < 2) && (month.length !== 0)) {
        output = month + "/";
      } else if (month.length == 2 && year.length < 2) {
        output = month + "/" + year;
      } else if (month.length == 2 && year.length == 2) {
        output = month + "/" + year;
      }

      $this.val(output);
    }
  });
});

/* CC Number input formatting */

$("input[id='ccCVV']").each(function () {
  $(this).on("change keyup paste", function (e) {
    let output,
      $this = $(this),
      input = $this.val();

    if (e.keyCode != 8) {
      input = input.replace(/[^0-9]/g, '');
      let cvv = input.substr(0, 3);
      if ((cvv.length < 4) && (cvv.length !== 0)) {
        output = cvv;
      }

      $this.val(output);
    }
  });
});

/* Date picker */

$(function () {
  $("#calendar").datepicker(
    {
      minDate: 0,
      beforeShowDay: function (d) {
        let expert = document.getElementById("expert").value;
        let day = d.getDay();
        if (expert === "steven") {
          return [(day != 0 && day != 3 && day != 6)];
        } else if (expert === "abrar") {
          return [(day != 0 && day != 2 && day != 5 && day != 6)];
        } else if (expert === "andrew") {
          return [(day != 0 && day != 1 && day != 4 && day != 6)];
        } else {
          return [(day != 0 && day != 6)];
        }
      }
    });
});

/* Time picker */

$(function () {
  $('#clock').timepicker({
    timeFormat: 'h:mm p',
    interval: 30,
    minTime: '8:00am',
    maxTime: '10:00pm',
    startTime: '8:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
});

/* Reset date picker if expert changes */

$(function () {
  $("#expert").on('change', function () {
    document.getElementById("calendar").value = null;
  });
});

/* Reset time picker if expert changes */

$(function () {
  $("#expert").on('change', function () {
    document.getElementById("clock").value = null;
  });
});

/* Validate First Name */

function validateFirst(input) {
  let label = document.getElementById("firstLabel");

  if (input.value.length == 0) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> First Name';
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'First Name';
    return true;
  }
}

/* Validate Last Name */

function validateLast(input) {
  let label = document.getElementById("lastLabel");

  if (input.value.length == 0) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Last Name';
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Last Name';
    return true;
  }
}

/* Validate Email */

function validateEmail(input) {
  let label = document.getElementById("emailLabel");
  const em = new RegExp("[\\w\\-\\.]+@[a-zA-Z0-9]+\\.[[a-zA-Z]+");

  if (!em.test(input.value)) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Email Address';
    document.getElementById('emailTooltip').setAttribute('title', 'Invalid email address. Format: example@domain.com Example: adam@hotmail.com');
    document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Invalid email address. Format: example@domain.com Example: adam@hotmail.com');
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Email Address';
    document.getElementById('emailTooltip').setAttribute('title', 'Email Address');
    document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Email Address');
    return true;
  }
}

/* Validate Phone Number */

function validatePhone(input) {
  let label = document.getElementById("phoneLabel");

  if (input.value.length < 14 && input.value.length !== 0) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Phone&nbsp;Number';
    document.getElementById('phoneTooltip').setAttribute('title', 'Invalid phone number. Optional - in case a change has been made to your appointment, we\'ll call you. Example: (613) 034-8888');
    document.getElementById('phoneTooltip').setAttribute('data-bs-original-title', 'Invalid phone number. Optional - in case a change has been made to your appointment, we\'ll call you. Example: (613) 034-8888');
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Phone&nbsp;Number';
    document.getElementById('phoneTooltip').setAttribute('title', 'Optional - in case a change has been made to your appointment, we\'ll call you.');
    document.getElementById('phoneTooltip').setAttribute('data-bs-original-title', 'Optional - in case a change has been made to your appointment, we\'ll call you.');
    return true;
  }
}

/* Validate Language */

function validateLanguage(input) {
  let label = document.getElementById("languageLabel");

  if (input.value.length == 0) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Language';
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Language';
    return true;
  }
}

/* Validate Service */

function validateService(input) {
  let label = document.getElementById("serviceLabel");

  if (input.value.length == 0) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Select a Service';
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Select a Service';
    return true;
  }
}

/* Validate Animal */

function validateAnimal(input) {
  let label = document.getElementById("animalLabel");

  if (input.value.length == 0) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Animal&nbsp;Species';
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Animal&nbsp;Species';
    return true;
  }
}

/* Validate Credit Card Name */

function validateName(input) {
  let label = document.getElementById("nameLabel");

  if (input.value.length == 0) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Name&nbsp;on&nbsp;Card';
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Name&nbsp;on&nbsp;Card';
    return true;
  }
}

/* Validate Credit Card Number */

function validateCCNumber(input) {
  let label = document.getElementById("ccNumberLabel");

  if (input.value.length < 19) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Card Number';
    document.getElementById('ccNumberTooltip').setAttribute('title', 'Invalid card number. Example: 4520 0038 3443 0402');
    document.getElementById('ccNumberTooltip').setAttribute('data-bs-original-title', 'Invalid card number. Example: 4520 0038 3443 0402');
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Card Number';
    document.getElementById('ccNumberTooltip').setAttribute('title', 'Example: 4520 0038 3443 0402');
    document.getElementById('ccNumberTooltip').setAttribute('data-bs-original-title', 'Example: 4520 0038 3443 0402');
    return true;
  }
}

/* Validate Credit Card Expiry */

function validateExpiry(input) {
  let label = document.getElementById("ccExpiryLabel");
  let date = new Date();
  let currMonth = date.getMonth();
  let currYear = date.getFullYear().toString().substr(-2);

  if (((input.value.length === 0) || (input.value.length === 5)) && ((input.value.substr(0, 2) > 12) || ((currYear > input.value.substr(3, 2)) || ((currYear === input.value.substr(3, 2)) && ((currMonth >= input.value.substr(0, 2))))))) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Expiry Date';
    document.getElementById('ccExpiryTooltip').setAttribute('title', 'Invalid date. Format: MM/YY Example: 04/25');
    document.getElementById('ccExpiryTooltip').setAttribute('data-bs-original-title', 'Invalid date. Format: MM/YY Example: 04/25');
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Expiry Date';
    document.getElementById('ccExpiryTooltip').setAttribute('title', 'Expiry Date');
    document.getElementById('ccExpiryTooltip').setAttribute('data-bs-original-title', 'Expiry Date');
    return true;
  }
}

/* Validate Credit Card CVV */

function validateCVV(input) {
  let label = document.getElementById("ccCVVLabel");

  if (input.value.length < 3) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> CVV';
    document.getElementById('ccCVVTooltip').setAttribute('title', 'Invalid CVV. Enter the three digits (security code) on the back of your card. Example: 034');
    document.getElementById('ccCVVTooltip').setAttribute('data-bs-original-title', 'Invalid CVV. Enter the three digits (security code) on the back of your card. Example: 034');
    return false;
  } else {
    input.classList.remove("error");
    label.innerHTML = 'CVV';
    document.getElementById('ccCVVTooltip').setAttribute('title', 'The three digits (security code) on the back of your card. Example: 034');
    document.getElementById('ccCVVTooltip').setAttribute('data-bs-original-title', 'The three digits (security code) on the back of your card. Example: 034');
    return true;
  }
}

function validate() {
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");
  let language = document.getElementById("language");
  let service = document.getElementById("service");
  let animal = document.getElementById("animal");
  let ccName = document.getElementById("cardName");
  let ccNumber = document.getElementById("ccNumber");
  let ccExpiry = document.getElementById("ccExpiry");
  let ccCVV = document.getElementById("ccCVV");
  let valid = true;

  if (!validateFirst(firstName)) {
    valid = false;
  }
  if (!validateLast(lastName)) {
    valid = false;
  }
  if (!validateEmail(email)) {
    valid = false;
  }
  if (!validatePhone(phone)) {
    valid = false;
  }
  if (!validateLanguage(language)) {
    valid = false;
  }
  if (!validateService(service)) {
    valid = false;
  }
  if (!validateAnimal(animal)) {
    valid = false;
  }
  if (!validateName(ccName)) {
    valid = false;
  }
  if (!validateCCNumber(ccNumber)) {
    valid = false;
  }
  if (!validateExpiry(ccExpiry)) {
    valid = false;
  }
  if (!validateCVV(ccCVV)) {
    valid = false;
  }

  if (valid) {
    document.getElementById("booked").click();
  }

}