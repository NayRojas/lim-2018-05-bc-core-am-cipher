window.cipher = {
  // ... 
  encode: (offset, string)=>{

  for(let i=0;i<string.length;i++)
  {
    let caracter = string.charCodeAt(i);
    if(caracter===32){ 
      resultado+=" ";
    }else if(caracter>=65 && caracter<=90){
      resultado+=String.fromCharCode((caracter-65+ parseInt(offset))% 26 + 65);
    }else if(caracter>=97 && caracter<=122){
      resultado+=String.fromCharCode((caracter- 97 + parseInt(offset))% 26 + 97 );
    }
  }
  return resultado;
  },

  decode:(offset, string) =>{
    
  offset=(26-(offset%26))%26;
  for(let i=0;i<string.length;i++)
  {
      let caracter1 = string.charCodeAt(i);
      if(caracter1>=65 && caracter1<=90){
        resultado+=String.fromCharCode((caracter1-65 +offset)% 26 +65);
    }else if(caracter1>=97 && caracter1<=122){
        resultado+=String.fromCharCode((caracter1-97 +offset)% 26 + 97);
    }else{
        resultado+=String.fromCharCode(caracter1);
    }
  }
  return resultado;
  }
};
