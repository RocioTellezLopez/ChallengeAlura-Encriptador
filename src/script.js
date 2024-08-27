const inputMessage = document.getElementById("inputMessage");
const outputMessage = document.getElementById("outputMessage");
const modal = document.getElementById("modal");
const outputDiv = document.getElementById("output-div");
const copyButton = document.getElementById("copyButton");

function isValidInput(string) {
  return /^[a-z\s]*$/.test(string);
}

copyButton.addEventListener("click", function () {
  const textToCopy = outputMessage.value;

  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      alert("Mensaje copiado en el portapapeles");
    })
    .catch(() => {
      alert("No se pudo copiar el mensaje");
    });
});

function autoResize(textArea) {
  if (window.innerWidth < 1024) {
    textArea.style.height = "auto";
    textArea.style.height = textArea.scrollHeight + "px";
  } else {
    textArea.style.height = "75vh";
    textArea.style.overflow = "auto";
  }
}

function showModal() {
  modal.style.display = "block"; // Mostrar el modal
}

function hideModal() {
  modal.style.display = "none"; // Ocultar el modal
  outputDiv.style.display = "block";
}

function btnEncriptado() {
  if (!isValidInput(inputMessage.value)) {
    alert(
      "Solo se permiten letras minúsculas sin acentos ni caracteres especiales."
    );
    inputMessage.value = "";
  } else {
    const textEncriptado = encriptar(inputMessage.value);

    if (inputMessage.value === "") {
      showModal();
    } else {
      hideModal();
      outputMessage.value = textEncriptado;
      autoResize(outputMessage);
      outputMessage.style.display = "block";
    }
  }
}

function btnDesencriptado() {
  if (!isValidInput(inputMessage.value)) {
    alert(
      "Solo se permiten letras minúsculas sin acentos ni caracteres especiales."
    );
    inputMessage.value = "";
  } else {
    const textDesencriptado = desencriptar(inputMessage.value);

    if (inputMessage.value === "") {
      outputMessage.value = "Ningún mensaje fue encontrado";
    } else {
      outputMessage.value = textDesencriptado;
    }
  }
}

function encriptar(string) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  string = string.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (string.includes(matrizCodigo[i][0])) {
      string = string.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return string;
}

function desencriptar(string) {
  let matrizCodigo = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
  ];
  string = string.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (string.includes(matrizCodigo[i][1])) {
      string = string.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return string;
}
