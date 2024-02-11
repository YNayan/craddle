'use server;'

function isInvalidText(text: string) {
    return !text || text.trim() == "";
}

export async function generatePosts(prevState: any, formData: any) {
    const postMessage = formData.get('postMessage');
    if (isInvalidText(postMessage)) {
        return {
            message: "Empty input"
        };
    }
    console.log(postMessage);
}