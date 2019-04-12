const request = require('supertest');

const route = require('./GamesRoute');

describe('Games Route', () => {
    describe('insert data succesfull', () => {
        it('should create a new data', () => {
            request(route)
                .post('/games')
                .send({ genre: 'Action-Roleplay', title: 'Borderlands 2', releaseYear: 2012 })
                .set('Accept', 'applicaton/json')
                .expect('Content-Type', '/json/')
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                })
        })
        it('should return the right http code post', () => {
            request(route)
                .post('/games')
                .send({ genre: 'Action-Roleplay', title: 'Borderlands 2', releaseYear: 2012 })
                .set('Accept', 'applicaton/json')
                .expect(200)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                })
        })
    })
    describe('insert data unsuccesfull', () => {
        it('should return an error', () => {
            request(route)
                .post('/games')
                .send({ genre: 'Arcade', title: 'Pacman', releaseYear: 1980 })
                .set('Accept', 'application/json')
                .expect('Content-Type', '/json/')
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                })
        })
        it('should return the right error code', () => {
            request(route)
                .post('/games')
                .send({ genre: 'Arcade', title: 'Pacman', releaseYear: 1980 })
                .set('Accept', 'application/json')
                .expect(404)
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                })
        })
    })
    describe('get data', () => {
        it('should return the right content type', () => {
            request(route)
                .get('/games')
                .expect(200)
                .expect('Content-Type', '/json/')
                .end(function (err, res) {
                    if (err) return done(err);
                    done();
                })
        })
        it('should return the right http code', () => {
            request(route)
                .get('/games')
                .expect(200);
        })
    })
}) 