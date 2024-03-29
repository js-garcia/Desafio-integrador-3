import dotenv from 'dotenv'
import { Command } from 'commander'

const program = new Command()

program
    .option('--mode <mode>', "Ingrese el modo de trabajo", 'DEVELOPMENT')
program.parse()

const environment = program.opts().mode

dotenv.config({
    path: environment === "DEVELOPMENT" 
    ? './.env.development' 
    : './.env.production'
})

