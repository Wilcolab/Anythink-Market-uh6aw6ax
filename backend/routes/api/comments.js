const router = require("express").Router();
const mongoose = require("mongoose");
const Comment = mongoose.model("Comment");

module.exports = router;

// Hey GitHub Copilot, write a route to get all comments for a specific post
router.get("/", async (req, res) => {
  const postId = req.query.postId;
  if (!postId) {
    return res.status(400).json({ error: "Post ID is required" });
  }

  try {
    const comments = await Comment.find({ postId });
    res.status(200).json(comments);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Hey GitHub Copilot, write a route to delete a comment by ID
router.delete("/:id", async (req, res) => {
  const commentId = req.params.id;
  if (!commentId) {
    return res.status(400).json({ error: "Comment ID is required" });
  }

  try {
    const deletedComment = await Comment.findByIdAndDelete(commentId);
    if (!deletedComment) {
      return res.status(404).json({ error: "Comment not found" });
    }
    res.status(200).json({ message: "Comment deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
});

