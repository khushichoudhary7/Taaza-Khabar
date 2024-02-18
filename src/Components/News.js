import React, {useEffect,useState} from 'react';
import Newsitem from './Newsitem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from  "react-infinite-scroll-component";


const News =(props)=> {

const [articles, setarticles] = useState([]);
const [loading, setloading] = useState(true);
const [page, setpage] = useState(1);
const [totalResults, settotalResults] = useState(0);
 

// handleclicknext= async()=>{

// this.setState({page: this.state.page+1})
// this.update();
// }
// handleclickprevious= async()=>{
 
//   this.setState({page: this.state.page-1})
//   this.update();
// }
const firstcaptail=(string)=>{
return string.charAt(0).toUpperCase()+string.slice(1);
}
useEffect(() => {
  document.title=`Taaza Khabar-${firstcaptail(props.category)}`
  update();
  
}, []);

const update=async()=>{
  // props.setprogress(0);
  const Url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa46aaea6f8346bca4428d1ab2739132&page=${page}&pageSize=${props.pagesize}`;
 
  setloading(true)
  let data= await fetch(Url);
  let parsedata=await data.json();
  console.log(parsedata);
  setarticles(parsedata.articles);
  settotalResults(parsedata.totalResults);
  setloading(false);
  
    // props.setprogress(100);
}
const fetchMoreData=async()=>{
//  this.setState({page:this.state.page+1})
 
 const Url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=fa46aaea6f8346bca4428d1ab2739132&page=${page+1}&pageSize=${props.pagesize}`;
  // this.setState({loading: false})
  setpage(page+1);
  let data= await fetch(Url);
  let parsedata=await data.json();
  console.log(parsedata);
  setarticles(articles.concat(parsedata.articles));
  settotalResults(parsedata.totalResults);
  setloading(false);
  // this.setState({articles: this.state.articles.concat(parsedata.articles) ,
  //    totalResults: parsedata.totalResults, 
  //     // loading: false,
  //   })

}

  return (
    
      <>
      <h1 className='text-center ' style={{margin:'68px 0px'}}>Taaza Khabar--Top {firstcaptail(props.category)} HeadLines</h1>
       {loading && <Spinner />} 
       <InfiniteScroll
    dataLength={articles.length}
    next={fetchMoreData}
    // style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
    // inverse={true} //
    hasMore={articles.length !== totalResults}
    loader={<Spinner/>}  
    // scrollableTarget="scrollableDiv"
  >
  <div className='container'>
        <div className='row'>
          { articles.map((element)=>{
 return <div className='col-md-4' key={element.url}>
  <Newsitem  title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,88):""} imgurl={element.urlToImage}
  newsurl={element.url} author={element.author} date={element.publishedAt} source={element.source} />
</div>
          })}
          </div>
           </div>
          </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handleclickprevious}> &larr; Previous</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/props.pagesize)} type="button" className="btn btn-dark" onClick={this.handleclicknext} >Next  &rarr;</button>
        </div>
          */}
       
       
      </>
  )
}
  
  News.defaultProps={
    country:'in',
    pagesize:8,
    category: 'general',
  }
  
  News.propTypes={
    country:PropTypes.string,
    pagesize: PropTypes.number,
    category : PropTypes.string,
   }
export default News
