
db.createCollection('Essentials')

//Inserting document
db.Essentials.insertOne(
{
  "Id": 11111,
  "Name": "Hem Bisht",
  "Work": "Home Work",
  "Purpose": "List of Home Essentials",
  "HomeEssentialsSections": [
    "Kitchen",
    "Dining",
    "Bedroom",
    "Bathroom",
    "Living Room",
    "Cleaning Supplies",
    "Laundry",
    "Basic Things"
  ],
  "Kitchen": [
    {
      "Name": "Pots",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "Pans",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Baking",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "sheets",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "mixing",
      "Unit": 1,
      "Rate": 114
    },
    {
      "Name": "Bowls",
      "Unit": 1,
      "Rate": 115
    },
    {
      "Name": "Spoons",
      "Unit": 1,
      "Rate": 10
    },
    {
      "Name": "spatulas",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "ladles",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "tongs",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Chef’s knife",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "paring knife",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "serrated knife",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Wooden Boards",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "Plastic Board",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Cups",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "spoons",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "kitchen scale",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Refrigerator",
      "Unit": 1,
      "Rate": 15000
    },
    {
      "Name": "microwave",
      "Unit": 1,
      "Rate": 10000
    },
    {
      "Name": "toaster",
      "Unit": 1,
      "Rate": 1500
    },
    {
      "Name": "blender",
      "Unit": 1,
      "Rate": 2100
    },
    {
      "Name": "coffee maker,",
      "Unit": 1,
      "Rate": 2200
    },
    {
      "Name": "Containers",
      "Unit": 1,
      "Rate": 1110
    },
    {
      "Name": "zip-lock bags",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "foil",
      "Unit": 1,
      "Rate": 512
    },
    {
      "Name": "Plastic Bags",
      "Unit": 1,
      "Rate": 513
    },
    {
      "Name": "Dish soap",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "sponges",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "scrub brushes",
      "Unit": 1,
      "Rate": 512
    },
    {
      "Name": "towels",
      "Unit": 1,
      "Rate": 513
    }
  ],
  "Dining": [
    {
      "Name": "Plastic Bowls",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "Steel Bowls",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Plastic Plate",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Steel plate",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Steel Glass",
      "Unit": 1,
      "Rate": 101
    },
    {
      "Name": "Plastic Glass",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Steel Mug",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Plastic Mugs",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Silverware",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "Placemats",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "napkins",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "tablecloth",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Plastic Tray",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "Steel Tray",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "Bedroom": [
    {
      "Name": "Sheets",
      "Unit": 1,
      "Rate": 1100
    },
    {
      "Name": "pillowcases",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "comforter",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "blankets",
      "Unit": 1,
      "Rate": 1133
    },
    {
      "Name": "Pillows",
      "Unit": 1,
      "Rate": 1100
    },
    {
      "Name": "Lamps",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "Dresser",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "closet organizers",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "hangers",
      "Unit": 1,
      "Rate": 112
    }
  ],
  "Bathroom": [
    {
      "Name": "Toothbrush",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "toothpaste",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "shampoo",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "conditioner",
      "Unit": 1,
      "Rate": 1133
    },
    {
      "Name": "Bath towels",
      "Unit": 1,
      "Rate": 1100
    },
    {
      "Name": "hand towels",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "washcloths",
      "Unit": 1,
      "Rate": 133
    },
    {
      "Name": "Shower curtain",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "bath mat",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "Toilet Paper",
      "Unit": 1,
      "Rate": 133
    },
    {
      "Name": "Tissue Boxes",
      "Unit": 1,
      "Rate": 100
    }
  ],
  "LivingRoom": [
    {
      "Name": "Almira",
      "Unit": 1,
      "Rate": 10000
    },
    {
      "Name": "chairs",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "coffee table",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Lamps",
      "Unit": 1,
      "Rate": 1133
    },
    {
      "Name": "bookshelf",
      "Unit": 1,
      "Rate": 1100
    },
    {
      "Name": "streaming device",
      "Unit": 1,
      "Rate": 1110
    },
    {
      "Name": "TV",
      "Unit": 1,
      "Rate": 1133
    },
    {
      "Name": "pillows",
      "Unit": 1,
      "Rate": 1100
    },
    {
      "Name": "blankets",
      "Unit": 1,
      "Rate": 1110
    },
    {
      "Name": "wall art",
      "Unit": 1,
      "Rate": 1133
    }
  ],
  "CleaningSupplies": [
    {
      "Name": "Vacuum Cleaner",
      "Unit": 1,
      "Rate": 1000
    },
    {
      "Name": "Broom and Dustpan",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Mop",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "All-Purpose Cleaner",
      "Unit": 1,
      "Rate": 1133
    },
    {
      "Name": "Trash Bags",
      "Unit": 1,
      "Rate": 1100
    }
  ],
  "Laundry": [
    {
      "Name": "Laundry Basket",
      "Unit": 1,
      "Rate": 1000
    },
    {
      "Name": "Detergent ",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Fabric Softener",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Drying Rac",
      "Unit": 1,
      "Rate": 1133
    },
    {
      "Name": "Clothespins",
      "Unit": 1,
      "Rate": 1100
    }
  ],
  "BasicTools": [
    {
      "Name": "Screwdriver",
      "Unit": 1,
      "Rate": 1000
    },
    {
      "Name": "hammer",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "pliers",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "wrench",
      "Unit": 1,
      "Rate": 1133
    },
    {
      "Name": "Flashlight ",
      "Unit": 1,
      "Rate": 1100
    },
    {
      "Name": "Batteries",
      "Unit": 1,
      "Rate": 1100
    },
    {
      "Name": "First Aid Kit",
      "Unit": 1,
      "Rate": 1100
    }
  ],
  "Vegetables": [
    "Leafy Greens",
    "Root Vegetables",
    "Aromatic Vegetables",
    "Squash Varieties",
    "Cruciferous Vegetables",
    "Common Vegetables",
    "Herbs and Flavoring Vegetables",
    "Seasonal or Specialty Vegetables"
  ],
  "VegetableDetails": [
    {
      "Name": "Spinach",
      "Unit": 1,
      "Rate": 1000
    },
    {
      "Name": "Lettuce",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Kale",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Cabbage",
      "Unit": 1,
      "Rate": 1133
    },
    {
      "Name": "Potatoes",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Sweet Potatoes",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Carrots",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Beets",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "salads,",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Onions ",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Garlic",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Green Onions",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Leeks",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Zucchini",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Butternut Squash",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Pumpkin",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Broccoli ",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Cauliflower",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "BrusselsSprouts",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Tomatoes",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "BellPeppers",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Cucumbers",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Celery ",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Mushrooms",
      "Unit": 1,
      "Rate": 114
    },
    {
      "Name": "Basil",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Parsley",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Cilantro",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Mint",
      "Unit": 1,
      "Rate": 114
    },
    {
      "Name": "Chili Peppers",
      "Unit": 1,
      "Rate": 115
    },
    {
      "Name": "Asparagus",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Eggplant",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Green Beans",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Peas",
      "Unit": 1,
      "Rate": 113
    }
  ],
  "Spice": [
    "Basic Spices",
    "Warm and Aromatic Spices",
    "Earthy Spices",
    "Heat-Spicing Options",
    "Savory Herbs",
    "Seeds",
    "Specialty Spices",
    "Spice Blends"
  ],
  "SpicesDetails": [
    {
      "Name": "Salt",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "BlackPepper",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Paprika",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "GarlicPowder",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Onion Powder",
      "Unit": 1,
      "Rate": 114
    },
    {
      "Name": "Cinnamon",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Nutmeg",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Cloves",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Allspice",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Cumin",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Turmeric",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Coriander",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Curry Powder",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Heat-Spicing",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "CayennePepper",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Crushed and PepperFlakes",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Dried Basil",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Dried Oregano",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Thyme",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Rosemary",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Sage",
      "Unit": 1,
      "Rate": 114
    },
    {
      "Name": "Bay Leaves",
      "Unit": 1,
      "Rate": 115
    },
    {
      "Name": "Mustard Seeds",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Fennel Seeds",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Sesame Seeds",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Fenugreek",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Saffron",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Sumac ",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Cardamom ",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Star Anise",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Italian Seasoning",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Herbes de Provence",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Chinese Five-Spice ",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Garam Masala ",
      "Unit": 1,
      "Rate": 113
    }
  ],
  "Dal_Lentils": [
    "Split Bengal Gram",
    "Split Pigeon Peas",
    "Split Green Gram",
    "Masoor Dal",
    "Urad Dal",
    "Rajma",
    "Lobia",
    "Split Yellow Peas",
    "Horse Gram",
    "Green Gram",
    "Brown Lentils",
    "French Green Lentils",
    "Beans",
    "Beluga"
  ],
  "Dal_LentilDetails": [
    {
      "Name": "Split Bengal Gram",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Split Pigeon Peas",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Split Green Gram ",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "Masoor Dal",
      "Unit": 1,
      "Rate": 113
    },
    {
      "Name": "Urad Dal",
      "Unit": 1,
      "Rate": 114
    },
    {
      "Name": "Rajma",
      "Unit": 1,
      "Rate": 115
    },
    {
      "Name": "Lobia",
      "Unit": 1,
      "Rate": 116
    },
    {
      "Name": "Split Yellow Peas",
      "Unit": 1,
      "Rate": 117
    },
    {
      "Name": "Horse Gram",
      "Unit": 1,
      "Rate": 118
    },
    {
      "Name": "Green Gram",
      "Unit": 1,
      "Rate": 119
    },
    {
      "Name": "French Green Lentils",
      "Unit": 1,
      "Rate": 120
    },
    {
      "Name": "Beans",
      "Unit": 1,
      "Rate": 121
    },
    {
      "Name": "Beluga",
      "Unit": 1,
      "Rate": 122
    },
    {
      "Name": "Green Lentils",
      "Unit": 1,
      "Rate": 123
    },
    {
      "Name": "Adzuki Beans",
      "Unit": 1,
      "Rate": 124
    },
    {
      "Name": "Navy Beans",
      "Unit": 1,
      "Rate": 125
    },
    {
      "Name": "Beluga Lentils",
      "Unit": 1,
      "Rate": 126
    }
  ],
  "TeaTypes": [
    {
      "Name": "Green Tea",
      "Unit": 1,
      "Rate": 300,
      "Flavor": "Light, grassy, slightly sweet",
      "CaffeineLevel": "Moderate",
      "HealthBenefits": "Rich in antioxidants, boosts metabolism, good for heart health",
      "Varieties": "Sencha, Matcha, Gyokuro, Dragon Well (Longjing)"
    },
    {
      "Name": "BLTea",
      "Unit": 1,
      "Rate": 311,
      "Flavor": "Bold, malty, and slightly bitter; varies by region",
      "CaffeineLevel": " Higher than other teas",
      "HealthBenefits": "May improve heart health, contains antioxidants, supports gut health",
      "Varieties": "Assam, Darjeeling, Ceylon, English Breakfast, Earl Grey"
    },
    {
      "Name": "White Tea",
      "Unit": 1,
      "Rate": 312,
      "Flavor": "Delicate, light, and slightly floral",
      "CaffeineLevel": "Low to moderate",
      "HealthBenefits": "Rich in antioxidants, good for skin, supports immunity",
      "Varieties": "Silver Needle, White Peony (Bai Mudan)"
    },
    {
      "Name": "Oolong Tea",
      "Unit": 1,
      "Rate": 313,
      "Flavor": "Complex, ranging from floral and fruity",
      "CaffeineLevel": "Moderate",
      "HealthBenefits": "digestion, may help with weight loss, boosts metabolism",
      "Varieties": "Tieguanyin, Da Hong Pao, Dong Ding"
    },
    {
      "Name": "Fermented tea",
      "Unit": 1,
      "Rate": 314,
      "Flavor": "Light, grassy, slightly sweetEarthy, smooth, sometimes mushroomy",
      "CaffeineLevel": "Moderate",
      "HealthBenefits": "Supports digestion, known for its probiotic properties, aids in weight management",
      "Varieties": "Raw (Sheng) Pu-erh and Aged (Shou) Pu-erh"
    },
    {
      "Name": "Chamomile Tea",
      "Unit": 1,
      "Rate": 315,
      "Flavor": "Mild, floral, slightly sweet",
      "CaffeineLevel": "Caffeine-free",
      "HealthBenefits": " Helps digestion, relieves headaches, soothes stomach"
    },
    {
      "Name": "Rooibos Tea",
      "Unit": 1,
      "Rate": 316,
      "Flavor": " Sweet, nutty, earthy",
      "CaffeineLevel": "Caffeine-free",
      "HealthBenefits": " Rich in antioxidants, may improve skin health, promotes heart health"
    },
    {
      "Name": "Hibiscus Tea",
      "Unit": 1,
      "Rate": 316,
      "Flavor": "Tart, cranberry-like",
      "CaffeineLevel": "Moderate",
      "HealthBenefits": "Supports blood pressure regulation, rich in vitamin C, good for immunity"
    },
    {
      "Name": "Ginger Tea",
      "Unit": 1,
      "Rate": 317,
      "Flavor": "Spicy, warming",
      "CaffeineLevel": "Moderate",
      "HealthBenefits": "digestion, reduces nausea, relieves inflammation"
    },
    {
      "Name": "Green Tea",
      "Unit": 1,
      "Rate": 318,
      "Flavor": "Light, grassy, slightly sweet",
      "CaffeineLevel": "Moderate",
      "HealthBenefits": "Rich in antioxidants, boosts metabolism, good for heart health"
    },
    {
      "Name": "Lemongrass Tea",
      "Unit": 1,
      "Rate": 319,
      "Flavor": "Citrusy, light",
      "CaffeineLevel": "Caffeine-free",
      "HealthBenefits": " Supports digestion, has antibacterial properties, relieves anxiety"
    },
    {
      "Name": "Yerba Mate",
      "Unit": 1,
      "Rate": 320,
      "Flavor": " Slightly bitter, earthy, and grassy",
      "CaffeineLevel": "High (similar to coffee)",
      "HealthBenefits": " Boosts energy, enhances focus, supports digestion"
    },
    {
      "Name": "Matcha ",
      "Unit": 1,
      "Rate": 321,
      "Flavor": ": Creamy, vegetal, umami-rich",
      "CaffeineLevel": " High (higher than steeped green tea)",
      "HealthBenefits": "High in antioxidants, boosts energy and focus, good for metabolism"
    },
    {
      "Name": "Chai Tea",
      "Unit": 1,
      "Rate": 322,
      "Flavor": "Spiced and bold, usually a blend of black tea with spices like cinnamon, cardamom, ginger, cloves, and pepper",
      "CaffeineLevel": "Moderate",
      "HealthBenefits": "Warming, aids digestion, anti-inflammatory"
    },
    {
      "Name": "Jasmine Tea",
      "Unit": 1,
      "Rate": 323,
      "Flavor": "Light, floral, sweet",
      "CaffeineLevel": " Moderate (usually green tea-based)",
      "HealthBenefits": "Calms nerves, has antioxidants, enhances relaxation"
    },
    {
      "Name": "Earl Grey",
      "Unit": 1,
      "Rate": 324,
      "Flavor": "Citrusy and floral, flavored with bergamot oil",
      "CaffeineLevel": " Moderate",
      "HealthBenefits": "Boosts energy, good for digestion, high in antioxidants"
    }
  ]
}
)



//Updating the Rate using $set
db.HomeEssentials.updateOne({Id: 11111,"Kitchen.Name":"Pans"},
  {$set :{"Kitchen.$.Rate":115}}
)


//Updating the Rate using $inc
db.HomeEssentials.updateOne({Id: 11111,"Kitchen.Name":"Pans"},
  {$inc :{"Kitchen.$.Rate":10}}
)

//Updating the Unit using $set
db.HomeEssentials.updateOne({Id: 11111,"Kitchen.Name":"Pans"},
  {$set :{"Kitchen.$.Unit":5}}
)


//Updating the Unit  using $inc
db.HomeEssentials.updateOne({Id: 11111,"Kitchen.Name":"Pans"},
  {$inc :{"Kitchen.$.Unit":10}}
)





//It will retrun Pots details from Kitchen Array
db.HomeEssentials.find({Id:11111},
{
Kitchen:
{
  $elemMatch:{
    Name:"Pots"
  }
}
})


//The below query will only return Pots becoz "Kitchen.$": 1 it returs only first matching things
db.HomeEssentials.find(
  {
    Id: 11111,
    "Kitchen.Name": { $in: ["Pots", "Pans"] }
  },
  {
    "Kitchen.$": 1
  }
)
  
  

//Query Pots,pans and other items
db.HomeEssentials.aggregate([{$match:{
  Id: 11111
}},
{
$project: 
{
  Kitchen:{
    $filter :
    {
      input:"$Kitchen",
      as:"item",
      cond :{$in: ["$$item.Name",["Pots", "Pans"]]}
    }
  }
},
}
])


//Inserting a new item $push
db.HomeEssentials.updateOne({Id:11111},
  {$push :{Kitchen :{Name :"Table",Unit:1, Rate:110}}}
)


//Deleting a  item $pull
db.HomeEssentials.updateOne({Id:11111},
  {$pull :{Kitchen :{Name :"Table"}}}
)  


//Deleting a  item $pull
db.HomeEssentials.updateOne({Id:11111},
  {$pull :{Kitchen :{Name :"Table",Unit:1, Rate:110}}}
)  

//Pots and Pans details from kitchen section
db.HomeEssentials.aggregate([{$match:{
  //Id:111
  _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
  }},
  {
  $project: {
  Kitchen:{
    $filter :
    {
      input:"$Kitchen",
      as:"item",
      cond :{$in: ["$$item.Name",["Pots", "Pans"]]},
    }
  }
  }
  }
  ])
  

//Calculating the sum of kitchen item and sum of bathroom item and total of all item
db.HomeEssentials.aggregate([
  {
      $match: {
          _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
      }
  },
  {
      $facet: 
      {
          KitchenSummary: [
              { $unwind: "$Kitchen" },
              {$match:{"Kitchen.Name":{$in:["Pans","Pots"]}}},
              {
                  $group: {
                      _id: null,
                      Name:{$addToSet:"$Kitchen.Name"},
                      KitchenTotalAmount: { $sum: { $multiply: [ "$Kitchen.Rate", "$Kitchen.Unit" ] } },
                      KitchenCount: { $sum: 1 },
                     
                  }
              },
              { $project: { _id: 0 } }
          ],
          BathroomSummary: [
              { $unwind: "$Bathroom" },
              {$match:{"Bathroom.Name":{$in:["hand towels"]}}},  
              {
                  $group: {
                      _id: null,
                      ItemName:{$addToSet:"$Bathroom.Name"},
                      BathroomTotalAmount: { $sum: { $multiply: [ "$Bathroom.Rate", "$Bathroom.Unit" ] } },
                      BathroomCount: { $sum: 1 }
                  }
              },
              { $project: { _id: 0 } }
          ]
      }
  },
  {
      $project: {
          KitchenSummary: { $arrayElemAt: ["$KitchenSummary", 0] },
          BathroomSummary: { $arrayElemAt: ["$BathroomSummary", 0] },
          Total: {
            $add: [
                { $ifNull: [{ $arrayElemAt: ["$KitchenSummary.KitchenTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$BathroomSummary.BathroomTotalAmount", 0] }, 0] }
            ]
        }

      }
  }
]);



//Calculating the sum of kitchen items
db.HomeEssentials.aggregate(
  [
    {
      $match: {
        _id:ObjectId('672d44ba7b64404c1757410e')
      }
    }
    ,
  { 
      $unwind: "$Kitchen"
      // Break the Kitchen array into individual documents
  },
  { 
      $group: 
      {
          _id:null, // Group all documents (no specific grouping)
          
         Kitchentotal: { $sum: { $multiply: [ "$Kitchen.Rate", "$Kitchen.Unit" ] } },
          count: { $sum: 1 } // Count the number of items in the Kitchen array
      }
  },
  { $project: { _id: 0 } }// for the _id=null value in the output..
]
);





//Details of Dal_LentilDetails,TeaTypes,SpicesDetails:
db.HomeEssentials.aggregate([{$match:{
Id:11111
}},
{
$project: {
TeaTypes:
{
  $filter :
  {
    input:"$TeaTypes",
    as:"item",
    cond :{$eq: ["$$item.Name","Jasmine Tea"]}
  }
},
Dal_LentilDetails:
{
  $filter :
  {
    input:"$Dal_LentilDetails",
    as:"item",
    cond :{$eq: ["$$item.Name","Rajma"]}
  }
},
SpicesDetails:
{
  $filter :
  {
    input:"$SpicesDetails",
    as:"item",
    cond :{$eq: ["$$item.Name","Salt"]}
  }
}
}
}
])


//Details of Tea types
db.HomeEssentials.aggregate([{$match:{Id:11111}},
{
$project: {
TeaTypes :{
$filter :
{
input :"$TeaTypes",
as:"item",
cond:{$eq:["$$item.Name","Earl Grey"]}
}
}
}
}
])

//Use of $arrayElemAt
db.HomeEssentials.aggregate({$match:{Id: 11111}},
  {
  $project:
  {
  Name:1,
  Work:1,
  Id:1,
  Firstiteminthelist :{$arrayElemAt :["$HomeEssentialsSections",0]},
  Seconditeminthelist:{$arrayElemAt :["$HomeEssentialsSections",1]},
  Thirditeminthelist:{$arrayElemAt :["$HomeEssentialsSections",2]},
  Fourthiteminthelist:{$arrayElemAt :["$HomeEssentialsSections",3]},
  Fifthiteminthelist:{$arrayElemAt :["$HomeEssentialsSections",4]}
  }
  }
)
////Use of $arrayElemAt
db.HomeEssentials.aggregate({$match:{Id: 11111}},
  {
  $project:
  {
  Name:1,
  Work:1,
  Id:1,
  Kitchen :{$arrayElemAt :["$HomeEssentialsSections",0]},
  Seconditeminthelist:{$arrayElemAt :["$HomeEssentialsSections",1]},
  Thirditeminthelist:{$arrayElemAt :["$HomeEssentialsSections",2]},
  Fourthiteminthelist:{$arrayElemAt :["$HomeEssentialsSections",3]},
  Fifthiteminthelist:{$arrayElemAt :["$HomeEssentialsSections",4]}
  }
  }
)


//Use of $arrayElemAt
db.HomeEssentials.aggregate({$match:{Id: 11111}},
  {
  $project:
  {
  Name:1,
  Work:1,
  Id:1,
  KitchenItem1 :{$arrayElemAt :["$Kitchen",0]},
  KitchenItem2 :{$arrayElemAt :["$Kitchen",1]},
  KitchenItem3 :{$arrayElemAt :["$Kitchen",2]},
  KitchenItem4 :{$arrayElemAt :["$Kitchen",3]},
  KitchenItem5 :{$arrayElemAt :["$Kitchen",4]},
  KitchenItem6 :{$arrayElemAt :["$Kitchen",5]},
  KitchenItem7 :{$arrayElemAt :["$Kitchen",5]},
  KitchenItem8 :{$arrayElemAt :["$Kitchen",5]},
  KitchenItem9 :{$arrayElemAt :["$Kitchen",5]},
  KitchenItem10 :{$arrayElemAt :["$Kitchen",5]},
  }
  }
)



//Use of $arrayElemAt 

db.HomeEssentials.aggregate({$match:{Id: 11111}},
  {
  $project:
  {
  Name:1,
  Work:1,
  Id:1,
  KitchenItem1 :{$arrayElemAt :["$Kitchen",0]},
  KitchenItem2 :{$arrayElemAt :["$Kitchen",1]},
  KitchenItem3 :{$arrayElemAt :["$Kitchen",2]},
  KitchenItem4 :{$arrayElemAt :["$Kitchen",3]},
  KitchenItem5 :{$arrayElemAt :["$Kitchen",4]},
  KitchenItem6 :{$arrayElemAt :["$Kitchen",5]},
  KitchenItem7 :{$arrayElemAt :["$Kitchen",5]},
  KitchenItem8 :{$arrayElemAt :["$Kitchen",5]},
  KitchenItem9 :{$arrayElemAt :["$Kitchen",5]},
  KitchenItem10 :{$arrayElemAt :["$Kitchen",5]},
  }
  }
)

//Query for Summary with total
db.HomeEssentials.aggregate([
  {
      $match: {
          _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
      }
  },
  {
      $facet: 
      {
          KitchenSummary: [
              { $unwind: "$Kitchen" },
              {
                  $group: {
                      _id: null,
                      KitchenTotalAmount: { $sum: { $multiply: [ "$Kitchen.Rate", "$Kitchen.Unit" ] } },
                      KitchenCount: { $sum: 1 }
                  }
              },
              { $project: { _id: 0 } }
          ],


          BedroomSummary: [
            { $unwind: "$Bedroom" },
            {
                $group: {
                    _id: null,
                    BedroomTotalAmount: { $sum: { $multiply: [ "$Bedroom.Rate", "$Bedroom.Unit" ] } },
                    BedroomCount: { $sum: 1 }
                }
            },
            { $project: { _id: 0 } }
        ],

        DiningSummary: [
          { $unwind: "$Dining" },
          {
              $group: {
                  _id: null,
                  DiningTotalAmount: { $sum: { $multiply: [ "$Dining.Rate", "$Dining.Unit" ] } },
                  DiningCount: { $sum: 1 }
              }
          },
          { $project: { _id: 0 } }
      ],




          BathroomSummary: [
              { $unwind: "$Bathroom" },
              {
                  $group: {
                      _id: null,
                      BathroomTotalAmount: { $sum: { $multiply: [ "$Bathroom.Rate", "$Bathroom.Unit" ] } },
                      BathroomCount: { $sum: 1 }
                  }
              },
              { $project: { _id: 0 } }
          ],
          LivingRoomSummary: [
              { $unwind: "$LivingRoom" },
              {
                  $group: {
                      _id: null,
                      LivingRoomTotalAmount: { $sum: { $multiply: [ "$LivingRoom.Rate", "$LivingRoom.Unit" ] } },
                      LivingRoomCount: { $sum: 1 }
                  }
              },
              { $project: { _id: 0 } }
          ],

          CleaningSuppliesSummary: [
            { $unwind: "$CleaningSupplies" },
            {
                $group: {
                    _id: null,
                    CleaningTotalAmount: { $sum: { $multiply: [ "$CleaningSupplies.Rate", "$CleaningSupplies.Unit" ] } },
                    CleaningSuppliesCount: { $sum: 1 }
                }
            },
            { $project: { _id: 0 } }
        ],
        BasicSummary: [
          { $unwind: "$BasicTools" },
          {
              $group: {
                  _id: null,
                  BasicTotalAmount: { $sum: { $multiply: [ "$BasicTools.Rate", "$BasicTools.Unit" ] } },
                  BasicCount: { $sum: 1 }
              }
          },
          { $project: { _id: 0 } }
      ],
      VegetableDetailsSummary: [
        { $unwind: "$VegetableDetails" },
        {
            $group: {
                _id: null,
                VegetableDetailsTotalAmount: { $sum: { $multiply: [ "$VegetableDetails.Rate", "$VegetableDetails.Unit" ] } },
                VegetableDetailsCount: { $sum: 1 }
            }
        },
        { $project: { _id: 0 } }
    ],
    SpicesDetailSummary: [
      { $unwind: "$SpicesDetails" },
      {
          $group: {
              _id: null,
              SpicesDetailsTotalAmount: { $sum: { $multiply: [ "$SpicesDetails.Rate", "$SpicesDetails.Unit" ] } },
              SpicesDetailsCount: { $sum: 1 }
          }
      },
      { $project: { _id: 0 } }
  ],
  Dal_LentilDetailsSummary: [
    { $unwind: "$Dal_LentilDetails" },
    {
        $group: {
            _id: null,
            Dal_LentilDetailsTotalAmount: { $sum: { $multiply: [ "$Dal_LentilDetails.Rate", "$Dal_LentilDetails.Unit" ] } },
            Dal_LentilDetailsCount: { $sum: 1 }
        }
    },
    { $project: { _id: 0 } }
],
TeaTypesSummary: [
  { $unwind: "$TeaTypes" },
  {
      $group: {
          _id: null,
          TeaTypesTotalAmount: { $sum: { $multiply: [ "$TeaTypes.Rate", "$TeaTypes.Unit" ] } },
          TeaTypesCount: { $sum: 1 }
      }
  },
  { $project: { _id: 0 } }
],
}
  },
  {
      $project: {
          KitchenSummary: { $arrayElemAt: ["$KitchenSummary", 0] },
          BedroomSummary: { $arrayElemAt: ["$BedroomSummary", 0] },
          DiningSummary: { $arrayElemAt: ["$DiningSummary", 0] },
          BathroomSummary: { $arrayElemAt: ["$BathroomSummary", 0] },
          LivingRoomSummary: { $arrayElemAt: ["$LivingRoomSummary", 0] },
          CleaningSuppliesSummary: { $arrayElemAt: ["$CleaningSuppliesSummary", 0] },
          BasicSummary: { $arrayElemAt: ["$BasicSummary", 0] },
          VegetableDetailsSummary: { $arrayElemAt: ["$VegetableDetailsSummary", 0]},
          SpicesDetailSummary: { $arrayElemAt: ["$SpicesDetailSummary", 0] },
          Dal_LentilDetailsSummary: { $arrayElemAt: ["$Dal_LentilDetailsSummary", 0] },
          TeaTypesSummary: { $arrayElemAt: ["$TeaTypesSummary", 0] },
          Total: {
            $add: [
                { $ifNull: [{ $arrayElemAt: ["$KitchenSummary.KitchenTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$BedrommSummary.BedroomTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$DiningSummary.DiningTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$BathroomSummary.BathroomTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$LivingRoomSummary.LivingRoomTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$CleaningSuppliesSummary.CleaningTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$BasicSummary.BasicTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$VegetableDetailsSummary.VegetableDetailsTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$SpicesDetailSummary.SpicesDetailsTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$Dal_LentilDetailsSummary.Dal_LentilDetailsTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$TeaTypesSummary.TeaTypesTotalAmount", 0] }, 0] },
            ]
        }
      }
  }
]);




//Selecting item from eaach section

db.HomeEssentials.aggregate([
  {
      $match: {
          _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
      }
  },
  {
      $facet: 
      {
          KitchenSummary: [
              {$unwind: "$Kitchen" },
              {$match:{"Kitchen.Name":{$in:["Pans","Pots"]}}},
              {
                  $group: {
                      _id: null,
                      SelectedItem:{$addToSet:"$Kitchen.Name"},
                      KitchenTotalAmount: { $sum: { $multiply: [ "$Kitchen.Rate", "$Kitchen.Unit" ] } },
                      KitchenCount: { $sum: 1 },
                      
                  }
              },
              {$project: { _id: 0 } }
          ],

        BedroomSummary: [
              {$unwind: "$Bedroom" },
              {$match:{"Bedroom.Name":{$in:["Sheets"]}}},
              {
                  $group: {
                      _id: null,
                      SelectedItem:{$addToSet:"$Bedroom.Name"},
                      BedroomTotalAmount: { $sum: { $multiply: [ "$Bedroom.Rate", "$Bedroom.Unit" ] } },
                      BedroomCount: { $sum: 1 },
                      
                  }
              },
              {$project: { _id: 0 } }
          ],



          DiningSummary: [
            {$unwind: "$Dining" },
            {$match:{"Dining.Name":{$in:["Plastic Glass"]}}},
            {
                $group: {
                    _id: null,
                    SelectedItem:{$addToSet:"$Dining.Name"},
                    DiningTotalAmount: { $sum: { $multiply: [ "$Dining.Rate", "$Dining.Unit" ] } },
                    DiningCount: { $sum: 1 },
                    
                }
            },
            {$project: { _id: 0 } }
        ],


          BathroomSummary: [
              { $unwind: "$Bathroom" },
              {$match:{"Bathroom.Name":{$in:["Bath towels","hand towels"]}}},
              {
                  $group: {
                      _id: null,
                      SelectedItem:{$addToSet:"$Bathroom.Name"},
                      BathroomTotalAmount: { $sum: { $multiply: [ "$Bathroom.Rate", "$Bathroom.Unit" ] } },
                      BathroomCount: { $sum: 1 }
                  }
                  
              },
              {$project: { _id: 0 } }
          ],
          LivingRoomSummary: [
              { $unwind: "$LivingRoom" },
              {$match:{"LivingRoom.Name":{$in:["Almira","chairs"]}}},
              {
                  $group: {
                      _id: null,
                      SelectedItem:{$addToSet:"$LivingRoom.Name"},
                      LivingRoomTotalAmount: { $sum: { $multiply: [ "$LivingRoom.Rate", "$LivingRoom.Unit" ] } },
                      LivingRoomCount: { $sum: 1 }
                  }
              },
              {$project: { _id: 0 } }
          ],

          CleaningSuppliesSummary: [
            { $unwind: "$CleaningSupplies" },
            {$match:{"CleaningSupplies.Name":{$in:["Vacuum Cleaner","Mop"]}}},
            {
                $group: {
                    _id: null,
                    SelectedItem:{$addToSet:"$CleaningSupplies.Name"},
                    CleaningTotalAmount: { $sum: { $multiply: [ "$CleaningSupplies.Rate", "$CleaningSupplies.Unit" ] } },
                    CleaningSuppliesCount: { $sum: 1 }
                }
            },
            {$project: { _id: 0 } }
        ],
        BasicSummary: [
          { $unwind: "$BasicTools" },
          {$match:{"BasicTools.Name":{$in:["Screwdriver"]}}},
          {
              $group: {
                  _id: null,
                  SelectedItem:{$addToSet:"$BasicTools.Name"},
                  BasicTotalAmount: { $sum: { $multiply: [ "$BasicTools.Rate", "$BasicTools.Unit" ] } },
                  BasicCount: { $sum: 1 }
              }
          },
          {$project: { _id: 0 } }
      ],
      VegetableDetailsSummary: [
        { $unwind: "$VegetableDetails" },
        {$match:{"VegetableDetails.Name":{$in:["Spinach"]}}},
        {
            $group: {
               _id: null,
               SelectedItem:{$addToSet:"$VegetableDetails.Name"},
                VegetableDetailsTotalAmount: { $sum: { $multiply: [ "$VegetableDetails.Rate", "$VegetableDetails.Unit" ] } },
                VegetableDetailsCount: { $sum: 1 }
            }
        },
        {$project: { _id: 0 } }
    ],
    SpicesDetailSummary: [
      { $unwind: "$SpicesDetails" },
      {$match:{"SpicesDetails.Name":{$in:["Salt"]}}},
      {
          $group: {
              _id: null,
              SelectedItem:{$addToSet:"$SpicesDetails.Name"},
              SpicesDetailsTotalAmount: { $sum: { $multiply: [ "$SpicesDetails.Rate", "$SpicesDetails.Unit" ] } },
              SpicesDetailsCount: { $sum: 1 }
          }
      },
      {$project: { _id: 0 } }
  ],
  DalDetailsSummary: [
    { $unwind: "$Dal_LentilDetails"},
    {$match:{"Dal_LentilDetails.Name":{$in:["Split Bengal Gram"]}}},
    {
        $group: {
            _id: null,
            SelectedItem:{$addToSet:"$Dal_LentilDetails.Name"},
            Dal_LentilDetailsTotalAmount: { $sum: { $multiply: ["$Dal_LentilDetails.Rate", "$Dal_LentilDetails.Unit" ] } },
            Dal_LentilDetailsCount: { $sum: 1 }
        }
    },
    {$project: { _id: 0 } }
],

TeaTypesSummary: [
  { $unwind: "$TeaTypes" },
  {$match:{"TeaTypes.Name":{$in:["Jasmine Tea"]}}},
  {
      $group: {
          _id: null,
          SelectedItem:{$addToSet:"$TeaTypes.Name"},
          TeaTypesTotalAmount: { $sum: { $multiply: [ "$TeaTypes.Rate", "$TeaTypes.Unit" ] } },
          TeaTypesCount: { $sum: 1 }
      }
  },
  {$project: { _id: 0 } }
],



}
  },
  {
      $project: {
          KitchenSummary: { $arrayElemAt: ["$KitchenSummary", 0] },
          BedroomSummary: { $arrayElemAt: ["$BedroomSummary", 0] },
          DiningSummary: { $arrayElemAt: ["$DiningSummary", 0] },
          BathroomSummary: { $arrayElemAt: ["$BathroomSummary", 0] },
          LivingRoomSummary: { $arrayElemAt: ["$LivingRoomSummary", 0] },
          CleaningSuppliesSummary: { $arrayElemAt: ["$CleaningSuppliesSummary", 0] },
          BasicSummary: { $arrayElemAt: ["$BasicSummary", 0] },
          VegetableDetailsSummary: { $arrayElemAt: ["$VegetableDetailsSummary", 0]},
          SpicesDetailSummary: { $arrayElemAt: ["$SpicesDetailSummary", 0] },
          DalDetailsSummary: { $arrayElemAt: ["$DalDetailsSummary", 0] },
          TeaTypesSummary: { $arrayElemAt: ["$TeaTypesSummary", 0] },
          Total: {
            $add: [
                { $ifNull: [{ $arrayElemAt: ["$KitchenSummary.KitchenTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$BedroomSummary.BedroomTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$DiningSummary.DiningTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$BathroomSummary.BathroomTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$LivingRoomSummary.LivingRoomTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$CleaningSuppliesSummary.CleaningTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$BasicSummary.BasicTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$VegetableDetailsSummary.VegetableDetailsTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$SpicesDetailSummary.SpicesDetailsTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$DalDetailsSummary.DalDetailsTotalAmount", 0] }, 0] },
                { $ifNull: [{ $arrayElemAt: ["$TeaTypesSummary.TeaTypesTotalAmount", 0] }, 0] },
            ]
        }
      }
  }
]);


//What are the sections listed in the Home Essentials list

db.HomeEssentials.findOne({Id: 11111},{"HomeEssentialsSections":1,_id:0})

db.HomeEssentials.aggregate({$match:{Id: 11111}},
  {
  $project:
  {
  Name:1,
  Work:1,
  Id:1,
  firstItemHomeEssentialsection:{$arrayElemAt :["$HomeEssentialsSections",0]},
  Seconditeminthelist:{$arrayElemAt :["$HomeEssentialsSections",1]},
  Thirditeminthelist:{$arrayElemAt :["$HomeEssentialsSections",2]},
  Fourthiteminthelist:{$arrayElemAt :["$HomeEssentialsSections",3]},
  Fifthiteminthelist:{$arrayElemAt :["$HomeEssentialsSections",4]},
  Sixthiteminthelist:{$arrayElemAt :["$HomeEssentialsSections",5]},
  Seventhiteminthelist:{$arrayElemAt :["$HomeEssentialsSections",6]}
  }
  },
  { $project: { _id: 0,Name:0,Work:0 } }
)
//***************What are the items listed under the Kitchen section**********
//**************First**********************
 db.HomeEssentials.findOne({Id: 11111},{"Kitchen":1,_id:0})

//*******************second can be continued till the last item********
db.HomeEssentials.aggregate({$match:{Id: 11111}},
  {
  $project:
  {
  Name:1,
  Work:1,
  Id:1,
  firstItemInTheKitchen:{$arrayElemAt :["$Kitchen",0]},
  Seconditeminthelist:{$arrayElemAt :["$Kitchen",1]},
  Thirditeminthelist:{$arrayElemAt :["$Kitchen",2]},
  Fourthiteminthelist:{$arrayElemAt :["$Kitchen",3]},
  Fifthiteminthelist:{$arrayElemAt :["$Kitchen",4]},
  Sixthiteminthelist:{$arrayElemAt :["$Kitchen",5]},
  Seventhiteminthelist:{$arrayElemAt :["$Kitchen",6]}
  }
  },
  { $project: { _id: 0,Name:0,Work:0 } }
)

//What is the price of a Pan in the Kitchen section

db.HomeEssentials.aggregate([{
  $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
  }
},
{
  $facet: 
  {
      KitchenSummary: [
          {$unwind: "$Kitchen" },
          {$match:{"Kitchen.Name":{$in:["Pans"]}}},
          {
              $group: {
                  _id: null,
                  RateofPans:{$addToSet:"$Kitchen.Rate"}, 
              }
          },
          {$project: { _id: 0 } }
      ]
    }
  }
])



//Which items have a rate of 111 in the Kitchen section
db.HomeEssentials.aggregate([{
  $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
  }
},
{
  $facet: 
  {
      SectionKitchen: [
          {$unwind: "$Kitchen" },
          {$match:{"Kitchen.Rate":{$in:[111]}}},
          {
              $group: {
                  _id: null,
                Items:{$addToSet:"$Kitchen"}, 
              }
          },
          {$project: { _id: 0 } }
      ]
    }
  }
])


//Which items have 1 unit listed in the Kitchen section

db.HomeEssentials.aggregate([{
  $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
  }
},
{
  $facet: 
  {
      SectionKitchen: [
          {$unwind: "$Kitchen" },
          {$match:{"Kitchen.Unit":{$in:[1]}}},
          {
              $group: {
                  _id: null,
                Items:{$addToSet:"$Kitchen"}, 
              }
          },
          {$project: { _id: 0 } }
      ]
    }
  }
])


//What is the total cost of all items in the Kitchen section
db.HomeEssentials.aggregate(
  [
    {
      $match: {
        _id:ObjectId('672d4d34209fb0fc45fa0a2e')
      }
    }
    ,
  { 
      $unwind: "$Kitchen"
  },
  { 
      $group: 
      {
          _id:null,
          
         Kitchentotal: { $sum: { $multiply: [ "$Kitchen.Rate", "$Kitchen.Unit" ] } },
          count: { $sum: 1 }
      }
  },
  { $project: { _id: 0 } }
]
);


//Show me all the items in both the Kitchen and Bedroom sections.

db.HomeEssentials.find({Id: 11111},{"Kitchen":1,"Bedroom":1,_id:0})
db.HomeEssentials.findOne({Id: 11111},{"Kitchen":1,"Bedroom":1,_id:0})

//Find the rate for 'blender

db.HomeEssentials.aggregate([{
  $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
  }
},
{
  $facet: 
  {
      KitchenSummary: [
          {$unwind: "$Kitchen" },
          {$match:{"Kitchen.Name":{$in:["blender"]}}},
          {
              $group: {
                  _id: null,
                  RateofBlender:{$addToSet:"$Kitchen.Rate"}, 
              }
          },
          {$project: { _id: 0 } }
      ]
    }
  }
])


//Which items have a rate under 1000 in the Kitchen section

db.HomeEssentials.aggregate([{
  $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
  }
},
{
  $facet: 
  {
      SectionKitchen: [
          {$unwind: "$Kitchen" },
          {$match:{"Kitchen.Rate":{$lt:1000}}},
          {
              $group: {
                  _id: null,
                Items:{$addToSet:"$Kitchen"}, 
              }
          },
          {$project: { _id: 0 } }
      ]
    }
  }
])



//Which items have a rate above 1000 in the Kitchen section



db.HomeEssentials.aggregate([{
  $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
  }
},
{
  $facet: 
  {
      SectionKitchen: [
          {$unwind: "$Kitchen" },
          {$match:{"Kitchen.Rate":{$gt:1000}}},
          {
              $group: {
                  _id: null,
                Items:{$addToSet:"$Kitchen"}, 
              }
          },
          {$project: { _id: 0 } }
      ]
    }
  }
])






//How much do Pots cost

db.HomeEssentials.aggregate([{
  $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e") 
  }
},
{
  $facet: 
  {
      KitchenSummary: [
          {$unwind: "$Kitchen" },
          {$match:{"Kitchen.Name":{$in:["Pots"]}}},
          {
              $group: {
                  _id: null,
                  RateofPots:{$addToSet:"$Kitchen.Rate"}, 
              }
          },
          {$project: { _id: 0 } }
      ]
    }
  }
])




//Which is more expensive, a pots or a pan Pots<pans

db.HomeEssentials.aggregate([
  {
    $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e")
    }
  },

  {
    $facet: {
      KitchenSummary: [
        { $unwind: "$Kitchen" },
        { 
          $match: {
            "Kitchen.Name": { $in: ["Pots", "Pans"] }
          }
        },

        {
          $group: {
            _id: null,
            PotsRates: { 
              $push: {
                $cond: [
                  { $eq: ["$Kitchen.Name", "Pots"] }, 
                  "$Kitchen.Rate", 
                  null
                ]
              }
            },
            PansRates: { 
              $push: {
                $cond: [
                  { $eq: ["$Kitchen.Name", "Pans"] }, 
                  "$Kitchen.Rate", 
                  null
                ]
              }
            }
          }
        },
        {
          $project: {
            _id: 0,  
            PotsRate: { $arrayElemAt: ["$PotsRates", 0] },
            PansRate: { $arrayElemAt: ["$PansRates", 1] }
          }
        },
        {
          $project: 
          {
            Comparison: 
            {
              $cond: 
              {
                if: { $gt: ["$PotsRate","$PansRate"] },
                then: "Pots are more expensive",
                else: 
                {
                  $cond: 
                  {
                    if: { $lt: ["$PotsRate", "$PansRate"] },
                    then: "Pans are more expensive",
                    else: "Rates are the same"

                  }
                }
              }
            }
          }
        }
      ]
    }
  }
])




//Pots rate comparison with Spoons Pots>Spoons
db.HomeEssentials.aggregate([

  {
    $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e")
    }
  },

  {
    $facet: {
      KitchenSummary: [
        { $unwind: "$Kitchen" },
        { 
          $match: {
            "Kitchen.Name": { $in: ["Pots", "Spoons"] }
          }
        },

        {
          $group: {
            _id: null,
            PotsRates: { 
              $push: {
                $cond: [
                  { $eq: ["$Kitchen.Name", "Pots"] }, 
                  "$Kitchen.Rate", 
                  null
                ]
              }
            },
            SpoonsRates: { 
              $push: {
                $cond: [
                  { $eq: ["$Kitchen.Name", "Spoons"] }, 
                  "$Kitchen.Rate", 
                  null
                ]
              }
            }
          }
        },
        {
          $project: {
            _id: 0,  
            PotsRate: { $arrayElemAt: ["$PotsRates", 0] },
            SpoonsRate: { $arrayElemAt: ["$SpoonsRates", 1] }
          }
        },
        {
          $project: 
          {
            Comparison: 
            {
              $cond: 
              {
                if: { $gt: ["$PotsRate", "$SpoonsRate"] },
                then: "Pots are more expensive",
                else: 
                {
                  $cond: 
                  {
                    if: { $lt: ["$PotsRate", "$SpoonsRate"] },
                    then: "Spoons are more expensive",
                    else: "Rates are the same" 
                  }
                }
              }
            }
          }
        }
      ]
    }
  }
])



//Pots rate comparison with Cups Pots=Cups

db.HomeEssentials.aggregate([
  {
    $match: {
      _id: ObjectId("672d4d34209fb0fc45fa0a2e")
    }
  },
  {
    $facet: {
      KitchenSummary: [
        { $unwind: "$Kitchen" },
        { 
          $match: {
            "Kitchen.Name": { $in: ["Pots", "Cups"] }
          }
        },
        {
          $group: {
            _id: null,
            PotsRates: { 
              $push: {
                $cond: [
                  { $eq: ["$Kitchen.Name", "Pots"] }, 
                  "$Kitchen.Rate", 
                  null
                ]
              }
            },
            CupsRates: { 
              $push: {
                $cond: [
                  { $eq: ["$Kitchen.Name", "Cups"] }, 
                  "$Kitchen.Rate", 
                  null
                ]
              }
            }
          }
        },
        {
          $project: {
            _id: 0,  
            PotsRate: { $arrayElemAt: ["$PotsRates", 0] },
            CupsRate: { $arrayElemAt: ["$CupsRates", 1] }
          }
        },
        {
          $project: 
          {
            Comparison: 
            {
              $cond: 
              {
                if: { $gt: ["$PotsRate", "$CupsRate"] },
                then: "Pots are more expensive",
                else: 
                {
                  $cond: 
                  {
                    if: { $lt: ["$PotsRate", "$CupsRate"] },
                    then: "Cups are more expensive",
                    else: "Rates are the same" 
                  }
                }
              }
            }
          }
        }
      ]
    }
  }
])


//What are the items listed under Cleaning Supplies
db.HomeEssentials.findOne({Id: 11111},{"CleaningSupplies":1})



//Deleting a new item $pop - last item
db.HomeEssentials.updateOne({Id:11111},
  {$pop :{Kitchen :1}}
)



//Deleting a new item $pop - for deleting the first  item in an array
db.HomeEssentials.updateOne({Id:11111},
  {$pop :{Kitchen :-1}}
)

//Sorted documents
db.Essentials.insertOne
({
  "Id": 11111,
  "Name": "Hem Bisht",
  "Work": "Home Work",
  "Purpose": "List of Home Essentials",
  "HomeEssentialsSections": [
    "Kitchen",
    "Dining",
    "Bedroom",
    "Bathroom",
    "Living Room",
    "Cleaning Supplies",
    "Laundry",
    "Basic Things"
  ],
  "Kitchen": [
    {
      "Name": "Pans",
      "Unit": 5,
      "Rate": 115
    },
    {
      "Name": "Baking",
      "Unit": 1,
      "Rate": 112
    },
    {
      "Name": "sheets",
      "Unit": 1,
      "Rate": 113
    }
  ],
  "Dining": [
    {
      "Name": "Plastic Bowls",
      "Unit": 1,
      "Rate": 110
    },
    {
      "Name": "Steel Bowls",
      "Unit": 1,
      "Rate": 111
    },
    {
      "Name": "Plastic Plate",
      "Unit": 1,
      "Rate": 112
    }
  ],
  "Bedroom": [
    {
      "Name": "Sheets",
      "Unit": 1,
      "Rate": 1100
    },
    {
      "Name": "pillowcases",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "Bathroom": [
    {
      "Name": "Toothbrush",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "toothpaste",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "LivingRoom": [
    {
      "Name": "Almira",
      "Unit": 1,
      "Rate": 10000
    },
    {
      "Name": "chairs",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "CleaningSupplies": [
    {
      "Name": "Vacuum Cleaner",
      "Unit": 1,
      "Rate": 1000
    },
    {
      "Name": "Broom and Dustpan",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "Laundry": [
    {
      "Name": "Laundry Basket",
      "Unit": 1,
      "Rate": 1000
    },
    {
      "Name": "Detergent ",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "BasicTools": [
    {
      "Name": "Screwdriver",
      "Unit": 1,
      "Rate": 1000
    },
    {
      "Name": " hammer",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "Vegetables": [
    "Leafy Greens",
    "Root Vegetables",
    "Aromatic Vegetables",
    "Squash Varieties",
    "Cruciferous Vegetables",
    "Common Vegetables",
    "Herbs and Flavoring Vegetables",
    "Seasonal or Specialty Vegetables"
  ],
  "VegetableDetails": [
    {
      "Name": "Spinach",
      "Unit": 1,
      "Rate": 1000
    },
    {
      "Name": " Lettuce",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "Spice": [
    "Basic Spices",
    "Warm and Aromatic Spices",
    "Earthy Spices",
    "Heat-Spicing Options",
    "Savory Herbs",
    "Seeds",
    "Specialty Spices",
    "Spice Blends"
  ],
  "SpicesDetails": [
    {
      "Name": "Salt",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "BlackPepper",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "Dal_Lentils": [
    "Split Bengal Gram",
    "Split Pigeon Peas",
    "Split Green Gram",
    "Masoor Dal",
    "Urad Dal",
    "Rajma",
    "Lobia",
    "Split Yellow Peas",
    "Horse Gram",
    "Green Gram",
    "Brown Lentils",
    "French Green Lentils",
    "Beans",
    "Beluga"
  ],
  "Dal_LentilDetails": [
    {
      "Name": "Split Bengal Gram",
      "Unit": 1,
      "Rate": 100
    },
    {
      "Name": "Split Pigeon Peas",
      "Unit": 1,
      "Rate": 111
    }
  ],
  "TeaTypes": [
    {
      "Name": "Green Tea",
      "Unit": 1,
      "Rate": 318,
      "Flavor": "Light, grassy, slightly sweet",
      "CaffeineLevel": "Moderate",
      "HealthBenefits": "Rich in antioxidants, boosts metabolism, good for heart health"
    },
    {
      "Name": "Lemongrass Tea",
      "Unit": 1,
      "Rate": 319,
      "Flavor": "Citrusy, light",
      "CaffeineLevel": "Caffeine-free",
      "HealthBenefits": " Supports digestion, has antibacterial properties, relieves anxiety"
    }
  ]
})

