import * as React from 'react';
import * as types from './types';
interface BlockProps {
    block: types.Block | {
        type: 'typeform';
    };
    level: number;
    className?: string;
    bodyClassName?: string;
    footer?: React.ReactNode;
}
export declare const Block: React.FC<BlockProps>;
export {};
