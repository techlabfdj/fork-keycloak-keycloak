import { ConfigPropertyRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/authenticatorConfigInfoRepresentation';
import { FunctionComponent } from 'react';
export type ComponentProps = Omit<ConfigPropertyRepresentation, "type"> & {
    isDisabled?: boolean;
    isNew?: boolean;
    stringify?: boolean;
};
type ComponentType = "String" | "Text" | "boolean" | "List" | "Role" | "Script" | "Map" | "Group" | "MultivaluedList" | "ClientList" | "UserProfileAttributeList" | "MultivaluedString" | "File" | "Password" | "Url";
export declare const COMPONENTS: {
    [index in ComponentType]: FunctionComponent<ComponentProps>;
};
export declare const isValidComponentType: (value: string) => value is ComponentType;
export {};
