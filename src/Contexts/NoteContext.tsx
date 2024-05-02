import React, { createContext, useState } from 'react';
import { Item } from '../Components/types';

export interface NoteContextType {
    note: Item[];
    setNote: React.Dispatch<React.SetStateAction<Item[]>>;
    isNewNote: boolean;
    setIsNewNote: React.Dispatch<React.SetStateAction<boolean>>;
    isEdit: boolean;
    setIsEdit: React.Dispatch<React.SetStateAction<boolean>>;
    idUpdate: number;
    setIdUpdate: React.Dispatch<React.SetStateAction<number>>;
    title: string;
    setTitle: React.Dispatch<React.SetStateAction<string>>;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

export const NoteContext = createContext<NoteContextType | undefined>(undefined);

interface ProviderProps {
    children: React.ReactNode;
}

const NoteContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [isNewNote, setIsNewNote] = useState<boolean>(false);
    const [note, setNote] = useState<Item[]>([]);
    const [isEdit, setIsEdit] = useState<boolean>(false);
    const [idUpdate, setIdUpdate] = useState<number>(0);
    const [title, setTitle] = useState<string>('');
    const [text, setText] = useState<string>('');

    const contextValue: NoteContextType = {
        isNewNote, setIsNewNote,
        note, setNote,
        isEdit, setIsEdit,
        idUpdate, setIdUpdate,
        title, setTitle,
        text, setText
    };

    return (
        <NoteContext.Provider value={contextValue}>
            {children}
        </NoteContext.Provider>
    );
};

export default NoteContextProvider;