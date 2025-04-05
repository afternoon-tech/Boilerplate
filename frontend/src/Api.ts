export class Api {
    static async get(path: string) {
        const response = await fetch(`http://localhost:8000/${path}`)
        return response.json()
    }
}