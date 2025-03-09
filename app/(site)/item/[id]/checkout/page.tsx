import React from 'react'

const checkout = async({ params}: {params: {id: string}} ) => {
  
  const {id} = await params;
 
  return (
    <div>checkout

      {id}
    </div>
  )
}

export default checkout