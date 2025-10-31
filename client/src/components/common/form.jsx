import React from 'react'

const CommonForm = ({formControls}) => {


  function renderInputsByComponentType(getControlItem){
    let element = null

    switch (key) {
      case 'input':
        (element = <Input
        name={getControlItem.name}
        placeholder = {getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        />)
        
        break;

         case 'select':
        (element = <Input
        name={getControlItem.name}
        placeholder = {getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        />)
        
        break;


         case 'textarea':
        (element = <Input
        name={getControlItem.name}
        placeholder = {getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        />)
        
        break;
    
      default:
         element = (<Input
        name={getControlItem.name}
        placeholder = {getControlItem.placeholder}
        id={getControlItem.name}
        type={getControlItem.type}
        />)
        break;
    }
    return element
  }
  return (
    <form>
    <div className='flex flex-col gap-3'>
      {
        formControls.map(controlItem=> <div key={controlItem.name} className='grid w-full gap-1.5'>
          <label className='mb-1'>
            {controlItem.label}
          </label>
          {
            renderInputsByComponentType(controlItem)
          }
        </div>)
      }
    </div>
    </form>
  )
}

export default CommonForm



//npx shadcn@latest add input select textarea 