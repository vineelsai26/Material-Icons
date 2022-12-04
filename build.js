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
        //     fs.appendFileSync("out.txt", `| ${name.replace(".svg", "")} | https://material.vineelsai.com/${name.replace(".svg", "")}?type=filled | https://material.vineelsai.com/${name.replace(".svg", "")}?type=outlined | https://material.vineelsai.com/${name.replace(".svg", "")}?type=round | https://material.vineelsai.com/${name.replace(".svg", "")}?type=sharp | https://material.vineelsai.com/${name.replace(".svg", "")}?type=two_tone |\n`)
        // }
    }
}
