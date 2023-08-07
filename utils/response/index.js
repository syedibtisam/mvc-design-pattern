function responseFailure(req, res) {
    res.status(400).json({
        method: req.method,
        status: res.statusCode,
        message: false,
        error: res.errors
    })
}
function responseSuccess(req, res) {
    res.status(200).json({
        method: req.method,
        status: res.statusCode,
        message: true,
        data: res.data
    })
}
function handleResponse(req, res) {
    res.message === true ? responseSuccess(req, res) : responseFailure(req, res)
}
module.exports = handleResponse;