var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {

    console.log(req.query.a);

  res.send(
      {
          success: "success",
          msg: "aliquip labore fugiat elit",
          data: {
              list: [
                  {
                      key: 540000200312240640,
                      username: "John Brown",
                      name: "John",
                      gender: "gender",
                      status: 0,
                      phone: "12345678901",
                      createTime: "2018-10-8 10:08",
                      modifyTime: "2018-10-8 10:09",
                      creator: "John",
                      modify: "Sam"
                  },
                  {
                      key: 450000197207165100,
                      username: "John Brown",
                      name: "John",
                      gender: "gender",
                      status: 0,
                      phone: "12345678901",
                      createTime: "2018-10-8 10:08",
                      modifyTime: "2018-10-8 10:09",
                      creator: "John",
                      modify: "Sam"
                  },
                  {
                      key: 810000198711057200,
                      username: "John Brown",
                      name: "John",
                      gender: "gender",
                      status: 0,
                      phone: "12345678901",
                      createTime: "2018-10-8 10:08",
                      modifyTime: "2018-10-8 10:09",
                      creator: "John",
                      modify: "Sam"
                  },
                  {
                      key: 370000197205236800,
                      username: "John Brown",
                      name: "John",
                      gender: "gender",
                      status: 0,
                      phone: "12345678901",
                      createTime: "2018-10-8 10:08",
                      modifyTime: "2018-10-8 10:09",
                      creator: "John",
                      modify: "Sam"
                  },
                  {
                      key: 430000197106122560,
                      username: "John Brown",
                      name: "John",
                      gender: "gender",
                      status: 0,
                      phone: "12345678901",
                      createTime: "2018-10-8 10:08",
                      modifyTime: "2018-10-8 10:09",
                      creator: "John",
                      modify: "Sam"
                  }
              ],
              itemNum: 30
          }
      }
  );
});

module.exports = router;
