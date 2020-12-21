import * as React from 'react';
import { ExtendedRecordMap, MapPageUrl, MapImageUrl, NotionComponents } from './types';
export interface NotionContext {
    recordMap: ExtendedRecordMap;
    components: NotionComponents;
    mapPageUrl: MapPageUrl;
    mapImageUrl: MapImageUrl;
    fullPage: boolean;
    rootPageId?: string;
    darkMode: boolean;
    previewImages: boolean;
    zoom: any;
}
export interface PartialNotionContext {
    recordMap?: ExtendedRecordMap;
    components?: Partial<NotionComponents>;
    mapPageUrl?: MapPageUrl;
    mapImageUrl?: MapImageUrl;
    fullPage?: boolean;
    rootPageId?: string;
    darkMode?: boolean;
    previewImages?: boolean;
    zoom?: any;
}
export declare const dummyLink: ({ href, rel, target, title, ...rest }: {
    [x: string]: any;
    href: any;
    rel: any;
    target: any;
    title: any;
}) => JSX.Element;
export declare const NotionContextProvider: React.SFC<PartialNotionContext>;
export declare const useNotionContext: () => NotionContext;
