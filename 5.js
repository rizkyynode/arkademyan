function triangle(n) {

    var star = ''
    var num = n+1

	for (var a = 0; a < num; a++) {
		for (var b = 0; b < num; b++) {
			if(a + b >= num) {
				star = star.concat('*')
			} else {
				star = star.concat(' ')
			}
		}
		star = star.concat('\n')
	}

	return star
}

console.log(triangle(5));