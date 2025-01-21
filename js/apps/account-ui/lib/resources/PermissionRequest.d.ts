import { Resource } from '../api/representations';
type PermissionRequestProps = {
    resource: Resource;
    refresh: () => void;
};
export declare const PermissionRequest: ({ resource, refresh, }: PermissionRequestProps) => import("react/jsx-runtime").JSX.Element;
export {};
