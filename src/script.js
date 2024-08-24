const textArea = document.getElementById("inputMessage");
const mensaje = document.getElementById("outputMessage");
const modal = document.getElementById("modal");
const outputDiv = document.getElementById("output-div")

function showModal() {
  modal.style.display = "block"; // Mostrar el modal
}

function hideModal() {
  modal.style.display = "none"; // Ocultar el modal
  outputDiv.style.display = "block"
}

function btnEncriptado() {
  const textEncriptado = encriptar(textArea.value)

  if (textArea.value === "") {
    showModal()
  } else {
    hideModal()
    mensaje.value = textEncriptado;
    console.log(textEncriptado);
    mensaje.style.display = "block"
    
  }
}

function btnDesencriptado() {
  const textDesencriptado = desencriptar(textArea.value)

  if (textArea.value === "") {
    mensaje.value = "Ningún mensaje fue encontrado"; 
  } else {
    mensaje.value = textDesencriptado;
  }

  
}

function encriptar (string) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  string = string.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if(string.includes(matrizCodigo[i][0])){
      string = string.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
    
  }

  return string

}


function desencriptar (string) {
  let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
  string = string.toLowerCase()

  for (let i = 0; i < matrizCodigo.length; i++) {
    if(string.includes(matrizCodigo[i][1])){
      string = string.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
    }
    
  }

  return string

}