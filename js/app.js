let pass = document.getElementById('pass')
let togglePass = document.getElementById('togglePass')
let casoMin = document.getElementById('minu')
let casoMayu = document.getElementById('mayu')
let casoNum = document.getElementById('num')
let casoEspecial = document.getElementById('especial')
let tamaño = document.getElementById('tam')

pass.addEventListener('keyup', (e) => {
  validarContraseña(e.target.value)
})

function validarContraseña(data){
  const min = new RegExp('(?=.*[a-z])')
  const mayu = new RegExp('(?=.*[A-Z])')
  const num = new RegExp('(?=.*[0-9])')
  const especial = new RegExp('(?=.*[!@#\$%\^&\*])')
  const tam = new RegExp('(?=.{8,})')

  if(min.test(data)){
    casoMin.classList.add('valida')
  }else{
    casoMin.classList.remove('valida')
  }

  if(mayu.test(data)){
    casoMayu.classList.add('valida')
  }else{
    casoMayu.classList.remove('valida')
  }

  if(num.test(data)){
    casoNum.classList.add('valida')
  }else{
    casoNum.classList.remove('valida')
  }

  if(especial.test(data)){
    casoEspecial.classList.add('valida')
  }else{
    casoEspecial.classList.remove('valida')
  }

  if(tam.test(data)){
    tamaño.classList.add('valida')
  }else{
    tamaño.classList.remove('valida')
  }
}

togglePass.addEventListener('click', () => {
  if(pass.type === 'password'){
    pass.setAttribute('type','text')
    togglePass.classList.add('hide')
  }else{
    pass.setAttribute('type','password') 
    togglePass.classList.remove('hide')
  }
})