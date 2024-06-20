import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "react_proj1_db",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM tbl_user";
  db.query(sql, (err, data) => {
    if (!err) {
      return res.json(data);
    } else {
      return res.json({ Error: "Error ".err });
    }
  })
});

app.get("/getrecord/:id", (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM tbl_user WHERE id = ?";
  db.query(sql,[id], (err, data) => {
    if (!err) {
      return res.json(data);
    } else {
      return res.json({ Error: "Error ".err });
    }
  });
});


app.post("/create", (req, res) => {
  const sql = "INSERT INTO `tbl_user`(`name`, `email`, `phone`) VALUES (?)";
  const values = [
    req.body.name,
    req.body.email,
    req.body.phone,
  ];
  db.query(sql, [values],(err, data) => {
    if (!err) {
      return res.json(data);
    } else {
      return res.json({ Error: "Error ".err });
    }
  });
});

app.put("/update/:id", (req, res) => {
  const sql = "UPDATE `tbl_user` SET `name` = ?, `email`= ?, `phone`= ? WHERE `id` = ?";
  const values = [req.body.name, req.body.email, req.body.phone];
  const id = req.params.id;
  db.query(sql, [...values, id], (err, data) => {
    if (!err) {
      return res.json(data);
    } else {
      return res.json({ Error: "Error ".err });
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const sql = "DELETE FROM `tbl_user` WHERE `id` = ?";
  const id = req.params.id;
  db.query(sql, [id], (err, data) => {
    if (!err) {
      return res.json(data);
    } else {
      return res.json({ Error: "Error ".err });
    }
  });
});


app.listen('7000', () => {
  console.log("server started..")
});
