import { Permission, Resource } from '../api/representations';
type EditTheResourceProps = {
    resource: Resource;
    permissions?: Permission[];
    onClose: () => void;
};
export declare const EditTheResource: ({ resource, permissions, onClose, }: EditTheResourceProps) => import("react/jsx-runtime").JSX.Element;
export {};
