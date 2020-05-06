import Layout from '../components/layout'
import Head from 'next/head'


function Home() {
  return<div>
      
      <Layout>
     <Head>
        <title>Portfolio</title>
       </Head>
      
    <div className="container">
  
     <h1>Welcome to My portfoio page Next.js</h1>
      
      <p>Let's explore different ways to style Next.js apps</p>
    
    
    
    
    
      <style jsx>{`
        .container {
          margin: 50px;
            height:100%
        }
        p {
          color: blue;
        }
      `}</style>
    </div>
     </Layout>
   </div>
    
}   

export default Home