import path from 'path'

import routes from './routes/'
import startServer from './app/startServer'

const port = process.env.PORT || 3000

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

})
.catch(err => console.log(err))
