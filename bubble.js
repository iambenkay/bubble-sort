/**
 * @param data []
 * @param ascending boolean
 * @returns []
 */
var bubble = (data, ascending) => {
    let d = data
    for(let i = 0; i < d.length; i ++){
        for(let j = 0; j < d.length - 1; j ++){
            if(d[j] > d[j + 1])
                [d[j], d[j + 1]] = [d[j + 1], d[j]]
        }
    }
    if(ascending){
        return d;
    }
    return d.reverse()
}

module.exports = bubble