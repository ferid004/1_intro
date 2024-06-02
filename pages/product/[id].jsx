import { useRouter } from 'next/router'
import React from 'react'

const Pro_detail = () => {
    const router=useRouter()
    const {id}=router.query
    console.log(id);
  return (
    <div>
        burda mehsul daha genish olacaq
        
    </div>
  )
}

export default Pro_detail