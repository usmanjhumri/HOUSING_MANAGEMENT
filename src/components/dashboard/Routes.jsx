import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { ArrowUpwardRounded, CardMembership, CommentBank, Construction, Dashboard, DesignServices, Directions, FacebookOutlined, Home, HomeMaxOutlined, HomeRepairServiceOutlined, Instagram, LocationCityOutlined, Login, Park, QueryBuilder, TourSharp, Upgrade, WaterDamageOutlined, WorkHistory } from '@mui/icons-material';
import InfoIcon from '@mui/icons-material/Info';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import GroupsIcon from '@mui/icons-material/Groups';



export const dataSetSeller = [
    {
        title: 'Dashboard',
        link: '/dashboard/home',
        children: [],
        icon: <Dashboard sx={{ color: '#33CC33' }} />
    },
    {
        title: 'Home',
        link: '/',
        children: [],
        icon: <HomeMaxOutlined sx={{ color: '#33CC33' }} />
    },
    {
        title: 'My Properties',
        icon: <InfoIcon sx={{ color: '#33CC33' }} />,
        children: [
            {
                label: 'Our Team',
                link: '/dashboard/ourteamedit',
                icon: <CardMembership sx={{ color: '#33CC33' }} />
            },
            {
                label: 'Branch Office',
                link: '/dashboard/branchofficeedit',
                icon: <QueryBuilder sx={{ color: '#33CC33' }} />
            },
        ],
    },
    {
        title: 'Profile',
        link: '/dashboard/profile',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#33CC33' }} />
    }, {
        title: 'My Properties',
        link: '/dashboard/myproject',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#33CC33' }} />
    },
    {
        title: 'List New Property',
        link: '/dashboard/newproject',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#33CC33' }} />
    },
]

export const dataSetBuyer = [
    {
        title: 'Dashboard',
        link: '/dashboard/home',
        children: [],
        icon: <Dashboard sx={{ color: '#33CC33' }} />
    },
    {
        title: 'Home',
        link: '/',
        children: [],
        icon: <HomeMaxOutlined sx={{ color: '#33CC33' }} />
    },
    // {
    //   title: 'My Properties',
    //   icon: <InfoIcon sx={{ color: '#33CC33' }} />,
    //   children: [
    //     {
    //       label: 'Our Team',
    //       link: '/dashboard/ourteamedit',
    //       icon: <CardMembership sx={{ color: '#33CC33' }} />
    //     },
    //     {
    //       label: 'Branch Office',
    //       link: '/dashboard/branchofficeedit',
    //       icon: <QueryBuilder sx={{ color: '#33CC33' }} />
    //     },
    //   ],
    // },
    {
        title: 'Profile',
        link: '/dashboard/profile',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#33CC33' }} />
    }, {
        title: 'My Properties',
        link: '/dashboard/myproject',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#33CC33' }} />
    },
    {
        title: 'Buy Property',
        link: '/plots/all/all/all',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#33CC33' }} />
    },
]
export const dataSetAdmin = [
    {
        title: 'Dashboard',
        link: '/dashboard/home',
        children: [],
        icon: <Dashboard sx={{ color: '#33CC33' }} />
    },
    {
        title: 'Home',
        link: '/',
        children: [],
        icon: <HomeMaxOutlined sx={{ color: '#33CC33' }} />
    },
    // {
    //   title: 'My Properties',
    //   icon: <InfoIcon sx={{ color: '#33CC33' }} />,
    //   children: [
    //     {
    //       label: 'Our Team',
    //       link: '/dashboard/ourteamedit',
    //       icon: <CardMembership sx={{ color: '#33CC33' }} />
    //     },
    //     {
    //       label: 'Branch Office',
    //       link: '/dashboard/branchofficeedit',
    //       icon: <QueryBuilder sx={{ color: '#33CC33' }} />
    //     },
    //   ],
    // },
    {
        title: 'Profile',
        link: '/dashboard/profile',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#33CC33' }} />
    }, {
        title: 'My Properties',
        link: '/dashboard/myproject',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#33CC33' }} />
    },
    {
        title: 'Buy Property',
        link: '/plots/all/all/all',
        children: [],
        icon: <LiveHelpIcon sx={{ color: '#33CC33' }} />
    },
]
