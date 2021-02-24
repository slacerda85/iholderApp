import express, { Request, Response, NextFunction } from 'express'
import routes from './routes'

interface ErrorStatus extends Error {
  status?: number
}

const app = express()

app.use(express.json())
app.use(routes)

// 404 notFound
app.use((request: Request, response: Response, next: NextFunction) => {
  const error: ErrorStatus = new Error('Not found')
  error.status = 404
  next(error)
})

//Catch all errors
app.use(
  (
    error: ErrorStatus,
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    response.status(error.status || 500)
    response.json({ error: error.message })
  }
)

app.listen(3333)
