/* eslint-disable linebreak-style */
/* eslint-disable no-unused-expressions */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
/* eslint-disable linebreak-style */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
const { describe, it, beforeEach } = require('mocha');
const chai = require('chai');
const chaiHTTP = require('chai-http');

chai.use(chaiHTTP);
const { expect } = chai;

const Product = require('../db');

const server = require('../index');

describe('CRUD Testing', () => {
  let id;

  beforeEach(async () => {
    try {
      await Product.deleteMany({});
      const tesProduct = await Product.create({
        text: 'Fanta 5L',
        cost: '5.99',
        Location: 'Branch 5, London',
      });
      id = tesProduct._id;
    } catch (err) {
      console.error(err);
    }
  });

  it('should create a product', (done) => {
    const newProduct = {
      text: 'Fanta 5L',
      cost: '5.99',
      Location: 'Branch 6, London',
    };
    chai
      .request(server)
      .post('/createProduct')
      .send(newProduct)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(201);
        expect(res.body).to.include(newProduct);
        expect(res.body._id).to.not.be.null;

        return done();
      });
  });

  it('should update a product', (done) => {
    chai
      .request(server)
      .patch(`/updateProduct/${id}`)
      .query({ text: 'Fanta 5L' })
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body).to.include({
          text: 'Fanta 5L',
          cost: '5.99',
          Location: 'Branch 6, London',
        });

        return done();
      });
  });

  it('should delete a product', (done) => {
    chai
      .request(server)
      .delete(`/removeProduct/${id}`)
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(204);
        expect(res.body._id).to.not.be.null;
        return done();
      });
  });

  it('should get all products', (done) => {
    chai
      .request(server)
      .get('/getAllProducts')
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.status).to.equal(200);
        expect(res.body._id).to.not.be.null;
        return done();
      });
  });
});
