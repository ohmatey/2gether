import chai from 'chai'
import request from 'supertest'
import server from '../src/server/'


describe('Books', () => {

  describe('/GET book', () => {
      it('it should GET all the books', (done) => {
        request('http://localhost:3000')
            .get('/')
            .expect(200, done)
      });
  });

});
