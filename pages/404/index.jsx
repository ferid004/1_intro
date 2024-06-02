import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

function Not_fount() {

    const router = useRouter()
    return (
        <div>
            <h1>                Not found            </h1>
            <button>
                <Link href={'/'}>
                    normal link ile getmey
                </Link>
            </button>
            <hr />
            <button onClick={() => router.push('/')}>sent to home</button>
        </div>
    )
}
Not_fount.useLayout=(page)=>page

export default Not_fount