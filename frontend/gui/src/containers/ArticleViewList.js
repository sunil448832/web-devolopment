import React from 'react'
import axios from 'axios'
import Articles from '../components/Article'
import CostomForm from '../components/Form'
class ArticleList extends React.Component {
    state = {
        articles: []
    }
    componentDidMount() {
        axios.get("http://127.0.0.1:8000/api/")
            .then(res => {
                this.setState({
                    articles: res.data
                })
                console.log(res.data)
            })
        console.log("commponetdidmount")

    }
    render() {
        return (
            <div>
                <Articles data={this.state.articles} />
                <h1>Create Your Article</h1>
                <CostomForm requestType='post' articleID={null} btnText="Create" />
            </div>
        )
    }
}
export default ArticleList