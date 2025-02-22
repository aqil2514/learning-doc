var bintangAtas= '';

for(var stars = 0; stars < 10; stars++){
    for(var starslength= 0; starslength <= stars; starslength++){
        bintangAtas += '*';
    }
    bintangAtas += '\n';
}

console.log(bintangAtas);