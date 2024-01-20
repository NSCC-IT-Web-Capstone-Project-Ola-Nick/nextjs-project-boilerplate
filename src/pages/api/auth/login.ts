// api handler for login using jsonwebtoken to generate token
// and bcryptjs to compare password
// we are also connecting to our postgres database using prisma

import { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../../../../lib/prisma";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
    ) {
    if (req.method === "POST") {
        const { email, password } = req.body;
        // find the user in our database
        const user = await prisma.user.findUnique({
            where: {
                email: email,
            },
        });

        // if the user is not found, send a 404 error
        if (!user) {
        return res.status(404).json({ message: "User not found" });
        }
        
        // compare the password with the hashed password
        const valid = await bcrypt.compare(password, user.password as string);

        // if the password is not valid, send a unauthorized error
        if (!valid) {
        return res.status(401).json({ message: "Invalid password" });
        }

        // generate a token using jsonwebtoken
        const token = jwt.sign(
            { userId: user.id, email: user.email },
                process.env.JWT_SECRET as string,
            { expiresIn: "1d" },
        );
        
        // const token = jwt.sign(
        //     { userId: 65698594, email: "user@email.com" },
        //         process.env.JWT_SECRET as string,
        //     { expiresIn: "1d" },
        // );

        // send the token in the response
        res.status(200).json({ token: token });
        return;

        
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}
