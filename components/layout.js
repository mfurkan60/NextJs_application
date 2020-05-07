import Navigation from './navigation'
import Head from 'next/head'

  

function Layout ({children}){
        return<div>
            
        <Head>
        <title>Web Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" />
            </Head>
             <Navigation/>
            
            <main>
        {children}
        </main>
      
        <footer class="py-4 bg-dark text-white text-center" >
		Copyright © Your Website 2020 by MERT ERGÜDEN
	       </footer>
        </div> 
      
     
        
    }


export default Layout