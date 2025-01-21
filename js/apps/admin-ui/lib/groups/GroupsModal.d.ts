import { default as GroupRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/groupRepresentation';
type GroupsModalProps = {
    id?: string;
    rename?: GroupRepresentation;
    duplicateId?: string;
    handleModalToggle: () => void;
    refresh: (group?: GroupRepresentation) => void;
};
export declare const GroupsModal: ({ id, rename, duplicateId, handleModalToggle, refresh, }: GroupsModalProps) => import("react/jsx-runtime").JSX.Element;
export {};
