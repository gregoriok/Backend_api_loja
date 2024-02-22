import usuario from "../models/Usuario.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

class UsuarioController{

    static async realizarLogin(req, res){
     const usuarioEnviado = req.body.usuario;
     const senhaEnviada = req.body.senha;

     if (!usuarioEnviado || !senhaEnviada){
          return res.status(422).json({message: 'É obrigatório informar nome de usuário e senha'})
     }
     try{
          
          const user = await usuario.findOne({user: usuarioEnviado})
          if (!user){
              return res.status(404).json({ message: 'Usuário não encontrado!'});
          }
          const comparaSenhas = await bcrypt.compare(senhaEnviada, user.senha)
          if(!comparaSenhas){
               return res.status(422).json({ message: 'Senha inválida!'});
          }

          const secret = process.env.secret
          const token = jwt.sign({
               id: user._id
          },
          secret,)
          return res.status(200).json({ 
               message: ' connectado',
               token: token});
     }catch(erro){
          return res.status(500).json({ message: `${erro.message} - Falha no servidor`});
     }
    }

}

export default UsuarioController;