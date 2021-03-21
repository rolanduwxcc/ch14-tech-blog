//this use Fetch to associate the new comment with a post!!
async function commentFormHandler(event) {
    console.log(comment_text + "----------------");
    event.preventDefault();

    
    const comment_text = document.querySelector('textarea[name="comment-body"]').value.trim();
    console.log(comment_text + "----------------");

    const post_id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    if (comment_text) {
        const response = await fetch('/api/comments', {
            method: 'post',
            body: JSON.stringify({
                post_id,
                comment_text

            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (response.ok) {
            console.log("OK----------------------");
            document.location.reload();
        } else {
            alert(response.statusText);
        }
    }
}

console.log(document.querySelector('#add-comment-btn'));
document.querySelector('#add-comment-btn').addEventListener('submit', commentFormHandler);