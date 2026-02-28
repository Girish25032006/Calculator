let input=document.querySelector('.input');
    function calculate(value){
      input.value=input.value+value;
    }
    function answer(){
      try{
        input.value=eval(input.value);
      }
      catch(error){
        input.value='ERROR'
      }
    }
    function clearbutton(){
      input.value='';
    }
    function cancel(value){
      input.value=input.value.slice(0,-1);
    }