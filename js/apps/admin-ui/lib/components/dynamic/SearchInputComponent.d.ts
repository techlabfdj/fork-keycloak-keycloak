type SearchInputComponentProps = {
    value: string;
    onChange: (value: string) => void;
    onSearch: (value: string) => void;
    onClear: () => void;
    placeholder?: string;
    "aria-label"?: string;
};
export declare const SearchInputComponent: ({ value, onChange, onSearch, onClear, placeholder, "aria-label": ariaLabel, }: SearchInputComponentProps) => import("react/jsx-runtime").JSX.Element;
export {};
