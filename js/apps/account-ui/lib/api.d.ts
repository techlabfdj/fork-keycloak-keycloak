import { KeycloakContext, BaseEnvironment } from '@keycloak/keycloak-ui-shared';
import { CallOptions } from './api/methods';
import { Links } from './api/parse-links';
import { CredentialsIssuer, Permission, Resource, Scope, SupportedCredentialConfiguration } from './api/representations';
export declare const fetchResources: ({ signal, context }: CallOptions, requestParams: Record<string, string>, shared?: boolean | undefined) => Promise<{
    data: Resource[];
    links: Links;
}>;
export declare const fetchPermission: ({ signal, context }: CallOptions, resourceId: string) => Promise<Permission[]>;
export declare const updateRequest: (context: KeycloakContext<BaseEnvironment>, resourceId: string, username: string, scopes: Scope[] | string[]) => Promise<Response>;
export declare const updatePermissions: (context: KeycloakContext<BaseEnvironment>, resourceId: string, permissions: Permission[]) => Promise<Response>;
export declare function getIssuer(context: KeycloakContext<BaseEnvironment>): Promise<CredentialsIssuer>;
export declare function requestVCOffer(context: KeycloakContext<BaseEnvironment>, supportedCredentialConfiguration: SupportedCredentialConfiguration, credentialsIssuer: CredentialsIssuer): Promise<Blob>;
