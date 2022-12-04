import fs from "fs"

let folders = fs.readdirSync('./svg')

for (let folder of folders) {
    for (let file of fs.readdirSync(`./svg/${folder}`)) {
        const svg = fs.readFileSync(`./svg/${folder}/${file}`)
        const name = file
        let folderName = folder.replaceAll('-', '_')
        if (folderName === 'filled') {
            folderName = '_'
        } else {
            folderName = `_${folderName.toLowerCase()}_`
        }
        fs.writeFileSync(`./dist/icons/ic${folderName}${name}`, svg)
        // if (folderName === '_') {
        //     console.log(`| ${name.replace(".svg", "")}    | ![${name.replace(".svg", "")} filled icon](https://material.vineelsai.com/${name.replace(".svg", "")}?type=filled) | ![${name.replace(".svg", "")} outlined icon](https://material.vineelsai.com/${name.replace(".svg", "")}?type=outlined) | ![${name.replace(".svg", "")} round icon](https://material.vineelsai.com/${name.replace(".svg", "")}?type=round) | ![${name.replace(".svg", "")} sharp icon](https://material.vineelsai.com/${name.replace(".svg", "")}?type=sharp) | ![${name.replace(".svg", "")} two tone icon](https://material.vineelsai.com/${name.replace(".svg", "")}?type=two_tone) |`)
        // }
    }
}
