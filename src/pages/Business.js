import React, {useState, useEffect} from "react"
import Navbar from "../components/Navbar"

const Business = () => {
  const [articles, setArticles] = useState ([])
  const [term, setTerm] = useState ('election')

  useEffect(() => {
    const fetchArticles = async() => {
   try {
       const res = await fetch(
         `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=business&api-key=${process.env.REACT_APP_ARTICLES_API_KEY}`
         )
         const articles = await res.json()
         setArticles(articles.response.docs)
         console.log(articles.response.docs)
      } catch (error) {
        console.error(error);
      }
      }

   fetchArticles()
  }, [term])
  
  return (
    <>
    <Navbar />
      <div className="showcase-business">
        <div className="overlay">
          <h1 className="text-4x1 font-bold text-white text-center mb-4 lg:text-6xl">
            Viewing articles about Business
            </h1>
        </div>
      </div>

        <section className="grid grid-cols-1 gap-10 px-5 pt-10 pb-20">
        {articles.map((article) => {
          const {
            abstract, 
            headline: {main}, 
            byline:{original},
            lead_paragraph, 
            news_desk, 
            section_name,
            web_url, 
            _id, 
            word_count,
          } = article
       
        return (
          <article key={_id} className="bg-white py-10 px-5 rounfed-1g lg:w-9/12 lg:mx-auto" >
            <h2 className="font-bold text-2x1 mb-5 lg:text-3xl">{main}</h2>
            <p>{abstract}</p>
            <p>{lead_paragraph}</p>

            <ul className="my-4">
              <li>{original}</li>
              <li>
                <span className="font-bold">News Desk: </span> {news_desk}
                </li>
              <li>
              <span className="font-bold">Section Name: </span>  {section_name}
              </li>
              <li>
                <span className="font-bold"> Word Count: </span> {word_count}</li>
            </ul>
            <a href={web_url} target="_blank" className="underline">
              Web Resource 
              </a>
          </article>
        )
        })}
      </section>
      
 
    </>
    
  );
}


export default Business;
