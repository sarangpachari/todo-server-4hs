class TodoEntity {
    constructor(
      id,
      creatorId,
      title,
      content,
      isFavourite = false,
      status = "ongoing",
      createdAt = new Date(),
      updatedAt = new Date()
    ) {
      this.id = id;
      this.creatorId = creatorId;
      this.title = title;
      this.content = content;
      this.isFavourite = isFavourite;
      this.status = status;
      this.createdAt = createdAt;
      this.updatedAt = updatedAt;
    }
  }
  
  module.exports = TodoEntity;
  