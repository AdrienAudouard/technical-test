const API_URL = process.env.REACT_APP_API_URL;

export class ApiError extends Error {
    status: number;

    constructor(status: number, message: string) {
        super(message);
        this.status = status;
    }
}

export const fetcher = async <T>(url: string): Promise<T> => {
    const res = await fetch(`${API_URL}${url}`);

    if (!res.ok) {
        throw new ApiError(res.status, `Unable to fetch ${url}`);
    }

    return await res.json();
}