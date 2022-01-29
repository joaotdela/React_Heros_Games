import React, { ReactChildren } from 'react';

interface IProps {
    children: React.ReactNode;
}
export const ChestContext = React.createContext({
    totalChests: 2,
    openedChests: {
        total: 0,
        positions: []
    },
    updateOpenedChests: () => null
});

function ChestProvider(props: IProps) {
    const [chestsState, updateChestsState] = React.useState({
        totalChests: 2,
        openedChests: {
            total: 0,
            positions: []
        },
        updateOpenedChests: () => {
            console.log('chests');
        }
    });
    return (
        <ChestContext.Provider value={chestsState}>
            {props.children}
        </ChestContext.Provider>
    )
}

export default ChestProvider;