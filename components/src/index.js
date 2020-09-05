import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui container comments">
            <div className="comment">
                <ApprovalCard>
                    Are you sure?
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        author="Sam"
                        avatar={faker.image.avatar()}
                        content="A post."
                        timeAgo="Today at 4pm"
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        author="Alex"
                        avatar={faker.image.avatar()}
                        content="Another post."
                        timeAgo="Today at 2pm"
                    />
                </ApprovalCard>
                <ApprovalCard>
                    <CommentDetail
                        author="Jane"
                        avatar={faker.image.avatar()}
                        content="A last post."
                        timeAgo="Yesterday at 3am"
                    />
                </ApprovalCard>
            </div>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
