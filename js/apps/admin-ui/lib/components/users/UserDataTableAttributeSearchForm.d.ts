import { UserProfileConfig } from '@keycloak/keycloak-admin-client/lib/defs/userProfileMetadata';
import { ReactNode } from 'react';
import { UserFilter } from './UserDataTable';
type UserDataTableAttributeSearchFormProps = {
    activeFilters: UserFilter;
    setActiveFilters: (filters: UserFilter) => void;
    profile: UserProfileConfig;
    createAttributeSearchChips: () => ReactNode;
    searchUserWithAttributes: () => void;
};
export declare function UserDataTableAttributeSearchForm({ activeFilters, setActiveFilters, profile, createAttributeSearchChips, searchUserWithAttributes, }: UserDataTableAttributeSearchFormProps): import("react/jsx-runtime").JSX.Element;
export {};
