process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should(); 

chai.use(chaiHttp);
//Our parent block
describe('UI', () => {

  // Test the /GET Route
  describe('/GET home', () => {
      it('it should GET any reply', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(204);
              done();
            });
      });
  });

});
