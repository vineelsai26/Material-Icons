export async function onRequest(context) {
    const {
        request
    } = context

    // Get the icon name from the request
    const iconUrl = new URL(request.url)

    // Get icon type if exists
    let iconType = iconUrl.searchParams.get('type')
    if (iconType && iconType !== 'filled') {
        iconType = `${iconType.toLowerCase().replaceAll('-', '_')}_`
    } else {
        iconType = ''
    }

    // Create the corresponding icon name
    const icon = `ic_${iconType}${iconUrl.pathname.split('/').pop()}`

    // Create the corresponding icon url
    const newIcon = `${iconUrl.protocol}//${iconUrl.hostname}:${iconUrl.port}/icons/${icon}.svg`

    // fetch the icon
    const res = await fetch(newIcon)

    // get the icon content
    const html = await res.text()

    // Return the icon as html
    return new Response(html, {
        headers: {
            "Content-Type": "image/svg+xml"
        }
    })
}