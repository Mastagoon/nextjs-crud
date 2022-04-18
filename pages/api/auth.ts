import { NextApiRequest, NextApiResponse } from "next";
import mysql from "mysql2"

const url = {
	host: 'localhost',
	user: 'testuser1',
	password: '123456',
	database: "test1"
}


export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === 'POST') {
		try {
			const { username, password } = req.body
			const conn = mysql.createConnection(url)
			conn.execute(`select * from users where username = '${username}' and password = '${password}'`, (err, rows) => {
				console.log(rows)
				return rows.length ? res.status(200).json({ status: "success" }) : res.status(401).json({ status: "fail" })
			})
		} catch (a: any) {
			return res.status(500).json({ message: a.message })
		}
	}
}
