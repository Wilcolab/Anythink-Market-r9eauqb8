/**
 * @module routes/api/comments
 * Express router for handling comment-related endpoints.
 */

 /**
    * GET /post/:postId
    * Retrieves all comments for a specific post.
    *
    * @param {string} req.params.postId - The ID of the post to fetch comments for.
    * @returns {Object[]} 200 - Array of comment objects.
    * @returns {Object} 500 - Error message if fetching fails.
    */

 /**
    * DELETE /:commentId
    * Deletes a specific comment by its ID.
    *
    * @param {string} req.params.commentId - The ID of the comment to delete.
    * @returns {Object} 200 - Success message.
    * @returns {Object} 500 - Error message if deletion fails.
    */

 /**
    * POST /
    * Creates a new comment.
    *
    * @param {Object} req.body - The comment data to create.
    * @returns {Object} 200 - The created comment object.
    * @returns {Object} 500 - Error message if creation fails.
    */
const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;
// Hey GitHub Copilot, help me write a route to get all comments for a specific post

router.get("/post/:postId", async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch comments" });
  }
});

// add another endpoint for deleting a comment
router.delete("/:commentId", async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.commentId);
    res.json({ message: "Comment deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete comment" });
  }
});

// add another endpoint for creating a comment
router.post("/", async (req, res) => {
  try {
    const newComment = new Comment(req.body);
    const savedComment = await newComment.save();
    res.json(savedComment);
  } catch (err) {
    res.status(500).json({ error: "Failed to create comment" });
  }
}); 