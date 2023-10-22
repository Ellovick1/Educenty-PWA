import React from 'react'
import EnvBodyHead from './envBodyHead'
import { Button } from '@nextui-org/button'

function EnvBody() {
  return (
    <div className=' w-full pl-7 pt-4'>
      <div className='flex justify-between pr-4 items-center'>
        <EnvBodyHead/>
          <Button>Are you a School?</Button>
      </div>
        
        <div>
        {/* envBody */}
        </div>
        

    </div>
  )
}

export default EnvBody