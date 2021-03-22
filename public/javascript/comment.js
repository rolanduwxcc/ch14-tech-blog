// const { post } = require("../../controllers/home-routes");

//this use Fetch to associate the new comment with a post!!
async function commentFormHandler(event) {
    event.preventDefault();
    
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();

    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    console.log(comment_text, post_id);

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({
                post_id,
                comment_text

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(">>>>"+response);
        if (response.ok) {
            // document.location.reload();
            console.log(response.ok);
            console.log(response);
        } else {
            alert(response.statusText);
        }
    }
}

console.log(document.querySelector('#add-comment-btn'));
document.querySelector('#add-comment-btn').addEventListener('submit', commentFormHandler);