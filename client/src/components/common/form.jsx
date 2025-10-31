import React from 'react'

const CommonForm = ({formControls}) => {


  function renderInputsByComponentType(getControlItem){
    let element = null
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