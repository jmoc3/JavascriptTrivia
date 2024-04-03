import {create} from "zustand";
import type { LoginCredentials } from "@/types";

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