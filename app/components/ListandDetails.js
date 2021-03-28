import React from 'react';
import { View } from 'react-native';

export default ListandDetails = ({ children, title, description }) => (
    <View>{children}</View>
);

ListandDetails.Title = ListandDetailsTitle = ({ title }) => title;

ListandDetails.Desc = ListandDetailsDesc = ({ description }) => description;

ListandDetails.List = ListandDetailsList = ({ compToRender }) => (
    <View></View>
);
