import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface VideoState {
  videos: any[];
  loading: boolean;
}

const initialState: VideoState = {
  videos: [],
  loading: false,
};

const videoSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    setVideos: (state, action: PayloadAction<any[]>) => {
      state.videos = action.payload;
    },
    fetchMoreVideos: (state, action: PayloadAction<any[]>) => {
      const nextListVideo = action.payload;
      const { videos } = state;
      state.videos = [...videos, ...nextListVideo];
    },
  },
});

export const { setVideos, fetchMoreVideos } = videoSlice.actions;
export default videoSlice.reducer;
