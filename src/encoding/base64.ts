export function decode(text: string): Uint8Array {
    if (typeof window !== "undefined") {
        return Uint8Array.from(window.atob(text), c => c.charCodeAt(0));
    }

    return new Buffer(text, "base64");
}
