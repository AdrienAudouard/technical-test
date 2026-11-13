import express from 'express'
import cors from 'cors'
import hotelsRouter from './routes/hotel'
import usersRouter from './routes/user'
import { errorMiddleware } from './middlewares/errorMiddleware'

const app = express()

app.use(cors())

app.use('/hotels', hotelsRouter)
app.use('/users', usersRouter)
app.use(errorMiddleware)

app.listen(9000, function () {
  console.log('Example app listening on port 9000!')
})
