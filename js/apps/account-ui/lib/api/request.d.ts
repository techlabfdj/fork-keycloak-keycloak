import { KeycloakContext, BaseEnvironment } from '@keycloak/keycloak-ui-shared';
import { default as Keycloak } from 'keycloak-js';
export type RequestOptions = {
    signal?: AbortSignal;
    getAccessToken?: () => Promise<string | undefined>;
    method?: "POST" | "PUT" | "DELETE";
    searchParams?: Record<string, string>;
    body?: unknown;
};
export declare function request(path: string, { environment, keycloak }: KeycloakContext<BaseEnvironment>, opts?: RequestOptions, fullUrl?: URL): Promise<Response>;
export declare const url: (environment: BaseEnvironment, path: string) => URL;
export declare const token: (keycloak: Keycloak) => () => Promise<string | undefined>;
