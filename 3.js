function sequence(number) {
        var array = [number]
        var n = number
        var kondisi = true

        while(kondisi) {
                if(n % 2 === 0) 
                {
                    array.push(n/2)
                    n = n/2
                } else {
                    array.push(n*3+1)
                    n = n*3+1
                }

                if(n === 1) {
                    kondisi = false
                }

                if(n < 1) {
                    return 'parameter harus bilangan positif!'
                }
        }

        return array
}

console.log(sequence(4));