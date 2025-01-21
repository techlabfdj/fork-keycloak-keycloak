type ResourceToolbarProps = {
    onFilter: (nameFilter: string) => void;
    count: number;
    first: number;
    max: number;
    onNextClick: (page: number) => void;
    onPreviousClick: (page: number) => void;
    onPerPageSelect: (max: number, first: number) => void;
    hasNext: boolean;
};
export declare const ResourceToolbar: ({ count, first, max, onNextClick, onPreviousClick, onPerPageSelect, onFilter, hasNext, }: ResourceToolbarProps) => import("react/jsx-runtime").JSX.Element;
export {};
