import { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Dexter Jethro Enriquez Portfolio',
    short_name: 'DJ Enriquez',
    description: 'Software Developer and Computer Science student portfolio.',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#FFC300',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}
