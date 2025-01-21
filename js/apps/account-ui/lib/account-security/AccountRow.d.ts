import { LinkedAccountRepresentation } from '../api/representations';
type AccountRowProps = {
    account: LinkedAccountRepresentation;
    isLinked?: boolean;
    refresh: () => void;
};
export declare const AccountRow: ({ account, isLinked, refresh, }: AccountRowProps) => import("react/jsx-runtime").JSX.Element;
export {};
