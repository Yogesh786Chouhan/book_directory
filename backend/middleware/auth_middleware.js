const jwt = require('jsonwebtoken')

const auth_middleware = (req, res, next) => {
    // console.log("middleware called");
    // console.log(req.body)
    console.log(req.headers)
    try {
        const token = req.headers['authorization'].split(" ")[1];
        // console.log(token)
        jwt.verify(token, process.env.SECRET_KEY, (error, decode) => {
            if (error) {
                res.json({ message: "Invalid token", success: false });
            }
            else {
                console.log(decode);
                req.body.uid = decode.uid;
                next();
            }
        })

    } catch (error) {
        res.json({ message: "Invalid user", success: false });
    }
}

module.exports = { auth_middleware }
