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
    updateOpenedChests: (position) => null
});

function ChestProvider(props: IProps) {
    const [chestsState, updateChestsState] = React.useState({
        totalChests: 2,
        openedChests: {
            total: 0,
            positions: []
        },
        updateOpenedChests: (position) => {
            updateChestsState((prevState) => {
                return {
                    totalChests: prevState.totalChests,
                    openedChests: {
                        total: prevState.openedChests.total + 1,
                        positions: prevState.openedChests.positions.concat(position),
                    },
                    updateOpenedChests: prevState.updateOpenedChests,
                };
            })
        }
    });
    return (
        <ChestContext.Provider value={chestsState}>
            {props.children}
        </ChestContext.Provider>
    )
}

export default ChestProvider;