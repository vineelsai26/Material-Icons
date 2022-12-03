export async function onRequest(context) {
    const {
        request
    } = context

    const iconUrl = new URL(request.url)
    console.log(iconUrl)
    let iconType = iconUrl.searchParams.get('type')
    if (iconType && iconType !== 'filled') {
        iconType = `${iconType.toLowerCase().replaceAll('-', '_')}_`
    } else {
        iconType = ''
    }
    const icon = `ic_${iconType}${iconUrl.pathname.split('/').pop()}`
    const newIcon = `${iconUrl.protocol}//${iconUrl.hostname}:${iconUrl.port}/icons/${icon}.html`
    console.log(newIcon)
    const res = await fetch(newIcon)
    const html = await res.text()

    return new Response(html, {
        headers: {
            "Content-Type": "text/html"
        }
    })
}