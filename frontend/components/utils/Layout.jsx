import Head from 'next/head'
import React from 'react'

import Navbar from './Navbar'

export default function Layout({children,title,description,pages}) {



  return (
    <div>
        <Head>
        <title>{title?title:""}</title>
        <meta name="description" content={description?description:""} />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
        <main>
             <Navbar pages={pages?pages:[]}/>
           <div>
            {children}
           </div>
           
        </main>
        <footer>     

        </footer>
    </div>
  )
}