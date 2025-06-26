import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import OnlineChat from '../Components/OnlineChat'

const Home = () => {
    return(
        <section>

        <Navbar />
        <main>
            <h1>Home Page</h1>
        </main>

        <OnlineChat />

        <Footer />

        </section>
    )
  
}

export default Home