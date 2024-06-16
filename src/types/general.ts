export type Reconstruction = {
    id: number
    name: string
    period: [from: number, to?: number]
    group: string
    age: string[]
    desc: string
    coords: [lat: number, long: number]
    thumb: string
    full: string
    slug: string
}

export type Map = {
    id: number
    name: string
    url: string
    categories: string[]
    slug: string
}

export type BlogpostCover = {
    coverImage: { url: string }
    date: string
    excerpt: string
    id: string
    slug: string
    title: string
}

export type SelectOption = {
    value: string
    label: string
}

export type FeatureService = 'Haplogroup History' | 'Ancestry Composition' | 'Genetic Distances' | 'Visualizations' | 'Ancestral Pilgrimage' | 'Video Call'

export type IconTab = {
    id: number,
    icon: JSX.Element
    name: string
    active: boolean
}