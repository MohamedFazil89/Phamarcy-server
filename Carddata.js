const Products = [
    // Babycare Products (IDs 1-10)
    {
      id: 1,
      img:"",
      title: "Gentle Baby Lotion",
      description: "A soothing lotion for delicate baby skin.",
      price: "5.99",
      type: "babycare"
    },
    {
      id: 2,
      img:"",
      title: "Infant Diapers",
      description: "Soft and absorbent diapers for infants.",
      price: "15.99",
      type: "babycare"
    },
    {
      id: 3,
      img:"",
      title: "Baby Wipes",
      description: "Hypoallergenic wipes for gentle cleaning.",
      price: "3.99",
      type: "babycare"
    },
    {
      id: 4,
      img:"",
      title: "Baby Shampoo",
      description: "Mild formula shampoo for babies.",
      price: "6.49",
      type: "babycare"
    },
    {
      id: 5,
      img:"",
      title: "Teething Gel",
      description: "Relieves discomfort during teething.",
      price: "7.99",
      type: "babycare"
    },
    {
      id: 6,
      img:"",
      title: "Baby Powder",
      description: "Keeps baby skin dry and comfortable.",
      price: "4.49",
      type: "babycare"
    },
    {
      id: 7,
      img:"",
      title: "Nursing Pillow",
      description: "Ergonomically designed for comfortable feeding.",
      price: "29.99",
      type: "babycare"
    },
    {
      id: 8,
      img:"",
      title: "Infant Formula",
      description: "Nutritious formula for growing babies.",
      price: "24.99",
      type: "babycare"
    },
    {
      id: 9,
      img:"",
      title: "Baby Bib",
      description: "Soft and absorbent bib to keep messes away.",
      price: "2.99",
      type: "babycare"
    },
    {
      id: 10,
      img:"",
      title: "Pacifier",
      description: "Comforting pacifier for soothing infants.",
      price: "3.49",
      type: "babycare"
    },
  
    // Healthcare Products (IDs 11-20)
    {
      id: 11,
      img:"",
      title: "Paracetamol Tablets",
      description: "Effective pain reliever and fever reducer.",
      price: "4.99",
      type: "healthcare"
    },
    {
      id: 12,
      img:"",
      title: "Cough Syrup",
      description: "Relieves cough and soothes throat irritation.",
      price: "7.99",
      type: "healthcare"
    },
    {
      id: 13,
      img:"",
      title: "Vitamin C Tablets",
      description: "Boosts immunity and overall health.",
      price: "5.49",
      type: "healthcare"
    },
    {
      id: 14,
      img:"",
      title: "Antihistamine Tablets",
      description: "Provides relief from allergy symptoms.",
      price: "6.99",
      type: "healthcare"
    },
    {
      id: 15,
      img:"",
      title: "Probiotic Capsules",
      description: "Supports digestive health and immune function.",
      price: "12.99",
      type: "healthcare"
    },
    {
      id: 16,
      img:"",
      title: "Multivitamin Tablets",
      description: "Comprehensive daily nutrition supplement.",
      price: "8.99",
      type: "healthcare"
    },
    {
      id: 17,
      img:"",
      title: "Antacid Tablets",
      description: "Quick relief from heartburn and indigestion.",
      price: "3.99",
      type: "healthcare"
    },
    {
      id: 18,
      img:"",
      title: "Iron Supplements",
      description: "Boosts energy and reduces fatigue.",
      price: "9.99",
      type: "healthcare"
    },
    {
      id: 19,
      img:"",
      title: "Calcium Tablets",
      description: "Supports strong bones and teeth.",
      price: "7.49",
      type: "healthcare"
    },
    {
      id: 20,
      img:"",
      title: "Zinc Supplements",
      description: "Helps maintain a healthy immune system.",
      price: "6.49",
      type: "healthcare"
    },
  
    // Personalcare Products (IDs 21-30)
    {
      id: 21,
      img:"",
      title: "Nourishing Shampoo",
      description: "For healthy, shiny hair.",
      price: "8.99",
      type: "personalcare"
    },
    {
      id: 22,
      img:"",
      title: "Conditioner",
      description: "Softens and detangles hair.",
      price: "8.49",
      type: "personalcare"
    },
    {
      id: 23,
      img:"",
      title: "Facial Cleanser",
      description: "Gentle cleanser for everyday use.",
      price: "7.99",
      type: "personalcare"
    },
    {
      id: 24,
      img:"",
      title: "Moisturizer",
      description: "Hydrates and nourishes skin.",
      price: "9.99",
      type: "personalcare"
    },
    {
      id: 25,
      img:"",
      title: "Sunscreen SPF 50",
      description: "Broad spectrum protection for daily use.",
      price: "12.99",
      type: "personalcare"
    },
    {
      id: 26,
      img:"",
      title: "Body Wash",
      description: "Refreshing and hydrating formula.",
      price: "6.99",
      type: "personalcare"
    },
    {
      id: 27,
      img:"",
      title: "Deodorant",
      description: "Long-lasting freshness and odor protection.",
      price: "4.99",
      type: "personalcare"
    },
    {
      id: 28,
      img:"",
      title: "Hand Cream",
      description: "Keeps your hands soft and moisturized.",
      price: "5.49",
      type: "personalcare"
    },
    {
      id: 29,
      img:"",
      title: "Lip Balm",
      description: "Moisturizes and protects lips.",
      price: "2.99",
      type: "personalcare"
    },
    {
      id: 30,
      img:"",
      title: "Facial Serum",
      description: "Brightens and smooths skin texture.",
      price: "14.99",
      type: "personalcare"
    },
  
    // Medicaldevices Products (IDs 31-40)
    {
      id: 31,
      img:"",
      title: "Digital Thermometer",
      description: "Accurate temperature readings in seconds.",
      price: "14.99",
      type: "medicaldevices"
    },
    {
      id: 32,
      img:"",
      title: "Blood Pressure Monitor",
      description: "Easy-to-use monitor for accurate blood pressure tracking.",
      price: "49.99",
      type: "medicaldevices"
    },
    {
      id: 33,
      img:"",
      title: "Pulse Oximeter",
      description: "Measures oxygen saturation and pulse rate.",
      price: "29.99",
      type: "medicaldevices"
    },
    {
      id: 34,
      img:"",
      title: "Portable Nebulizer",
      description: "Efficient and quiet for home use.",
      price: "89.99",
      type: "medicaldevices"
    },
    {
      id: 35,
      img:"",
      title: "ECG Monitor",
      description: "Monitors heart rate and rhythm accurately.",
      price: "199.99",
      type: "medicaldevices"
    },
    {
      id: 36,
      img:"",
      title: "Infrared Thermometer",
      description: "Non-contact temperature measurement.",
      price: "34.99",
      type: "medicaldevices"
    },
    {
      id: 37,
      img:"",
      title: "Glucometer",
      description: "Quick blood sugar level testing.",
      price: "39.99",
      type: "medicaldevices"
    },
    {
      id: 38,
      img:"",
      title: "Hearing Aid",
      description: "Improves sound clarity for those with hearing loss.",
      price: "149.99",
      type: "medicaldevices"
    },
    {
      id: 39,
      img:"",
      title: "Otoscope",
      description: "Examines the ear canal and eardrum.",
      price: "59.99",
      type: "medicaldevices"
    },
    {
      id: 40,
      img:"",
      title: "Digital Stethoscope",
      description: "Enhances sound for accurate diagnosis.",
      price: "129.99",
      type: "medicaldevices"
    }
  ];
  
  module.exports = Products;
  