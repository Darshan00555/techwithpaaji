export default function manifest() {
    return {
        name: 'Paaji Connect | Relationship Coach India',
        short_name: 'Paaji Connect',
        description: 'Breakup recovery and communication coaching for couples in India.',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#0F3D3E',
        icons: [
            {
                src: '/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
    }
}
