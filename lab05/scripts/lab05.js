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
        if (area.length < 3) {
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

  $("input[id='ccExpiry']").each(function(){
    $(this).on("change keyup paste", function (e) {
      let output,
        $this = $(this),
        input = $this.val();

        let date = new Date();
        let currMonth = date.getMonth();
        let currYear = date.getFullYear().toString().substr(-2);
  
      if (e.keyCode != 8) {
        input = input.replace(/[^0-9]/g, '');
        let month = input.substr(0, 2);
        let year = input.substr(2, 2);
        if (month.length < 2) {
          output = month + "/";
        } else if (month.length == 2 && year.length < 2) {
          output = month + "/" + year;
        } else if (month.length == 2 && year.length == 2) {
            output = month + "/" + year;
        }

        if ((output.length === 5) && ((month > 12) || ((currYear > year) || ((currYear === year) && ((currMonth >= month)))))) {
            console.log("no good");
        }

        $this.val(output);
      }
    });
  });

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
    }
}

function validate() {
    const pn = new RegExp("\\(?\\d{3}\\)?-? *\\d{3}-? *-?\\d{4}");
    const cc = new RegExp("\\b\\d{4}[ -]?\\d{4}[ -]?\\d{4}[ -]?\\d{4}\\b");
    const em = new RegExp("[\\w\\-\\.]+@[a-zA-Z0-9]+\\.[[a-zA-Z]+");
}