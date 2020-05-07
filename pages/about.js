import Layout from '../components/layout'
import Head from 'next/head'


function Home() {
  return<div>
      
      <Layout>
     <Head>
        <title>About</title>
       </Head>
       <h1 className="text-center">Welcome to about page</h1>
    
    
    <div className="container">
      
                    <div className="row  ">


                    <div className="col-md-6">
                        <div className="header-text  ">
                            <div className="header">
                                <h1>About Me</h1>
                            </div>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui incidunt asperiores soluta natus aliquid placeat alias rerum, quos facilis optio. Expedita minima quis voluptas quam alias provident itaque, sed odit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui incidunt asperiores soluta natus aliquid placeat alias rerum, quos facilis optio. Expedita minima quis voluptas quam alias provident itaque, sed odit.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui incidunt asperiores soluta natus aliquid placeat alias rerum, quos facilis optio. Expedita minima quis voluptas quam alias provident itaque, sed odit.</p>
                            

                        </div>
                    </div>
                    <div className="col-md-4">

                        <div className="">
                            <img src="/profile2.jpg" alt="my image"/>
                            </div>

                    </div>
                </div>
     
     
      
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