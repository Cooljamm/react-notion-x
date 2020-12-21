import * as React from 'react';
export declare class SearchDialog extends React.Component<{
    isOpen: boolean;
    rootBlockId: string;
    onClose: () => void;
}> {
    constructor(props: any);
    state: {
        isLoading: boolean;
        query: string;
        searchResult: any;
        searchError: any;
    };
    _inputRef: any;
    _search: any;
    componentDidMount(): void;
    render(): JSX.Element;
    _onAfterOpen: () => void;
    _onChangeQuery: (e: any) => void;
    _onClearQuery: () => void;
    _searchImpl: () => Promise<void>;
}
