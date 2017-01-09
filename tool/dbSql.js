var UserSQL = {  
                insert:'INSERT INTO Userinfo(id,username,userpass) VALUES(0,?,?)', 
                queryAll:'SELECT * FROM Userinfo',  
                getUserById:'SELECT * FROM Userinfo WHERE uid = ? ',
              };
 module.exports = UserSQL;
