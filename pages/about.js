import Layout from '../components/layout'
import Head from 'next/head'


function Home() {
  return<div>
      
      <Layout>
     <Head>
        <title>About</title>
       </Head>
       <h1>Welcome to about page js</h1>
    
    
    <div className="container">
      <h1>About Me</h1>
      <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lore</p>
    
    
    
    
    
    
      <style jsx>{`
        .container {
          margin: 50px;
        width: 500px;
        
            
        }
        h1{
        color:black;
        text-align: center;
        }
        p {
          color: black;
        }
      `}</style>
      <style jsx global>{`
        p {
          font-size: 20px;
        }
      `}</style>
    </div>
     <div className="container">
      <h1>Hello Next.js</h1>
      <img src="/profile.jpg" alt="my image" />
      <style jsx>{`
        .container {
          margin: 50px;
        }
        p {
          color: blue;
        }
      `}</style>
      <style jsx global>{`
        p {
          font-size: 20px;
        }
      `}</style>
    </div>
       </Layout>
   </div>
}   

export default Home