import Layout from '../components/layout'
import Head from 'next/head'
import unfetch  from 'isomorphic-unfetch'


function Home({charcter}) {
  return(
      <div>
      
      <Layout>
     <Head>
        <title>Home Page</title>
      link
      
       </Head>
      
       
      
       <div class="container">
         
         <div class="row">
             <div class="col-md-6">
      <div id="section1">
                 <h1 class="text-center">Hi I am Helena</h1>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, animi.</p>
                 
             </div> 
      
      </div>
             <div class="col-md-6"><div  id="section2">
                          <img src="/profile.jpg" alt="my image" />

                     
                     
                 </div></div>
         </div>
         
     </div>
      
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