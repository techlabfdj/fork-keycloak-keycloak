export declare class ApiError extends Error {
    description?: string;
    constructor(message: string, description?: string);
}
export declare function parseResponse<T>(response: Response): Promise<T>;
