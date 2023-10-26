-- 코드를 입력하세요
SELECT CASE WHEN PRODUCT_CODE IS NOT NULL
THEN LEFT(PRODUCT_CODE, 2)
END AS CATEGORY, COUNT(PRODUCT_CODE) AS PRODUCTS FROM PRODUCT GROUP BY LEFT(PRODUCT_CODE,2) ORDER BY PRODUCT_CODE