import { BaseEnvironment, KeycloakContext } from '@keycloak/keycloak-ui-shared';
import { default as OrganizationRepresentation } from '@keycloak/keycloak-admin-client/lib/defs/organizationRepresentation';
import { ClientRepresentation, CredentialContainer, DeviceRepresentation, Group, LinkedAccountRepresentation, Permission, UserRepresentation } from './representations';
export type CallOptions = {
    context: KeycloakContext<BaseEnvironment>;
    signal?: AbortSignal;
};
export type PaginationParams = {
    first: number;
    max: number;
};
export declare function getPersonalInfo({ signal, context, }: CallOptions): Promise<UserRepresentation>;
export declare function getSupportedLocales({ signal, context, }: CallOptions): Promise<string[]>;
export declare function savePersonalInfo(context: KeycloakContext<BaseEnvironment>, info: UserRepresentation): Promise<void>;
export declare function getPermissionRequests(resourceId: string, { signal, context }: CallOptions): Promise<Permission[]>;
export declare function getDevices({ signal, context, }: CallOptions): Promise<DeviceRepresentation[]>;
export declare function getApplications({ signal, context, }: CallOptions): Promise<ClientRepresentation[]>;
export declare function deleteConsent(context: KeycloakContext<BaseEnvironment>, id: string): Promise<Response>;
export declare function deleteSession(context: KeycloakContext<BaseEnvironment>, id?: string): Promise<Response>;
export declare function getCredentials({ signal, context }: CallOptions): Promise<CredentialContainer[]>;
export type LinkedAccountQueryParams = PaginationParams & {
    search?: string;
    linked?: boolean;
};
export declare function getLinkedAccounts({ signal, context }: CallOptions, query: LinkedAccountQueryParams): Promise<LinkedAccountRepresentation[]>;
export declare function unLinkAccount(context: KeycloakContext<BaseEnvironment>, account: LinkedAccountRepresentation): Promise<unknown>;
export declare function linkAccount(context: KeycloakContext<BaseEnvironment>, account: LinkedAccountRepresentation): Promise<{
    accountLinkUri: string;
}>;
export declare function getGroups({ signal, context }: CallOptions): Promise<Group[]>;
export declare function getUserOrganizations({ signal, context }: CallOptions): Promise<OrganizationRepresentation[]>;
