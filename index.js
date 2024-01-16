

function newImage(path, left, bottom){
    let GameItem = document.createElement('img')
    GameItem.src = path
    GameItem.style.position = 'fixed'
    GameItem.style.left = left
    GameItem.style.bottom = bottom
document.body.append(GameItem)
return GameItem
}
function newItem(path, left, bottom){
    let NewItem = newImage(path, left, bottom )



    NewItem.addEventListener('dblclick', () => {
        NewItem.remove()
    })
    }

newImage('assets/green-character.gif','100px','100px' )
newImage("assets/pine-tree.png", '450px', '200px')
newImage("assets/tree.png", '200px', '300px')
newImage("assets/pillar.png", '350px', '200px')
newImage("assets/crate.png", '150px', '200px')
newImage("assets/well.png", '500px', '425px')
newItem("assets/sword.png", '50px', '325px')
newItem("assets/shield.png", '140px', '325px')
newItem("assets/staff.png", '310px', '225px')
