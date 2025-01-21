import { default as OrganizationRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/organizationRepresentation';
type OrganizationModalProps = {
    isJoin?: boolean;
    existingOrgs: OrganizationRepresentation[];
    onAdd: (orgs: OrganizationRepresentation[]) => Promise<void>;
    onClose: () => void;
};
export declare const OrganizationModal: ({ isJoin, existingOrgs, onAdd, onClose, }: OrganizationModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
