import { Form, Input, Button } from 'antd';
import React from 'react'
import axios from 'axios'
const FormItem = Form.Item
class CostomForm extends React.Component {

    handleformsubmit = (event, requestType, articleID) => {
        event.preventDefault();

        const title = event.target.elements.title.value
        const content = event.target.elements.content.value
        console.log(title)
        switch (requestType) {
            case 'post':
                return axios.post("http://127.0.0.1:8000/api/", {
                    title: title,
                    content: content
                }).then(res => console.log(res))


            case 'put':
                return axios.put(`http://127.0.0.1:8000/api/${articleID}/`, {
                    title: title,
                    content: content
                }).then(res => console.log(res))
            default:
                console.log("null")
                break

        }

    }
    render() {
        return (
            <div>
                <form onSubmit={event => this.handleformsubmit(
                    event,
                    this.props.requestType,
                    this.props.articleID)}
                >
                    <FormItem label="Title">
                        <Input name='title' placeholder="Put a title here" />
                    </FormItem>
                    <FormItem label="Content">
                        <Input name='content' placeholder="Put the content here" />
                    </FormItem>
                    <FormItem>
                        <Button type="primary" htmlType='submit'> {this.props.btnText} </Button>
                    </FormItem>

                </form>
            </div >
        )
    }
}
export default CostomForm