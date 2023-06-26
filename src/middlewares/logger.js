module.exports = function() {
    return function (req, res, next) {
        console.log(`time: ${new Date()}, A donation of NIS ${req.body.sum} was received from ${req.body.donorName}`);
        if (next) next();
    }
}