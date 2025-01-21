export type Links = {
    prev?: Record<string, string>;
    next?: Record<string, string>;
};
export declare function parseLinks(response: Response): Links;
