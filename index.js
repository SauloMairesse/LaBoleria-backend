import express, {json} from 'express'
import cors from 'cors'
import chalk from 'chalk'
import dotenv from 'dotenv'
import indexRouter from './src/routers/indexRouter.js';

dotenv.config()
const app = express();

app.use(cors())
app.use(json())

//Rotas
app.use(indexRouter)

//configuracao da porta 
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(chalk.bold.green(`Servidor em pé na porta ${port}!`));
})
