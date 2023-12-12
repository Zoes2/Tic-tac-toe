export const turns = {
    X: '❌',
    O: '⚪'
}


export const win_conditions = [];

for (let i = 0; i < 3; i++) {
    win_conditions.push([i * 3, i * 3 + 1, i * 3 + 2]);
    win_conditions.push([i, i + 3, i + 6]);
}

win_conditions.push([0, 4, 8]);
win_conditions.push([2, 4, 6]);