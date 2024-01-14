const Transaction = require("../models/Transaction");


exports.yearlyChart = async (req, res) => {

    try {
        const monthsList = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        console.log(req.params, "Here are the params");
        let reply = {
            labels: monthsList,
            datasets: [
                {
                    label: 'Overall Monthly Revenue',
                    backgroundColor: '#0E2E50',
                    data: [],
                },
            ],
        };

        const result = await Transaction.aggregate([
            {
                $match: {
                    $and: [
                        { date: { $gte: new Date(`${req.params.year}-01-01`), $lt: new Date(`${Number(req.params.year) + 1}-01-01`) } },
                    ],
                },
            },
            {
                $group: {
                    _id: {
                        month: { $month: '$date' },
                        year: { $year: '$date' },
                    },
                    totalAmount: { $sum: '$amount' },
                },
            },
            {
                $sort: {
                    '_id.year': 1,
                    '_id.month': 1,
                },
            },
        ]);

        result.map(elm => {
            reply.datasets[0].data.push(elm.totalAmount);
        })

        console.log(result, "Kya result aaraha hai");

        res.json(reply)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false
        })
    }


}

exports.districtChart = async (req, res) => {
    try {

        console.log(req.params);

        let reply = {
            labels: [],
            datasets: [
                {
                    label: `${req.params.state} District Wise Revenue`,
                    backgroundColor: '#0E2E50',
                    data: [],
                },
            ],
        };

        const result = await Transaction.aggregate([
            {
                $match: {
                    state: req.params.state,
                    date: { $gte: new Date(`${req.params.year}-01-01`), $lt: new Date(`${Number(req.params.year) + 1}-01-01`) },
                },
            },
            {
                $group: {
                    _id: '$district',
                    totalAmount: { $sum: '$amount' },
                },
            },
        ]);

        result.map(elm => {
            reply.labels.push(elm._id);
            reply.datasets[0].data.push(elm.totalAmount)
        })

        console.log(result, "Here is the result");

        res.json(reply)
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false
        })
    }
}

exports.stateChart = async (req, res) => {

    try {

        console.log(req.params);

        let reply = {
            labels: [],
            datasets: [
                {
                    label: `Indian State Wise Revenue`,
                    backgroundColor: '#0E2E50',
                    data: [],
                },
            ],
        };

        const result = await Transaction.aggregate([
            {
                $match: {
                    date: { $gte: new Date(`${req.params.year}-01-01`), $lt: new Date(`${Number(req.params.year) + 1}-01-01`) },
                },
            },
            {
                $group: {
                    _id: '$state',
                    totalAmount: { $sum: '$amount' },
                },
            },
        ]);

        result.map(elm => {
            reply.labels.push(elm._id);
            reply.datasets[0].data.push(elm.totalAmount)
        })

        console.log(result, "Here is the result");

        res.json(reply)
    } catch (err) {
        console.log(err);
    }

}

exports.fpoChart = async (req,res)=>{

    const {year} = req.params;
    
    console.log( year, "There is the data");

    let reply = {
        labels: ["Tambaram Farmer Producer Organization", "Wasteshed Royapettah", "Wasteshed Saidapet"],
        datasets: [
            {
                label: `FPO State Wise Revenue`,
                backgroundColor: '#0E2E50',
                data: [],
            },
        ],
    };

    try {
        
        const aggregateResult = await Transaction.aggregate([
            {
                $match: {
                    date: { $gte: new Date(`${year}-01-01`), $lt: new Date(`${Number(year) + 1}-01-01`) },
                },
            },
            {
              $group: {
                _id: '$WDC_name', 
                totalAmount: { $sum: '$amount' }, 
              },
            },
          ]);

        
        aggregateResult.map(elm=>{
            reply.datasets[0].data.push(elm.totalAmount);
        })


        

        res.json(reply);

    } catch (err) {
        
    }
}

exports.fpoChart = async (req,res)=>{

    const {year} = req.params;
    
    console.log( year, "There is the data");

    let reply = {
        labels: ["Tambaram Farmer Producer Organization", "Wasteshed Royapettah", "Wasteshed Saidapet"],
        datasets: [
            {
                label: `FPO State Wise Revenue`,
                backgroundColor: '#0E2E50',
                data: [],
            },
        ],
    };

    try {
        
        const aggregateResult = await Transaction.aggregate([
            {
                $match: {
                    date: { $gte: new Date(`${year}-01-01`), $lt: new Date(`${Number(year) + 1}-01-01`) },
                },
            },
            {
              $group: {
                _id: '$WDC_name', 
                totalAmount: { $sum: '$amount' }, 
              },
            },
          ]);

        
        aggregateResult.map(elm=>{
            reply.datasets[0].data.push(elm.totalAmount);
        })


        

        res.json(reply);

    } catch (err) {
        
    }
}