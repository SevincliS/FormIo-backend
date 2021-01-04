import {
  addMembership,
  findMembership,
  updateMembership,
  removeMembership,
} from "../services/memberships.js";

export const createMembership = async (req, res, next) => {
  const { name, price, properties } = req.body;
  try {
    let newMembership = await addMembership({
      name,
      price,
      properties,
    });
    res.json({ newMembership });
  } catch (error) {
    next(error);
  }
};

export const getMemberships = async (req, res, next) => {
  const { ids } = req.body;
  try {
    let memberships = await findMembership(ids);
    res.send(memberships);
  } catch (error) {
    next(error);
  }
};

export const editMembership = async (req, res, next) => {
  try {
    let membership = await updateMembership(req.body);
    res.send(membership);
  } catch (error) {
    next(error);
  }
};

export const deleteMembership = async (req, res, next) => {
  let { ids } = req.body;
  try {
    let membership = await removeMembership(ids);
    res.send(membership);
  } catch (error) {
    next(error);
  }
};
