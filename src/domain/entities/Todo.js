
const todoEntityFactory = (
  id,
  creatorId,
  title,
  content,
  isFavourite = false,
  status = "ongoing",
  createdAt = new Date(),
  updatedAt = new Date()
) => {
  return {
    id,
    creatorId,
    title,
    content,
    isFavourite,
    status,
    createdAt,
    updatedAt
  };
};

module.exports = todoEntityFactory;
