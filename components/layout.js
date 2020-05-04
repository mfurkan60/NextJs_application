import Navigation from './navigation'
import Head from 'next/head'

  

function Layout ({children}){
        return<div>
            
        <Head>
        <title>Web Page</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
             <Navigation/>
            
            <main>
        {children}
        </main>
      
       <footer>
            
            desing by Mert
            </footer>
        </div> 
      
     
        
    }


export default Layout