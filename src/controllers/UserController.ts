import e, { Request, Response } from 'express';
import EmailService from '../services/EmailServices';

const users = [
    {name: 'Emerson', email: 'emerson@emerson.com'},
];

export default {
 async index(req: Request, res: Response ) {
  return res.json(users)
 },
 async create (req: Request, res: Response) {
  const emailService = new EmailService();

  emailService.sendMail({
    to: {
      name: "Emerson Pinheiro", 
      email: 'emerson@emerson.com.br'
    },
    message: { 
      subject: 'Bem-vindo ao sistema', 
      body: 'Seja bem-vind',}
    });
  return res.send();
 }
};