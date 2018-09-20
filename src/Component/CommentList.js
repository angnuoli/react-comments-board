import React from 'react'

const CommentList = ({ comments, onDeleteComment }) => {
	return (
		<div className="comment-list-component">
			<h2>Comment List</h2>
			<ul className="list-group mb-3">
				{
					comments.map((comment, index) => 
						<li key={index} className="list-group-item">{comment}
							<button onClick={() => {onDeleteComment(index)}} type="button" className="close" aria-label="Close">
							<span aria-hidden="true">&times;</span>
							</button>
						</li>
					)
				}
			</ul>
		</div>
	)
}

export default CommentList;