const mysql=require("mysql");
var pool=mysql.createPool({
  host:"w.rdc.sae.sina.com.cn",
  user:"2z5m31301l",
  password:"hmi24lxj00zi00lyzz3ymwi4wm2h43l5whj1mmz3",
  database:"app_ethome",
  port:3306,
  connectionLimit:20//最大连接数
})

module.exports=pool;