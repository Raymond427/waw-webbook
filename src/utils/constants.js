export const COMPANY_EMAIL = 'admin@advancinginnovativeminds.org'

export const PATHS = {
    HOME: '/',
    LOGIN: '/login',
    SIGN_UP: '/sign-up',
    USER_MANAGEMENT: '/usermgmt',
    RESET_PASSWORD: '/reset-password',
    ACCOUNT: '/account',
    BUY: '/buy',
    FEEDBACK: '/feedback',
    ORDERS: '/orders',
    CHAPTERS: '/chapters',
    EMAIL_US: `mailto:${COMPANY_EMAIL}`
}

export const PAGE_TITLES = {
    '/': 'Home',
    '/login': 'Log In',
    '/sign-up': 'Sign In',
    '/usermgmt': 'User Management',
    '/reset-password': 'Reset Password',
    '/account': 'Account',
    '/buy': 'Buy',
    '/feedback': 'Feedback',
    '/orders': 'Orders',
    '/chapters': 'Chapters'
}

export const THEMES = {
    DARK: 'dark',
    LIGHT: 'light'
}

export const NOTIFICATION_PERMISSION_STATUS = {
    GRANTED: 'granted',
    DENIED: 'denied',
    DEFAULT: 'default'
}

const CHAPTER_NAME = {
    HABITS: 'habits',
    PRODUCT: 'product',
    FIANANCES: 'finances'
}

export const CHAPTER_ORDER = [
    CHAPTER_NAME.HABITS,
    CHAPTER_NAME.PRODUCT,
    CHAPTER_NAME.FIANANCES
]

export const PROCESSING_FEE_RATE = 0.3

export const DIALOG = {
    IOS_INSTALL: 'ios-install',
    ANDROID_INSTALL: 'android-install',
    NOTIFICATION_PERMISSION: 'notification_permission',
    UPDATE_AVAILABLE: 'update_available'
}
