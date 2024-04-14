import {create} from "zustand";
import type { Credentials as LoginCredentials } from "@/types/types";

type State = {
  credentials:LoginCredentials 
}

type Actions = {
  setCredentials: (userCredentials:LoginCredentials)=>void
}

export const loginCredentialsStore = create<State & Actions>((set)=>({
  credentials:{'email':"","password":""},
  setCredentials: (userCredentials:LoginCredentials)=>set({credentials: userCredentials})
}))