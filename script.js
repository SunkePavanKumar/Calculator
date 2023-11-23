let display_input = "";

function display(input) {
  display_input = display_input.toString();
  if (input === "←") {
    if (display_input.length === 0) {
      display_input = "";
    } else {
      display_input = display_input.slice(0, -1);
      console.log(display_input);
    }

    document.querySelector(".display input").value = display_input;
  } else if (input === "C") {
    document.querySelector(".display input").value = "";
    display_input = "";
  } else if (input === "=") {
    try {
      if (display_input.length === 0) {
        document.querySelector(".display input").value = "";
      } else {
        display_input = eval(display_input);
        document.querySelector(".display input").value = display_input;
      }
    } catch (err) {
      document.querySelector(".display input").value = "ERROR";
    }
  } else {
    display_input += input;
    document.querySelector(".display input").value = display_input;
  }
}
