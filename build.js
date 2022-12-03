import fs from "fs"

let folders = fs.readdirSync('./svg')

for (let folder of folders) {
    for (let file of fs.readdirSync(`./svg/${folder}`)) {
        const svg = fs.readFileSync(`./svg/${folder}/${file}`)
        const name = file.replace('.svg', '.html')
        let folderName = folder.replaceAll('-', '_')
        if (folderName === 'filled') {
            folderName = '_'
        } else {
            folderName = `_${folderName.toLowerCase()}_`
        }
        fs.writeFileSync(`./dist/icons/ic${folderName}${name}`, svg)
    }
}
