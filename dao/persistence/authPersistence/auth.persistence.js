// traer todos los usuarios
const queryAllUserPass = "SELECT idusuario, angular_password, email  FROM Usuarios";

// actualizar contraseña
const queryUpdateDefaultPassWord = "UPDATE usuarios SET ANGULAR_PASSWORD = $1 WHERE idusuario = $2";

const queryUrlEndpoint = "SELECT * ot_angular_endpoints"


module.exports = {

    queryAllUserPass,
    queryUpdateDefaultPassWord,
    queryUrlEndpoint
}