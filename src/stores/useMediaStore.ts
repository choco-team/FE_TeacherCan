import { create } from 'zustand';

type Media = 'mobile' | 'tablet' | 'desktop';

type State = {
  media: Media;
};

type Action = {
  setMedia: (media: Media) => void;
};

const useMediaStore = create<State & Action>((set) => ({
  media: 'desktop',
  setMedia: (media) => set(() => ({ media })),
}));

export default useMediaStore;
