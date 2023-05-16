import {ReactElement, useState} from 'react';


export function UseMultiStepForm(steps: ReactElement[]) {
  const [currentStepIndex, setCurrentStepIndex] = useState(0);



function nextStep() {
  setCurrentStepIndex(i => {
    if (i >= steps.length - 1) return i
    return i + 1
  })
}

function previousStep() {
  setCurrentStepIndex(i => {
      if(i <= 0) return i 
      return i-1
    })
}

function termsStep() {
  if(currentStepIndex === 1) return alert('by continuing you are agreeing to the terms stated')
}


function goTo(index: number) {
  setCurrentStepIndex(index)
}



  return {
    currentStepIndex,
    step: steps[currentStepIndex],
    steps,
    isFirstStep: currentStepIndex === 0,
    isLastStep: currentStepIndex === steps.length - 1,
    termsStep,
    goTo,
    nextStep,
    previousStep,
  }
}