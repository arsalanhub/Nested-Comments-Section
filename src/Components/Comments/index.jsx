import { useState } from "react"
import styles from "./styles.module.css"
import { getRandomAvatar } from "../../utils/helper";

const CommentItem = ({ comment, addNewReply }) => {
    const [visible, setVisible] = useState(false);
    const [addReply, setAddReply] = useState(false);

    const handleBlur = (e) => {
        const newComment = e.target.value;
        addNewReply(comment.id, newComment);
        setAddReply(false);
        setVisible(true);
    }
    return (
        <>
            <div className={styles.commentContainer}>
                <div className={styles.details}>
                    <div className={styles.image}>
                        <img style={{ height: "3rem", width: "3rem" }} src={getRandomAvatar()} />
                    </div>
                    <div>
                        <div>{comment.comment}</div>
                        <div className={styles.controls}>
                            {comment.subComments.length > 0 && <span onClick={() => setVisible(!visible)}>
                                View Reply
                            </span>}
                            <span onClick={() => setAddReply(!addReply)}>Add Reply</span>
                        </div>
                    </div>
                </div>
                {visible && comment.subComments.length > 0 && <Comment commentsData={comment.subComments} addNewReply={addNewReply} />}
                {addReply && <input className={styles.replyBox} type="text" autoFocus placeholder="Enter you reply" onBlur={(e) => handleBlur(e)}
                    onKeyDown={(e) => e.key === "Enter" && handleBlur(e)} />}
            </div>
        </>
    )
}
const Comment = ({ commentsData, addNewReply }) => {
    console.log(commentsData)
    return (
        <>
            {commentsData.map((comment) =>
                <CommentItem comment={comment} key={comment.id} addNewReply={addNewReply} />
            )}
        </>
    )
}

export default Comment