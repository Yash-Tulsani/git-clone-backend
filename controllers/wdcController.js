const WDC = require('../models/WDC');

    
exports.getAllWDCs = async (req, res) => {
    try {
        const wdcs = await WDC.find({});
        res.json(wdcs)
    } catch (error) {
        next(error);
    }
}
