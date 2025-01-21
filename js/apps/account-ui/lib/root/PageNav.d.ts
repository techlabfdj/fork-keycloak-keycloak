import { PropsWithChildren } from 'react';
import { Feature } from '../environment';
import { TFuncKey } from '../i18n';
type RootMenuItem = {
    label: TFuncKey;
    path: string;
    isVisible?: keyof Feature;
    modulePath?: string;
};
type MenuItemWithChildren = {
    label: TFuncKey;
    children: MenuItem[];
    isVisible?: keyof Feature;
};
export type MenuItem = RootMenuItem | MenuItemWithChildren;
export declare const PageNav: () => import("react/jsx-runtime").JSX.Element;
type NavLinkProps = {
    path: string;
    isActive: boolean;
};
export declare const NavLink: ({ path, isActive, children, }: PropsWithChildren<NavLinkProps>) => import("react/jsx-runtime").JSX.Element;
export {};
