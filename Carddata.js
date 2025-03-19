const Products = [
    // Babycare Products (IDs 1-10)
    {
      id: 1,
      img:"https://m.media-amazon.com/images/I/61arc5YMRWL.jpg",
      title: "Gentle Baby Lotion",
      description: "A soothing lotion for delicate baby skin.",
      price: "599",
      type: "babycare"
    },
    {
      id: 2,
      img:"https://m.media-amazon.com/images/I/71NqsRJuzhL.jpg",
      title: "Infant Diapers",
      description: "Soft and absorbent diapers for infants.",
      price: "199",
      type: "babycare"
    },
    {
      id: 3,
      img:"http://assets.myntassets.com/v1/assets/images/2025/JANUARY/15/SdyDlGrw_a79f6a30d4a84babaf3c61d2ecfd6acb.jpg",
      title: "Baby Wipes",
      description: "Hypoallergenic wipes for gentle cleaning.",
      price: "399",
      type: "babycare"
    },
    {
      id: 4,
      img:"https://m.media-amazon.com/images/I/51SGZKYjyqL.jpg",
      title: "Baby Shampoo",
      description: "Mild formula shampoo for babies.",
      price: "249",
      type: "babycare"
    },
    {
      id: 5,
      img:"https://cdn-pharmacy.nhg.com.sg/aspa01as01prod/0017373_dentinox-teething-gel-10g_510.jpeg",
      title: "Teething Gel",
      description: "Relieves discomfort during teething.",
      price: "799",
      type: "babycare"
    },
    {
      id: 6,
      img:"https://mothersparsh.com/cdn/shop/files/Mother-Sparsh-Plant-Powered-Dusting-Powder-for-Baby-100g-1_3a5b7fb5-6811-420b-a28f-3def2c01acec.webp?v=1732703736&width=600",
      title: "Baby Powder",
      description: "Keeps baby skin dry and comfortable.",
      price: "149",
      type: "babycare"
    },
    {
      id: 7,
      img:"https://images.meesho.com/images/products/420549309/j83s8_1200.jpg",
      title: "Nursing Pillow",
      description: "Ergonomically designed for comfortable feeding.",
      price: "299",
      type: "babycare"
    },
    {
      id: 8,
      img:"https://m.media-amazon.com/images/I/61H4pXPpisL.jpg",
      title: "Infant Formula",
      description: "Nutritious formula for growing babies.",
      price: "299",
      type: "babycare"
    },
    {
      id: 9,
      img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRq4dJLO09sYK88hca4NghoJSKW5kqoZhMnBfYUgNXj1JYFrpbifB7I7WTWA85noSqWgP8XsrlDNoC-t5mXfsDamReBv8b8Cl2Nkhby1FqUu1S-8uEunGqW",
      title: "Baby Bib",
      description: "Soft and absorbent bib to keep messes away.",
      price: "299",
      type: "babycare"
    },
    {
      id: 10,
      img:"https://rukminim2.flixcart.com/image/1200/1200/xif0q/teether-soother/h/c/j/3-na-orthodontic-silicone-baby-pacifier-for-newborn-infant-baby-original-imah9tsxggzb67cc.jpeg",
      title: "Pacifier",
      description: "Comforting pacifier for soothing infants.",
      price: "349",
      type: "babycare"
    },
  
    // Healthcare Products (IDs 11-20)
    {
      id: 11,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd5B0MlyqKdJDSRU_qf6gcRuyUCGpTOMJ8dQ&s",
      title: "Paracetamol Tablets",
      description: "Effective pain reliever and fever reducer.",
      price: "99",
      type: "healthcare"
    },
    {
      id: 12,
      img:"https://m.media-amazon.com/images/I/61tzmmi3sNL.jpg",
      title: "Cough Syrup",
      description: "Relieves cough and soothes throat irritation.",
      price: "99",
      type: "healthcare"
    },
    {
      id: 13,
      img:"https://cdn01.pharmeasy.in/dam/products_otc/E34698/pure-nutrition-vitamin-c-l-vitamin-c-tablets-for-immunity-glowing-skin-l-60-tablets-7-1676281053.jpg",
      title: "Vitamin C Tablets",
      description: "Boosts immunity and overall health.",
      price: "49",
      type: "healthcare"
    },
    {
      id: 14,
      img:"https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/db86018802bc44648bd9b56d6b7d1a10.jpg",
      title: "Antihistamine Tablets",
      description: "Provides relief from allergy symptoms.",
      price: "69",
      type: "healthcare"
    },
    {
      id: 15,
      img:"https://5.imimg.com/data5/SELLER/Default/2023/2/OI/VS/RQ/35095286/5mg-probiotic-capsules.jpg",
      title: "Probiotic Capsules",
      description: "Supports digestive health and immune function.",
      price: "29",
      type: "healthcare"
    },
    {
      id: 16,
      img:"",
      title: "Multivitamin Tablets",
      description: "Comprehensive daily nutrition supplement.",
      price: "89",
      type: "healthcare"
    },
    {
      id: 17,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu3RJu_9bNN7zERkLuCAfoqyh-e_xRp8JFJw&s",
      title: "Antacid Tablets",
      description: "Quick relief from heartburn and indigestion.",
      price: "39",
      type: "healthcare"
    },
    {
      id: 18,
      img:"https://m.media-amazon.com/images/I/61rzvwM1fsL._AC_UF1000,1000_QL80_.jpg",
      title: "Iron Supplements",
      description: "Boosts energy and reduces fatigue.",
      price: "99",
      type: "healthcare"
    },
    {
      id: 19,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0GVtGUXpt6F0iB53ECD44VuLPzJgB4C45vQ&s",
      title: "Calcium Tablets",
      description: "Supports strong bones and teeth.",
      price: "79",
      type: "healthcare"
    },
    {
      id: 20,
      img:"https://m.media-amazon.com/images/I/61bVuZgM8aL.jpg",
      title: "Zinc Supplements",
      description: "Helps maintain a healthy immune system.",
      price: "49",
      type: "healthcare"
    },
  
    // Personalcare Products (IDs 21-30)
    {
      id: 21,
      img:"https://regrowz.in/cdn/shop/products/nourshing-shampoo_720x_720x_7c0f0fc4-ccb1-4c19-9f8c-702c1d02d955.webp?v=1676457293",
      title: "Nourishing Shampoo",
      description: "For healthy, shiny hair.",
      price: "899",
      type: "personalcare"
    },
    {
      id: 22,
      img:"https://m.media-amazon.com/images/I/614hAynqKNL.jpg",
      title: "Conditioner",
      description: "Softens and detangles hair.",
      price: "90",
      type: "personalcare"
    },
    {
      id: 23,
      img:"https://images.ctfassets.net/aub2fvcyp2t8/xrt5EHZ8uovxqautEnrHf/4b2f6ebfaaa6b1616e56c120ab80f289/dc_facial-cleanser_200ml-min-en-in",
      title: "Facial Cleanser",
      description: "Gentle cleanser for everyday use.",
      price: "99",
      type: "personalcare"
    },
    {
      id: 24,
      img:"https://images-static.nykaa.com/media/catalog/product/2/a/2aa71cbNYCETA0000005_1.jpg",
      title: "Moisturizer",
      description: "Hydrates and nourishes skin.",
      price: "199",
      type: "personalcare"
    },
    {
      id: 25,
      img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY-hswobSjsI_jpUGBpreWHSylZn6-hd3LUA&s",
      title: "Sunscreen SPF 50",
      description: "Broad spectrum protection for daily use.",
      price: "199",
      type: "personalcare"
    },
    {
      id: 26,
      img:"https://m.media-amazon.com/images/I/419w4PBH11L.jpg",
      title: "Body Wash",
      description: "Refreshing and hydrating formula.",
      price: "99",
      type: "personalcare"
    },
    {
      id: 27,
      img:"https://m.media-amazon.com/images/I/71k9-LPeMNL.jpg",
      title: "Deodorant",
      description: "Long-lasting freshness and odor protection.",
      price: "200",
      type: "personalcare"
    },
    {
      id: 28,
      img:"https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/adc/adc03390/y/28.jpg",
      title: "Hand Cream",
      description: "Keeps your hands soft and moisturized.",
      price: "509",
      type: "personalcare"
    },
    {
      id: 29,
      img:"https://img.nivea.com/-/media/miscellaneous/media-center-items/temp/adb5aabe7d3842789f21b197213eb99d-web_1010x1180_transparent_png.png",
      title: "Lip Balm",
      description: "Moisturizes and protects lips.",
      price: "299",
      type: "personalcare"
    },
    {
      id: 30,
      img:"https://m.media-amazon.com/images/I/61fnBaehsFL.jpg",
      title: "Facial Serum",
      description: "Brightens and smooths skin texture.",
      price: "199",
      type: "personalcare"
    },
  
    // Medicaldevices Products (IDs 31-40)
    {
      id: 31,
      img:"https://drtrust.in/cdn/shop/products/30279959707694_1024x1024.jpg?v=1682057417",
      title: "Digital Thermometer",
      description: "Accurate temperature readings in seconds.",
      price: "1499",
      type: "medicaldevices"
    },
    {
      id: 32,
      img:"https://m.media-amazon.com/images/I/71-qOprKrIL.jpg",
      title: "Blood Pressure Monitor",
      description: "Easy-to-use monitor for accurate blood pressure tracking.",
      price: "4899",
      type: "medicaldevices"
    },
    {
      id: 33,
      img:"https://m.media-amazon.com/images/I/71U-PuWCFGL.jpg",
      title: "Pulse Oximeter",
      description: "Measures oxygen saturation and pulse rate.",
      price: "2999",
      type: "medicaldevices"
    },
    {
      id: 34,
      img:"https://m.media-amazon.com/images/I/619Ny-f8pUL.jpg",
      title: "Portable Nebulizer",
      description: "Efficient and quiet for home use.",
      price: "2999",
      type: "medicaldevices"
    },
    {
      id: 35,
      img:"https://m.media-amazon.com/images/I/61Fq9mcfuiL.jpg",
      title: "ECG Monitor",
      description: "Monitors heart rate and rhythm accurately.",
      price: "19999",
      type: "medicaldevices"
    },
    {
      id: 36,
      img:"https://m.media-amazon.com/images/I/71-uBViGV+L._AC_UF1000,1000_QL80_.jpg",
      title: "Infrared Thermometer",
      description: "Non-contact temperature measurement.",
      price: "3499",
      type: "medicaldevices"
    },
    {
      id: 37,
      img:"https://m.media-amazon.com/images/I/61XNC8Prv1L.jpg",
      title: "Glucometer",
      description: "Quick blood sugar level testing.",
      price: "39.99",
      type: "medicaldevices"
    },
    {
      id: 38,
      img:"https://image.made-in-china.com/202f0j00bfLqThFBrJuA/Cheap-Hearing-Aids-Price-List-Rechargeable-Invisible-Ear-Hearing-Aid-for-Seniors.webp",
      title: "Hearing Aid",
      description: "Improves sound clarity for those with hearing loss.",
      price: "149.99",
      type: "medicaldevices"
    },
    {
      id: 39,
      img:"https://m.media-amazon.com/images/I/31FQCdG3VUL._AC_UF1000,1000_QL80_.jpg",
      title: "Otoscope",
      description: "Examines the ear canal and eardrum.",
      price: "59.99",
      type: "medicaldevices"
    },
    {
      id: 40,
      img:"https://m.media-amazon.com/images/I/61ieN5oJ5HL.jpg",
      title: "Digital Stethoscope",
      description: "Enhances sound for accurate diagnosis.",
      price: "129.99",
      type: "medicaldevices"
    }
  ];
  
  module.exports = Products;
  