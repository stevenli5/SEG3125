/* Phone number input formatting */

$("input[type='tel']").each(function(){
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

  /* CC Expiry input formatting */

  $("input[id='ccExpiry']").each(function(){
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

function validateExpiry(input) {
    let label = document.getElementById("ccExpiryLabel");
    let date = new Date();
    let currMonth = date.getMonth();
    let currYear = date.getFullYear().toString().substr(-2);
    console.log()

    if (((input.value.length === 0) || (input.value.length === 5)) && ((input.value.substr(0, 2) > 12) || ((currYear > input.value.substr(3, 2)) || ((currYear === input.value.substr(3, 2)) && ((currMonth >= input.value.substr(0, 2))))))) {
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Expiry Date';
        document.getElementById('ccExpiryTooltip').setAttribute('title','Invalid date');
        document.getElementById('ccExpiryTooltip').setAttribute('data-bs-original-title','Invalid date');
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Expiry Date';
        document.getElementById('ccExpiryTooltip').setAttribute('title','Expiry Date');
        document.getElementById('ccExpiryTooltip').setAttribute('data-bs-original-title','Expiry Date');
    }
}

function validateEM(input) {
    let label = document.getElementById("emailLabel");
    const em = new RegExp("[\\w\\-\\.]+@[a-zA-Z0-9]+\\.[[a-zA-Z]+");

    if (!em.test(input.value)) {
        input.classList.add("error");
        label.innerHTML = '<i class="fas fa-exclamation-circle px-1 text-danger"></i> Email Address';
        document.getElementById('emailTooltip').setAttribute('title','mytitle');
        document.getElementById('emailTooltip').setAttribute('data-bs-original-title','mytitle');
    } else {
        input.classList.remove("error");
        label.innerHTML = 'Email Address';
        document.getElementById('ccExpiryTooltip').setAttribute('title','Invalid date');
        document.getElementById('ccExpiryTooltip').setAttribute('data-bs-original-title','Invalid date');
    }
}

function validate() {
    const pn = new RegExp("\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}");
    const cc = new RegExp("\\b\\d{4}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4}\\b");
    const em = new RegExp("[\\w\\-\\.]+@[a-zA-Z0-9]+\\.[[a-zA-Z]+");
}