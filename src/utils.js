
export const callApi = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=2');
        const posts = await response.json();
        return posts;
    } catch (error) {
        console.warn('error', error)
    }
}