
const validator = {
  
  isValid : function(number){
    let copyNumber = [...number]
    let numberReversedAndMultiplied = copyNumber.reverse().map((numeroEvaluado, i) => {
      if(i % 2 != 0 ){
        numeroEvaluado = numeroEvaluado * 2
        if(numeroEvaluado >= 10){
          return numeroEvaluado - 9
        }
        return numeroEvaluado
      }
      return numeroEvaluado * 1
    })
    let initValue = 0
    let totalSumCardNumbers = numberReversedAndMultiplied.reduce( (acum, currentValue) => {
      return acum + currentValue
    }, initValue )
    if(totalSumCardNumbers % 10 === 0){
      return true
    }else{
      return false
    }
  },
  
  maskify : function(numberOriginal){
    let numberMaskify = numberOriginal.fill("x",0,-4)
    let maskifiedString = numberMaskify.join("")
    return maskifiedString

  }
  };
  
export default validator;
