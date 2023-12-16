
const User = require('./User.js'); 
const FPO = require('./FPO.js');
const WDC = require("./WDC.js");
const Service = require("./Service.js");
const Transaction = require("./Transaction.js");

const indianNames = [
    'Aarav', 'Aanya', 'Aarush', 'Aditi', 'Advait', 'Akshay', 'Amrita', 'Ananya', 'Arjun', 'Avani',
    'Bhavya', 'Bhuvan', 'Chetan', 'Divya', 'Dhruv', 'Eesha', 'Eshan', 'Fiona', 'Gaurav', 'Gitanjali',
    'Hemant', 'Hiral', 'Ishaan', 'Ishika', 'Jai', 'Jiya', 'Kabir', 'Kavya', 'Karan', 'Khushi',
    'Laksh', 'Lavanya', 'Manav', 'Maya', 'Neha', 'Nirav', 'Ojas', 'Oishi', 'Pooja', 'Pranav',
    'Queenie', 'Rahul', 'Riya', 'Rohan', 'Sanya', 'Sarthak', 'Tanisha', 'Tejas', 'Uma', 'Utkarsh',
    'Vanya', 'Varun', 'Vidya', 'Viraj', 'Wafa', 'Yash', 'Yamini', 'Zara', 'Zain'
    // Add more names as needed
  ];

const getRandomIndianName = () => indianNames[Math.floor(Math.random() * indianNames.length)];

const chennaiDistricts = [
    'Adyar', 'Alandur', 'Anna Nagar', 'Ashok Nagar', 'Besant Nagar', 'Chetput', 'Choolai', 'Choolaimedu',
    'Egmore', 'George Town', 'Guindy', 'Kilpauk', 'Kodambakkam', 'Kotturpuram', 'Mylapore', 'Nandanam',
    'Nungambakkam', 'Pallavaram', 'Pallikaranai', 'Perambur', 'Perungudi', 'Porur', 'Royapettah', 'Saidapet',
    'Santhome', 'Sholinganallur', 'T. Nagar', 'Tambaram', 'Thiruvanmiyur', 'Vadapalani', 'Velachery', 'Virugambakkam'
    // Add more districts as needed
  ];
  
const getRandomDistrict =()=> chennaiDistricts[Math.floor(Math.random() * chennaiDistricts.length)];

const chennaiPincodes = [
    600001, 600002, 600003, 600004, 600005, 600006, 600007, 600008, 600009, 600010,
    600011, 600012, 600013, 600014, 600015, 600016, 600017, 600018, 600019, 600020,
    600021, 600022, 600023, 600024, 600025, 600026, 600027, 600028, 600029, 600030,
    600031, 600032, 600033, 600034, 600035, 600036, 600037, 600038, 600039, 600040,
    // Add more pincodes as needed
  ];

const getRandomPincode = ()=> chennaiPincodes[Math.floor(Math.random() * chennaiPincodes.length)];
  

const generateUsers = async () => {
  const users = [];
  for (let i = 0; i < 10; i++) {
    const user = new User({
      name: getRandomIndianName(),
      age: Math.floor(Math.random() * 42) + 18, // Random age between 18 and 60
      email: `user${i + 1}@example.com`,
      password: 'password123', // You might want to generate secure passwords in a real application
      phoneNumber: `${Math.floor(Math.random() * 9000000000) + 1000000000}`, // Random Indian phone number
      dateOfBirth: new Date('1990-01-01'), 
      role: 'user',
      address: 'Sample Address',
      district: getRandomDistrict(), 
      pincode: getRandomPincode(),
      profilePicture: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png', // You can provide realistic image paths
    });
    await user.save();
    users.push(user);
  }
  return users;
};

const generateFPOs = async (users) => {
  const fpos = [];
  for (let i = 0; i < 2; i++) {
    const fpoHead = users[Math.floor(Math.random() * users.length)];

    const fpoMembers = [];
    for (let j = 0; j < Math.floor(Math.random() * 2) + 2; j++) {
      const fpoMember = users[Math.floor(Math.random() * users.length)];
      fpoMembers.push(fpoMember._id);
    }

    const fpo = new FPO({
      head_id: fpoHead._id,
      head_name: fpoHead.name,
      description: 'Sample FPO description',
      images: ['https://i0.wp.com/www.jeevantirth.org/wp-content/uploads/2020/12/JT-Icons-FPO.jpg'], // You can provide realistic image paths
      members: fpoMembers,
      services: [], 
      status: 'pending',
      state: "Tamil Nadu",
      district: getRandomDistrict(), 
      address: 'Sample FPO Address',
      pincode: fpoHead.pincode, 
      phoneNumber: `${Math.floor(Math.random() * 9000000000) + 1000000000}`, // Random Indian phone number
      email: `fpo${i + 1}@example.com`,
    });

    await fpo.save();
    fpos.push(fpo);
  }
  return fpos;
};

const generateWDC = async(FPO)=>{
    for(let i=0; i<FPO.length; i++) {
        const currentFPO = FPO[i];
        const wdc = new WDC({
            FPO_id: currentFPO._id,
            name: `Wasteshed ${currentFPO.district}`,
            address: currentFPO.address,
            district: currentFPO.district,
            state: currentFPO.state,
            dateRegistered: new Date()
        })

        await wdc.save();
    }
}

const servicesList = [
  'Mangoes',
  "Rice",
  "Cotton",
  "Sugarcane",
  'Fishes', 
  'Boating', 
  "Educational Farm Visit",
  'Purified Water', 
  'Hydrowater Electricity', 
  'Handicrafts and Artisanal Products', 
  "Clay Pot",
  "Bamboo Bags",
  'Educational Workshops on Watershed Management', 
  'Fresh Cow Milk', 
];

const getRandomService = ()=> servicesList[Math.floor(Math.random() * servicesList.length)];

const generateServices = async (WDC)=> {
    
  for(let i=0; i<20; i++) {
    const randomWDC = WDC[Math.floor(Math.random() * WDC.length)]

    const newService = new Service({
      WDC_id: randomWDC._id,
      FPO_id:randomWDC.FPO_id,
      name: getRandomService(),
      type: `Service ${Math.floor(Math.random() * 6) + 1}`,
      description: "Temp Description",
      district: randomWDC.district,
      state: randomWDC.state,
      price: Math.floor(Math.random() * 10000) + 2000,
      quantityLeft: Math.floor(Math.random() * 80) + 20,
      minQuantity: Math.floor(Math.random() * 10) + 10,
      category: `Category ${Math.floor(Math.random() * 6) + 1}`,
      date: new Date(),

    })

    await newService.save();

  } 

}

const generateTransactions = async(sevices, usersList)=>{ 

  for(let i=0; i<10; i++) {
    const serv = sevices[Math.floor(Math.random() * sevices.length)]
    const buyer = usersList[Math.floor(Math.random() * usersList.length)]

    const newTransaction = new Transaction({
      buyer: buyer._id,
      seller: serv.FPO_id,
      WDC: serv.WDC_id,
      service: serv._id,
      district: serv.district,
      state: serv.state,
      amount: Math.floor(Math.random() * 18000) + 2000,
      date: new Date()

    })

    await newTransaction.save();

  } 

}

exports.GenerateData = async ()=>{

    try {
        // const fpos = await FPO.find({});
        // const users = await User.find({});
        // const wdcs = await WDC.find({});
        // const services = await Service.find({});
        // generateWDC(fpos)
        // generateServices(wdcs)
        // const services = await Service.find({});
        // generateTransactions(services, users);
        console.log("Currently Not generating Any Data");

    } catch (error) {
        console.error('Error generating data:', error);
      } finally {
    
      }


}

