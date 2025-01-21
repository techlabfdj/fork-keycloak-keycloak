import { Permission, Resource } from '../api/representations';
type ShareTheResourceProps = {
    resource: Resource;
    permissions?: Permission[];
    open: boolean;
    onClose: () => void;
};
export declare const ShareTheResource: ({ resource, permissions, open, onClose, }: ShareTheResourceProps) => import("react/jsx-runtime").JSX.Element;
export {};
