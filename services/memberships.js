import { Membership } from "../models/memberships.js";
import { findQuery, removeQuery } from "../helpers/queries.js";

export const addMembership = async (membership) => {
  return new Promise((resolve, reject) => {
    const newMembership = new Membership(membership);
    newMembership.save(function (err) {
      if (err) {
        reject(err);
      }
      resolve(newMembership);
    });
  });
};

export const findMembership = async (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = findQuery(ids);
      const memberships = await Membership.find(query).exec();
      resolve(memberships);
    } catch (err) {
      reject(err);
    }
  });
};

export const updateMembership = async (membershipToUpdate) => {
  return new Promise(async (resolve, reject) => {
    try {
      let { _id } = membershipToUpdate;
      const membership = await Membership.findByIdAndUpdate(
        _id,
        membershipToUpdate,
        {
          new: true,
        }
      ).exec();
      resolve(membership);
    } catch (err) {
      reject(err);
    }
  });
};

export const removeMembership = async (ids) => {
  return new Promise(async (resolve, reject) => {
    try {
      let query = removeQuery(ids);
      let membership = await Membership.deleteMany(query).exec();
      resolve(membership);
    } catch (err) {
      reject(err);
    }
  });
};
