import {
  addForm,
  findForm,
  findFormByEndPoint,
  updateForm,
  removeForm,
  addSubmission,
} from "../services/forms.js";

export const createForm = async (req, res, next) => {
  const { endPoint } = req.body;
  try {
    let newForm = await addForm({
      endPoint,
    });
    res.json({ newForm });
  } catch (error) {
    next(error);
  }
};

export const createSubmission = async (req, res, next) => {
  const { endPoint } = req.params;

  try {
    let userForm = await findFormByEndPoint(endPoint);
    let newSubmisson = await addSubmission(userForm, req.body);

    return res.json(newSubmisson);
  } catch (error) {
    console.log(error);
    return res.json(error);
  }
};

export const getForms = async (req, res, next) => {
  const { ids } = req.body;
  try {
    let forms = await findForm(ids);
    res.send(forms);
  } catch (error) {
    next(error);
  }
};

export const editForm = async (req, res, next) => {
  try {
    let form = await updateForm(req.body);
    res.send(form);
  } catch (error) {
    next(error);
  }
};

export const deleteForm = async (req, res, next) => {
  let { ids } = req.body;
  try {
    let form = await removeForm(ids);
    res.send(form);
  } catch (error) {
    next(error);
  }
};
