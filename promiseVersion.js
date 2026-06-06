


const mowYardPromise = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        if(Math.random() < 0) {
            resolve(' fell asleep')
        } else {
            reject(' finished mowing the yard.')
        }
    }, 2000)
});

const weedEatPromise = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        if(Math.random() < 0.15) {
            resolve('fell asleep after mowing the lawn.')
        } else {
            reject('finished weed eating.')
        }
    }, 1500)
});

const trimHedgesPromise = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        if(Math.random() < 0.2) {
            resolve('fell asleep after weed eating.')
        } else {
            reject('finished trimming the hedges.')
        }
    }, 1000)
});


const collectWoodPromise = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        if(Math.random() < 0.25) {
            resolve(' fell asleep after trimming the hedges.')
        } else {
            reject(' finished collecting wood')
        }
    }, 2500)
});

const waterGardenPromise = new Promise((resolve,reject) => {
    
    setTimeout(() => {
        if(Math.random() < 0.3) {
            resolve(' fell asleep after trimming the hedges.')
        } else {
            reject(' finished watering the garden.')
        }
    }, 500)
});



function doSummerChoresPromise(name) {
mowYardPromise
.then((value) => {
    console.log(value)
    return weedEatPromise
})
.then((value) => {
    console.log(value)
    return trimHedgesPromise
})
.then((value) => {
    console.log(value)
    return collectWoodPromise
})
.then((value) => {
    console.log(value)
    return waterGardenPromise
})

.then((value) => {
    console.log(' finished all their chores!')
})
.catch((error) => {
    console.log(' did not finish their chores.')
})

}

doSummerChoresPromise()

