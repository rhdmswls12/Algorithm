-- 코드를 작성해주세요
WITH MAX_SIZE AS (
    SELECT YEAR(DIFFERENTIATION_DATE) YEAR, MAX(SIZE_OF_COLONY) MAX
    FROM ECOLI_DATA
    GROUP BY YEAR
)
SELECT M.YEAR, (M.MAX-E.SIZE_OF_COLONY) YEAR_DEV, E.ID
FROM ECOLI_DATA E JOIN MAX_SIZE M
ON YEAR(E.DIFFERENTIATION_DATE) = M.YEAR
ORDER BY M.YEAR, YEAR_DEV