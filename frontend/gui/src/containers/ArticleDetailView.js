import React from 'react'
import axios from 'axios'
// import Articles from '../components/Article'
import { Card } from 'antd'
import CostomForm from '../components/Form'
class ArticleDetail extends React.Component {
    state = {
        article: {}
    }
    componentDidMount() {
        const articleID = this.props.match.params.articleID
        axios.get(`http://127.0.0.1:8000/api/${articleID}`)
            .then(res => {
                this.setState({
                    article: res.data
                })
            })
        console.log("commponetdidmount")

    }
    render() {
        return (
            <Card title={this.state.article.title}>
                <p>{this.state.article.content}</p>
                <h1>Update Your Article</h1>
                <CostomForm requestType='post' articleID={this.props.match.params.articleID} btnText="Update" />

            </Card>
        )
    }
}
export default ArticleDetail