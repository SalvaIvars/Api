function errorHandler(err, req, res) {
    switch (true) {
        case typeof err === 'string':
            // custom application error
            const is404 = err.toLowerCase().endsWith('not found');
            const statusCode = is404 ? 404 : 400;
            return res.status(statusCode).json({ status: statusCode, message: err });
        case err.name === 'ValidationError':
            // mongoose validation error
            return res.status(400).json({ status:400, message: err.data });
        case err.name === 'UnauthorizedError':
            // jwt authentication error
            return res.status(401).json({ status:401, message: 'Unauthorized' });
        case err.name === 'JsonWebTokenError':
            return res.status(400).json({ status:401, message: 'Validation error' });
        default:
            return res.status(500).json({ status:500, message:  err.data });
    }
}

module.exports = errorHandler;