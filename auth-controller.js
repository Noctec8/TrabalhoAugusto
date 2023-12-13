

class AuthController {
  async Login(req, res) {
    let authed = req.body.email == "rodrigo@com.br" && req.body.password == "Rodrigo@2023"
    return res.send({
      authed
    })
  }

}

module.exports = AuthController