const request = require('supertest');

const route = require('./GamesRoute');

describe('Games Route', () => {
    describe('insert data succesfull', () => {
        it('should create a new data', () => {
            return request(route)
                .post('/games')
                .send({ genre: 'Action-Roleplay', title: 'Borderlands 3', releaseYear: 2012 })
                .expect('Content-Type', '/json/')
        })
        it('should return the right http code post', () => {
            return request(route)
                .post('/games')
                .send({ genre: 'Action-Roleplay', title: 'Borderlands 4', releaseYear: 2012 })
                .expect(200)
        })
    })
    describe('insert data unsuccesfull', () => {
        it('should return an error', () => {
            return request(route)
                .post('/games')
                .send({ genre: 'Arcade', title: 'Pacman', releaseYear: 1980 })
                .expect('Content-Type', '/json/')
        })
        it('should return the right error code', () => {
            return request(route)
                .post('')
                .send({ genre: 'Arcade', title: 'Pacman', releaseYear: 1980 })
                .expect(500)
        })
    })
    describe('get data', () => {
        it('should return the right content type', () => {
            return request(route)
                .get('/games')
                .expect(200)
                .expect('Content-Type', '/json/')
        })
    })
}) 