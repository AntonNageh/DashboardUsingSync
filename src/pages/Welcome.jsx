import { RedirectToSignIn} from '@clerk/clerk-react'
import React from 'react'

const Welcome = () => {

  return (
    <div>
      <RedirectToSignIn/>
    </div>
  )
}

export default Welcome