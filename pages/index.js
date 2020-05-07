import Layout from '../components/layout'
import Head from 'next/head'
import unfetch  from 'isomorphic-unfetch'


function Home({charcter}) {
  return(
      <div>
      
      <Layout>
     <Head>
        <title>Home Page</title>
       </Head>
       <h1>Welcome</h1>
       </Layout>
   </div>
)}   


export async function getStaticProps(context) {
  
    const data = await unfetch('https://rickandmortyapi.com/api/character/');
    const charcter = await data.json();
    return {
    props: {
        charcter
        
        
    } // will be passed to the page component as props
  }
}

export default Home