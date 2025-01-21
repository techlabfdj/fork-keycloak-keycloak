type CheckboxFilterOptions = {
    value: string;
    label: string;
};
type CheckboxFilterComponentProps = {
    filterPlaceholderText: string;
    isOpen: boolean;
    options: CheckboxFilterOptions[];
    onOpenChange: (isOpen: boolean) => void;
    onToggleClick: () => void;
    onSelect: (event: React.MouseEvent<HTMLButtonElement>, selection: string) => void;
    selectedItems: string[];
    width?: string;
};
export declare const CheckboxFilterComponent: ({ filterPlaceholderText, isOpen, options, onOpenChange, onToggleClick, onSelect, selectedItems, width, }: CheckboxFilterComponentProps) => import("react/jsx-runtime").JSX.Element;
export {};
