import create from 'zustand'
import {PlayerState} from "../models/states/PlayerState";

const PlayerStore = create<PlayerState>((set) => ({

    currentPlayer: null,
    setCurrentPlayer: (currentPlayer: JSX.Element) => set(state => ({
        currentPlayer: currentPlayer
    })),

}))

export default PlayerStore;
