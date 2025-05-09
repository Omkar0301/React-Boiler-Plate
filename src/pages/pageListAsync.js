import loadable from '@utils/loadable';

export const WelcomePage = loadable(() => import('./Welcome/Welcome'));
export const UsersPage = loadable(() => import('./Users/UsersPage'));
export const UsersAdminPage = loadable(() => import('./Users/UsersAdminPage'));
