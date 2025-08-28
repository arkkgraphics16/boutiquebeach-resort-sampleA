export default function hotelJsonLd({ name = 'BoutiqueBeach Resort', url = '/', priceRange = '₱3,200 - ₱5,200' } = {}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Hotel',
    name,
    url,
    priceRange,
  }
}
