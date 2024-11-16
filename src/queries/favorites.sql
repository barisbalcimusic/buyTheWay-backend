SELECT products.*,
JSON_ARRAYAGG(JSON_OBJECT('url', images.url, 'alt', images.alt)) AS images
FROM products 
JOIN images ON products.id = images.product_id
WHERE products.rating > 4
GROUP BY 
    products.id, 
    products.name, 
    products.description, 
    products.category, 
    products.targetGroup, 
    products.brand, 
    products.price, 
    products.rating, 
    products.discountPercentage, 
    products.stock, 
    products.soldCount