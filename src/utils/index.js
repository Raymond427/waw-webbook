import { CHAPTER_ORDER } from "./constants"

export const lowerCase = string => string.replace(/^\w/, c => c.toLowerCase())

export const kebabCase = string => lowerCase(string).replace(/ /g, '-')

export const capitalize = string => string.replace(/^\w/, c => c.toUpperCase())

export const usdFormat = num => new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
}).format(num / 100)

export const totalPrice = purchasedItems => purchasedItems.reduce((total, { price }) => total + price, 0)

export const formatDate = timestamp => new Date(timestamp).toLocaleDateString("en-US", {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
})

export const addPurchasedProp = (user, orders, chapter) => ({
    ...chapter,
    purchased: user ? orders.some(order => order.productName === chapter.name) : undefined
})

export const purchasedIsSet = chapters => chapters.every(({ purchased }) => typeof purchased === 'boolean')

export const compareChapterNames = (a, b) => CHAPTER_ORDER.indexOf(a.name) > CHAPTER_ORDER.indexOf(b.name) ? 1 : -1