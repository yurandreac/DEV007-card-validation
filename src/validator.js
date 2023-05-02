
const validator = {
  isValid : function(number){
    const copyNumber = [...number]
    const numberReversedAndMultiplied = copyNumber.reverse().map((numeroEvaluado, i) => {
      if(i % 2 !== 0 ){
        numeroEvaluado = numeroEvaluado * 2
        if(numeroEvaluado >= 10){
          return numeroEvaluado - 9
        }
        return numeroEvaluado
      }
      return numeroEvaluado * 1
    })
    const initValue = 0
    const totalSumCardNumbers = numberReversedAndMultiplied.reduce((acum, currentValue) => {
      return acum + currentValue
    }, initValue )
    if(totalSumCardNumbers % 10 === 0){
      return true
    }else{
      return false
    }
  },
  maskify : function(numberOriginal){
    const numberMaskify = numberOriginal.split("").fill("#",0,-4)
    const maskifiedString = numberMaskify.join("")
    return maskifiedString
  }
}; 
export default validator;
