



function mowYard(name, callback) {
    setTimeout(() => {
        console.log ( name + ' finished mowing the yard.')
        callback(name)
    }, 2000)
}


function weedEat (name,callback) {
    setTimeout(() => {
if (Math.random() < 0.15) {
    console.log (name + ' fell asleep after mowing the yard.');
    } else {
    console.log(name + ' finished using the weed eater.')
    callback(name)
            }
    }, 1500);
}

function trimHedges(name,callback) {
    setTimeout(() => {
        if (Math.random() < 0.2) {
            console.log(name + ' fell asleep after weed eating the yard.');

        } else {
            console.log(name + ' finished trimming the hedges');
            callback(name);
        }
    }, 1000);
    
}


function collectWood(name,callback) {
    setTimeout(() => {
        if (Math.random() < 0.25) {
            console.log(name + ' fell asleep after trimming the hedges.');

        } else {
            console.log(name + ' finished collecting the wood.');
            callback(name);
        }
    }, 2500);

}

function waterGarden(name) {
    setTimeout(() => {
        if (Math.random() < 0.3) {
            console.log(name + ' fell asleep after collecting wood.');

        } else {
            console.log(name + ' finished watering the garden.');
            console.log( name + ' finished all their chores!')
            
        }
    }, 500);

}


function doSummerChores(name) {
   mowYard(name, () => {
    weedEat(name,() => {
        trimHedges(name, () => {
            collectWood(name, () => {
                waterGarden(name);
                
            })
        })
    })
   })
  
}



doSummerChores("Hermione ");




