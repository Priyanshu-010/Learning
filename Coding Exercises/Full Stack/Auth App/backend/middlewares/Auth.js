import jwt from "jsonwebtoken";
export const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers['authorization'];
  if (!auth) {
    console.log(auth)
    return res.status(403).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.log(error)
    res.status(401).json({ message: "Unauthorized" });
  }
}