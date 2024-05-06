import { NoteContextType } from "../Contexts/NoteContext";

export const mockContext: NoteContextType = {
  note: [],
  setNote: jest.fn(),
  isNewNote: false,
  setIsNewNote: jest.fn(),
  isEdit: false,
  setIsEdit: jest.fn(),
  idUpdate: 0,
  setIdUpdate: jest.fn(),
  title: '',
  setTitle: jest.fn(),
  text: '',
  setText: jest.fn(),
  filteredNotes: [],
  setFilteredNotes: jest.fn(),
  show: false,
  setShow: jest.fn(),
};