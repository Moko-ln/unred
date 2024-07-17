

function createRandomArray(originalArray:any ) {
    // Copier le tableau original pour ne pas le modifier
    let arrayCopy = originalArray?.slice();

    // Mélanger le tableau
    for (let i = arrayCopy?.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
    }

    // Supprimer 3 éléments du tableau mélangé
    arrayCopy?.splice(0, 3);

    return arrayCopy;
}

export default createRandomArray;