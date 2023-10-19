const storesAndCategoriesAndProducts = [
  {
    location: "Nagpur",
    storeId: 1,
    categories: [
      {
        categoryName: "Organic fertilizer",
        CategoryId: 1,
        products: [
          {
            productId: 1,
            productName: "Kechuaa Vermicompost",
            imageUrl:
              "https://dukaan.b-cdn.net/280x280/webp/3714383/a28e9b8b-cfca-462a-907f-9d29c13a4a8d/1618565313815-73c80841-bd25-4767-9426-66e89b3fa657.jpeg",
            sizes: [
              {
                quantity: 5,
                amount: 100,
                discountedPrice: 70,
              },
              {
                quantity: 10,
                amount: 200,
                discountedPrice: 130,
              },
            ],
            productId: 2,
            productName: "Organic Flower Booster",
            imageUrl:
              "https://dukaan.b-cdn.net/280x280/webp/upload_file_service/4df862c6-367e-4098-9d8c-1f45ffb6cdf2/5.png",
            price: [
              {
                quantity: 5,
                amount: 200,
                discountedPrice: 170,
              },
              {
                quantity: 10,
                amount: 400,
                discountedPrice: 330,
              },
            ],
            productId: 3,
            name: "Neem Khali Powder",
            img: "https://dukaan.b-cdn.net/280x280/webp/3714383/a28e9b8b-cfca-462a-907f-9d29c13a4a8d/1631965234361-d371dfa8-d49b-4541-9812-8c80ac8a113a.jpeg",
            price: [
              {
                quantity: 3,
                amount: 200,
                discountedPrice: 20,
              },
            ],
          },
        ],

        name: "Growbags",
        CategoryId: 2,
        product: [
          {
            productId: 1,
            name: "Growbag (10x10in)",
            img: "https://dukaan.b-cdn.net/280x280/webp/3714383/a28e9b8b-cfca-462a-907f-9d29c13a4a8d/1618565313815-73c80841-bd25-4767-9426-66e89b3fa657.jpeg",
            price: [
              {
                quantity: 1,
                amount: 70,
                discountedPrice: 50,
              },
            ],
            productId: 2,
            name: "Growbag (12x15in)",
            img: "https://dukaan.b-cdn.net/280x280/webp/upload_file_service/70f4be6c-5124-48f6-83bc-cc8b9786fb58/hdpe-grow-bag-12-x-15-500x500.webp",
            price: [
              {
                quantity: 1,
                amount: 200,
                discountedPrice: 160,
              },
            ],
            productId: 3,
            name: "Growbag (18x9)",
            img: "https://dukaan.b-cdn.net/280x280/webp/upload_file_service/51d1e9fa-9d54-4c2d-a77a-058436fe3c81/9-inchdia-x-height-hdpe-grow-baground-220-gsm.jpeg",
            price: [
              {
                quantity: 3,
                amount: 200,
                discountedPrice: 180,
              },
            ],
          },
        ],
        name: "Vegetable Seeds",
        CategoryId: 3,
        product: [
          {
            productId: 1,
            name: "Karela (Bitter Gourd) Seeds",
            img: "https://dukaan.b-cdn.net/280x280/webp/upload_file_service/218bb2c2-2c96-483c-876b-df009563cc6a/1684316694666.jpeg",
            price: [
              {
                quantity: 1,
                amount: 70,
                discountedPrice: 60,
              },
            ],
            productId: 2,
            name: "Okra (Bhindi)",
            img: "https://dukaan.b-cdn.net/280x280/webp/projecteagle/images/d25b6960-7abb-47ea-8903-b441ecdd02ca.jpg",
            price: [
              {
                quantity: 1,
                amount: 200,
                discountedPrice: 120,
              },
            ],
            productId: 3,
            name: "Capsicum (Shimla Mirch)",
            img: "https://dukaan.b-cdn.net/280x280/webp/projecteagle/images/49c2b775-7947-4a2e-b941-9ade1a320a03.jpg",
            price: [
              {
                quantity: 3,
                amount: 200,
                discountedPrice: 180,
              },
            ],
          },
        ],
      },
    ],
    location: "Jablpur",
    storeId: 2,
    category: [
      {
        name: "Organic fertilizer",
        categoryId: 1,
        product: [
          {
            productId: 1,
            name: "Kechuaa Vermicompost",
            img: "https://dukaan.b-cdn.net/280x280/webp/3714383/a28e9b8b-cfca-462a-907f-9d29c13a4a8d/1618565313815-73c80841-bd25-4767-9426-66e89b3fa657.jpeg",
            price: [
              {
                quantity: 1,
                amount: 70,
                discountedPrice: 50,
              },
            ],
            productId: 2,
            name: "Organic Flower Booster",
            img: "https://dukaan.b-cdn.net/280x280/webp/upload_file_service/4df862c6-367e-4098-9d8c-1f45ffb6cdf2/5.png",
            price: [
              {
                quantity: 1,
                amount: 200,
                discountedPrice: 160,
              },
            ],
            productId: 3,
            name: "Neem Khali Powder",
            img: "https://dukaan.b-cdn.net/280x280/webp/3714383/a28e9b8b-cfca-462a-907f-9d29c13a4a8d/1631965234361-d371dfa8-d49b-4541-9812-8c80ac8a113a.jpeg",
            price: [
              {
                quantity: 3,
                amount: 200,
                discountedPrice: 140,
              },
            ],
          },
        ],

        name: "Growbags",
        categoryId: 2,
        product: [
          {
            productId: 1,
            name: "Growbag (10x10in)",
            img: "https://dukaan.b-cdn.net/280x280/webp/3714383/a28e9b8b-cfca-462a-907f-9d29c13a4a8d/1618565313815-73c80841-bd25-4767-9426-66e89b3fa657.jpeg",
            price: [
              {
                quantity: 1,
                amount: 70,
                discountedPrice: 160,
              },
            ],
            productId: 2,
            name: "Growbag (12x15in)",
            img: "https://dukaan.b-cdn.net/280x280/webp/upload_file_service/70f4be6c-5124-48f6-83bc-cc8b9786fb58/hdpe-grow-bag-12-x-15-500x500.webp",
            price: [
              {
                quantity: 1,
                amount: 200,
                discountedPrice: 170,
              },
            ],
            productId: 3,
            name: "Growbag (18x9)",
            img: "https://dukaan.b-cdn.net/280x280/webp/upload_file_service/51d1e9fa-9d54-4c2d-a77a-058436fe3c81/9-inchdia-x-height-hdpe-grow-baground-220-gsm.jpeg",
            price: [
              {
                quantity: 3,
                amount: 200,
                discountedPrice: 180,
              },
            ],
          },
        ],
      },
    ],
  },
];
