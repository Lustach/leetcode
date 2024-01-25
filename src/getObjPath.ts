function get(obj: {[x:string]: any},path: string){
    const splitPath = path.split('.')
    let result = obj
    for (const key of splitPath) {
        if(result[key]){
            result = result[key]
            continue
        } return undefined
    }
    return result
}

const obj = {
    a:{
        b:{
            c: 'd'
        },
    e: 'f'
    },

};

console.log(get(obj,'a.b'))// {c: 'd'}
console.log(get(obj,'a.b.c'))// 'd'
console.log(get(obj,'a.e'))// f
console.log(get(obj,'a.x.e')) //undefined
