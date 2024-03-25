import styles from "./styles.module.css"

const CommentItem = ({ comment }) => {
    return (
        <>
            <div className={styles.commentContainer}>
                <div>{comment.comment}</div>
                <div className={styles.controls}>
                    <span>View Reply</span>
                    <span>Add Reply</span>
                </div>
                {comment.subComments.length>0 && <Comment commentsData={comment.subComments} />}
            </div>
        </>
    )
}
const Comment = ({ commentsData }) => {
    console.log(commentsData)
    return (
        <>
            {commentsData.map((comment) =>
                <CommentItem comment={comment} key={comment.id} />
            )}
        </>
    )
}

export default Comment