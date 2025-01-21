import { default as KeycloakAdminClient } from '@keycloak/keycloak-admin-client';
import { UiRealmInfo } from './uiRealmInfo';
export declare function fetchAdminUI<T>(adminClient: KeycloakAdminClient, endpoint: string, query?: Record<string, string>): Promise<T>;
export declare function fetchRealmInfo(adminClient: KeycloakAdminClient): Promise<UiRealmInfo>;
