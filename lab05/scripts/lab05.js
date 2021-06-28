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
    minTime: '10:00am',
    maxTime: '6:00pm',
    startTime: '10:00',
    dynamic: false,
    dropdown: true,
    scrollbar: true
  });
});

/* Validate Email */

function validateEmail(input) {
  let label = document.getElementById("emailLabel");
  const em = new RegExp("[\\w\\-\\.]+@[a-zA-Z0-9]+\\.[[a-zA-Z]+");

  if (!em.test(input.value)) {
    input.classList.add("error");
    label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Email Address';
    document.getElementById('emailTooltip').setAttribute('title', 'Invalid email address. Format: example@domain.com Example: adam@hotmail.com');
    document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Invalid email address. Format: example@domain.com Example: adam@hotmail.com');
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Email Address';
    document.getElementById('emailTooltip').setAttribute('title', 'Email Address');
    document.getElementById('emailTooltip').setAttribute('data-bs-original-title', 'Email Address');
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
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Phone&nbsp;Number';
    document.getElementById('phoneTooltip').setAttribute('title', 'Optional - in case a change has been made to your appointment, we\'ll call you.');
    document.getElementById('phoneTooltip').setAttribute('data-bs-original-title', 'Optional - in case a change has been made to your appointment, we\'ll call you.');
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
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Card Number';
    document.getElementById('ccNumberTooltip').setAttribute('title', 'Example: 4520 0038 3443 0402');
    document.getElementById('ccNumberTooltip').setAttribute('data-bs-original-title', 'Example: 4520 0038 3443 0402');
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
  } else {
    input.classList.remove("error");
    label.innerHTML = 'Expiry Date';
    document.getElementById('ccExpiryTooltip').setAttribute('title', 'Expiry Date');
    document.getElementById('ccExpiryTooltip').setAttribute('data-bs-original-title', 'Expiry Date');
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
  } else {
    input.classList.remove("error");
    label.innerHTML = 'CVV';
    document.getElementById('ccCVVTooltip').setAttribute('title', 'The three digits (security code) on the back of your card. Example: 034');
    document.getElementById('ccCVVTooltip').setAttribute('data-bs-original-title', 'The three digits (security code) on the back of your card. Example: 034');
  }
}

function validate() {
  const pn = new RegExp("\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}");
  const cc = new RegExp("\\b\\d{4}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4}\\b");
  const em = new RegExp("[\\w\\-\\.]+@[a-zA-Z0-9]+\\.[[a-zA-Z]+");
}