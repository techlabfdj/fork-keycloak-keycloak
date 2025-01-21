import { ActionGroupProps } from '@patternfly/react-core';
type FixedButtonGroupProps = ActionGroupProps & {
    name: string;
    save?: () => void;
    saveText?: string;
    reset?: () => void;
    resetText?: string;
    isSubmit?: boolean;
    isDisabled?: boolean;
};
export declare const FixedButtonsGroup: ({ name, save, saveText, reset, resetText, isSubmit, isDisabled, children, ...rest }: FixedButtonGroupProps) => import("react/jsx-runtime").JSX.Element;
export {};
