import React, {useState, useEffect} from 'react'
import api from '../../providers/api';
import Card from '../../components/Card';
import TagBox from '../../components/TagBox';

export default function Articles () {

    const [articles, setArticles] = useState([])
 
    useEffect(() => {
        api.get(`/articles`)
        .then(res => {
          const articles = res.data.articles;
          setArticles( articles );
        })
    }, [])    

    return (<>
      <div class="home-page">
        <div class="banner">
          <div class="container">
            <h1 class="logo-font">Reader</h1>
            <p>A place to share your knowledge.</p>
          </div>
        </div>
        <div class="container page">
          <div class="row">
            <div class="col-md-9">
              <div class="feed-toggle">
                <ul class="nav nav-pills outline-active">
                  <li class="nav-item">
                    <a class="nav-link active" href="">Global Feed</a>
                  </li>
                </ul>
              </div>
              {articles.map(article => <Card data={article}/>)}
            </div>
            <TagBox/>
          </div>
        </div>
      </div>
</>)
}
 