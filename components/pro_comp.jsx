import Link from 'next/link'
import React from 'react'

function Pro_comp(props) {
    const { id,name,price}=props.data
    return (
        <div>
            <h1>{name}</h1>
            <p>{price}</p>
            <button >
                <Link href={`/product/${id}`}>
                    deatil
                </Link>
            </button>
            </div>
    )
}

export default Pro_comp