function resett() {
    document.getElementById("inputField").value = "";
    document.getElementById("inputField2").value = "";
    document.getElementById("inputField3").value = "";
  }

  function konversi() {
    const angkaIn = document.getElementById("inputField").value;
    if (angkaIn == "") {
      alert("Masukkan Angka");
    } else {
      if (document.getElementById("label1").innerHTML == "Celsius :") {
        var angkaOut = (angkaIn * 9) / 5 + 32;
        document.getElementById("inputField2").value = angkaOut;
        document.getElementById("inputField3").value = `Fahrenheit = (${angkaIn} * 9) / 5 + 32 = ${angkaOut}${String.fromCharCode(176)}F`;
      } else {
        var angkaOut = ((angkaIn - 32) * 5) / 9;
        document.getElementById("inputField2").value = angkaOut;
        document.getElementById("inputField3").value = `Celsius = (${angkaIn} - 32) * 5 / 9 = ${angkaOut}${String.fromCharCode(176)}C`;
      }
    }
  }

  function balik() {
    document.getElementById("fahtocel").innerHTML = "Fahrenheit to Celsius";
    document.getElementById("label1").innerHTML = "Fahrenheit :";
    document.getElementById("label2").innerHTML = "Celsius :";
    document.getElementById("button3").setAttribute("onclick", "balik2()");
  }

  function balik2() {
    document.getElementById("fahtocel").innerHTML = "Celsius to Fahrenheit";
    document.getElementById("label1").innerHTML = "Celsius :";
    document.getElementById("label2").innerHTML = "Fahrenheit :";
    document.getElementById("button3").setAttribute("onclick", "balik()");
  }

  