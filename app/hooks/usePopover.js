import React from 'react';
import { View } from 'react-native';

export const usePopover = ({ show }) => {
    let popoverMenu = [
        { name: checkValue() ? 'Remove From WatchLater' : 'Add To WatchLater'},
        { name: 'Share'},
        { name: 'Play Now'},
    ];

    return (
        <View>
            { showPopover && (
                <View style={styles.popover}>
                    <FlatList 
                        data={popoverMenu}
                        keyExtractor={(popoverMenu) => popoverMenu.name}
                        ItemSeparatorComponent={() => <ListItemSeparator style={styles.separator} />}
                        renderItem={({ item, index }) => (
                            <ListItem 
                                style={{ fontSize: 14 }} 
                                title={item.name}
                                onPress={() => handleMenu(item)}
                             />
                        )}
                    />
                </View>
            )}
        </View>
    )
}