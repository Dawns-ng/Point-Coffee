const express = require("express");
const bcrypt = require("bcrypt");
const db = require("./db");

const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;

    db.query(
        "SELECT * FROM users WHERE email = ?",
        [email],
        (err, result) => {

            if (result.length === 0) {
                return res.json({
                    status: "error",
                    message: "Akun tidak ditemukan"
                });
            }

            const user = result[0];

            bcrypt.compare(password, user.password, (err, isMatch) => {

                if (!isMatch) {
                    return res.json({
                        status: "error",
                        message: "Password salah"
                    });
                }

                return res.json({
                    status: "success",
                    message: "Login berhasil"
                });

            });

        }
    );
});

module.exports = router;