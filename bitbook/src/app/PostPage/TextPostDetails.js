import React, { Component } from 'react';
import { dataServices } from '../../service/dataService';
import PostList from '../HomePage/PostList';
import PostItem from '../sharedComponents/PostItem';
import AddCommentForm from './AddCommentForm';
import CommentList from './CommentList'

class TextPostDetails extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post: {},
            comments: []
        }
    }

    getAllComments = (id) => {
        dataServices.getComment(id)
            .then((myComments) => {
                this.setState({
                    comments: myComments
                })
            })
    }

    componentDidMount() {
        dataServices.getTextPost(this.props.match.params.id)
            .then((myPost) => {
                this.setState({
                    post: myPost
                })
                this.getAllComments(myPost.id)
            })
    }

    onInvalidate = () => {
        this.getAllComments(this.state.post.id)
    }

    render() {
        return (
            <div className="ui three column grid">
                <div className="row">
                    <div className='four wide column'></div>
                    <div className='eight wide column'>
                        <PostItem onePost={this.state.post} />
                        <AddCommentForm postId={this.state.post.id} invalidate={this.onInvalidate} />
                        <CommentList comments={this.state.comments} />
                    </div>
                    <div className='four wide column'>
                    </div>
                </div>
            </div>
        )
    }
}

export default TextPostDetails;