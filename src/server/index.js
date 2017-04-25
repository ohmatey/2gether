import path from 'path'

const port = process.env.PORT || 3000

import routes from './routes/'
import startServer from './app/startServer'

export default startServer({
  port,
  routes,
  views: {
    viewEngine: 'ejs',
    viewEngineDir: path.join(__dirname, './views')
  },
  publicFolderDir: path.join(__dirname, '../public')
})
.then((app) => {
  console.log("app started")
  return app
})
.catch(err => console.log(err))
