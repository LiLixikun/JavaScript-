var kWeakestRows = function (mat, k) {
    const map = {}
    for (let i = 0; i < mat.length; i++) {
        map[i] = 1
        for (let j = 1; j < mat[i].length; j++) {
            if (mat[i][j] == 1) {
                map[i]++
            }
        }
    }
    return Object.keys(map).sort((a, b) => map[a] - map[b]).slice(0, k);
};
kWeakestRows([[1, 0, 0, 0],
[1, 1, 1, 1],
[1, 0, 0, 0],
[1, 0, 0, 0]], 2)