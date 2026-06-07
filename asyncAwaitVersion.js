
function mowYard(name) {
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( name + ' finished mowing the yard.');
        }, 2000);
    });
}


function weedEat (name) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (Math.random() > 0.15) {
                resolve( name + ' finished weed eating.');
            }
            else{
                reject(name + 'fell asleep after mowing the yard.');
            }
  
        }, 1500);
    });
}

function trimHedges(name) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
            if (Math.random() > 0.20) {
                resolve( name + ' finished trimming the hedges.');
            }
            else{
                reject(name + ' fell asleep after weed eating.');
            }

        }, 1000);   
    });     
}

function collectWood(name) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() > 0.25) {
                resolve( name + ' finished collecting wood.');
            }
            else{
                reject(name + ' fell asleep after trimming the hedges');
            }
        }, 2500);
    });
}
            
function waterGarden (name) {

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if (Math.random() > 0.30) {
                resolve( name + ' finished watering the garden.');
            }   
            else{
                reject(name + ' fell asleep after collecting wood.');
            }
        }, 500);
    });
}         

//


//
 



async function doChoresAsync(name) {

    try{

    const mowYardResult = await mowYard(name);
    console.log(mowYardResult);

    const weedEatResult = await weedEat(name);
    console.log(weedEatResult);

    const trimHedgesResult = await trimHedges(name);
    console.log(trimHedgesResult);

    const collectWoodResult = await collectWood(name);
    console.log(collectWoodResult);

    const waterGardenResult = await waterGarden(name);
    console.log(waterGardenResult);

    console.log(name + ' finished all their chores!');

    }
    catch(error){
        console.error(error);
    }

}


doChoresAsync('Ron')

