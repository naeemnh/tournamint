import { Router } from "express";
import passport from "passport";
import keys from "../config/keys.js";

const router = Router();

router.get('/google', passport.authenticate('google', {scope: ["profile", "email"]}));

router.get('/google/callback', passport.authenticate('google'), (req, res) => {
  res.redirect(`${keys.clientURL}`)
})

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/')
})

router.get('/current-user', (req, res) => {
  res.send(req.user);
});

export default router;