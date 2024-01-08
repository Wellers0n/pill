import app from './app'
import 'node-fetch';

const PORT = process.env.PORT || 3001
const ENVIRONMENT = process.env.ENVIRONMENT || 'development'

app.listen(PORT, async () => {
  console.log(`We are live on ${PORT}`)
  console.log(`Environment: ${ENVIRONMENT}`)
})

