const mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'vueTea'
})
module.exports = connection;
// 测试连接
connection.connect(res=>{
if (!res){
    console.log('connect success')
}
})