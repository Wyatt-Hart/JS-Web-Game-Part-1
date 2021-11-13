function newImage(imgSrc, leftPos, bottomPos, isItem){
    let newAsset = document.createElement('img')
    newAsset.src = imgSrc
    newAsset.style.position = 'fixed'
    newAsset.style.left = leftPos
    newAsset.style.bottom = bottomPos
    document.body.append(newAsset)
    if (isItem == true){
        newAsset.addEventListener('dblclick', function(){
            newAsset.remove()
        })
    }
}
for (let x = 0; x < 5; x++){
    for(let i = 0; i < 100; i++){
        newImage('./assets/grass.png', i + "00px", x + '00px', false)
    }
}
for (let x = 8; x > 4; x--){
    for(let i = 0; i < 100; i++){
        newImage('./assets/sky.png', i + "00px", x + '00px', false)
    }
}
newImage('./assets/green-character.gif', '100px', '100px', false)
newImage('./assets/pine-tree.png', '450px', '200px', false)
newImage('./assets/tree.png', '200px', '300px', false)
newImage('./assets/pillar.png', '350px', '100px', false)
newImage('./assets/crate.png', '150px', '200px', false)
newImage('./assets/well.png', '500px', '425px', false)

newImage("./assets/sword.png",'500px', '405px', true)
newImage("./assets/shield.png",'165px', '185px', true)
newImage("./assets/staff.png",'600px', '100px', true)