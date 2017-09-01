import express from 'express';
import commonValidations from './../shared/validations/login';
import mongoose from 'mongoose';
import passwordHash from 'password-hash';
import User from './../models/User';
import isEmpty from 'lodash/isEmpty';
import jwt from 'jsonwebtoken';
import { uri } from './../constants';

let router = express.Router();
function validateInput(data, otherValidations) {
    let { errors } = otherValidations(data);
    return User
        .findOne({ email: data.email })
        .exec()
        .then((result) => {
            if (result) {
                errors.email = 'There is user with such email';
            }
        })
        .then(() => {
            return { errors, isValid: isEmpty(errors) }
        });
}

router.post('/login', (req, res) => {
    const { errors, isValid } = commonValidations(req.body);
    if (!isValid) {
        res
            .status(400)
            .json(errors);
    } else {
        const { email, password } = req.body;
        User
            .findOne({ email: email })
            .exec()
            .then((user) => {
                if (!user) {
                    res
                        .status(400)
                        .json({ email: 'Wrong email' });
                } else {
                    if (passwordHash.verify(password, user.passwordHash)) {
                        let token = jwt.sign(user, '047220ee-81ee-45ca-8960-41fe8530f556', { expiresIn: 1 });
                        req.session.token = token;
                        res
                            .status(200)
                            .json({ success: true, token });
                    } else {
                        res
                            .status(400)
                            .json({ password: 'Wrong password' });
                    }
                }

            })

    }

});

router.post('/register', (req, res) => {
    validateInput(req.body, commonValidations).then(({ errors, isValid }) => {
        if (!isValid) {
            res
                .status(200)
                .json(errors);
        } else {
            const { email, password } = req.body;
            var hashedPassword = passwordHash.generate(password);
            User.create({
                email: email,
                passwordHash: hashedPassword
            }, (error, user) => {
                if (!error) {
                    res
                        .status(200)
                        .json({ success: true });
                }
            })
        }
    });
});

router.post('/logout', (req, res) => {
    req.session.destroy(() => {
        res.send({ success: true });
    });
});
export default router;