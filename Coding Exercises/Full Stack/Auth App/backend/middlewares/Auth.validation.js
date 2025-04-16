import Joi from "joi";

export const signupValidation = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(2).max(20).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });
  const {error } = schema.validate(req.body);
  if(error){
    res.status(400).json({error: error.details[0].message});
  }else{
    next();
  }
}
export const loginValidation = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });
  const {error } = schema.validate(req.body);
  if(error){
    res.status(400).json({error: error.details[0].message});
  }else{
    next();
  }
}