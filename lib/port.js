/**
 * Parse port from the request instance
 *
 * @param {IncomingMessage} req
 *
 */
exports = module.exports = function (req) {
    var res = req.headers.host ? req.headers.host.match(/:(\d+)/) : "";
    return res ?
        res[1] :
        req.connection.pair ? '443' : '80';
}
