import React from 'react';
import { ExtendedRecordMap, MapPageUrl, MapImageUrl, NotionComponents } from './types';
export interface NotionRendererProps {
    recordMap: ExtendedRecordMap;
    components?: Partial<NotionComponents>;
    mapPageUrl?: MapPageUrl;
    mapImageUrl?: MapImageUrl;
    rootPageId?: string;
    fullPage?: boolean;
    darkMode?: boolean;
    previewImages?: boolean;
    className?: string;
    bodyClassName?: string;
    footer?: React.ReactNode;
    blockId?: string;
}
export declare const NotionRenderer: React.FC<NotionRendererProps>;
