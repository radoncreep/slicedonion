import React from 'react';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { height } = Dimensions.get("window");
const q = (1 + Math.sqrt(5)) / 2;

export const MIN_HEADER_HEIGHT = 64 + Constants.statusBarHeight;
export const MAX_HEADER_HEIGHT = height * (1 - 1 / q);
export const HEADER_DELTA = MAX_HEADER_HEIGHT - MIN_HEADER_HEIGHT;