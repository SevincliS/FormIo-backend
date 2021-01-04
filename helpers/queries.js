import mongoose from "mongoose";
let { ObjectId } = mongoose.Types;

export const findQuery = (ids) => {
  let query;
  if (!ids) {
    query = {};
  } else if (typeof ids === "string") {
    query = { _id: ObjectId(ids) };
  } else {
    query = {
      _id: { $in: ids.map((id) => ObjectId(id)) },
    };
  }
  return query;
};

export const removeQuery = (ids) => {
  let query;
  if (typeof ids === "string") {
    query = { _id: ObjectId(ids) };
  } else {
    query = {
      _id: { $in: ids.map((id) => ObjectId(id)) },
    };
  }
  return query;
};
