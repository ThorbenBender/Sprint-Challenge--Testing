const express = require('express');
const knex = require('knex');
const knexConfig = require('../../knexfile').development;
const helmet = require('helmet');

const db = knex(knexConfig);

const route = express.Router();

route.use(helmet());
route.use(express.json());

route.post('/', async (req, res) => {
    try {
        game = await db('Games').insert(req.body);
        if (game) {
            res.status(200).json(game);
        } else {
            res.status(405).json({ message: 'The game already exists' })
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

route.get('', async (req, res) => {
    try {
        games = await db('Games');
        if (games) {
            res.status(200).json(games)
        }
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = route;