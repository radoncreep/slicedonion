import { colorPallete } from "./colors";

export const accountSettings = [
    {
        profileOptions: [
            {
                name: 'Username',
                value: 'radon',
                targetScreen: null,
                icon: {
                    name: 'chevron-right',
                    color: 'grey',
                    size: 24
                }
            },
            {
                name: 'Change Email',
                value: 'radoncreep@mail.com',
                targetScreen: 'Change Email',
                icon: {
                    name: 'chevron-right',
                    color: 'grey',
                    size: 24
                }
            },
            {
                name: 'Change Password',
                value: '********',
                targetScreen: 'Change Password',
                icon: {
                    name: 'chevron-right',
                    color: 'grey',
                    size: 24
                }
            }
        ]
    },
    {
        mediaControls: [
            {
                name: 'Stream Using Cellular Data',
                icon: {
                    name: current.streamUsingCellular ? 'toggle-on' : 'toggle-off',
                    color: colorPallete.textPurple,
                    size: 30,
                },
                targetScreen: null
            },
            {
                name: 'Parental Control',
                icon: {
                    name: current.parentalControl ? 'toggle-on' : 'toggle-off',
                    color: colorPallete.textPurple,
                    size: 30,
                },
                targetScreen: null
            },
            {
                name: 'Notifications',
                icon: {
                    name: 'chevron-right',
                    color: 'grey',
                    size: 24
                },
                targetScreen: 'Notification'
            },
            {
                name: 'Report',
                icon: null,
                targetScreen: null
            },
        ]
    },
    {
        extras: [
            {
                name: 'Clear Search History',
                icon: null,
                targetScreen: null
            },
            {
                name: 'Suggestions',
                icon: null,
                targetScreen: null
            },
            {
                name: 'Logout',
                icon: null,
                targetScreen: null
            }
        ]
    }
];