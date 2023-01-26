function errorHandler(err, req, res) {
    switch (true) {
        case err.name === 'ValidationError':
            // mongoose validation error
            return res.status(400).json({ status:400, message: err.message });
        case err.name === 'UnauthorizedError':
            // jwt authentication error
            return res.status(401).json({ status:401, message: 'Unauthorized' });
        default:
            return res.status(500).json({ status:500, message: err.message });
    }
}

module.exports = errorHandler;