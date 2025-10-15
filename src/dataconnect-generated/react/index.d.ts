import { CreateNoteData, CreateNoteVariables, GetNotesByNotebookData, GetNotesByNotebookVariables, UpdateNoteData, UpdateNoteVariables, DeleteNoteData, DeleteNoteVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateNote(options?: useDataConnectMutationOptions<CreateNoteData, FirebaseError, CreateNoteVariables>): UseDataConnectMutationResult<CreateNoteData, CreateNoteVariables>;
export function useCreateNote(dc: DataConnect, options?: useDataConnectMutationOptions<CreateNoteData, FirebaseError, CreateNoteVariables>): UseDataConnectMutationResult<CreateNoteData, CreateNoteVariables>;

export function useGetNotesByNotebook(vars: GetNotesByNotebookVariables, options?: useDataConnectQueryOptions<GetNotesByNotebookData>): UseDataConnectQueryResult<GetNotesByNotebookData, GetNotesByNotebookVariables>;
export function useGetNotesByNotebook(dc: DataConnect, vars: GetNotesByNotebookVariables, options?: useDataConnectQueryOptions<GetNotesByNotebookData>): UseDataConnectQueryResult<GetNotesByNotebookData, GetNotesByNotebookVariables>;

export function useUpdateNote(options?: useDataConnectMutationOptions<UpdateNoteData, FirebaseError, UpdateNoteVariables>): UseDataConnectMutationResult<UpdateNoteData, UpdateNoteVariables>;
export function useUpdateNote(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateNoteData, FirebaseError, UpdateNoteVariables>): UseDataConnectMutationResult<UpdateNoteData, UpdateNoteVariables>;

export function useDeleteNote(options?: useDataConnectMutationOptions<DeleteNoteData, FirebaseError, DeleteNoteVariables>): UseDataConnectMutationResult<DeleteNoteData, DeleteNoteVariables>;
export function useDeleteNote(dc: DataConnect, options?: useDataConnectMutationOptions<DeleteNoteData, FirebaseError, DeleteNoteVariables>): UseDataConnectMutationResult<DeleteNoteData, DeleteNoteVariables>;
