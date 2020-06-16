const assert = require('assert')
const Room = require('../room.js')

describe('Room', function (){
    let room

    this.beforeEach(function (){
        room = new Room(6, false)
    })
    describe('Properties', function() {
        it('should have an area in meters', function (){
            const actual = room.area
            assert.strictEqual(actual, 6)
        })
        it('it should be either painted or not painted', function (){
            const actual = room.coat
            assert.strictEqual(actual, false)
        })
        it('should be able to add a coat of paint', function (){
            room.paintRoom(true)
            assert.strictEqual(true, room.coat)
        })
    })
    describe('Paint Can', function(){
        it('should have a number of litres', function(){
            const actual = room.paintCan
            assert.deepStrictEqual(actual, [])
        })
        it('should be able to check if empty', function(){
            const actual = room.paintCan.length
            assert.deepStrictEqual(actual, 0)
        })
        it('should be able to add to the can', function (){
            room.addPaintToCan(1)
            const actual = room.paintCan.length
            assert.deepStrictEqual(actual, 1)
        })
        it('should be able to empty itself', function(){
            room.addPaintToCan(1)
            room.addPaintToCan(1)
            room.addPaintToCan(1)
            room.emptyTheCan()
            const actual = room.paintCan.length
            assert.deepStrictEqual(actual, 0)
        })
    })
})