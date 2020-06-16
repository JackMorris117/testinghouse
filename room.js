const Room = function (area, coat) {
    this.area = area
    this.coat = coat
    this.paintCan = []
}

Room.prototype.paintRoom = function () {
    return this.coat = true
}
Room.prototype.addPaintToCan = function  (amount){
    this.paintCan.push(amount)
}
Room.prototype.emptyTheCan = function () {
    this.paintCan = []
}
module.exports = Room