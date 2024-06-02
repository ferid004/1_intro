import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import React from 'react'

function Layout(props) {
    return (
        <div>
            <Navbar />
            <main>
                {props.children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout