export function truncate(str: string, len: number) {
    if (!str || str.length <= len) return str;
    return str.length >= len ? str.substring(0, len) + '...' : str;
}

export function escapeRegExp(text: string) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&');
}

export function getParameterByName(name: string, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

export function humanize(path: string) {
    if (path !== null && typeof path === 'string') {
        const spath = path.split('_');
        const readableValue = spath
            .map((p) => p.charAt(0).toUpperCase() + p.substr(1).toLowerCase())
            .join(' ');
        return readableValue;
    }
    return '';
}

export function isValidHttpUrl(urlString: string): Boolean {
    let url;
    try {
        url = new URL(urlString);
    } catch (_) {
        return false;
    }
    return url.protocol === 'http:' || url.protocol === 'https:';
}

export function uid(): string {
    const head = Date.now().toString(36);
    const tail = Math.random().toString(36).substring(2);
    return head + tail;
}

export function getSubdomain() {
    const hostname = window.location.hostname;
    const hostnameParts = hostname.split('.');
    if (hostnameParts.length < 2) {
        return null
    } 
    return hostnameParts[0];
}