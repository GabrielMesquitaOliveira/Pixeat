import { create } from 'zustand'

export type MountedState = {
  mounted: boolean;
  setMounted: (v: boolean) => void;
};

export const useMountedStore = create<MountedState>((set) => ({
  mounted: false,
  setMounted: (v: boolean) => set({ mounted: v }),
}));

export const useMounted = () => useMountedStore((s: MountedState) => s.mounted);
export const useSetMounted = () => useMountedStore((s: MountedState) => s.setMounted);

export default useMountedStore;
