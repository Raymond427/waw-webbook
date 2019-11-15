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